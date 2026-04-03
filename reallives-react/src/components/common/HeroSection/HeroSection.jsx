import { Link } from 'react-router-dom';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { hero } = useSiteContent();
  if (!hero || (!hero.heading && !hero.subheading)) return null;

  const { heading, subheading, ctaText, ctaPath } = hero;
  const showCta = Boolean(ctaText?.trim() && ctaPath);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {heading ? <h1 className={styles.title}>{heading}</h1> : null}
          {subheading ? <p className={styles.subtitle}>{subheading}</p> : null}
          {showCta ? (
            <div className={styles.actions}>
              <Link to={ctaPath} className={styles.cta}>
                {ctaText}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
