import { Link } from 'react-router-dom';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from '../school/SchoolChangemaker.module.css';

function CtaLink({ href, className, children }) {
  if (!href) return null;
  const isExternal =
    /^https?:\/\//i.test(href) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export default function HomeschoolerChangemaker() {
  const { changemaker: cm } = useSiteContent();

  if (!cm) return null;

  const ctaHeadingLines = cm.ctaSchoolHeading?.split('\n').filter(Boolean) ?? [];

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        {cm.heroBackgroundImagePath ? (
          <img className={styles.heroBg} src={cm.heroBackgroundImagePath} alt="" />
        ) : null}
        <div className={styles.heroOverlay}>
          {cm.heroImageCaption ? <p className={styles.caption}>{cm.heroImageCaption}</p> : null}
          <div className={styles.heroGrid}>
            <div>
              {cm.heading ? <h1 className={styles.heroTitle}>{cm.heading}</h1> : null}
              {cm.body ? <p className={styles.heroBody}>{cm.body}</p> : null}
            </div>
            {cm.heroPrimaryCtaPath && (ctaHeadingLines.length || cm.ctaButtonText) ? (
              <div className={styles.ctaCard}>
                {ctaHeadingLines.length ? (
                  <p className={styles.ctaSchoolHeading}>
                    {ctaHeadingLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
                {cm.ctaButtonText ? (
                  <CtaLink href={cm.heroPrimaryCtaPath} className={styles.btnPrimary}>
                    {cm.ctaButtonText}
                  </CtaLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {cm.journeyHeading ? <h2 className={styles.journeyHeading}>{cm.journeyHeading}</h2> : null}

      {cm.phases?.map((phase, phaseIndex) => {
        const phaseId = `changemaker-phase-${phaseIndex}`;
        const imageColumn = (
          <div
            className={`${styles.phaseImageWrap} ${phase.images?.length > 1 ? styles.phaseImageStack : ''}`}
          >
            {phase.images?.length
              ? phase.images.map((src) => <img key={src} src={src} alt="" />)
              : null}
            {!phase.images?.length && phase.imagePath ? <img src={phase.imagePath} alt="" /> : null}
          </div>
        );
        const contentColumn = (
          <div className={styles.phaseContent}>
            {phase.title ? (
              <h3 className={styles.phaseTitle} id={phaseId}>
                {phase.title}
              </h3>
            ) : null}
            {phase.intro ? <p className={styles.phaseIntro}>{phase.intro}</p> : null}
            {phase.bullets?.length ? (
              <ul className={styles.bulletList}>
                {phase.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {phase.sections?.length
              ? phase.sections.map((sec) => (
                  <div key={sec.title} className={styles.sectionBlock}>
                    {sec.title ? <p className={styles.sectionTitle}>{sec.title}</p> : null}
                    {sec.bullets?.length ? (
                      <ul className={styles.nestedList}>
                        {sec.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))
              : null}
            {phase.transitionArrowPath ? (
              <div className={styles.arrowDecor}>
                <img src={phase.transitionArrowPath} alt="" />
              </div>
            ) : null}
          </div>
        );

        return (
          <section key={phase.title} className={styles.phase} aria-labelledby={phaseId}>
            <div className={styles.phaseGrid}>
              {phaseIndex === 1 ? (
                <>
                  {contentColumn}
                  {imageColumn}
                </>
              ) : (
                <>
                  {imageColumn}
                  {contentColumn}
                </>
              )}
            </div>
          </section>
        );
      })}

      {cm.whyJourneyMattersHeading || cm.gaps?.length ? (
        <section className={styles.whySection} aria-labelledby="why-journey">
          <div className={styles.whyInner}>
            {cm.whyJourneyMattersHeading ? (
              <h2 className={styles.whyHeading} id="why-journey">
                {cm.whyJourneyMattersHeading}
              </h2>
            ) : null}
            {cm.gaps?.length ? (
              <div className={styles.gapGrid}>
                {cm.gaps.map((gap) => (
                  <article key={gap.title} className={styles.gapCard}>
                    {gap.title ? <h3 className={styles.gapTitle}>{gap.title}</h3> : null}
                    {gap.description ? <p className={styles.gapDesc}>{gap.description}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <footer className={styles.closing}>
        {cm.closingHeading ? <h2 className={styles.closingHeading}>{cm.closingHeading}</h2> : null}
        {cm.closingSubtext ? <p className={styles.closingSub}>{cm.closingSubtext}</p> : null}
        {cm.closingButtonText && cm.closingCtaPath ? (
          <CtaLink href={cm.closingCtaPath} className={styles.btnOutline}>
            {cm.closingButtonText}
          </CtaLink>
        ) : null}
      </footer>
    </div>
  );
}
