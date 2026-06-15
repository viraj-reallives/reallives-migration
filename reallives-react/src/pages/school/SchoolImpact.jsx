import { Fragment, useCallback, useEffect, useState } from "react";
import CTABanner from "@components/common/CTABanner/CTABanner";
import WorkshopCard from "@components/common/WorkshopCard/WorkshopCard";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolImpact.module.css";
import Style1 from "../../components/costom_css/SchoolImpact_override.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { GlobalMap } from "../../pages/GlobalMap/GlobalMap";

const AUTO_MS = 5000;

function ImpactImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = images?.length ?? 0;

  const go = useCallback(
    (dir) => {
      if (len < 1) return;
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    if (len <= 1 || paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [len, paused]);

  if (!len) return null;

  return (
    <div
      className={styles.sliderRoot}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Workshop photos"
    >
      <div className={styles.sliderViewport}>
        {images.map((src, i) => (
          <div
            key={src}
            className={`${styles.sliderSlide} ${i === index ? styles.sliderSlideActive : ""}`}
            aria-hidden={i !== index}
          >
            <img
              className={styles.sliderImage}
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {len > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => go(1)}
            aria-label="Next image"
          >
            ›
          </button>
          <div
            className={styles.dots}
            role="tablist"
            aria-label="Slide indicators"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Image ${i + 1} of ${len}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function SchoolImpact() {
  const { impact } = useSiteContent();

  if (!impact) return null;

  const sliderImages = impact.sliderImages ?? [];
  const cards = impact.cards ?? [];

  return (
    <div
      className={`${styles.page} ${Style1.padding_impact_style}`}
      id="impact"
    >
      <ImpactImageSlider images={sliderImages} />

      <section className={styles.story} aria-labelledby="global-impact-story">
        <div
          className={`${styles.storyGrid} ${Style1.impact_graph_map_container}`}
        >
          <div className={Style1.padding_manage_style}>
            {impact.globalStoryHeading ? (
              <h2
                className={`${styles.storyHeading} ${Style1.text_align_center}`}
                id="global-impact-story"
              >
                {impact.globalStoryHeading}
              </h2>
            ) : null}
            {impact.globalStoryBody ? (
              <p className={styles.storyBody}>{impact.globalStoryBody}</p>
            ) : null}
          </div>

          {/* {impact.worldMapImagePath ? (
            
            <div className={`${styles.mapWrap} ${Style1.map_edit_override}`}>
              <img src={impact.worldMapImagePath} alt="" />
            </div>
          ) : null} */}

          <div className={Style1.global_image_section}>
            <GlobalMap />
          </div>
        </div>
        
      </section>

      <section
        className={styles.workshops}
        aria-labelledby="workshop-section-label"
      >
        {impact.workshopSectionLabel ? (
          <h2 className={styles.workshopsLabel} id="workshop-section-label">
            {impact.workshopSectionLabel}
          </h2>
        ) : null}
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Fragment key={`${card.title}-${card.date}`}>
              <WorkshopCard
                card={card}
                learnMorePath={impact.workshopLearnMorePath}
              />
              {i === 1 &&
              impact.ctaBannerHeading &&
              impact.ctaBannerButtonText &&
              impact.ctaBannerButtonPath ? (
                <CTABanner
                  className={Style1.background_change_color}
                  heading={impact.ctaBannerHeading}
                  buttonText={impact.ctaBannerButtonText}
                  buttonPath={impact.ctaBannerButtonPath}
                />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
