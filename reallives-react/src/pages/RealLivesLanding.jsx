import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { landingContent } from "@content/landing";
import Carousel from "@components/common/Carousel/Carousel";
import styles from "./RealLivesLanding.module.css";
import styles1 from "../components/costom_css/realliveslanding.coustome.module.css";
import logo_rl from "../add-image/logo.svg";
import rl_mid_logo from "../add-image/mid-rl-logo.svg";
import card_logo_university from "../add-image/logo-card-rl.svg";
import card_banner_1 from "../add-image/card_banner_1.png";
import albany_university_logo_1 from "../add-image/albany-universty-logo.svg";
import uppsala_university_logo_1 from "../add-image/Uppsala_University_logo-card.svg";
import second_research_paper_1 from "../add-image/second_research_paper.png";
import therd_research_paper_1 from "../add-image/therd-research-paper.png";
import mumbai_workshop_1 from "../add-image/mumbai_workshop_1.png";
import eth_workshop_1 from "../add-image/school-3-image-slider.png";
import kyungeeh_university_workshop_1 from "../add-image/3-rd-workshop-2.png";
import navamindradhiraj_university_workshop_1 from "../add-image/second-workshop-2.png";
import banner_home_5_card from "../add-image/banner-home-card.png";
import earth_banner_image from "../add-image/earth-banner-card.png";
import { X, MoveRight } from "lucide-react";
// import { X } from "lucide-react";

