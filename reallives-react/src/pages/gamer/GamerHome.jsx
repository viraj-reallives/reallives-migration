import { useEffect, useRef } from "react";
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

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const reviewsData = [
    {
      id: 1,
      name: "Alex",
      title: "Interactive Learning",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      stars: "★★",
      review:
        "Amazing platform with immersive storytelling and engaging educational experiences.",
    },

    {
      id: 2,
      name: "Sophia",
      title: "Creative Experience",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: "★★★",
      review:
        "The design and animations create a beautiful and emotional learning journey.",
    },

    {
      id: 3,
      name: "Daniel",
      title: "Global Perspective",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      stars: "★★★★",
      review:
        "A unique way to understand cultures and real-world challenges interactively.",
    },

    {
      id: 4,
      name: "Emma",
      title: "Modern Education",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: "★★★★★",
      review:
        "Smooth interface, cinematic visuals, and meaningful educational experiences.",
    },

    {
      id: 5,
      name: "Liam",
      title: "Human Stories",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      stars: "★★★",
      review:
        "This platform builds empathy through realistic and emotional simulations.",
    },

    {
      id: 6,
      name: "Olivia",
      title: "Deep Engagement",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      stars: "★★★★",
      review:
        "Every story feels real and keeps you fully engaged from start to end.",
    },

    {
      id: 7,
      name: "Noah",
      title: "Immersive Design",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      stars: "★★★★★",
      review:
        "UI/UX is top-notch and makes learning feel like an interactive game.",
    },

    {
      id: 8,
      name: "Ava",
      title: "Emotional Learning",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      stars: "★★★",
      review:
        "It connects emotionally and makes concepts easier to understand.",
    },

    {
      id: 9,
      name: "Ethan",
      title: "Real World Insight",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      stars: "★★★★",
      review:
        "Great platform for understanding real-world problems in a simple way.",
    },

    {
      id: 10,
      name: "Mia",
      title: "Modern Storytelling",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      stars: "★★★★★",
      review: "Beautiful storytelling combined with strong educational value.",
    },
  ];

  const firstRow = reviewsData.slice(0, 5);
  const secondRow = reviewsData.slice(5, 10);

  const logos = [
    "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/united-nations.svg",
    "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/world-bank-group.svg",
    "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/lonely-planet.svg",
    "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/birds-logo.svg",
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  const startAutoScroll = (sliderRef, direction, speed = 0.7) => {
    let animation;

    const animate = () => {
      if (sliderRef.current) {
        const slider = sliderRef.current;

        if (slider.dataset.hover !== "true") {
          if (direction === "left") {
            slider.scrollLeft += speed;

            if (slider.scrollLeft >= slider.scrollWidth / 2) {
              slider.scrollLeft = 0;
            }
          }

          if (direction === "right") {
            slider.scrollLeft -= speed;

            if (slider.scrollLeft <= 0) {
              slider.scrollLeft = slider.scrollWidth / 2;
            }
          }
        }
      }

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  };

  const handleMouseEnter = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.dataset.hover = "true";
    }
  };

  const handleMouseLeave = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.dataset.hover = "false";
    }
  };

  useEffect(() => {
    const stopSlider1 = startAutoScroll(slider1, "left");

    const stopSlider2 = startAutoScroll(slider2, "right");

    return () => {
      stopSlider1();
      stopSlider2();
    };
  }, []);

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

      <div className={styles.logo_slide_conntainer}>
        <h2 className={styles.providerTitle}>Our Data Providers</h2>

        <div className={styles.sliderSection}>
          <div className={styles.fadeLeft}></div>

          <div className={styles.fadeRight}></div>

          <div className={styles.sliderTrack}>
            {duplicatedLogos.map((logo, index) => (
              <div key={`logo-${index}`} className={styles.logoWrapper}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.main}>

        <div className={styles.headingBox}>
          <p className={styles.smallHeading}>GLOBAL COMMUNITY</p>

          <h1 className={styles.heading}>
            Reviews By
            <br />
            Global Students
          </h1>
          
        </div>

        <div ref={slider1}  data-hover="false" onMouseEnter={() => handleMouseEnter(slider1)} onMouseLeave={() => handleMouseLeave(slider1)} className={styles.slider} >
          <div className={styles.cardInner_grid_review}> 
            {[...firstRow, ...firstRow].map((item, index) => (
              <div className={styles.card} key={`first-${item.id}-${index}`}>
                <div>
                  <div className={styles.userBox}>
                    <img
                      src={item.image}
                      className={styles.userImage}
                      alt={item.name}
                    />

                    <div>
                      <h3 className={styles.userName}>{item.name}</h3>

                      <p className={styles.userTitle}>{item.title}</p>
                    </div>
                  </div>

                  <div className={styles.line} />

                  <div className={styles.stars}>{item.stars}</div>

                  <p className={styles.reviewText}>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={slider2} data-hover="false" onMouseEnter={() => handleMouseEnter(slider2)} onMouseLeave={() => handleMouseLeave(slider2)} className={styles.slider} >
          <div className={styles.cardInner_grid_review}>
            {[...secondRow, ...secondRow].map((item, index) => (
              <div className={styles.card} key={`second-${item.id}-${index}`}>
                <div>
                  <div className={styles.userBox}>
                    <img
                      src={item.image}
                      className={styles.userImage}
                      alt={item.name}
                    />

                    <div>
                      <h3 className={styles.userName}>{item.name}</h3>

                      <p className={styles.userTitle}>{item.title}</p>
                    </div>
                  </div>

                  <div className={styles.line} />

                  <div className={styles.stars}>{item.stars}</div>

                  <p className={styles.reviewText}>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
