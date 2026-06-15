import { Link } from 'react-router-dom';
import impactOverrides from '@components/costom_css/SchoolImpact_override.module.css';
import styles from './WorkshopCard.module.css';

export default function WorkshopCard({ card, learnMorePath }) {
  const href = card.learnMorePath || learnMorePath;

  const body = (
    <>
      <div className={styles.cardHeader}>
        {card.title ? <h2 className={styles.cardTitle}>{card.title}</h2> : null}
        {card.date ? <p className={styles.cardDate}>{card.date}</p> : null}
      </div>

      <div className={`${styles.cardBody} ${impactOverrides.impact_card_style}`}>
        {card.imagePath ? (
          <div className={`${styles.cardImage} ${impactOverrides.cardImage_override}`}>
            <img src={card.imagePath} alt="" />
          </div>
        ) : null}

        <div>
          {card.university || card.department ? (
            <div className={styles.metaBlock}>
              {card.university ? (
                <p className={styles.university}>{card.university}</p>
              ) : null}
              {card.department ? (
                <p className={styles.department}>{card.department}</p>
              ) : null}
            </div>
          ) : null}

          {card.collaborationLabel && card.collaborationName ? (
            <div className={styles.row}>
              <p className={styles.muted}>{card.collaborationLabel}</p>
              <p className={styles.value}>{card.collaborationName}</p>
            </div>
          ) : null}

          {card.participantsLabel && card.participantsNumber ? (
            <div className={styles.row}>
              <p className={styles.muted}>{card.participantsLabel}</p>
              <p className={styles.value}>{card.participantsNumber}</p>
            </div>
          ) : null}

          {card.usedToolLabel && card.usedTool ? (
            <div className={styles.row}>
              <p className={styles.muted}>{card.usedToolLabel}</p>
              <p className={styles.value}>{card.usedTool}</p>
            </div>
          ) : null}

          {card.skillsDevelopedLabel && card.skills?.length ? (
            <div>
              <p className={styles.skillsHeading}>{card.skillsDevelopedLabel}</p>
              <div className={styles.skillRow}>
                {card.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {href && card.learnMoreText ? (
            <span className={styles.learnMore}>
              <span className={styles.learnMoreLabel}>{card.learnMoreText}</span>
              <span className={styles.learnMoreIcon} aria-hidden="true">
                →
              </span>
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={`${styles.card} ${styles.cardClickable}`}
        aria-label={
          card.title
            ? `${card.title}${card.learnMoreText ? ` — ${card.learnMoreText}` : ''}`
            : card.learnMoreText
        }
      >
        {body}
      </Link>
    );
  }

  return <article className={styles.card}>{body}</article>;
}
