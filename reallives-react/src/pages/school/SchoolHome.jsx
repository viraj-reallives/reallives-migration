import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@hooks/useSiteContent";
import CoreVisionCards from "@components/common/CoreVision/CoreVisionCards";
import styles from "./SchoolHome.module.css";
import Style1 from "../../components/costom_css/schoolhome_overide.module.css";

function CtaLink({ to, className, children }) {
  return (
    <Link to={to} className={className}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function WhoCanUsePanel({ supportingText, images, isActive = true }) {
  const videoRef = useRef(null);
  const videoUrl = images?.heroVideoUrl;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!isActive) {
      v.pause();
      return;
    }
    void v.play().catch(() => {});
  }, [isActive, videoUrl]);

  if (!supportingText || !images) return null;

  // review section function start

  const reviews = [
    {
      name: "Alex",
      title: "Interactive Learning",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      stars: "★★",
      review:
        "Amazing platform with immersive storytelling and engaging educational experiences.",
    },

    {
      name: "Sophia",
      title: "Creative Experience",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: "★★★",
      review:
        "The design and animations create a beautiful and emotional learning journey.",
    },

    {
      name: "Daniel",
      title: "Global Perspective",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      stars: "★★★★",
      review:
        "A unique way to understand cultures and real-world challenges interactively.",
    },

    {
      name: "Emma",
      title: "Modern Education",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: "★★★★★",
      review:
        "Smooth interface, cinematic visuals, and meaningful educational experiences.",
    },

    {
      name: "Liam",
      title: "Human Stories",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
       stars: "★★★",
      review:
        "This platform builds empathy through realistic and emotional simulations.",
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

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
    sliderRef.current.dataset.hover = "true";
  };

  const handleMouseLeave = (sliderRef) => {
    sliderRef.current.dataset.hover = "false";
  };

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    const stopSlider1 = startAutoScroll(slider1, "left");

    const stopSlider2 = startAutoScroll(slider2, "right");

    return () => {
      stopSlider1();
      stopSlider2();
    };
  }, []);

  // review section function end

  return (
    <div className={`${styles.panel} ${Style1.padding_pannel_0}`}>
      <div className={`${styles.hero} ${Style1.video_style_override}`}>
        {images.heroVideoUrl ? (
          <video
            ref={videoRef}
            className={`${styles.video} ${Style1.video_inner_fit_override}`}
            src={images.heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : null}
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>
              {supportingText.whySchoolsHeading}
            </h2>
            {supportingText.whySchoolsBullets?.map((item, i) => (
              <p key={`${item.title}-${i}`} className={styles.paragraph}>
                <span className={styles.leadStrong}>{item.title}</span>
                {item.body}
              </p>
            ))}
          </section>
        </div>
        {images.illustration ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.illustration} alt="" />
          </div>
        ) : null}
      </div>

      <div
        className={`${styles.splitSection} ${styles.splitReverse} ${Style1.container_work_in_classroome}`}
      >
        {images.classroomDiagram ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.classroomDiagram} alt="" />
          </div>
        ) : null}
        <div>
          <h2 className={styles.blockTitle}>
            {supportingText.howItWorksHeading}
          </h2>
          <p className={styles.subheading}>
            {supportingText.howItWorksSubheading}
          </p>
          {supportingText.howItWorksParagraphs?.map((row) => (
            <p key={row.label} className={styles.paragraph}>
              <span className={styles.leadStrong}>{row.label}</span> {row.body}
            </p>
          ))}
        </div>
      </div>

      <section
        className={`${styles.benefitsSection} ${Style1.educational_benifit}`}
      >
        <div className={styles.benefitsInner}>
          <h2 className={styles.benefitsHeading}>
            {supportingText.educationalBenefitsHeading}
          </h2>
          {supportingText.educationalBenefits?.map((item) => (
            <p key={item.title} className={styles.paragraph}>
              <span className={styles.leadStrong}>{item.title}</span>
              {item.body}
            </p>
          ))}
        </div>
      </section>

      <div
        className={`${styles.gettingStarted} ${Style1.container_work_in_classroome}`}
      >
        <div>
          <h2 className={styles.blockTitle}>
            {supportingText.gettingStartedHeading}
          </h2>
          <p className={styles.subheading}>
            {supportingText.gettingStartedSubheading}
          </p>
          {supportingText.gettingStartedParagraphs?.map((text) => (
            <p key={text.slice(0, 48)} className={styles.paragraph}>
              {text}
            </p>
          ))}
          {supportingText.gettingStartedCtaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink
                to={supportingText.gettingStartedCtaPath}
                className={`${styles.ctaButton} ${Style1.get_started_btn}`}
              >
                {supportingText.gettingStartedCtaText || "Get Started"}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.gettingStartedIllustration ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.gettingStartedIllustration} alt="" />
          </div>
        ) : null}
      </div>

      <div className={Style1.main}>
      
        <div className={Style1.headingBox}>
          <p className={Style1.smallHeading}>GLOBAL COMMUNITY</p>

          <h1 className={Style1.heading}>
            Reviews By
            <br />
            Global Students
          </h1>
        </div>

        <div ref={slider1}  data-hover="false" onMouseEnter={() => handleMouseEnter(slider1)} onMouseLeave={() => handleMouseLeave(slider1)}className={Style1.slider} >
          <div className={Style1.cardInner_grid_review}>
            {duplicatedReviews.map((item, index) => (
              <div className={Style1.card} key={index}>
                <div>
          

                  <div className={Style1.userBox}>
                    <img src={item.image} alt="" className={Style1.userImage} />

                    <div>
                      <h3 className={Style1.userName}>{item.name}</h3>

                      <p className={Style1.userTitle}>{item.title}</p>
                    </div>
                  </div>

                  <div className={Style1.line} />

                  {/* <div className={Style1.stars}>★★★★</div> */}
                  <div className={Style1.stars}>{item.stars}</div>

                  <p className={Style1.reviewText}>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div  ref={slider2} data-hover="false"  onMouseEnter={() => handleMouseEnter(slider2)}onMouseLeave={() => handleMouseLeave(slider2)} className={Style1.slider}  >
          <div className={Style1.cardInner_grid_review}>
            {duplicatedReviews.map((item, index) => (
              <div className={Style1.card} key={index}>
                <div>
                
                  <div className={Style1.userBox}>
                    <img src={item.image} alt="" className={Style1.userImage} />

                    <div>
                      <h3 className={Style1.userName}>{item.name}</h3>

                      <p className={Style1.userTitle}>{item.title}</p>
                    </div>
                  </div>

                  <div className={Style1.line} />
                  
                  <div className={Style1.stars}>{item.stars}</div>

                  {/* <div className={Style1.stars}>★★★★★</div> */}

                  <p className={Style1.reviewText}>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function SkillsPanel({ data, images }) {
  if (!data || !images) return null;

  return (
    <div className={styles.panel}>
      {images.empathy21CenturyBanner ? (
        <div className={`${styles.bannerFull} ${Style1.banner_21_skills}`}>
          <img src={images.empathy21CenturyBanner} alt="" />
        </div>
      ) : null}

      <div className={`${styles.gridTwo} ${Style1.gridtwo_override_style}`}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>
              {data.introColumns.left.title}
            </h2>
            {data.introColumns.left.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </section>
          <section>
            <h2 className={styles.blockTitle}>
              {data.introColumns.right.title}
            </h2>
            {data.introColumns.right.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </section>
        </div>
        {images.supportedByRealLives ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.supportedByRealLives} alt="" />
          </div>
        ) : null}
      </div>

      <div className={`${styles.splitSection} ${Style1.container_work_2}`}>
        <div>
          <h2 className={styles.blockTitle}>{data.experienceBlock.title}</h2>
          <p className={styles.paragraph}>{data.experienceBlock.lead}</p>
          <p className={styles.leadStrong}>
            {data.experienceBlock.listHeading}
          </p>
          <ul className={styles.list}>
            {data.experienceBlock.listItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {images.experienceAuthentic ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.experienceAuthentic} alt="" />
          </div>
        ) : null}
      </div>

      <div className={`${styles.gettingStarted} ${styles.splitReverse}`}>
        {images.empathyCanvasIllustration ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.empathyCanvasIllustration} alt="" />
          </div>
        ) : null}

        <div>
          <h2 className={styles.blockTitle}>{data.empathyCanvas.title}</h2>
          <p className={styles.subheading}>{data.empathyCanvas.subtitle}</p>
          {data.empathyCanvas.steps?.map((step) => (
            <p key={step.label} className={styles.stepBlock}>
              <span className={styles.stepLabel}>{step.label}</span> {step.body}
            </p>
          ))}
          {data.empathyCanvas.learnMorePath ? (
            <div className={styles.ctaRow}>
              <CtaLink
                to={data.empathyCanvas.learnMorePath}
                className={`${styles.ctaButton} ${styles.ctaSecondary} ${Style1.get_started_btn}`}
              >
                {data.empathyCanvas.learnMoreText}
              </CtaLink>
            </div>
          ) : null}
        </div>
      </div>

      <div className={`${styles.gettingStarted} ${Style1.container_work_2}`}>
        <div>
          <h2 className={styles.blockTitle}>{data.closingCta.title}</h2>
          <p className={styles.paragraph}>{data.closingCta.body}</p>
          {data.closingCta.ctaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink
                to={data.closingCta.ctaPath}
                className={`${styles.ctaButton} ${Style1.get_started_btn}`}
              >
                {data.closingCta.ctaText}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.readyToTransform ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.readyToTransform} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SdgPanel({ data, images }) {
  if (!data || !images) return null;

  const videoUrl = images.sdgImpactVideo;

  return (
    <div className={`${styles.panel} `}>
      <div className={`${styles.sdgHero} ${Style1.sdg_tab_override_style}`}>
        {images.sdgBackground ? (
          <img className={styles.sdgHeroBg} src={images.sdgBackground} alt="" />
        ) : null}
        <div
          className={`${styles.sdgHeroOverlay} ${Style1.sdgro_custome_conatiner}`}
        >
          <h2>{data.sdgHeroOverlay.title}</h2>
          {data.sdgHeroOverlay.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>

      <div className={`${styles.gridTwo}  ${Style1.gridtwo_override_style}`}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>{data.sdgMain.title}</h2>
            {data.sdgMain.intro ? (
              <p className={styles.paragraph}>{data.sdgMain.intro}</p>
            ) : null}
            {data.sdgMain.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
            {data.sdgMain.actionTagline ? (
              <p className={styles.actionTagline}>
                {data.sdgMain.actionTagline}
              </p>
            ) : null}
          </section>
        </div>
        {images.sdgEarth ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.sdgEarth} alt="" />
          </div>
        ) : null}
      </div>

      {/* container_work_in_classroome */}

      <section
        className={`${styles.sdgImpact} ${Style1.container_work_in_classroome}`}
      >
        <h2 className={styles.sdgImpactTitle}>{data.sdgImpact.title}</h2>
        {videoUrl ? (
          <div className={styles.videoFrame}>
            <video src={videoUrl} autoPlay muted loop playsInline />

            <div className={`${styles.sdgGroups} ${Style1.sdg_grops_style} `}>
              {data.sdgImpact.relevanceGroups?.map((group) => (
                <div key={group.label}>
                  <p
                    className={`${styles.sdgGroupLabel} ${Style1.color_white} ${Style1.font_imapct_p}`}
                  >
                    {group.label}
                  </p>

                  <div
                    className={`${styles.sdgIconGrid} ${Style1.sdg_icon_custom_grid}`}
                  >
                    {group.goalImagePaths?.map((src) => (
                      <img
                        className={Style1.sdg_logo_style}
                        key={src}
                        src={src}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className={`${styles.splitSection} ${Style1.container_work_2}`}>
        <div>
          <h2 className={styles.blockTitle}>{data.awarenessToAction.title}</h2>
          <p className={styles.mutedLead}>{data.awarenessToAction.lead}</p>
          <ul className={styles.list}>
            {data.awarenessToAction.listItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {images.sdgAnnouncement ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.sdgAnnouncement} alt="" />
          </div>
        ) : null}
      </div>

      <section
        className={`${styles.benefitsSection} ${Style1.educational_benifit}`}
      >
        <div className={styles.benefitsInner}>
          <h2 className={styles.benefitsHeading}>
            {data.beyondClassroom.title}
          </h2>
          <ul className={styles.list}>
            {data.beyondClassroom.listItems?.map((item) => (
              <li key={item}>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`${styles.gettingStarted} ${Style1.container_work_2}`}>
        <div>
          <h2 className={styles.blockTitle}>{data.closingCta.title}</h2>
          <p className={styles.paragraph}>{data.closingCta.body}</p>
          {data.closingCta.ctaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink
                to={data.closingCta.ctaPath}
                className={`${styles.ctaButton} ${styles.ctaSdg} ${Style1.get_started_btn}`}
              >
                {data.closingCta.ctaText}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.sdgGlobalAction ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={images.sdgGlobalAction} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CoreVisionPanel({ data }) {
  if (!data?.coreVisionHeading) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.coreVisionShell}>
        <h2 className={styles.coreVisionTitle}>{data.coreVisionHeading}</h2>
        <p className={styles.coreVisionBody}>{data.coreVisionBody}</p>
        <CoreVisionCards compact />
      </div>
    </div>
  );
}

export default function SchoolHome() {
  const { hero } = useSiteContent();
  const [activeTab, setActiveTab] = useState(0);

  if (!hero) return null;

  const labels = hero.homeTabLabels || [];
  const extra = hero.homeAdditionalTabs || [];
  const supportingText = hero.supportingText;
  const images = hero.images;

  return (
    <div className={styles.page}>
      {labels.length > 0 ? (
        <div
          className={`${styles.tabBar} ${Style1.tabBar_override_style}`}
          role="tablist"
          aria-label="Home sections"
        >
          {labels.map((label, index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`${styles.tab} ${activeTab === index ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.homeTabPanels}>
        <div role="tabpanel" id="home-section-panel-0" hidden={activeTab !== 0}>
          <WhoCanUsePanel
            supportingText={supportingText}
            images={images}
            isActive={activeTab === 0}
          />
        </div>

        <div role="tabpanel" id="home-section-panel-1" hidden={activeTab !== 1}>
          {extra[0] ? <SkillsPanel data={extra[0]} images={images} /> : null}
        </div>

        <div role="tabpanel" id="home-section-panel-2" hidden={activeTab !== 2}>
          {extra[1] ? <SdgPanel data={extra[1]} images={images} /> : null}
        </div>

        <div role="tabpanel" id="home-section-panel-3" hidden={activeTab !== 3}>
          {extra[2] ? <CoreVisionPanel data={extra[2]} /> : null}
        </div>
      </div>
    </div>
  );
}
