import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@components/common/Modal/Modal';
import SiteContext from '@context/SiteContext';
import { useSiteContent } from '@hooks/useSiteContent';
import {
  useLicensePricing,
  splitBaseAndCredits,
  getDisplayPrice,
  formatPrice,
  formatCurrency,
} from '@hooks/useLicensePricing';
import styles from './PricingPage.module.css';

/**
 * Shared "Base License + Credit Pack" pricing page.
 *
 * Two layouts are supported:
 *   - layout="split"   (default) — Base license LEFT, pack picker + summary RIGHT.
 *                                  A credit pack is required to checkout.
 *                                  Used by school + university.
 *   - layout="stacked"           — Horizontal base card on top with embedded
 *                                  price/summary, then a horizontal "additional
 *                                  credits" card. Pack is OPTIONAL — base
 *                                  license can be bought on its own. Used by
 *                                  gamer.
 *
 * Props:
 *   - tenantType:  'GAMER' | 'SCHOOL' | 'UNIVERSITY'
 *   - registerUrl: external URL to redirect to once the user confirms purchase
 *   - layout:      'split' | 'stacked' (default 'split')
 */
export default function PricingPage({
  tenantType,
  registerUrl,
  layout = 'split',
}) {
  const { siteKey } = useContext(SiteContext) || {};
  const { pricing } = useSiteContent();
  const { tenantDefinitions, loading } = useLicensePricing({ tenantType });

  const { baseLicense, creditPacks } = useMemo(
    () => splitBaseAndCredits(tenantDefinitions),
    [tenantDefinitions]
  );

  // "Best value" pack = lowest cost-per-credit among packs we have prices for.
  const bestValueId = useMemo(() => {
    if (!creditPacks?.length) return null;
    let bestId = null;
    let bestRate = Infinity;
    for (const pack of creditPacks) {
      const credits = pack?.rules?.max_plays ?? 0;
      if (!credits) continue;
      const display = getDisplayPrice(pack);
      const subtotal = display.subtotalAmount || display.amount;
      if (!subtotal) continue;
      const rate = subtotal / credits;
      if (rate < bestRate) {
        bestRate = rate;
        bestId = pack._id;
      }
    }
    return bestId;
  }, [creditPacks]);

  const [selectedPackId, setSelectedPackId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const summaryRef = useRef(null);
  // Track whether the active selection came from a user click vs. an
  // automatic default — used to suppress the scroll animation on first paint.
  const userPickedRef = useRef(false);

  // Auto-select the first pack on data arrival (split mode only — in stacked
  // mode the base license is sellable alone, so we leave the pack unselected).
  useEffect(() => {
    if (!creditPacks.length) {
      if (selectedPackId !== null) setSelectedPackId(null);
      return;
    }
    if (layout !== 'split') return;
    const stillExists =
      selectedPackId && creditPacks.some((p) => p._id === selectedPackId);
    if (!stillExists) {
      userPickedRef.current = false;
      setSelectedPackId(creditPacks[0]._id);
    }
  }, [creditPacks, selectedPackId, layout]);

  // In split mode the summary sits at the bottom of a tall right column,
  // so when the user picks a pack we smoothly bring its bottom edge into
  // view. Skipped on initial auto-pick.
  //
  // In stacked mode (gamer) the summary already lives in the top base
  // card's right panel — everything is on one screen, so any scroll
  // would just nudge the page upward. We deliberately skip the effect
  // there.
  useEffect(() => {
    if (layout !== 'split') return;
    if (!userPickedRef.current) return;
    const el = summaryRef.current;
    if (!el || typeof el.scrollIntoView !== 'function') return;
    const id = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
    return () => window.cancelAnimationFrame(id);
  }, [selectedPackId, layout]);

  function handlePackPick(packId) {
    userPickedRef.current = true;
    if (layout === 'stacked' && selectedPackId === packId) {
      // Re-clicking the active tile in stacked mode deselects it,
      // returning the user to "base only" pricing.
      setSelectedPackId(null);
    } else {
      setSelectedPackId(packId);
    }
  }

  if (!pricing) return null;

  const baseDisplay = baseLicense ? getDisplayPrice(baseLicense) : null;
  const baseValidityYears = baseLicense?.rules?.validity?.value ?? 1;
  const baseIncludedLives = baseLicense?.rules?.max_plays ?? 0;
  const livesPerStudent = pricing.creditPacks?.livesPerStudent ?? 0;

  const selectedPack =
    creditPacks.find((p) => p._id === selectedPackId) || null;
  const packDisplay = selectedPack ? getDisplayPrice(selectedPack) : null;

  // Combined total. When a pack is selected and the currencies match,
  // total = base + pack. When no pack is selected, total falls back to
  // the base price so the order summary can show a meaningful "Total"
  // row even before the user picks a credit pack (used by stacked mode
  // — gamer — where the base license is sellable on its own).
  const haveMatchingCurrencies =
    baseDisplay &&
    packDisplay &&
    baseDisplay.currency === packDisplay.currency;
  const totalCurrency = haveMatchingCurrencies
    ? baseDisplay.currency
    : baseDisplay && !packDisplay
    ? baseDisplay.currency
    : null;
  const totalAmount =
    totalCurrency != null
      ? Number(baseDisplay.amount || 0) + Number(packDisplay?.amount || 0)
      : null;

  const showComingSoon = !loading && !baseLicense && creditPacks.length === 0;
  const showPacks = !loading && creditPacks.length > 0;

  // Stacked allows checkout with just the base license; split requires a pack.
  const ctaEnabled =
    layout === 'stacked' ? !!baseDisplay : !!selectedPack && !!baseDisplay;

  function openConfirm() {
    if (!ctaEnabled) return;
    setModalOpen(true);
  }

  function handleConfirm() {
    if (registerUrl) window.location.href = registerUrl;
  }

  const sharedLayoutProps = {
    pricing,
    loading,
    baseLicense,
    baseDisplay,
    baseValidityYears,
    baseIncludedLives,
    creditPacks,
    bestValueId,
    selectedPack,
    selectedPackId,
    packDisplay,
    totalAmount,
    totalCurrency,
    livesPerStudent,
    showComingSoon,
    showPacks,
    summaryRef,
    onPackPick: handlePackPick,
    ctaEnabled,
    onConfirm: openConfirm,
    ctaText: pricing.creditPacks?.ctaText || 'Buy License',
    tenantType,
    siteKey,
  };

  return (
    <div className={styles.page} id="pricing">
      <header className={styles.hero}>
        {pricing.eyebrow ? (
          <span className={styles.eyebrow}>{pricing.eyebrow}</span>
        ) : null}
        <h1 className={styles.heroTitle}>
          {pricing.sectionHeading || pricing.heading}
        </h1>
        {pricing.sectionSubheading ? (
          <p className={styles.heroSubtitle}>{pricing.sectionSubheading}</p>
        ) : null}
      </header>

      {pricing.howItWorks?.steps?.length ? (
        <section
          className={styles.howItWorks}
          aria-labelledby="how-it-works-heading"
        >
          <h2 id="how-it-works-heading" className={styles.sectionHeading}>
            {pricing.howItWorks.heading}
          </h2>
          <div className={styles.stepsGrid}>
            {pricing.howItWorks.steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {layout === 'stacked' ? (
        <StackedMode {...sharedLayoutProps} />
      ) : (
        <SplitMode {...sharedLayoutProps} />
      )}

      {pricing.rolloverPolicy?.points?.length ? (
        <section
          className={styles.policySection}
          aria-labelledby="policy-heading"
        >
          <h2 id="policy-heading" className={styles.sectionHeading}>
            {pricing.rolloverPolicy.heading}
          </h2>
          <ul className={styles.policyList}>
            {pricing.rolloverPolicy.points.map((p, idx) => (
              <li key={idx} className={styles.policyItem}>
                <span className={styles.policyCheck} aria-hidden="true">
                  ✓
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {pricing.whatsIncluded?.heading || pricing.whatsIncluded?.description ? (
        <section
          className={styles.includedSection}
          aria-labelledby="included-heading"
        >
          {pricing.whatsIncluded.heading ? (
            <h2 id="included-heading" className={styles.sectionHeading}>
              {pricing.whatsIncluded.heading}
            </h2>
          ) : null}
          {pricing.whatsIncluded.description ? (
            <p className={styles.includedDescription}>
              {pricing.whatsIncluded.description}
            </p>
          ) : null}

          {pricing.includedProductCards?.length ? (
            <div className={styles.productCards}>
              {pricing.includedProductCards.map((card) => (
                <article key={card.title} className={styles.productCard}>
                  {card.imagePath ? (
                    <img
                      src={card.imagePath}
                      alt=""
                      className={styles.productThumb}
                    />
                  ) : (
                    <span />
                  )}
                  <div>
                    {card.title ? (
                      <h3 className={styles.productTitle}>{card.title}</h3>
                    ) : null}
                    {card.description ? (
                      <p className={styles.productDesc}>{card.description}</p>
                    ) : null}
                    {card.featureTags?.length ? (
                      <div className={styles.tags}>
                        {card.featureTags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {card.learnMoreLinkText && card.productTabId && siteKey ? (
                      <Link
                        to={`/reallives/${siteKey}/products?tab=${encodeURIComponent(
                          card.productTabId
                        )}`}
                        className={styles.learnMore}
                      >
                        {card.learnMoreLinkText}
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {pricing.faqs?.length ? (
        <section
          id="pricing-faqs"
          className={styles.faqSection}
          aria-labelledby="faq-heading"
        >
          <h2 id="faq-heading" className={styles.sectionHeading}>
            {pricing.faqsHeading || 'Frequently asked questions'}
          </h2>
          <div className={styles.faqList}>
            {pricing.faqs.map((item, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {item.question}
                </summary>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {pricing.purchaseModal && baseDisplay ? (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          heading={pricing.purchaseModal.heading}
          body={buildModalBody({
            selectedPack,
            totalAmount,
            totalCurrency,
            baseDisplay,
            fallback: pricing.purchaseModal.body,
          })}
          confirmText={pricing.purchaseModal.confirmText}
          onConfirm={handleConfirm}
        />
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                            SPLIT LAYOUT                             */
/* ------------------------------------------------------------------ */

/**
 * Smoothly scrolls to the FAQ section on the same pricing page.
 * The section is rendered with `id="pricing-faqs"`. Falls back to a
 * hash navigation if the element isn't found (e.g. if FAQ data is
 * missing for a given tenant).
 */
function scrollToFaqs() {
  if (typeof document === 'undefined') return;
  const target = document.getElementById('pricing-faqs');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (typeof window !== 'undefined') {
    window.location.hash = '#pricing-faqs';
  }
}

function SplitMode(props) {
  const {
    pricing,
    loading,
    baseDisplay,
    baseValidityYears,
    baseIncludedLives,
    creditPacks,
    bestValueId,
    selectedPack,
    selectedPackId,
    packDisplay,
    totalAmount,
    totalCurrency,
    livesPerStudent,
    showComingSoon,
    showPacks,
    summaryRef,
    onPackPick,
    ctaEnabled,
    onConfirm,
    ctaText,
    tenantType,
    siteKey,
  } = props;

  return (
    <section
      className={styles.splitSection}
      aria-labelledby="base-license-heading"
    >
      {showComingSoon && pricing.comingSoon ? (
        <ComingSoonCard pricing={pricing} />
      ) : (
        <div className={styles.splitGrid}>
          {/* LEFT — Base License */}
          <div className={styles.splitLeft}>
            <article className={styles.baseCard}>
              <header className={styles.baseHeader}>
                <span className={styles.requiredPill}>
                  {pricing.baseLicense?.tagline || 'Required'}
                </span>
                <h2
                  id="base-license-heading"
                  className={styles.baseTitle}
                >
                  Base License
                </h2>
                <p className={styles.baseLead}>
                  {pricing.baseLicense?.includedLine ||
                    'Foundation access required to use the platform.'}
                </p>
              </header>

              {/* Price sits right under the title/subtitle so the user
                  sees the headline value (Base License + price) up top,
                  then reads the bullets and "Good to know" details. */}
              <div className={styles.basePriceBlock}>
                {loading ? (
                  <PriceSkeleton />
                ) : baseDisplay ? (
                  <>
                    <div className={styles.basePriceMain}>
                      <span className={styles.basePriceAmount}>
                        {formatPrice(baseDisplay.amount, baseDisplay.currency)}
                      </span>
                      <span className={styles.basePricePeriod}>
                        /{baseValidityYears}{' '}
                        {baseValidityYears === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    {baseDisplay.charges?.length ? (
                      <div className={styles.basePriceCharges}>
                        {baseDisplay.charges.map((c) => (
                          <span key={c.title}>
                            Includes {c.title}:{' '}
                            {formatPrice(c.amountMajor, c.currency)}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className={styles.priceUnavailable}>
                    Pricing temporarily unavailable.
                  </div>
                )}
              </div>

              {pricing.baseLicense?.bullets?.length ? (
                <ul className={styles.baseBullets}>
                  {pricing.baseLicense.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}

              {pricing.baseLicense?.policyNotes?.length ? (
                <div className={styles.basePolicy}>
                  <h3 className={styles.basePolicyHeading}>
                    {pricing.baseLicense.policyHeading || 'Good to know'}
                  </h3>
                  <ul className={styles.basePolicyList}>
                    {pricing.baseLicense.policyNotes.map((note) => (
                      <li key={note} className={styles.basePolicyItem}>
                        <span
                          className={styles.basePolicyDot}
                          aria-hidden="true"
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  {pricing.faqs?.length ? (
                    <button
                      type="button"
                      className={styles.learnMoreLink}
                      onClick={scrollToFaqs}
                      aria-label="Learn more — jump to frequently asked questions"
                    >
                      Learn more
                      <span
                        aria-hidden="true"
                        className={styles.learnMoreArrow}
                      >
                        ↓
                      </span>
                    </button>
                  ) : null}
                </div>
              ) : null}
            </article>
          </div>

          {/* RIGHT — Pack picker + summary */}
          <div className={styles.splitRight}>
            <header className={styles.packsHeader}>
              <h2 className={styles.packsTitle}>
                {pricing.creditPacks?.selectHeading ||
                  pricing.creditPacks?.heading ||
                  'Select your credit pack'}
              </h2>
              {pricing.creditPacks?.subheading ? (
                <p className={styles.packsSubheading}>
                  {pricing.creditPacks.subheading}
                </p>
              ) : null}
            </header>

            {loading ? (
              <div className={styles.packList} aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={styles.packSkeleton} />
                ))}
              </div>
            ) : showPacks ? (
              <div
                className={styles.packList}
                role="radiogroup"
                aria-label="Credit pack options"
              >
                {creditPacks.map((pack) => (
                  <PackOptionRow
                    key={pack._id}
                    pack={pack}
                    isSelected={pack._id === selectedPackId}
                    isBest={pack._id === bestValueId}
                    livesPerStudent={livesPerStudent}
                    pricing={pricing}
                    onPick={onPackPick}
                  />
                ))}
              </div>
            ) : showComingSoon ? (
              <div className={styles.packsComingSoon}>
                Credit pack pricing for {tenantTypeLabel(tenantType)} is being
                finalized for your region.
                {siteKey ? (
                  <>
                    {' '}
                    <Link
                      to={`/reallives/${siteKey}/contact`}
                      className={styles.packsContactLink}
                    >
                      Talk to us
                    </Link>{' '}
                    and we’ll quote you directly while we roll this out.
                  </>
                ) : null}
              </div>
            ) : (
              <div className={styles.priceUnavailable}>
                No credit packs available right now.
              </div>
            )}

            <aside
              ref={summaryRef}
              className={styles.summaryCard}
              aria-live="polite"
              aria-label="Order summary"
            >
              {!selectedPack ? (
                <div className={styles.summaryEmpty}>
                  <span
                    className={styles.summaryEmptyIcon}
                    aria-hidden="true"
                  >
                    ?
                  </span>
                  <span>
                    Select a credit pack above to see your total and continue.
                  </span>
                </div>
              ) : (
                <OrderSummaryRows
                  pricing={pricing}
                  baseDisplay={baseDisplay}
                  baseValidityYears={baseValidityYears}
                  baseIncludedLives={baseIncludedLives}
                  selectedPack={selectedPack}
                  packDisplay={packDisplay}
                  totalAmount={totalAmount}
                  totalCurrency={totalCurrency}
                  compactMeta
                />
              )}

              <button
                type="button"
                className={styles.summaryCta}
                onClick={onConfirm}
                disabled={!ctaEnabled}
                aria-disabled={!ctaEnabled}
              >
                {ctaText}
                <span aria-hidden="true" className={styles.summaryCtaArrow}>
                  →
                </span>
              </button>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                           STACKED LAYOUT                            */
/* ------------------------------------------------------------------ */

function StackedMode(props) {
  const {
    pricing,
    loading,
    baseDisplay,
    baseValidityYears,
    baseIncludedLives,
    creditPacks,
    bestValueId,
    selectedPack,
    selectedPackId,
    packDisplay,
    totalAmount,
    totalCurrency,
    showComingSoon,
    showPacks,
    summaryRef,
    onPackPick,
    ctaEnabled,
    onConfirm,
    ctaText,
  } = props;

  return (
    <section
      className={styles.stackedSection}
      aria-labelledby="base-license-heading"
    >
      {showComingSoon && pricing.comingSoon ? (
        <ComingSoonCard pricing={pricing} />
      ) : (
        <>
          {/* TOP — Horizontal Base License card */}
          <article className={styles.baseHorizontalCard}>
            <div className={styles.baseHorizontalLeft}>
              <header className={styles.baseHeader}>
                <span className={styles.requiredPill}>
                  {pricing.baseLicense?.tagline || 'Required'}
                </span>
                <h2
                  id="base-license-heading"
                  className={styles.baseTitle}
                >
                  Base License
                </h2>
                <p className={styles.baseLead}>
                  {pricing.baseLicense?.includedLine ||
                    'Foundation access to the platform.'}
                </p>
              </header>

              {pricing.baseLicense?.bullets?.length ? (
                <ul className={styles.baseBullets}>
                  {pricing.baseLicense.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            <aside
              ref={summaryRef}
              className={styles.baseHorizontalRight}
              aria-live="polite"
              aria-label="Order summary"
            >
              {loading ? (
                <PriceSkeleton />
              ) : !baseDisplay ? (
                <div className={styles.priceUnavailable}>
                  Pricing temporarily unavailable.
                </div>
              ) : (
                <>
                  {/* Always render the order summary — base license is the
                      default state, the pack row appears once one is picked.
                      This keeps the panel visually consistent across both
                      states (no separate "raw price" empty state). */}
                  <OrderSummaryRows
                    pricing={pricing}
                    baseDisplay={baseDisplay}
                    baseValidityYears={baseValidityYears}
                    baseIncludedLives={baseIncludedLives}
                    selectedPack={selectedPack}
                    packDisplay={packDisplay}
                    totalAmount={totalAmount}
                    totalCurrency={totalCurrency}
                  />
                  <button
                    type="button"
                    className={styles.summaryCta}
                    onClick={onConfirm}
                    disabled={!ctaEnabled}
                    aria-disabled={!ctaEnabled}
                  >
                    {ctaText}
                    <span aria-hidden="true" className={styles.summaryCtaArrow}>
                      →
                    </span>
                  </button>
                  {selectedPack ? (
                    <button
                      type="button"
                      className={styles.removePackLink}
                      onClick={() => onPackPick(selectedPackId)}
                    >
                      Remove credit pack — Base License only
                    </button>
                  ) : showPacks ? (
                    <p className={styles.packHintNote}>
                      Or add a Credit Pack below for more lives.
                    </p>
                  ) : null}
                </>
              )}
            </aside>
          </article>

          {/* BOTTOM — Horizontal "additional credits" card */}
          {showPacks ? (
            <article
              id="additional-credits"
              className={styles.packsHorizontalCard}
            >
              <header className={styles.packsHorizontalHeader}>
                <h2 className={styles.packsTitle}>
                  {pricing.additionalCredits?.heading ||
                    'Buy additional credits'}
                </h2>
                {pricing.additionalCredits?.subheading ? (
                  <p className={styles.packsSubheading}>
                    {pricing.additionalCredits.subheading}
                  </p>
                ) : null}
              </header>
              <div
                className={styles.packTilesGrid}
                role="radiogroup"
                aria-label="Optional credit packs"
              >
                {creditPacks.map((pack) => (
                  <PackTile
                    key={pack._id}
                    pack={pack}
                    isSelected={pack._id === selectedPackId}
                    isBest={pack._id === bestValueId}
                    pricing={pricing}
                    onPick={onPackPick}
                  />
                ))}
              </div>
            </article>
          ) : null}

          {/* Policy notes — moved out of the base card so the decision UI
              (base + packs + summary + CTA) fits in a single viewport.
              Renders as a low-emphasis horizontal grid below. */}
          {pricing.baseLicense?.policyNotes?.length ? (
            <section
              className={styles.stackedPolicy}
              aria-labelledby="stacked-policy-heading"
            >
              <h3
                id="stacked-policy-heading"
                className={styles.basePolicyHeading}
              >
                {pricing.baseLicense.policyHeading || 'Good to know'}
              </h3>
              <ul className={styles.stackedPolicyGrid}>
                {pricing.baseLicense.policyNotes.map((note) => (
                  <li key={note} className={styles.basePolicyItem}>
                    <span
                      className={styles.basePolicyDot}
                      aria-hidden="true"
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                           SHARED PIECES                              */
/* ------------------------------------------------------------------ */

function OrderSummaryRows({
  pricing,
  baseDisplay,
  baseValidityYears,
  baseIncludedLives,
  selectedPack,
  packDisplay,
  totalAmount,
  totalCurrency,
  // When true, the per-row meta text renders inline in parentheses next
  // to the row name (compact). Used in split mode (school/university) where
  // the summary sits in a narrow column. Stacked mode keeps the vertical
  // two-line layout for breathing room.
  compactMeta = false,
}) {
  const baseMetaText = `${baseValidityYears}-${
    baseValidityYears === 1 ? 'year' : 'years'
  } access${
    baseIncludedLives > 0
      ? ` · ${baseIncludedLives} life credit${
          baseIncludedLives === 1 ? '' : 's'
        } included`
      : ''
  }`;
  const packMetaText = selectedPack
    ? `${(selectedPack.rules?.max_plays || 0).toLocaleString()} credits`
    : '';

  return (
    <>
      <h3 className={styles.summaryHeading}>
        {pricing.summary?.heading || 'Order summary'}
      </h3>
      {baseDisplay ? (
        <div className={styles.summaryRow}>
          <span className={styles.summaryRowLabel}>
            <span className={styles.summaryRowName}>
              Base License
              {compactMeta ? (
                <span className={styles.summaryRowMetaInline}>
                  {' '}
                  ({baseMetaText})
                </span>
              ) : null}
            </span>
            {!compactMeta ? (
              <span className={styles.summaryRowMeta}>{baseMetaText}</span>
            ) : null}
          </span>
          <span className={styles.summaryRowAmount}>
            {formatPrice(baseDisplay.amount, baseDisplay.currency)}
          </span>
        </div>
      ) : null}
      {selectedPack ? (
        <div className={styles.summaryRow}>
          <span className={styles.summaryRowLabel}>
            <span className={styles.summaryRowName}>
              {selectedPack.name}
              {compactMeta ? (
                <span className={styles.summaryRowMetaInline}>
                  {' '}
                  ({packMetaText})
                </span>
              ) : null}
            </span>
            {!compactMeta ? (
              <span className={styles.summaryRowMeta}>{packMetaText}</span>
            ) : null}
          </span>
          <span className={styles.summaryRowAmount}>
            {formatPrice(packDisplay.amount, packDisplay.currency)}
          </span>
        </div>
      ) : null}

      <div className={styles.summaryDivider} />

      {totalAmount != null ? (
        <div className={styles.summaryTotalRow}>
          <span className={styles.summaryTotalLabel}>Total</span>
          <span className={styles.summaryTotalAmount}>
            {formatPrice(totalAmount, totalCurrency)}
          </span>
        </div>
      ) : (
        <p className={styles.summaryNote}>Total shown on the next step.</p>
      )}

      {pricing.summary?.note ? (
        <p className={styles.summaryNote}>{pricing.summary.note}</p>
      ) : null}
    </>
  );
}

function PackOptionRow({
  pack,
  isSelected,
  isBest,
  livesPerStudent,
  pricing,
  onPick,
}) {
  const credits = pack?.rules?.max_plays ?? 0;
  const display = getDisplayPrice(pack);
  const perCredit =
    credits > 0 ? (display.subtotalAmount || display.amount) / credits : 0;
  const studentsCovered =
    credits && livesPerStudent > 0
      ? Math.floor(credits / livesPerStudent)
      : 0;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      className={`${styles.packOption} ${
        isSelected ? styles.packOptionSelected : ''
      }`}
      onClick={() => onPick(pack._id)}
    >
      <span className={styles.packRadio} aria-hidden="true" />
      <span className={styles.packMain}>
        <span className={styles.packNameRow}>
          <span className={styles.packName}>{pack.name}</span>
          {isBest ? (
            <span className={styles.bestBadge}>
              {pricing.creditPacks?.bestValueLabel || 'Best Value'}
            </span>
          ) : null}
        </span>
        <span className={styles.packMeta}>
          <span>
            {credits.toLocaleString()}{' '}
            {credits === 1 ? 'credit' : 'credits'}
          </span>
          {perCredit > 0 ? (
            <>
              <span className={styles.packMetaDot} aria-hidden="true" />
              <span>
                {formatPrice(perCredit, display.currency, {
                  maxFractionDigits: 2,
                })}{' '}
                {pricing.creditPacks?.perCreditLabel || 'per credit'}
              </span>
            </>
          ) : null}
        </span>
        {studentsCovered > 0 ? (
          <span className={styles.packCoverage}>
            {pricing.creditPacks?.coversStudentsLabel || 'Covers ~'}
            {studentsCovered.toLocaleString()} students at {livesPerStudent}{' '}
            lives each
          </span>
        ) : null}
      </span>
      <span className={styles.packPriceCol}>
        <span className={styles.packPrice}>
          {formatPrice(display.amount, display.currency)}
        </span>
        {display.charges?.length ? (
          <span className={styles.packCharge}>
            Incl. {display.charges[0].title}
          </span>
        ) : null}
      </span>
    </button>
  );
}

function PackTile({ pack, isSelected, isBest, pricing, onPick }) {
  const credits = pack?.rules?.max_plays ?? 0;
  const display = getDisplayPrice(pack);
  const perCredit =
    credits > 0 ? (display.subtotalAmount || display.amount) / credits : 0;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      className={`${styles.packTile} ${
        isSelected ? styles.packTileSelected : ''
      }`}
      onClick={() => onPick(pack._id)}
    >
      {isBest ? (
        <span className={styles.packTileBadge}>
          {pricing.creditPacks?.bestValueLabel || 'Best Value'}
        </span>
      ) : null}
      <span className={styles.packTileName}>{pack.name}</span>
      <span className={styles.packTileCredits}>
        {credits.toLocaleString()} {credits === 1 ? 'credit' : 'credits'}
      </span>
      {perCredit > 0 ? (
        <span className={styles.packTilePerCredit}>
          {formatPrice(perCredit, display.currency, {
            maxFractionDigits: 2,
          })}{' '}
          {pricing.creditPacks?.perCreditLabel || 'per credit'}
        </span>
      ) : null}
      <span className={styles.packTilePrice}>
        {formatPrice(display.amount, display.currency)}
      </span>
      {display.charges?.length ? (
        <span className={styles.packTileCharge}>
          Incl. {display.charges[0].title}
        </span>
      ) : null}
      <span
        className={`${styles.packTileCta} ${
          isSelected ? styles.packTileCtaSelected : ''
        }`}
        aria-hidden="true"
      >
        {isSelected
          ? '✓ Added'
          : pricing.additionalCredits?.tileCtaText || 'Get Credit Pack'}
      </span>
    </button>
  );
}

function tenantTypeLabel(tenantType) {
  switch (tenantType) {
    case 'GAMER':
      return 'gamers';
    case 'SCHOOL':
      return 'schools';
    case 'UNIVERSITY':
      return 'universities';
    case 'HOMESCHOOLER':
      return 'homeschoolers';
    default:
      return 'your tenant';
  }
}

function buildModalBody({
  selectedPack,
  totalAmount,
  totalCurrency,
  baseDisplay,
  fallback,
}) {
  if (!baseDisplay) return fallback;
  if (!selectedPack) {
    return `You will leave this site to complete your purchase of the Base License for ${formatCurrency(
      baseDisplay.amount,
      baseDisplay.currency
    )}.`;
  }
  if (totalAmount != null) {
    return `You will leave this site to complete your purchase of the Base License + ${
      selectedPack.name
    } for a total of ${formatCurrency(totalAmount, totalCurrency)}.`;
  }
  return `You will leave this site to complete your purchase of the Base License + ${selectedPack.name}.`;
}

function ComingSoonCard({ pricing }) {
  const cs = pricing.comingSoon;
  if (!cs) return null;
  return (
    <div className={styles.comingSoonCard}>
      {cs.eyebrow ? (
        <span className={styles.comingSoonEyebrow}>{cs.eyebrow}</span>
      ) : null}
      {cs.heading ? (
        <h2 className={styles.comingSoonHeading}>{cs.heading}</h2>
      ) : null}
      {cs.body ? <p className={styles.comingSoonBody}>{cs.body}</p> : null}
      {cs.ctaText && cs.ctaHref ? (
        <Link to={cs.ctaHref} className={styles.comingSoonCta}>
          {cs.ctaText}
        </Link>
      ) : null}
    </div>
  );
}

function PriceSkeleton() {
  return (
    <div className={styles.priceSkeletonWrap} aria-hidden="true">
      <div className={styles.priceSkeletonBig} />
      <div className={styles.priceSkeletonSmall} />
    </div>
  );
}