export default function RealLivesLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const useTypewriter = (texts, speed = 80, delay = 1200) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      if (!texts || texts.length === 0) return;

      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [charIndex, textIndex, texts, speed, delay]);

    return displayText;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const { carousel, entryCards, ctas, footer } = landingContent;
  const logoSrc = footer?.logo ?? "";

  return (
    <div className={styles.page}>
      <header className={`${styles.header} `}>
        <div
          className={`${styles.headerInner} ${styles1.header_transparent_background}`}
        >
          <Link to="/" className={styles.logoLink} aria-label="RealLives Home">
            {logoSrc ? (
              <img
                src={logo_rl}
                alt="RealLives"
                className={`${styles.logoImg} ${styles1.rl_logo}`}
              />
            ) : (
              <span className={styles.logoFallback}>RealLives</span>
            )}
          </Link>

          <div className={styles.headerCtas}>
            <Link
              to={ctas.buyLicense.path}
              className={`${styles.ctaBtn} ${styles1.home_btn_event}`}
              aria-label="Buy License"
            >
              Buy License
            </Link>
            <a
              href={ctas.login.url}
              className={`${styles.ctaBtn} ${styles1.home_btn_event}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <section className={styles.carouselSection}>
        <div className={styles1.container_new_home}>
          <div
            className={`${styles1.outer_first_home_new} ${currentIndex === 0 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <div className={styles1.manrope_text}>RealLives Builds</div>
              <div className={styles1.manrope_text}>21st Century Skills</div>
            </div>

            <div className={styles1.inner_mid_home_label}>
              <div className={styles1.icon_rl_mid}>
                <img src={rl_mid_logo} alt="RealLives Logo" />
              </div>
            </div>
          </div>

          {/* <div className={`${styles1.outer_first_home_new} ${styles1.card_none}`} >

            

            <div className={styles1.inner_top_home_label}>
              <div className={styles1.manrope_text}>RealLives Builds</div>
              <div className={styles1.manrope_text}>21st Century Skills</div>
            </div>

            <div className={styles1.inner_mid_home_label}>
              <div className={styles1.icon_rl_mid}>
                <img src={rl_mid_logo} alt="RealLives Logo  " />
              </div>
            </div>


          </div> */}

          {/* <div className={`${styles1.pdf_container_home_new} ${styles1.card_none}`} >
            <div className={styles1.inner_top_home_label}>
              <div className={styles1.manrope_text}>Powerful Learning,</div>
              <div className={styles1.manrope_text}>
                Proven by Global Research
              </div>
            </div>

            <div className={styles1.container_label_pdf_structure}>
              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img src={card_logo_university} alt="University Logo" />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      Korea University
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={card_banner_1} alt="" />
                </div>
              </div>

              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img
                        className={styles1.image_fit}
                        src={albany_university_logo_1}
                        alt="Albany University Logo"
                      />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      University at Albany
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={second_research_paper_1} alt="" />
                </div>
              </div>

              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img
                        className={styles1.image_fit}
                        src={uppsala_university_logo_1}
                        alt="Uppsala University Logo"
                      />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      Uppsala University
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={therd_research_paper_1} alt="" />
                </div>
              </div>
            </div>
          </div> */}

          <div
            className={` ${styles1.pdf_container_home_new}  ${currentIndex === 1 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <div className={styles1.manrope_text}>Powerful Learning,</div>
              <div className={styles1.manrope_text}>
                Proven by Global Research
              </div>
            </div>

            <div className={styles1.container_label_pdf_structure}>
              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img src={card_logo_university} alt="University Logo" />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      Korea University
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={card_banner_1} alt="" />
                </div>
              </div>

              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img
                        className={styles1.image_fit}
                        src={albany_university_logo_1}
                        alt="Albany University Logo"
                      />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      University at Albany
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={second_research_paper_1} alt="" />
                </div>
              </div>

              <div className={styles1.label_card_new_str}>
                <div className={styles1.head_view_logo_pdf}>
                  <span className={styles1.icon_span_label_str}>
                    <div className={styles1.icon_pdf_logo}>
                      <img
                        className={styles1.image_fit}
                        src={uppsala_university_logo_1}
                        alt="Uppsala University Logo"
                      />
                    </div>

                    <p
                      className={`${styles1.manrope_text} ${styles1.title_card_text}`}
                    >
                      Uppsala University
                    </p>
                  </span>

                  <Link
                    to="/reallives/school/research"
                    className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
                  >
                    View Paper
                  </Link>
                </div>

                <div className={styles1.pdf_img_viwe}>
                  <img src={therd_research_paper_1} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles1.global_impact_container} ${styles1.card_none}`} >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>Our Global Impact</p>
            </div>

            <div className={styles1.global_impact_banner_container}>
              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={mumbai_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  IIT Bombay, India
                </p>
              </div>

              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={eth_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  ETH Zürich, Switzerland
                </p>
              </div>
            </div>
          </div> */}

          <div
            className={` ${styles1.global_impact_container}  ${currentIndex === 2 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>Our Global Impact</p>
            </div>

            <div className={styles1.global_impact_banner_container}>
              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={mumbai_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  IIT Bombay, India
                </p>
              </div>

              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={eth_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  ETH Zürich, Switzerland
                </p>
              </div>
            </div>
          </div>

          {/* <div className={`${styles1.global_impact_container} ${styles1.card_none}`} >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>RealLives Worldwide Impact</p>
            </div>

            <div className={styles1.global_impact_banner_container}>
              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={kyungeeh_university_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  Kyunghee University, Korea
                </p>
              </div>

              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={navamindradhiraj_university_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  Navamindradhiraj University, Thailand
                </p>
              </div>
            </div>
          </div> */}

          <div
            className={` ${styles1.global_impact_container} ${currentIndex === 3 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>RealLives Worldwide Impact</p>
            </div>

            <div className={styles1.global_impact_banner_container}>
              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={kyungeeh_university_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  Kyunghee University, Korea
                </p>
              </div>

              <div className={styles1.image_banner_label_box_new}>
                <div className={styles1.outer_wrapper_image}>
                  <img
                    className={styles1.image_cover_style}
                    src={navamindradhiraj_university_workshop_1}
                    alt=""
                  />
                </div>

                <p
                  className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
                >
                  Navamindradhiraj University, Thailand
                </p>
              </div>
            </div>
          </div>

          {/* <div className={`${styles1.global_impact_container} ${styles1.card_none}`}>
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>
                The RealLives Learning Ecosystem
              </p>
            </div>

            <div className={styles1.image_banner_full_new}>
              <img className="" src={banner_home_5_card} alt="" />
            </div>
          </div> */}

          <div
            className={`${styles1.global_impact_container} ${currentIndex === 4 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>
                The RealLives Learning Ecosystem
              </p>
            </div>

            <div className={styles1.image_banner_full_new}>
              <img src={banner_home_5_card} alt="" />
            </div>
          </div>

          {/* <div className={`${styles1.global_impact_container_last} ${styles1.card_none}`} >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>
                Live Billions of Lives <br />
                Across the World
              </p>
            </div>

            <div className={styles1.image_banner_full_new}>
              <img
                className={styles1.earth_style_hight}
                src={earth_banner_image}
                alt=""
              />

              <span className={styles1.overflay_data_text_image}>
                <p>
                  Every one gets a unique life story, shaped by <br />
                  real-world data and statistics from over 193 countries. <br />
                  No two journeys are ever the same.
                </p>
              </span>
            </div>
          </div> */}

          <div
            className={`${styles1.global_impact_container_last}  ${currentIndex === 5 ? styles1.slide_active : styles1.card_none}`}
          >
            <div className={styles1.inner_top_home_label}>
              <p className={styles1.manrope_text}>
                Live Billions of Lives <br />
                Across the World
              </p>
            </div>

            <div className={styles1.image_banner_full_new}>
              <img
                className={styles1.earth_style_hight}
                src={earth_banner_image}
                alt=""
              />

              <span className={styles1.overflay_data_text_image}>
                <p>
                  Every one gets a unique life story, shaped by <br />
                  real-world data and statistics from over 193 countries. <br />
                  No two journeys are ever the same.
                </p>
              </span>
            </div>
          </div>

          <div className={styles1.inner_bottom_home_label}>
            {[...Array(total)].map((_, index) => (
              <div
                key={index}
                className={styles1.label_up_fill}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  key={currentIndex} // 🔥 animation reset trick
                  className={`${styles1.fill}
              ${index === currentIndex ? styles1.active : ""}
              ${index < currentIndex ? styles1.filled : ""}
            `}
                ></div>
              </div>
            ))}

            <button
              className={`${styles1.step_into_stories_btn} ${styles1.manrope_text}`}
              onClick={() => setIsModalOpen(true)}
            >
              Step into RealLives Stories <MoveRight />
            </button>

            {/* <button className={`${styles1.step_into_stories_btn} ${styles1.manrope_text}`}>Step into RealLives Stories <MoveRight /></button> */}
          </div>
        </div>

        {/* <Carousel slides={carousel.slides} /> */}

        {isModalOpen && (
          <div
            className={styles1.modal_overlay}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className={styles1.modal_content}
              onClick={(e) => e.stopPropagation()}
            >
             
              <button
                className={styles1.modal_close}
                onClick={() => setIsModalOpen(false)}
              >
                <X size={22} />
              </button>

              <Carousel slides={carousel.slides} />
            </div>
          </div>
        )}
      </section>

      {/* section_second_style */}

      <section
        className={`${styles.cardsSection} ${styles1.section_second_style}`}
        aria-label="Explore sub-sites"
      >
        <p className={`${styles1.who_i_am_text} ${styles1.noto_sans_text}`}>
          Who am I?
        </p>

        <div
          className={`${styles.cardsContainer} ${styles1.cards_container_outer}`}
        >
          {entryCards.map((card, index) => {
            const texts = Array.isArray(card.title_robot)
              ? card.title_robot
              : [card.title_robot];
            const typedText = useTypewriter(texts);
            return (
              <Link
                key={card.path}
                to={card.path}
                className={`${styles.entryCard} ${styles1.card_style_overide}`}
              >
                {" "}
                <h3 className={styles1.title_text_cards}>{card.label}</h3>{" "}
                <p
                  className={`${styles.entryDescription} ${styles1.description_text_title}`}
                >
                  {" "}
                  <span className={styles1.robot_text}>{typedText}</span>{" "}
                </p>{" "}
                <p className={styles1.title_text_number}>{card.description}</p>{" "}
                <button className={styles1.explor_btn_new}>
                  Explore for School <MoveRight />
                  {/* <span class="material-symbols-outlined"> arrow_forward </span> */}
                </button>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
