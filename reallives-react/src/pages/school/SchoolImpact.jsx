import { Fragment, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '@components/common/CTABanner/CTABanner';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolImpact.module.css';
import Style1 from "../../components/costom_css/SchoolImpact_override.module.css"

const AUTO_MS = 5000;

function ImpactImageSlider({ images, label }) {

   const impact_home = [
    {
      id: 1,
      card_title: "ETH Zurich Workshop",
      card_date: "27 / 06 / 2018",
      imgURL:
        "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/home-page/final-business-with-purpose.png",
      university_text: "ETH University Zurich, Switzerland",
      particepent_title: "Department - Institute of Molecular Systems Biology",
      collaboration_text: "In collaboration with:",
      name_card: "Prof. Dr. Ernst Hafen",
      number_title: 120,
      skill_devloped: "Skills Developed",
      teamwork_title: "Teamwork",
      intergrity_title: "Integrity and Work Ethics",
      teamwork_bg: "#f9c1a5",
      intergrity_bg: "#caecf1",
      link: "/our-impact/eth-university",
    },
    {
      id: 2,
      card_title: "Navamindradhiraj University Workshop",
      card_date: "20 / 09 / 2025",
      imgURL:
        "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/second-workshop.png",
      university_text: "Navamindradhiraj University, Bangkok",
      particepent_title: "Department - General Education",
      collaboration_text: "In collaboration with:",
      name_card: "Lecturer Krittanan Pensirisomboon",
      number_title: 150,
      skill_devloped: "Skills Developed",
      teamwork_title: "21st Century Skills",
      intergrity_title: "Business Acumen",
      teamwork_bg: "#d4e8eb",
      intergrity_bg: "#dff6c2",
      link: "/our-impact/navamindradhiraj-university",
    },
    {
      id: 3,
      card_title: "KyungHee University SDG Workshop",
      card_date: "29 / 09 / 2025",
      imgURL:
        "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/3-rd-workshop-first-image.jpg",
      university_text: "Kyunghee University, Korea",
      particepent_title: "Department - Social Sciences",
      collaboration_text: "In collaboration with:",
      name_card: "Prof. Dr. Utak Chang",
      number_title: 30,
      skill_devloped: "Skills Developed",
      teamwork_title: "SDG Awareness",
      intergrity_title: "ChangeMaking",
      teamwork_bg: "#f7b4b4",
      intergrity_bg: "#ffef9f ",
      Used_Tools: "Empathy Canvas",
      link: "/our-impact/kyunghee-university",
    },

    {
      id: 4,
      card_title: "IIT Bombay Exploring SDG 1 through Empathy Workshop",
      card_date: "07 / 11 / 2024",
      imgURL:
        "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/home-page/fourth_workshop-1.jpg",
      university_text: "IIT Bombay, India",
      particepent_title: "Department - IDC School of Design",
      collaboration_text: "In collaboration with:",
      name_card: "India HCI 2024",
      number_title: 30,
      skill_devloped: "Skills Developed",
      teamwork_title: "SDG Awareness",
      intergrity_title: "Social Entrepreneurship",
      teamwork_bg: "#f7b4b4 ",
      intergrity_bg: "#c4c1ff",
      link: "/our-impact/iit-bombay",
    },

    {
      id: 5,
      card_title: "Chulalongkorn University Workshop",
      card_date: "27/04/2024",
      imgURL:
        "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop.png",
      university_text: "Chulalongkorn University, Bangkok, Thailand",
      particepent_title: "Department - Faculty of Education / BAScii Program",
      collaboration_text: "In collaboration with:",
      name_card: "Dr. Sawaros Thanapornsangsuth",
      number_title: 200,
      skill_devloped: "Skills Developed",
      empathy_title: "Empathy",
      teamwork_title: "SDG Awareness",
      intergrity_title: "Critical Thinking",
      empathy_bg: "#F4B3FF ",
      teamwork_bg: "#f7b4b4 ",
      intergrity_bg: "#FFE396",
        link: "/our-impact/Chulalongkorn-University",

    },
  ];

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
      aria-label={label || 'Workshop photos'}
    >
      <div className={styles.sliderViewport}>
        {label ? <p className={styles.sliderLabel}>{label}</p> : null}
        {images.map((src, i) => (
          <div
            key={src}
            className={`${styles.sliderSlide} ${i === index ? styles.sliderSlideActive : ''}`}
            aria-hidden={i !== index}
          >
            <img className={styles.sliderImage} src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
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
          <div className={styles.dots} role="tablist" aria-label="Slide indicators">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Image ${i + 1} of ${len}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function WorkshopCard({ card, learnMorePath }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        {card.title ? <h2 className={styles.cardTitle}>{card.title}</h2> : null}
        {card.date ? <p className={styles.cardDate}>{card.date}</p> : null}
      </div>
      <div className={styles.cardBody}>
        {card.imagePath ? (
          <div className={styles.cardImage}>
            <img src={card.imagePath} alt="" />
          </div>
        ) : null}
        <div>
          {card.university || card.department ? (
            <div className={styles.metaBlock}>
              {card.university ? <p className={styles.university}>{card.university}</p> : null}
              {card.department ? <p className={styles.department}>{card.department}</p> : null}
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

          {learnMorePath && card.learnMoreText ? (
            <Link to={learnMorePath} className={styles.learnMore}>
              {card.learnMoreText}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function SchoolImpact() {
  const { impact } = useSiteContent();

  if (!impact) return null;

  const sliderImages = impact.sliderImages ?? [];
  const cards = impact.cards ?? [];

  return (
    <div className={styles.page} id="impact">
      <ImpactImageSlider images={sliderImages} label={impact.sectionTitle} />

      <section className={styles.story} aria-labelledby="global-impact-story">

        <div className={`${styles.storyGrid} ${Style1.impact_graph_map_container}`}>

          <div className={Style1.padding_manage_style}>
            {impact.globalStoryHeading ? (
              <h2 className={styles.storyHeading} id="global-impact-story">
                {impact.globalStoryHeading}
              </h2>
            ) : null}
            {impact.globalStoryBody ? <p className={styles.storyBody}>{impact.globalStoryBody}</p> : null}
          </div>
          {impact.worldMapImagePath ? (
            
            <div className={`${styles.mapWrap} ${Style1.map_edit_override}`}>
              <img src={impact.worldMapImagePath} alt="" />
            </div>
          ) : null}
        </div>

      </section>

      <section className={styles.workshops} aria-labelledby="workshop-section-label">
        {impact.workshopSectionLabel ? (
          <h2 className={styles.workshopsLabel} id="workshop-section-label">
            {impact.workshopSectionLabel}
          </h2>
        ) : null}
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Fragment key={`${card.title}-${card.date}`}>
              <WorkshopCard card={card} learnMorePath={impact.workshopLearnMorePath} />
              {i === 1 &&
              impact.ctaBannerHeading &&
              impact.ctaBannerButtonText &&
              impact.ctaBannerButtonPath ? (
                <CTABanner
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
