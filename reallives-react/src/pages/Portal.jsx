import { Link } from 'react-router-dom';
import styles from './Portal.module.css';

function RealLivesMark() {
  return (
    <svg
      className={styles.cardIconSvg}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.15" />
      <path
        d="M19 36c0-11 7-19 13-19s13 8 13 19-7 19-13 19-13-8-13-19Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M25 38c3 2 6 3 7 3s4-1 7-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 27h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChangeMakerMark() {
  return (
    <svg
      className={styles.cardIconSvg}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="12"
        y="14"
        width="40"
        height="36"
        rx="10"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M22 45V19l20 8-20 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M46 19v26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Portal() {
  return (
    <main className={styles.page}>
      <img
        className={styles.bgImage}
        src="https://d2jn82ki4w4ftn.cloudfront.net/starting-background-img.png"
        alt="Background"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.chooseTitle}>Choose Your Experience</p>
          <p className={styles.exploreTitle}>Explore Lives. Create Impact.</p>
        </div>

        <div className={styles.cards}>
          <Link to="/reallives" className={styles.cardLink} aria-label="RealLives">
            <div className={`${styles.card} ${styles.cardRealLives}`}>
              <div className={styles.cardTop}>
                <RealLivesMark />
              </div>

              <div className={styles.cardFeatures} aria-hidden="true">
                <span className={styles.featurePill}>live a life</span>
                <span className={styles.featurePill}>real world data</span>
                <span className={styles.featurePill}>Empathy simulation</span>
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardHeading}>RealLives Simulation Platform</h2>
                <p className={styles.cardDescription}>Experience lives across the world</p>
                <p className={styles.cardLongDescription}>
                  Step into the lives of people from different countries and backgrounds.
                  <span className={styles.desktopOnly}>
                    {' '}
                    {'  '}
                    Build empathy, understand global systems, and make life decisions through immersive simulation.
                  </span>
                </p>
              </div>

              <div className={styles.cardCta} aria-hidden="true">
                Continue to RealLives
              </div>
            </div>
          </Link>

          <a
            href="https://changemakerindex.com/"
            className={styles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ChangeMaker Index"
          >
            <div className={`${styles.card} ${styles.cardChangeMaker}`}>
              <div className={styles.cardTop}>
                <ChangeMakerMark />
              </div>

              <div className={styles.cardFeatures} aria-hidden="true">
                <span className={styles.featurePill}>21ST CENTURY SKILLS</span>
                <span className={styles.featurePill}>EMPATHY</span>
                <span className={styles.featurePill}>sdg lived experience</span>
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardHeading}>RealLives ChangeMaker Index (RCMI)</h2>
                <p className={`${styles.cardDescription} ${styles.cardDescriptionAlt}`}>
                  Turn insight into real-world impact
                </p>
                <p className={styles.cardLongDescription}>
                  Measure and grow across 18 changemaking competencies. Reflect on your decisions,
                  understand your impact, and build skills that prepare you for future careers and
                  responsible leadership.
                </p>
              </div>

              <div className={styles.cardCta} aria-hidden="true">
                Go to RealLives ChangeMaker Index
              </div>
            </div>
          </a>
        </div>

        <p className={styles.copyright}>© 2025 RealLives World. All rights reserved.</p>
      </div>
    </main>
  );
}

