import React from 'react'
import Style1 from "../../pages/impact/KyungheeUniversity.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import therd_logo_slide from "../../add-image/3-rd-workshop-logo.svg";
import sdg_logo_1 from "../../add-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../add-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../add-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const KyungheeUniversity = () => {
   const goToExternal = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };
  return (
     <div className={`${Style1.first_university_container} `}>
      <span className={Style1.section_flex_button}>
        <Link className={Style1.btn_top_slider} to="/reallives/school/impact">
          Impact Home
        </Link>

        <FaAngleRight />

        {/* <span class="material-symbols-outlined icon-arrwo-left margin-top-5">
                arrow_forward_ios
              </span> */}

        <button className={`${Style1.btn_top_slider} ${Style1.active_color}`}>
          KyungHee University SDG Workshop
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
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/kyunghee-korea-workshop/3-rd-workshop-image.png"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/3-rd-workshop-first-image.jpg"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/kyunghee-korea-workshop/3-rd-workshop-2.png"
              className={Style1.slider_img}
              alt="slide 2"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/kyunghee-korea-workshop/3-rd-workshop-3.png"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/kyunghee-korea-workshop/3-rd-workshop-4.png"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>


      <div className={Style1.content_tab_container_imapct}>
        <div className={Style1.container_logo_box_impact}>
          <img src={therd_logo_slide} alt="" />
        </div>
      </div>

       

      <div className={Style1.sdg_container_imapct_tab}>
        <p className={Style1.student_testimonials_title}>
          SDGs Aligned with this workshop
        </p>

        <div className={Style1.grid_sdg_card_imapct}>
          <div className={Style1.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>

          <div className={Style1.sdg_imapct}>
            <img src={sdg_logo_2} alt="" />
          </div>

          <div className={Style1.sdg_imapct}>
            <img src={sdg_logo_3} alt="" />
          </div>
        </div>
      </div>

      <div className={Style1.first_tab_style}>
        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Objective</p>

          <span class={Style1.text_data_content_1}>
            <p>
              To foster global citizenship and empathy development among Korean
              university students through experiential learning and
              cross-cultural understanding. The workshop aimed to expand
              students' perspectives on global challenges and sustainable
              development while developing their capacity for empathetic
              decision-making and changemaking skills through immersive life
              simulation experiences and structured reflection processes.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Program Overview</p>

          <span class={Style1.text_data_content_1}>
            <p>
              RealLives Foundation conducted a comprehensive ChangeMaker
              workshop at Kyung Hee University in Seoul, South Korea, organized
              by Prof. Dr. Utak Chang, former Director of UNESCO APCEIU
              (Asia-Pacific Centre of Education for International
              Understanding), with assistance from Prof. Ms. Chanmi Kim. The
              program engaged 30 university students in an immersive educational
              experience designed to develop global awareness and empathy
              through the RealLives simulation platform. This collaboration with
              UNESCO's educational leadership demonstrated RealLives' alignment
              with international education standards and its effectiveness in
              promoting intercultural understanding and global citizenship
              development.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Style1.text_data_content_1}>
            <p>
              The workshop utilized RealLives' integrated educational approach,
              enabling students to experience diverse life circumstances across
              different countries and socioeconomic backgrounds through
              text-based simulation. Participants navigated multiple lives
              lasting 30-45 minutes each, encountering real-world data and
              making critical life decisions that reflected authentic global
              challenges. The program incorporated structured reflection through
              the Empathy Canvas framework, allowing students to process their
              emotional responses and develop deeper understanding of global
              disparities. Students also generated personalized ChangeMaker
              Index reports, providing measurable insights into their
              development across key competencies including empathy, global
              awareness, and critical thinking skills.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Style1.text_data_content_1}>
            <p>
              The workshop demonstrated significant engagement from Korean
              university students, who showed enhanced understanding of global
              development challenges and increased empathy for people from
              different cultural and economic backgrounds. Under the expert
              guidance of UNESCO-affiliated educators, students developed
              actionable insights into sustainable development goals and their
              personal roles as global changemakers. The program's success at
              Kyung Hee University, facilitated by internationally recognized
              education leaders, reinforces RealLives' effectiveness in diverse
              academic contexts and its potential for scaling intercultural
              education initiatives across Asia-Pacific educational
              institutions.
            </p>
          </span>
        </div>
      </div>

      <div className={Style1.span_imapct_colume}>
        <p className={Style1.participants_title_text}>Skills Developed</p>

        <div className={Style1.wapper_show_btn}>
          <button className={Style1.color_btn_font}>SDG Awareness</button>
          <button
            className={`${Style1.color_btn_font} ${Style1.empathy_btn_color}`}
          >
            ChangeMaking
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
  )
}

export default KyungheeUniversity