import { Link } from 'react-router-dom';
import { landingContent } from '@content/landing';
import Carousel from '@components/common/Carousel/Carousel';
import styles from './RealLivesLanding.module.css';

export default function RealLivesLanding() {
  const { carousel, entryCards, ctas, footer } = landingContent;
  const logoSrc = footer?.logo ?? '';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logoLink} aria-label="RealLives Home">
            {logoSrc ? (
              <img src={logoSrc} alt="RealLives" className={styles.logoImg} />
            ) : (
              <span className={styles.logoFallback}>RealLives</span>
            )}
          </Link>

          <div className={styles.headerCtas}>
            <Link to={ctas.buyLicense.path} className={styles.ctaBtn}>
              Buy License
            </Link>
            <a
              href={ctas.login.url}
              className={styles.ctaBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <section className={styles.carouselSection}>
        <Carousel slides={carousel.slides} />
      </section>

      <section className={styles.cardsSection} aria-label="Explore sub-sites">
        <div className={styles.cardsGrid}>
          {entryCards.map(card => (
            <Link key={card.path} to={card.path} className={styles.entryCard}>
              {card.image ? (
                <img src={card.image} alt={card.label} className={styles.entryImg} />
              ) : null}
              <h3 className={styles.entryHeading}>{card.label}</h3>
              <p className={styles.entryDescription}>{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

