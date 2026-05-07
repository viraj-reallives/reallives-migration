/**
 * Calls the RealLives licensing pricing-catalog endpoint.
 *
 * The backend resolves the visitor's country from their IP and returns:
 *  - `country` block (iso2, currency, resolution source)
 *  - `definitions` array of all license definitions, each with a `pricing` block
 *    containing the localized quote (final price, currency, charges, etc.)
 *
 * Each definition has `applicable_tenant_types` (e.g. ["GAMER"], ["SCHOOL"])
 * which is what callers filter by.
 */

/**
 * In dev we go through the Vite proxy (`/sls-api/...` -> slsapi.reallivesworld.com)
 * to avoid CORS rejection on whichever localhost port Vite happens to grab. In
 * production the React app is served from an allowed origin, so we hit the real
 * URL directly.
 */
const PRICING_CATALOG_URL = import.meta.env.DEV
  ? '/sls-api/platform/license/pricing-catalog'
  : 'https://slsapi.reallivesworld.com/platform/license/pricing-catalog';

export async function fetchPricingCatalog({ signal } = {}) {
  const response = await fetch(PRICING_CATALOG_URL, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `Pricing catalog request failed (${response.status} ${response.statusText})`
    );
  }

  const json = await response.json();

  if (!json?.success || !json?.data) {
    throw new Error(json?.message || 'Pricing catalog returned an unexpected response');
  }

  return json.data;
}
