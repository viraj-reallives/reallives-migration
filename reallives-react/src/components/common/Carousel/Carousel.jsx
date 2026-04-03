import { useCallback, useEffect, useState } from 'react';
import styles from './Carousel.module.css';

const AUTO_MS = 5000;

export default function Carousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = slides.length;

  const go = useCallback(
    dir => {
      if (len < 1) return;
      setIndex(i => (i + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    if (len <= 1 || paused) return undefined;
    const id = window.setInterval(() => {
      setIndex(i => (i + 1) % len);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [len, paused]);

  if (!len) return null;

  return (
    <section
      className={styles.root}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured slides"
    >
      <div className={styles.viewport}>
        {slides.map((slide, i) => (
          <div
            key={`carousel-slide-${i}`}
            className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
            aria-hidden={i !== index}
          >
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.alt || ''}
                className={styles.slideImage}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ) : null}
            <div className={styles.slideOverlay} aria-hidden="true" />
            <div className={styles.caption}>
              {slide.heading ? <h2 className={styles.heading}>{slide.heading}</h2> : null}
              {slide.subheading ? <p className={styles.subheading}>{slide.subheading}</p> : null}
            </div>
          </div>
        ))}
      </div>

      {len > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            <span className={styles.navIcon} aria-hidden="true">
              ‹
            </span>
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            <span className={styles.navIcon} aria-hidden="true">
              ›
            </span>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1} of ${len}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
