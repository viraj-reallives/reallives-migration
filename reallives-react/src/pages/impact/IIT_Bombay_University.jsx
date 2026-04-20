import React from "react";
import Style1 from "../../pages/impact/IIT_Bombay_University.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import fourth_slide_logo from "../../add-image/iit_bom_rl.svg";
import sdg_logo_1 from "../../add-image/E-WEB-Goal-01.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const IIT_Bombay_University = () => {
  const location = useLocation();

  const isSchoolPath = location.pathname.includes("/school");

  const dynamicBackPath = isSchoolPath
    ? "/reallives/school/impact"
    : "/reallives/university/impact";

  const goToExternal = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  return (
    <div className={`${Style1.first_university_container} `}>
      <span className={Style1.section_flex_button}>
        
        <Link className={Style1.btn_top_slider} to={dynamicBackPath}>
          Impact Home
        </Link>

        <FaAngleRight />

        {/* <span class="material-symbols-outlined icon-arrwo-left margin-top-5">
                arrow_forward_ios
              </span> */}

        <button className={`${Style1.btn_top_slider} ${Style1.active_color}`}>
          IIT Bombay India
        </button>
      </span>

      <div className={Style1.slider_wrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          autoplay={false}
          speed={600}
          className={`${Style1.mySwiper} universitySlider`}
        >
          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/home-page/fourth_workshop-1.jpg"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/iit-bombay-workshop/fourth_workshop-2-min.jpg"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/iit-bombay-workshop/fourth_workshop-3-min.jpg"
              className={Style1.slider_img}
              alt="slide 2"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={Style1.content_tab_container_imapct}>
        <div className={Style1.container_logo_box_impact}>
          <img src={fourth_slide_logo} alt="" />
        </div>
      </div>

      <div className={Style1.wrapper_professior_data}>
        <span className={Style1.span_imapct_colume_2}>
          <p className={Style1.university_text_title}>IIT Bombay, India</p>
          <p className={Style1.participants_title_text}>
            Department - IDC School of Design
          </p>
        </span>

        <span className={Style1.flex_align_start}>
          <p className={Style1.participants_title_text}>
            In collaboration with:
          </p>
          <p className={Style1.university_text_title}>India HCI 2024</p>
        </span>
      </div>

      <div className={Style1.sdg_container_imapct_tab}>
        <p className={Style1.student_testimonials_title}>
          SDGs Aligned with this workshop
        </p>

        <div className={Style1.grid_sdg_card_imapct}>
          <div className={Style1.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>
        </div>
      </div>

      <div className={Style1.first_tab_style}>
        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Objective</p>

          <span class={Style1.text_data_content_1}>
            <p>
              To develop empathetic global citizens through experiential
              learning by enabling students at IIT Bombay to experience diverse
              life circumstances through RealLives simulation, process their
              emotional responses through structured reflection, and channel
              their newfound empathy into actionable social business solutions.
              The comprehensive ChangeMaker Program aimed to bridge the gap
              between awareness and action while fostering critical thinking
              about sustainable development goals and global challenges.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Program Overview</p>

          <span class={Style1.text_data_content_1}>
            <p>
              RealLives Foundation successfully conducted a comprehensive
              ChangeMaker Program at IIT Bombay, focusing on sustainable
              development goals and empathy-driven changemaking. The workshop
              engaged university students in an immersive educational journey
              that combined life simulation experiences with structured
              reflection and entrepreneurial thinking. Participants navigated
              through the complete RealLives ecosystem, experiencing lives
              across different socioeconomic backgrounds globally while
              developing measurable empathy and changemaking competencies
              through our proprietary assessment tools.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Style1.text_data_content_1}>
            <p>
              The program utilized our integrated four-step methodology:
              students first experienced diverse global lives through RealLives
              simulation, then processed their emotional responses using the
              Empathy Canvas framework, followed by generating personalized
              ChangeMaker Index reports analyzing their development across 18
              competencies. The workshop concluded with students creating viable
              social business solutions using our Social Business Canvas,
              directly addressing challenges they encountered during their
              simulated life experiences. This experiential learning approach
              enabled participants to move beyond theoretical understanding of
              global issues to developing practical, empathy-driven solutions.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Style1.text_data_content_1}>
            <p>
              The workshop demonstrated significant measurable outcomes in
              student engagement and empathy development. Participants showed
              enhanced understanding of global disparities, improved critical
              thinking about sustainable development challenges, and increased
              motivation to pursue social impact initiatives. Students created
              innovative social business proposals targeting issues ranging from
              educational inequality to sustainable resource management,
              reflecting their deepened awareness of interconnected global
              challenges. The success at IIT Bombay reinforces RealLives'
              effectiveness in transforming academic learning into actionable
              changemaking capabilities across diverse cultural and educational
              contexts.
            </p>
          </span>
        </div>
      </div>

      <div className={Style1.span_imapct_colume}>
        <p className={Style1.participants_title_text}>Skills Developed</p>

        <div className={Style1.wapper_show_btn}>
          <button className={Style1.color_btn_font}>
            21’st Century Skills
          </button>
          <button
            className={`${Style1.color_btn_font} ${Style1.empathy_btn_color}`}
          >
            Business Acumen
          </button>
        </div>
      </div>

      <div
        className={`${Style1.wrapper_footer_tab_padding} ${Style1.first_tab_margin}`}
      >
        <div className={Style1.card_reallives_campus_box}>
          <p className={Style1.global_student_title}>
            Empower Your Students with Global Perspectives
          </p>
          <button onClick={goToExternal} className={Style1.larne_more_btn}>
            Begin Your ChangeMaking Journey
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IIT_Bombay_University;
