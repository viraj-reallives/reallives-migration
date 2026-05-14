import { useEffect, useState } from 'react';
import { fetchPricingCatalog } from '@/services/licensePricingApi';

/**
 * Module-level cache so navigating between pages doesn't refetch unnecessarily,
 * and so React 18 StrictMode's double-mount in dev doesn't fire two requests.
 *
 * Note: we deliberately DO NOT use AbortController here. StrictMode runs the
 * effect twice (mount → cleanup → mount). If we aborted on cleanup, the second
 * mount would reuse the aborted promise (because microtasks haven't drained),
 * which leaves the UI stuck in loading forever. Instead we let the fetch
 * complete in the background and use a `cancelled` flag to suppress stale
 * state writes.
 */
let cachedCatalog = null;
let inflightRequest = null;

function startFetchIfNeeded() {
  if (cachedCatalog) return Promise.resolve(cachedCatalog);
  if (inflightRequest) return inflightRequest;
  inflightRequest = fetchPricingCatalog()
    .then((data) => {
      cachedCatalog = data;
      inflightRequest = null;
      return data;
    })
    .catch((err) => {
      inflightRequest = null;
      throw err;
    });
  return inflightRequest;
}

/**
 * Fetches the localized license pricing catalog and exposes derived helpers
 * for a specific tenant type (GAMER / SCHOOL / UNIVERSITY / HOMESCHOOLER).
 * Homeschooler pages pass HOMESCHOOLER; the catalog uses tenant type FAMILY,
 * which is mapped automatically when filtering definitions.
 *
 * @param {Object} opts
 * @param {string} opts.tenantType - e.g. "GAMER" — filter for definitions
 * @param {boolean} [opts.enabled=true] - if false, skips the fetch
 */
export function useLicensePricing({ tenantType, enabled = true } = {}) {
  const [data, setData] = useState(cachedCatalog);
  const [loading, setLoading] = useState(!cachedCatalog && enabled);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    if (cachedCatalog) {
      setData(cachedCatalog);
      setLoading(false);
      setError(null);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    startFetchIfNeeded()
      .then((catalog) => {
        if (cancelled) return;
        setData(catalog);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  const definitions = Array.isArray(data?.definitions) ? data.definitions : [];

  const tenantDefinitions = tenantType
    ? definitions.filter((def) => definitionMatchesTenant(def, tenantType))
    : definitions;

  return {
    catalog: data,
    country: data?.country ?? null,
    definitions,
    tenantDefinitions,
    loading,
    error,
    refetch: () => {
      cachedCatalog = null;
      inflightRequest = null;
      setLoading(true);
      setError(null);
      return startFetchIfNeeded()
        .then((catalog) => {
          setData(catalog);
          setLoading(false);
          return catalog;
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          throw err;
        });
    },
  };
}

/**
 * Splits catalog definitions into base license vs credit packs.
 *
 * - Prefer a definition whose validity is in YEARS (family base, gamer yearly,
 *   some regional school rows).
 * - Otherwise pick the institutional / family "basic" row: max_plays === 0
 *   and code contains BASIC (e.g. UNIVERSITY_BASIC_* when validity is DAYS).
 * - Credit packs are remaining definitions with max_plays > 0, sorted by size.
 */
export function splitBaseAndCredits(defs = []) {
  const byYears = defs.find((def) => def?.rules?.validity?.unit === 'YEARS');
  let baseLicense = byYears ?? null;

  if (!baseLicense) {
    const zeroPlay = defs.filter((def) => (def?.rules?.max_plays ?? 0) === 0);
    baseLicense =
      zeroPlay.find((def) => /BASIC/i.test(def.code || '')) ??
      zeroPlay[0] ??
      null;
  }

  const creditPacks = defs
    .filter((def) => def !== baseLicense)
    .filter((def) => (def?.rules?.max_plays ?? 0) > 0)
    .slice()
    .sort((a, b) => (a?.rules?.max_plays ?? 0) - (b?.rules?.max_plays ?? 0));

  return { baseLicense, creditPacks };
}

/** API catalog uses FAMILY for homeschooler / family segment licenses. */
const TENANT_TO_API_TYPES = {
  HOMESCHOOLER: ['FAMILY'],
};

function definitionMatchesTenant(def, tenantType) {
  const types = TENANT_TO_API_TYPES[tenantType] ?? [tenantType];
  const applicable = def?.applicable_tenant_types;
  if (!Array.isArray(applicable)) return false;
  return applicable.some((t) => types.includes(t));
}

/**
 * @deprecated Use splitBaseAndCredits instead. Kept for backward compatibility.
 */
export const splitGamerDefinitions = splitBaseAndCredits;

/**
 * Picks the human-facing checkout amount and currency from a definition's
 * pricing quote. Handles both INDIA (INR + IGST) and INTERNATIONAL (USD) modes.
 */
export function getDisplayPrice(definition) {
  const quote = definition?.pricing?.pricingQuote;
  if (!quote) {
    return {
      currency: definition?.price?.currency ?? 'INR',
      amount: definition?.price?.amount ?? 0,
      subtotalAmount: definition?.price?.amount ?? 0,
      charges: [],
    };
  }

  return {
    currency: quote.targetCurrency,
    amount: Number(quote.finalPriceLocal ?? quote.finalPriceLocalExact ?? 0),
    subtotalAmount: Number(
      quote?.summarySubtotalBeforeCharges?.amountMajor ??
        quote.licensePriceLocal ??
        0
    ),
    charges: Array.isArray(quote.summaryChargeLineItems)
      ? quote.summaryChargeLineItems
      : [],
    pricingMode: quote.pricingMode,
  };
}

const CURRENCY_LOCALE = {
  INR: 'en-IN',
  USD: 'en-US',
  EUR: 'de-DE',
  GBP: 'en-GB',
  JPY: 'ja-JP',
};

export function formatCurrency(amount, currency = 'USD', { maxFractionDigits } = {}) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return '';
  }
  const locale = CURRENCY_LOCALE[currency] || 'en-US';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits:
        typeof maxFractionDigits === 'number' ? maxFractionDigits : 2,
    }).format(Number(amount));
  } catch {
    return `${currency} ${Number(amount).toFixed(2)}`;
  }
}

/**
 * Same as formatCurrency, but appends "(USD)" after USD prices so users in
 * non-USD-symbol-familiar regions can see the currency code at a glance.
 */
export function formatPrice(amount, currency = 'USD', opts) {
  const formatted = formatCurrency(amount, currency, opts);
  if (!formatted) return '';
  if (currency === 'USD') return `${formatted} (USD)`;
  return formatted;
}
