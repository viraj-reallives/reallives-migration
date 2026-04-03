import { useSiteContent } from '@hooks/useSiteContent';
import styles from './GamerHome.module.css';

function ReviewCard({ quote, author, role }) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.reviewQuote}>{quote}</p>
      {author ? <div className={styles.reviewAuthor}>{author}</div> : null}
      {role ? <p className={styles.reviewRole}>{role}</p> : null}
    </div>
  );
}

export default function GamerHome() {
  const { hero } = useSiteContent();

  if (!hero) {
    return null;
  }

  const { headline, gameplay, whatGamersSay } = hero;
  const reviews = whatGamersSay?.reviews;

  return (
    <div className={styles.page} id="gamer-home">
      <section className={styles.hero} aria-label="Gamer hero">
        {hero.backgroundImagePath ? (
          <img src={hero.backgroundImagePath} alt="" className={styles.heroBg} />
        ) : null}
        <div className={styles.heroOverlay}>
          <div className={styles.heroInner}>
            <div className={styles.titleBlock}>
              {hero.bracketDecorationPath ? (
                <img
                  src={hero.bracketDecorationPath}
                  alt=""
                  className={`${styles.bracket} ${styles.bracketTL}`}
                />
              ) : null}
              {headline?.life ? <h1 className={styles.life}>{headline.life}</h1> : null}
              {headline?.midLine ? <p className={styles.midLine}>{headline.midLine}</p> : null}
              {headline?.gameWord || headline?.closing ? (
                <p className={styles.footLine}>
                  <span className={styles.gameWord}>{headline.gameWord}</span> {headline.closing}
                </p>
              ) : null}
              {hero.bracketDecorationPath ? (
                <img
                  src={hero.bracketDecorationPath}
                  alt=""
                  className={`${styles.bracket} ${styles.bracketBR}`}
                />
              ) : null}
            </div>
            {hero.welcomeParagraph ? <p className={styles.welcome}>{hero.welcomeParagraph}</p> : null}
            {hero.bottomTagline ? <p className={styles.bottomTag}>{hero.bottomTagline}</p> : null}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="gameplay-heading">
        {gameplay?.titleImagePath ? (
          <img
            id="gameplay-heading"
            src={gameplay.titleImagePath}
            alt=""
            className={styles.sectionTitleImg}
          />
        ) : null}
        {gameplay?.arcadeEmbedUrl ? (
          <div className={styles.embedShell}>
            <div className={styles.iframeWrap}>
              <iframe
                className={styles.iframe}
                src={gameplay.arcadeEmbedUrl}
                title="Gameplay"
                allow="clipboard-write"
              />
            </div>
          </div>
        ) : null}
        {gameplay?.timelineImagePath ? (
          <img src={gameplay.timelineImagePath} alt="" className={styles.timelineImg} />
        ) : null}
      </section>

      <section className={styles.section} aria-labelledby="reviews-heading">
        {whatGamersSay?.titleImagePath ? (
          <img
            id="reviews-heading"
            src={whatGamersSay.titleImagePath}
            alt=""
            className={styles.reviewsTitle}
          />
        ) : null}
        {reviews ? (
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCol}>
              {reviews.leftColumn?.map((r, i) => (
                <ReviewCard key={`l-${i}`} quote={r.quote} author={r.author} role={r.role} />
              ))}
            </div>
            <div className={`${styles.reviewCol} ${styles.centerCard}`}>
              {reviews.centerColumn?.map((r, i) => (
                <ReviewCard key={`c-${i}`} quote={r.quote} author={r.author} role={r.role} />
              ))}
            </div>
            <div className={styles.reviewCol}>
              {reviews.rightColumn?.map((r, i) => (
                <ReviewCard key={`r-${i}`} quote={r.quote} author={r.author} role={r.role} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
