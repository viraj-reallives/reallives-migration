import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Brain,
  FileText,
  Globe,
  Heart,
  Puzzle,
  RefreshCw,
  Scale,
  Sparkles,
} from "lucide-react";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolFoundation.module.css";

/** Match Foundation page spec: ETH Zurich, IIT Bombay, Navamindradhiraj, KyungHee (order). */

const WORKSHOP_TITLES_IN_ORDER = [
  "ETH Zurich Workshop",
  "IIT Bombay Exploring SDG 1 through Empathy Workshop",
  "Navamindradhiraj University Workshop",
  "KyungHee University SDG Workshop",
];

const SKILL_ICON_BY_LABEL = {
  Empathy: Heart,
  Adaptability: RefreshCw,
  "Cultural awareness": Globe,
  "Ethical Reasoning": Scale,
  "Problem-solving skills": Puzzle,
  Leadership: Award,
};

const APPROACH_ICON_BY_TITLE = {
  "Learning Through Experience": BookOpen,
  "Building Empathy": Heart,
  "Strengthening Critical Thinking": Brain,
  "Empowering Students": Sparkles,
};

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

  const {
    hero,
    educationalApproach,
    globalImpact,
    stats,
    mission,
    taxExemption,
  } = foundation;
  const workshopCards = pickWorkshopCards(impact?.cards);

  const skillsIntro =
    hero.skillsIntro ??
    "The future requires more than academic knowledge. Tomorrow's leaders need:";

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        aria-labelledby="foundation-hero-heading"
      >
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Nonprofit · Global education</p>
            {hero.heading ? (
              <h1 id="foundation-hero-heading" className={styles.heroHeading}>
                {hero.heading}
              </h1>
            ) : null}
            {hero.tagline ? (
              <p className={styles.heroTagline}>{hero.tagline}</p>
            ) : null}
            {hero.body ? <p className={styles.heroBody}>{hero.body}</p> : null}
            {taxExemption?.pdfUrl ? (
              <a
                href={taxExemption.pdfUrl}
                className={styles.taxExemptionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={17} strokeWidth={1.75} aria-hidden />
                <span>
                  {taxExemption.linkText ??
                    "View tax-exemption certificate (PDF)"}
                </span>
              </a>
            ) : null}
          </div>

          <div className={styles.skillsPanel}>
            <p className={styles.skillsPanelIntro}>{skillsIntro}</p>
            {hero.skills?.length ? (
              <ul
                className={styles.skillGrid}
                aria-label="Capabilities students develop"
              >
                {hero.skills.map((skill) => {
                  const Icon = SKILL_ICON_BY_LABEL[skill] ?? Sparkles;
                  return (
                    <li key={skill} className={styles.skillCard}>
                      <span className={styles.skillIcon} aria-hidden>
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className={styles.skillLabel}>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      {stats?.length ? (
        <section
          className={styles.statStrip}
          aria-label="Foundation highlights"
        >
          <ul className={styles.statList}>
            {stats.map((item) => (
              <li key={item.label} className={styles.statItem}>
                <span className={styles.statValue}>{item.value}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {mission?.paragraphs?.length ? (
        <section
          className={styles.mission}
          aria-labelledby="foundation-mission-heading"
        >
          <div className={styles.missionInner}>
            {mission.eyebrow ? (
              <p className={styles.missionEyebrow}>{mission.eyebrow}</p>
            ) : null}
            {mission.heading ? (
              <h2
                id="foundation-mission-heading"
                className={styles.missionHeading}
              >
                {mission.heading}
              </h2>
            ) : null}
            <div className={styles.missionBody}>
              {mission.paragraphs.map((p, i) => (
                <p key={`mission-p-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
              {educationalApproach.cards.map((card) => {
                const Icon = APPROACH_ICON_BY_TITLE[card.title] ?? BookOpen;
                return (
                  <article key={card.title} className={styles.approachCard}>
                    <div className={styles.approachCardIcon} aria-hidden>
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    {card.title ? (
                      <h3 className={styles.approachCardTitle}>{card.title}</h3>
                    ) : null}
                    {card.description ? (
                      <p className={styles.approachCardDesc}>
                        {card.description}
                      </p>
                    ) : null}
                  </article>
                );
              })}
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
              {workshopCards.map((card) => {
                const body = (
                  <>
                    {card.imagePath ? (
                      <div className={styles.workshopThumb}>
                        <img
                          src={card.imagePath}
                          alt=""
                          className={styles.workshopImage}
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <div className={styles.workshopCardBody}>
                      <h3 className={styles.workshopTitle}>{card.title}</h3>
                      {card.university ? (
                        <p className={styles.workshopLoc}>{card.university}</p>
                      ) : null}
                      {card.date ? (
                        <p className={styles.workshopDate}>{card.date}</p>
                      ) : null}
                      <span className={styles.workshopCardCta}>
                        Workshop details
                      </span>
                    </div>
                  </>
                );

                return (
                  <li key={card.title} className={styles.workshopItem}>
                    {card.learnMorePath ? (
                      <Link
                        className={styles.workshopCard}
                        to={card.learnMorePath}
                        aria-label={`${card.title} — open workshop in Impact`}
                      >
                        {body}
                      </Link>
                    ) : (
                      <div className={styles.workshopCard}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
          {globalImpact.learnMorePath ? (
            <Link className={styles.impactCta} to={globalImpact.learnMorePath}>
              {globalImpact.learnMoreText ?? "Learn More"}
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
