import React from 'react'
import Style1 from "../../pages/impact/Chulalongkorn_University.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaAngleRight } from "react-icons/fa6";

const Chulalongkorn_University = () => {

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
          Chulalongkorn University, Thailand
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
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/fifth-work-shop-4.png"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>


          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/fifth-work-shop-2.png"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/fifth-work-shop-3.png"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/fifth-work-shop-5.png"
              className={Style1.slider_img}
              alt="slide 1"
            />

              <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/fifth-work-shop.png"
              className={Style1.slider_img}
              alt="slide 2"
            />

          </SwiperSlide>
        </Swiper>
      </div>

      <div className={Style1.content_tab_container_imapct}>
        <div className={Style1.container_logo_box_impact}>
          <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/chula-rl.svg" alt="" />
        </div>
      </div>

      <div className={Style1.wrapper_professior_data}>
        <span className={Style1.span_imapct_colume_2}>
          <p className={Style1.university_text_title}>
            Chulalongkorn University, Thailand
          </p>
          <p className={Style1.participants_title_text}>
           Department - Faculty of Education / BAScii Program
          </p>
        </span>

        <span className={Style1.flex_align_start}>
          <p className={Style1.participants_title_text}>
            In collaboration with:
          </p>
          <p className={Style1.university_text_title}>Dr. Sawaros Thanapornsangsuth</p>
        </span>
      </div>

      {/* <div className={Style1.sdg_container_imapct_tab}>
        <p className={Style1.student_testimonials_title}>
          SDG’s Alligned with this workshop
        </p>

        <div className={Style1.grid_sdg_card_imapct}>
          <div className={Style1.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>
        </div>
      </div> */}

      <div className={Style1.first_tab_style}>
        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Objective</p>

          <span class={Style1.text_data_content_1}>
            <p>
              To develop empathy and global awareness among university students
              by immersing them in real-life poverty scenarios through
              simulation-based learning. The workshop aimed to deepen
              understanding of SDG 1 (No Poverty), enabling students to
              experience systemic inequalities, reflect on privilege, and build
              critical thinking and changemaking skills through experiential
              learning and structured reflection.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Program Overview</p>

          <span class={Style1.text_data_content_1}>
            <p>
              RealLives conducted an immersive SDG-focused workshop at
              Chulalongkorn University (Thailand) for students in the BAScii
              program. The session centered on SDG 1: No Poverty, where students
              simulated lives in poverty-affected countries such as Burundi,
              experiencing challenges like limited access to healthcare,
              education, and income. The workshop combined simulation gameplay,
              guided reflection, and collaborative discussion to help students
              understand poverty beyond statistics. By integrating real-world
              data and AI-driven life scenarios, the program enabled students to
              connect emotionally with global issues while developing a deeper
              awareness of inequality and global citizenship.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Style1.text_data_content_1}>
            <p>
              The workshop followed a structured experiential learning approach
              combining simulation, reflection, and collaborative analysis. It
              began with an introduction to SDG 1: No Poverty and the global
              context of inequality, followed by an immersive RealLives
              simulation where students experienced full life journeys shaped by
              real-world data. Participants made critical decisions around
              education, healthcare, and livelihood while navigating systemic
              constraints faced in poverty-affected regions. This was followed
              by a reflective exercise in which students wrote personal letters
              from the perspective of their simulated character, fostering
              emotional connection and deeper empathy. The session then
              transitioned into a group-based Empathy Canvas activity, where
              students analyzed their character’s experiences across dimensions
              such as environment, behavior, influences, and emotions. The
              workshop concluded with group presentations and a facilitated
              discussion linking individual experiences to broader global
              challenges and the role of students as changemakers. 
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Style1.text_data_content_1}>
            <p>
              The workshop resulted in a significant shift in students’
              understanding of global poverty, transforming it from an abstract
              concept into a deeply personal and emotional experience.
              Participants demonstrated heightened empathy, with many expressing
              strong emotional reactions to the difficult life choices
              encountered during the simulation. The gamified and interactive
              nature of the platform drove high engagement, enabling students to
              connect more meaningfully with global issues compared to
              traditional learning methods. Students also developed a stronger
              awareness of their own privilege and the structural inequalities
              that shape life outcomes across different regions. The experience
              encouraged critical thinking and reflection, with many
              participants recognizing their potential role as changemakers in
              addressing global challenges. While students expressed a desire
              for more time to explore the simulation further, the overall
              impact highlighted the effectiveness of experiential, data-driven
              learning in fostering global citizenship, empathy, and
              action-oriented mindsets.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            A Note from the Professor
          </p>

          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
            controls
            className={Style1.image_cover_class}
          >
            <source src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/Prof-Sawaros-Chula.mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <span class={Style1.text_data_content_1}>
            <p>
              The workshop resulted in a significant shift in students’ understanding of global poverty, transforming it from an abstract concept into a deeply personal and emotional experience. Participants demonstrated heightened empathy, with many expressing strong emotional reactions to the difficult life choices encountered during the simulation. The gamified and interactive nature of the platform drove high engagement, enabling students to connect more meaningfully with global issues compared to traditional learning methods.
             Students also developed a stronger awareness of their own privilege and the structural inequalities that shape life outcomes across different regions. The experience encouraged critical thinking and reflection, with many participants recognizing their potential role as changemakers in addressing global challenges. While students expressed a desire for more time to explore the simulation further, the overall impact highlighted the effectiveness of experiential, data-driven learning in fostering global citizenship, empathy, and action-oriented mindsets.
            </p>
          </span>
           */}
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            Empathy Canvas Insights & Reflections
          </p>

          <div class={Style1.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/first-goal-img-1.png" alt=""/>
          </div>

            

        </div>


         <div className={Style1.impact_left_data_box}>
         
          <div class={Style1.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/second-goal-img-2.png" alt=""/>
          </div>
          </div>


          <div className={Style1.impact_left_data_box}>
         
          <div class={Style1.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/chula-workshop/therd-goal-img-3.png" alt=""/>
          </div>
          </div>


      </div>

      <div className={Style1.span_imapct_colume}>
        <p className={Style1.participants_title_text}>Skills Developed</p>

        <div className={Style1.wapper_show_btn}>

          <button className={Style1.color_btn_font}>
            Empathy
          </button>

          <button
            className={`${Style1.color_btn_font} ${Style1.empathy_btn_color}`}
          >
            SDG Awareness
          </button>

           <button
            className={`${Style1.color_btn_font} ${Style1.critical_thinking}`}
          >
           Critical Thinking
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

export default Chulalongkorn_University