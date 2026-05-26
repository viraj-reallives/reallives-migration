import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./GamerHome.module.css";

function ReviewCard({ quote, author, role, tone = "default" }) {
  return (
    <div
      className={`${styles.reviewCard} ${
        tone === "hot" ? styles.reviewCardHot : ""
      }`}
    >
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
  const gamerReviews = whatGamersSay?.reviews;

  return (
    <div className={styles.page} id="gamer-home">
      <section className={styles.hero} aria-label="Gamer hero">
        {hero.backgroundImagePath ? (
          <img
            src={hero.backgroundImagePath}
            alt=""
            className={styles.heroBg}
          />
        ) : null}

        <div className={styles.heroNebula} aria-hidden="true" />

        <div className={styles.heroOverlay}>
          <div className={styles.heroInner}>
            <div className={styles.heroTop}>
              <div className={styles.heroLeft}>
                {headline?.life ? (
                  <div className={styles.lifeRow}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      "
                    </span>

                    <h1 className={styles.life}>{headline.life}</h1>
                  </div>
                ) : null}

                {headline?.midLine ? (
                  <p className={styles.midLine}>{headline.midLine}</p>
                ) : null}

                {headline?.gameWord || headline?.closing ? (
                  <p className={styles.footLine}>
                    <span className={styles.gameWord}>{headline.gameWord}</span>{" "}
                    {headline.closing}
                    <span className={styles.quoteMarkEnd} aria-hidden="true">
                      "
                    </span>
                  </p>
                ) : null}
              </div>

              <div className={styles.heroRight}>
                {hero.welcomeParagraph ? (
                  <p className={styles.welcome}>{hero.welcomeParagraph}</p>
                ) : null}
              </div>
            </div>

            {hero.bottomTagline ? (
              <p className={styles.bottomTag}>{hero.bottomTagline}</p>
            ) : null}
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="gameplay-heading"
        id="gamer-gameplay"
      >
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
          <img
            src={gameplay.timelineImagePath}
            alt=""
            className={styles.timelineImg}
          />
        ) : null}
      </section>

      <section className={styles.section} aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className={styles.reviewsHeading}>
          What Gamers Have to Say
        </h2>

        {whatGamersSay?.titleImagePath ? (
          <img
            src={whatGamersSay.titleImagePath}
            alt=""
            className={styles.reviewsTitle}
          />
        ) : null}

        {gamerReviews ? (
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCol}>
              {gamerReviews.leftColumn?.map((r, i) => (
                <ReviewCard
                  key={`left-${i}`}
                  quote={r.quote}
                  author={r.author}
                  role={r.role}
                  tone={i === 0 ? "hot" : "default"}
                />
              ))}
            </div>

            <div className={`${styles.reviewCol} ${styles.centerCard}`}>
              {gamerReviews.centerColumn?.map((r, i) => (
                <ReviewCard
                  key={`center-${i}`}
                  quote={r.quote}
                  author={r.author}
                  role={r.role}
                  tone="hot"
                />
              ))}
            </div>

            <div className={styles.reviewCol}>
              {gamerReviews.rightColumn?.map((r, i) => (
                <ReviewCard
                  key={`right-${i}`}
                  quote={r.quote}
                  author={r.author}
                  role={r.role}
                />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
