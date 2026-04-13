import { Link } from "react-router-dom";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolChangemaker.module.css";
import Style1 from "../../components/costom_css/ProductChangemaker_override.module.css";
import { ArrowRight } from "lucide-react";
import emapthy_icon from "../../add-image/empathy-logo.svg";
import rl_board_icon from "../../add-image/realboard-logo.svg";
import changemaker_icon from "../../add-image/changemaker-logo.svg";

function CtaLink({ href, className, children }) {
  if (!href) return null;
  const isExternal =
    /^https?:\/\//i.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export default function SchoolChangemaker() {
  const { changemaker: cm } = useSiteContent();

  if (!cm) return null;

  const ctaHeadingLines =
    cm.ctaSchoolHeading?.split("\n").filter(Boolean) ?? [];

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        {cm.heroBackgroundImagePath ? (
          <img
            className={`${styles.heroBg} ${Style1.heroBgOverride}`}
            src={cm.heroBackgroundImagePath}
            alt=""
          />
        ) : null}

        <div className={`${styles.heroOverlay} ${Style1.impact_overlay_style}`}>
          {/* {cm.heroImageCaption ? <p className={styles.caption}>{cm.heroImageCaption}</p> : null} */}

          <div
            className={`${styles.heroGrid} ${Style1.heroGrid_override_style}`}
          >
            <div>
              {cm.heading ? (
                <h1 className={styles.heroTitle}>{cm.heading}</h1>
              ) : null}
              {cm.body ? <p className={styles.heroBody}>{cm.body}</p> : null}
            </div>
            {cm.heroPrimaryCtaPath &&
            (ctaHeadingLines.length || cm.ctaButtonText) ? (
              <div className={styles.ctaCard}>
                {ctaHeadingLines.length ? (
                  <p className={styles.ctaSchoolHeading}>
                    {ctaHeadingLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
                {cm.ctaButtonText ? (
                  <CtaLink
                    href={cm.heroPrimaryCtaPath}
                    className={styles.btnPrimary}
                  >
                    {cm.ctaButtonText}
                  </CtaLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {cm.journeyHeading ? (
        <h2 className={styles.journeyHeading}>{cm.journeyHeading}</h2>
      ) : null}

      {cm.phases?.map((phase, phaseIndex) => {
        const phaseId = `changemaker-phase-${phaseIndex}`;
        const imageColumn = (
          <div
            className={`${styles.phaseImageWrap} ${phase.images?.length > 1 ? styles.phaseImageStack : ""}`}
          >
            {phase.images?.length
              ? phase.images.map((src) => <img key={src} src={src} alt="" />)
              : null}
            {!phase.images?.length && phase.imagePath ? (
              <img src={phase.imagePath} alt="" />
            ) : null}
          </div>
        );
        const contentColumn = (
          <div className={styles.phaseContent}>
            {phase.title ? (
              <h3 className={styles.phaseTitle} id={phaseId}>
                {phase.title}
              </h3>
            ) : null}
            {phase.intro ? (
              <p className={styles.phaseIntro}>{phase.intro}</p>
            ) : null}
            {phase.bullets?.length ? (
              <ul className={styles.bulletList}>
                {phase.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {phase.sections?.length
              ? phase.sections.map((sec) => (
                  <div key={sec.title} className={styles.sectionBlock}>
                    {sec.title ? (
                      <p className={styles.sectionTitle}>{sec.title}</p>
                    ) : null}
                    {sec.bullets?.length ? (
                      <ul className={styles.nestedList}>
                        {sec.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))
              : null}
            {phase.transitionArrowPath ? (
              <div className={styles.arrowDecor}>
                <img src={phase.transitionArrowPath} alt="" />
              </div>
            ) : null}
          </div>
        );

        return (
          <section
            key={phase.title}
            className={styles.phase}
            aria-labelledby={phaseId}
          >
            <div className={styles.phaseGrid}>
              {phaseIndex === 1 ? (
                <>
                  {contentColumn}
                  {imageColumn}
                </>
              ) : (
                <>
                  {imageColumn}
                  {contentColumn}
                </>
              )}
            </div>
          </section>
        );
      })}

      {cm.whyJourneyMattersHeading || cm.gaps?.length ? (
        <section className={styles.whySection} aria-labelledby="why-journey">
          <div className={styles.whyInner}>
            {cm.whyJourneyMattersHeading ? (
              <h2 className={styles.whyHeading} id="why-journey">
                {cm.whyJourneyMattersHeading}
              </h2>
            ) : null}
            {cm.gaps?.length ? (
              <div className={styles.gapGrid}>
                {cm.gaps.map((gap) => (
                  <article key={gap.title} className={styles.gapCard}>
                    {gap.title ? (
                      <h3 className={styles.gapTitle}>{gap.title}</h3>
                    ) : null}
                    {gap.description ? (
                      <p className={styles.gapDesc}>{gap.description}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <footer className={styles.closing}>
        {cm.closingHeading ? (
          <h2 className={styles.closingHeading}>{cm.closingHeading}</h2>
        ) : null}
        {cm.closingSubtext ? (
          <p className={styles.closingSub}>{cm.closingSubtext}</p>
        ) : null}
        {cm.closingButtonText && cm.closingCtaPath ? (
          <CtaLink href={cm.closingCtaPath} className={styles.btnOutline}>
            {cm.closingButtonText}
          </CtaLink>
        ) : null}
      </footer>

      <div className={Style1.education_product_container}>
        <div className={Style1.container_education_inner}>
          <div className={Style1.top_head_line_container}>
            <h2 className={Style1.section_title}>Our Educational Products</h2>
            <p className={Style1.section_subtitle_text}>
              Comprehensive tools designed to build empathy, global awareness,
              and changemaker skills through immersive educational experiences.
            </p>
          </div>

          <div className={Style1.card_container_product}>
            <div className={Style1.card_grid_product}>
              <div className={Style1.card_head_top}>
                <div className={Style1.width_flex_class}>
                  <img
                    src="https://res.cloudinary.com/dexw6sglh/image/upload/q_auto/f_auto/v1771840605/reallives-logo_v5cdkc.png"
                    alt=""
                  />
                </div>

                <h3 className={Style1.product_title}>RealLives Simulation</h3>
              </div>

              <div className={Style1.info_container_card_bottom}>
                <p className={Style1.description_card_paragarph}>
                  Experience life from birth to death in different countries and
                  circumstances. Make decisions that shape your virtual life
                  while learning about global inequalities and cultural
                  differences.
                </p>

                <div className={Style1.product_features}>
                  <div className={Style1.product_capsule_box}>
                    Life Simulation
                  </div>
                  <div className={Style1.product_capsule_box}>
                    Cultural Awareness
                  </div>
                </div>

                <div className={Style1.product_link_arrow}>
                  Learn More <ArrowRight className={Style1.arrow_icon} />
                </div>
              </div>
            </div>

            <div className={Style1.card_grid_product}>
              <div className={Style1.card_head_top}>
                <div className={Style1.width_flex_class}>
                  <img src={emapthy_icon} alt="" />
                </div>

                <h3 className={Style1.product_title}>Empathy Canvas</h3>
              </div>

              <div className={Style1.info_container_card_bottom}>
                <p className={Style1.description_card_paragarph}>
                  A structured reflection framework that helps students process
                  their RealLives experiences and develop deeper empathy through
                  guided self-reflection and peer discussion.
                </p>

                <div className={Style1.product_features}>
                  <div className={Style1.product_capsule_box}>
                    Reflection Tool
                  </div>
                  <div className={Style1.product_capsule_box}>
                    Empathy Building
                  </div>
                </div>

                <div className={Style1.product_link_arrow}>
                  Learn More <ArrowRight className={Style1.arrow_icon} />
                </div>
              </div>
            </div>

            <div className={Style1.card_grid_product}>
              <div className={Style1.card_head_top}>
                <div className={Style1.width_flex_class}>
                  <img src={rl_board_icon} alt="" />
                </div>

                <h3 className={Style1.product_title}>RealBoard</h3>
              </div>

              <div className={Style1.info_container_card_bottom}>
                <p className={Style1.description_card_paragarph}>
                  A safe, private social platform where students can share their
                  RealLives experiences, engage in meaningful discussions, and
                  learn from diverse perspectives in a moderated environment.
                </p>

                <div className={Style1.product_features}>
                  <div className={Style1.product_capsule_box}>
                    Social Platform
                  </div>
                  <div className={Style1.product_capsule_box}>
                    Peer Learning
                  </div>
                </div>

                <div className={Style1.product_link_arrow}>
                  Learn More <ArrowRight className={Style1.arrow_icon} />{" "}
                </div>
              </div>
            </div>

            <div
              className={`${Style1.card_grid_product} ${Style1.background_color_orange}`}
            >
              <div className={Style1.card_head_top}>
                <div className={Style1.width_flex_class}>
                  <img src={changemaker_icon} alt="" />
                </div>

                <h3 className={Style1.product_title}>ChangeMaker Index</h3>
              </div>

              <div className={Style1.info_container_card_bottom}>
                <p className={Style1.description_card_paragarph}>
                  Revolutionary assessment tool that measures 18 global
                  competencies through gameplay decisions rather than
                  self-reporting, providing authentic insights into student
                  development.
                </p>

                <div className={Style1.product_features}>
                  <div className={Style1.product_capsule_box}>
                    Assessment Tool
                  </div>
                  <div className={Style1.product_capsule_box}>
                    18 Competencies
                  </div>
                </div>

                <div className={Style1.product_link_arrow}>
                  Learn More <ArrowRight className={Style1.arrow_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style1.education_product_container}>
        <div className={Style1.container_education_inner}>
          
          <div className={Style1.top_head_line_container}>
            <h2 className={Style1.section_title}>What Educators Are Saying</h2>
            <p className={Style1.section_subtitle_text}>
              Hear from teachers and students who have transformed their
              learning experiences with RealLives educational tools.
            </p>
          </div>

          <div className={Style1.cards_educatores_saying}>

            <div className={Style1.label_inner_educatores}>
              <div className={Style1.quote_icon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C8.686 8 6 10.686 6 14c0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3zm14 0c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <p className={Style1.label_p_style}>
                "I just played my first character to the end, and the experience
                is incredible. I was in tears at the end"
              </p>

              <h1>David Laborie</h1>
            </div>

            <div className={Style1.label_inner_educatores}>
              <div className={Style1.quote_icon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C8.686 8 6 10.686 6 14c0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3zm14 0c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <p className={Style1.label_p_style}>
                "No curriculum has moved our students the way RealLives has. It
                is a very effective medium for teaching about the human
                experience in any country and culture in the world.”
              </p>

              <h1>Amanda Levin</h1>
            </div>

            <div className={Style1.label_inner_educatores}>

              <div className={Style1.quote_icon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C8.686 8 6 10.686 6 14c0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3zm14 0c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.657 0 3 1.343 3 3s-1.343 3-3 3c-4.971 0-9-4.029-9-9 0-6.627 5.373-12 12-12v3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <p className={Style1.label_p_style}>
                “Every middle and high school should have this fascinating
                program. It’s a life simulation that enables students to live
                one of billions of lives in any country in the world. With each
                passing year."
              </p>

              <h1>Sydney Smith</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
