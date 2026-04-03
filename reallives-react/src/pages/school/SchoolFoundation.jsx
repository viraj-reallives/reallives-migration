import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolFoundation.module.css';

/** Match Foundation page spec: ETH Zurich, IIT Bombay, Navamindradhiraj, KyungHee (order). */
const WORKSHOP_TITLES_IN_ORDER = [
  'ETH Zurich Workshop',
  'IIT Bombay Exploring SDG 1 through Empathy Workshop',
  'Navamindradhiraj University Workshop',
  'KyungHee University SDG Workshop',
];

function pickWorkshopCards(cards) {
  if (!cards?.length) return [];
  return WORKSHOP_TITLES_IN_ORDER.map((title) => cards.find((c) => c.title === title)).filter(
    Boolean,
  );
}

export default function SchoolFoundation() {
  const { foundation, impact } = useSiteContent();

  if (!foundation) {
    return null;
  }

  const { hero, educationalApproach, globalImpact, rcmi } = foundation;
  const workshopCards = pickWorkshopCards(impact?.cards);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="foundation-hero-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            {hero.heading ? (
              <h1 id="foundation-hero-heading" className={styles.heroHeading}>
                {hero.heading}
              </h1>
            ) : null}
            {hero.tagline ? <p className={styles.heroTagline}>{hero.tagline}</p> : null}
            {hero.body ? <p className={styles.heroBody}>{hero.body}</p> : null}
            {hero.donateUrl ? (
              <div className={styles.donateCluster}>
                {hero.donateCtaText ? (
                  <span className={styles.donateLead}>{hero.donateCtaText}</span>
                ) : null}
                <a
                  className={styles.donateButton}
                  href={hero.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.donateBtnText ?? 'Donate'}
                </a>
              </div>
            ) : null}
          </div>
          {hero.skills?.length ? (
            <ul className={styles.skillGrid} aria-label="Foundation skills">
              {hero.skills.map((skill) => (
                <li key={skill} className={styles.skillCard}>
                  {skill}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="foundation-approach-heading">
        <div className={styles.approachInner}>
          <div className={styles.approachCopy}>
            {educationalApproach.heading ? (
              <h2 id="foundation-approach-heading" className={styles.sectionHeading}>
                {educationalApproach.heading}
              </h2>
            ) : null}
            {educationalApproach.body ? (
              <p className={styles.approachBody}>{educationalApproach.body}</p>
            ) : null}
          </div>
          {educationalApproach.cards?.length ? (
            <div className={styles.approachCards}>
              {educationalApproach.cards.map((card) => (
                <article key={card.title} className={styles.approachCard}>
                  {card.title ? <h3 className={styles.approachCardTitle}>{card.title}</h3> : null}
                  {card.description ? (
                    <p className={styles.approachCardDesc}>{card.description}</p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className={styles.globalImpact} aria-labelledby="foundation-global-heading">
        <div className={styles.globalInner}>
          {globalImpact.heading ? (
            <h2 id="foundation-global-heading" className={styles.globalHeading}>
              {globalImpact.heading}
            </h2>
          ) : null}
          {globalImpact.subheading ? (
            <p className={styles.globalSub}>{globalImpact.subheading}</p>
          ) : null}
          {workshopCards.length ? (
            <ul className={styles.workshopGrid}>
              {workshopCards.map((card) => (
                <li key={card.title} className={styles.workshopCard}>
                  <h3 className={styles.workshopTitle}>{card.title}</h3>
                  {card.university ? (
                    <p className={styles.workshopLoc}>{card.university}</p>
                  ) : null}
                  {card.date ? <p className={styles.workshopDate}>{card.date}</p> : null}
                </li>
              ))}
            </ul>
          ) : null}
          {globalImpact.learnMorePath ? (
            <Link className={styles.impactCta} to={globalImpact.learnMorePath}>
              {globalImpact.learnMoreText ?? 'Learn More'}
            </Link>
          ) : null}
        </div>
      </section>

      <section className={styles.rcmi} aria-labelledby="foundation-rcmi-heading">
        <div className={styles.rcmiInner}>
          {rcmi.heading ? (
            <h2 id="foundation-rcmi-heading" className={styles.rcmiHeading}>
              {rcmi.heading}
            </h2>
          ) : null}
          {rcmi.subheading ? <p className={styles.rcmiSub}>{rcmi.subheading}</p> : null}

          <div className={styles.rcmiDiagramWrap}>
            {rcmi.diagramImage ? (
              <img
                className={styles.rcmiDiagram}
                src={rcmi.diagramImage}
                alt=""
                loading="lazy"
              />
            ) : null}
            {rcmi.competencies?.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className={clsx(styles.competency, styles[`compPos${i}`])}
              >
                {label}
              </span>
            ))}
          </div>

          {rcmi.learnMoreUrl ? (
            <a
              className={styles.rcmiLearnMore}
              href={rcmi.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rcmi.learnMoreText ?? 'Learn More'}
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
