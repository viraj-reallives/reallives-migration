import { Link } from "react-router-dom";
import clsx from "clsx";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolFoundation.module.css";
import Style1 from "../../components/costom_css/SchoolFoundation_override.module.css";

/** Match Foundation page spec: ETH Zurich, IIT Bombay, Navamindradhiraj, KyungHee (order). */
const WORKSHOP_TITLES_IN_ORDER = [
  "ETH Zurich Workshop",
  "IIT Bombay Exploring SDG 1 through Empathy Workshop",
  "Navamindradhiraj University Workshop",
  "KyungHee University SDG Workshop",
];

function pickWorkshopCards(cards) {
  if (!cards?.length) return [];
  return WORKSHOP_TITLES_IN_ORDER.map((title) =>
    cards.find((c) => c.title === title),
  ).filter(Boolean);
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
      <section
        className={`${styles.hero} ${Style1.hero_conatiner}`}
        aria-labelledby="foundation-hero-heading"
      >
        <div className={`${styles.heroInner} ${Style1.h_100}`}>
          <div
            className={`${styles.heroCopy} ${Style1.heroCopy_override_style}`}
          >
            {hero.heading ? (
              <h1 id="foundation-hero-heading" className={styles.heroHeading}>
                {hero.heading}
              </h1>
            ) : null}
            {hero.tagline ? (
              <p className={styles.heroTagline}>{hero.tagline}</p>
            ) : null}
            {hero.body ? <p className={styles.heroBody}>{hero.body}</p> : null}
            {/* {hero.donateUrl ? (
              <div className={styles.donateCluster}>
                {hero.donateCtaText ? (
                  <span className={styles.donateLead}>{hero.donateCtaText}</span>
                ) : null}
                <a
                  className={`${styles.donateButton} ${Style1.display_none}`}
                  href={hero.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.donateBtnText ?? 'Donate'}
                </a>
              </div>
            ) : null} */}
          </div>

          <div className={Style1.outer_card_style}>
            <p>
              The future requires more than academic knowledge. Students need -
            </p>

            {hero.skills?.length ? (
              <ul
                className={`${styles.skillGrid} ${Style1.skillGrid_override_style}`}
                aria-label="Foundation skills"
              >
                {hero.skills.map((skill) => (
                  <li key={skill} className={`${styles.skillCard} ${Style1.cards_box_foundation }`}>
                    {skill}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      {/* <div className={Style1.foundation_first_container}>
        <div className={Style1.foundation_child_1}>
          <span className={Style1.inner_title_section}>
            <h1>RealLives Foundation</h1>
            <p>Changing Education Through Lived Experience.</p>
          </span>

          <span className={Style1.inner_title_section_2}>
            <p>
              We believe learning should not stop at memorizing facts, it should
              cultivate empathy, critical thinking, and real-world awareness.
            </p>

            <p>
              Through immersive simulations, students step into lives across
              different countries, cultures, and realities. They make decisions,
              face consequences, and reflect deeply.
            </p>
          </span>

          <div className={Style1.invest_in_chnagemaker_button}>
            <p>Invest in future ChangeMakers</p>
            <a href="#" className={Style1.donate_now_btn}>
              Donate Now.
            </a>
          </div>
        </div>

        <div className={Style1.foundation_child_2}></div>
      </div> */}

      <section
        className={styles.approach}
        aria-labelledby="foundation-approach-heading"
      >
        <div className={styles.approachInner}>
          <div className={styles.approachCopy}>
            {educationalApproach.heading ? (
              <h2
                id="foundation-approach-heading"
                className={styles.sectionHeading}
              >
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
                  {card.title ? (
                    <h3 className={styles.approachCardTitle}>{card.title}</h3>
                  ) : null}
                  {card.description ? (
                    <p className={styles.approachCardDesc}>
                      {card.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section
        className={styles.globalImpact}
        aria-labelledby="foundation-global-heading"
      >
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
                  {card.date ? (
                    <p className={styles.workshopDate}>{card.date}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}
          {globalImpact.learnMorePath ? (
            <Link className={styles.impactCta} to={globalImpact.learnMorePath}>
              {globalImpact.learnMoreText ?? "Learn More"}
            </Link>
          ) : null}
        </div>
      </section>

      <section
        className={styles.rcmi}
        aria-labelledby="foundation-rcmi-heading"
      >
        <div className={styles.rcmiInner}>
          {rcmi.heading ? (
            <h2 id="foundation-rcmi-heading" className={styles.rcmiHeading}>
              {rcmi.heading}
            </h2>
          ) : null}
          {rcmi.subheading ? (
            <p className={styles.rcmiSub}>{rcmi.subheading}</p>
          ) : null}

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
              {rcmi.learnMoreText ?? "Learn More"}
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
