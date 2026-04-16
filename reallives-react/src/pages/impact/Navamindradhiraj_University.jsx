import React from 'react'
import Style1 from "../impact/Navamindradhiraj_University.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import second_logo_slide from "../../add-image/second-logo-tab.svg";
import sdg_logo_1 from "../../add-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../add-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../add-image/E-WEB-Goal-04.svg";

import { FaArrowRight, FaAngleRight } from "react-icons/fa6";

const Navamindradhiraj_University = () => {

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
          Navamindradhiraj University Bangkok
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
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/second-workshop-demo-svg.svg"
              className={Style1.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/second-workshop-2.png"
              className={Style1.slider_img}
              alt="slide 2"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/second-workshop-3.png"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>

          <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/home-page/second-workshop-4.png"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>

           <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/nmu-slider-image-1.jpg"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>

           <SwiperSlide className={Style1.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/nmu-slider-image-2.jpg"
              className={Style1.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>



          
        </Swiper>
      </div>

      <div className={Style1.content_tab_container_imapct}>
        <div className={Style1.container_logo_box_impact}>
          <img src={second_logo_slide} alt="" />
        </div>
      </div>

      <div className={Style1.wrapper_professior_data}>
        <span className={Style1.span_imapct_colume_2}>
          <p className={Style1.university_text_title}>
            Navamindradhiraj University, Bangkok
          </p>
          <p className={Style1.participants_title_text}>
            Department - General Education
          </p>
        </span>

        <span className={Style1.flex_align_start}>
          <p className={Style1.participants_title_text}>
            In collaboration with:
          </p>
          <p className={Style1.university_text_title}>
            Lecturer Krittanan Pensirisomboon
          </p>
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
              To develop empathetic global citizens through experiential
              learning by enabling students at Navamindradhiraj University to
              experience diverse life circumstances through RealLives
              simulation, process their emotional responses through structured
              reflection, and channel their newfound empathy into actionable
              social business solutions. The comprehensive ChangeMaker Program
              aimed to bridge the gap between awareness and action while
              fostering critical thinking about sustainable development goals
              and global challenges.
            </p>
          </span>
        </div>

        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>Program Overview</p>

          <span class={Style1.text_data_content_1}>
            <p>
              RealLives Foundation successfully conducted a comprehensive
              ChangeMaker Program at Navamindradhiraj University in Bangkok,
              focusing on sustainable development goals and empathy-driven
              changemaking. The workshop engaged university students in an
              immersive educational journey that combined life simulation
              experiences with structured reflection and entrepreneurial
              thinking. Participants navigated through the complete RealLives
              ecosystem, experiencing lives across different socioeconomic
              backgrounds globally while developing measurable empathy and
              changemaking competencies through our proprietary assessment
              tools.
              <br />
              <strong>Institutional Scale and Integration - </strong> This workshop was not just an
              extracurricular activity; it was officially integrated into
              Navamindradhiraj University’s mandatory "Metropolitan Studies"
              curriculum. By embedding the RealLives simulation into the core
              General Education module, the program successfully reached over
              600 first-year students, operating at a massive institutional
              scale.
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
          <p className={Style1.student_testimonials_title}>
            Cross-Cultural Exchange & Impact
          </p>

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
              challenges. The success at Navamindradhiraj University reinforces
              RealLives' effectiveness in transforming academic learning into
              actionable changemaking capabilities across diverse cultural and
              educational contexts. <br /> <strong>Fostering Civic Empathy - </strong>For these
              Thai students, the simulation served as a vital bridge between
              local urban realities in Bangkok and global socio-economic
              challenges. By stepping into the lives of individuals from vastly
              different backgrounds, students developed crucial 21st century
              civic competencies, shifting their perspective from passive
              observation to active, empathy-driven problem solving.
            </p>
          </span>
        </div>
      </div>

      <div className={Style1.span_imapct_colume}>
        <p className={Style1.participants_title_text}>Skills Developed</p>

        <div className={Style1.wapper_show_btn}>
          <button className={Style1.color_btn_font}>
            21st Century Skills
          </button>
          <button
            className={`${Style1.color_btn_font} ${Style1.empathy_btn_color}`}
          >
            Business Acumen
          </button>
        </div>
      </div>

      <div className={Style1.container_student_impact_data}>
        <div className={Style1.impact_left_data_box}>
          <p className={Style1.student_testimonials_title}>
            Student Testimonial
          </p>

          <span class={Style1.text_data_content_1}>
            <p>
              My name is Panjasuth Tangpanyapinit, 1st year student from the Faculty of Medicine, Navamindradhiraj University. Through this experience, I
              learned that while none of us choose the circumstances we're born
              into, rich or poor, we can always choose empathy, kindness, and
              inclusion. Life has its ups and downs, so being flexible and ready
              for change is essential.
            </p>

            <p>
              Inspired by a disabled family member, I developed a social impact
              project to raise awareness for people with disabilities. I plan to
              share interview videos on TikTok, Instagram, and YouTube so their
              voices and perspectives are heard. I'll also recycle unused
              materials and collaborate with disabled creators to make handmade
              products, which I'll sell in public spaces and donate all profits
              to a foundation.
            </p>

            <p>
              My core principles include creating quality content that informs
              and inspires, customizing approaches to respect each person's
              comfort and privacy, maintaining consistency to drive real long
              term change, and fostering collaboration to ensure disabled people
              are included and empowered.
            </p>

            <p>
              My message to young people: everyone is human, treat all people
              equally.
            </p>
          </span>
        </div>

        <div className={Style1.right_impact_image_box}>
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
            <source
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/navamindradhiraj-workshop/Student-video-workshop.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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

export default Navamindradhiraj_University