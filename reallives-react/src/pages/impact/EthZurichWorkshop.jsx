import React from "react";
import Style1 from "../../pages/impact/EthZurichWorkshop.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import first_logo_slide from "../../add-image/first-logo-tab.svg";
import sdg_logo_1 from "../../add-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../add-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../add-image/E-WEB-Goal-04.svg";

import { FaArrowRight, FaAngleRight } from "react-icons/fa6";

const EthZurichWorkshop = () => {

  const goToExternal = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  return (
    
    <div className={Style1.eth_tab_conatiner}>
      <div className={Style1.first_university_container}>
       
        <span className={Style1.section_flex_button}>
          <Link className={Style1.btn_top_slider} to="/reallives/school/impact">
            Impact Home
          </Link>

          <FaAngleRight />

          {/* <span class="material-symbols-outlined icon-arrwo-left margin-top-5">
            arrow_forward_ios
          </span> */}

          <button className={`${Style1.btn_top_slider} ${Style1.active_color}`}>
            ETH Zurich Workshop
          </button>
        </span>

       
        <div className={Style1.slider_wrapper}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            speed={600}
            className={`${Style1.mySwiper} universitySlider`}
          >
            <SwiperSlide className={Style1.swiperSlide}>
              <img
                src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/eth-zurich/school-1-image-slider.png"
                className={Style1.slider_img}
                alt="slide 1"
              />
            </SwiperSlide>

            <SwiperSlide className={Style1.swiperSlide}>
              <img
                src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/eth-zurich/school-2-image-slider.png"
                className={Style1.slider_img}
                alt="slide 2"
              />
            </SwiperSlide>

            <SwiperSlide className={Style1.swiperSlide}>
              <img
                src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/our-impact-page/eth-zurich/school-3-image-slider.png"
                className={Style1.slider_img}
                alt="slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={Style1.content_tab_container_imapct}>
          <div className={Style1.container_logo_box_impact}>
            <img src={first_logo_slide} alt="" />
          </div>
        </div>

        <div className={Style1.wrapper_professior_data}>
          <span className={Style1.span_imapct_colume_2}>
            <p className={Style1.university_text_title}>
              ETH University Zurich, Switzerland
            </p>
            <p className={Style1.participants_title_text}>
              Department - Institute of Molecular Systems Biology
            </p>
          </span>

          <span className={Style1.flex_align_start}>
            <p className={Style1.participants_title_text}>
              In collaboration with:
            </p>
            <p className={Style1.university_text_title}>
              Prof. Dr. Ernst Hafen
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
            <span className={Style1.text_data_content_1}>
              <p>
                To develop cross-cultural empathy and global awareness among
                students from high-income countries by enabling them to
                experience life circumstances in developing nations through
                RealLives simulation. The program aimed to bridge the
                perspective gap between students from privileged backgrounds and
                global development challenges while fostering meaningful
                intercultural dialogue and understanding of the United Nations'
                Sustainable Development Goals through experiential learning and
                structured peer-to-peer exchanges.
              </p>
            </span>
          </div>

          <div className={Style1.impact_left_data_box}>
            <p className={Style1.student_testimonials_title}>
              Program Overview
            </p>
            <span className={Style1.text_data_content_1}>
              <p>
                RealLives Foundation partnered with ETH Zurich to conduct an
                innovative cross-cultural empathy program that provided students
                with deep insights into the United Nations' seventeen
                Sustainable Development Goals (SDGs). By engaging with the
                text-based RealLives simulation, Swiss students learned to
                empathize with people from other parts of the world and gained
                new perspectives on global development challenges. The program
                facilitated hands-on experience in discussing SDGs and their
                real-world implications through direct collaboration with
                students from developing countries, creating authentic
                intercultural learning experiences.
              </p>
            </span>
          </div>

          <div className={Style1.impact_left_data_box}>
            <p className={Style1.student_testimonials_title}>
              Implementation & Methodology
            </p>
            <span className={Style1.text_data_content_1}>
              <p>
                The program addressed a key challenge: students from high-income
                countries like Switzerland often show difficulties relating to
                global challenges addressed in the UN's Sustainable Development
                Goals. The RealLives simulation allowed students to experience
                life when born at random locations on earth, with each simulated
                life lasting between 30 to 45 minutes. During the purely
                text-based gameplay, students encountered real-world data from
                public databases about their assigned countries, learning about
                specific SDG challenges. They experienced life unfolding around
                them until age eight, when they could begin making independent
                decisions, concluding each simulation by writing reflective
                obituaries about their lived experiences and life choices.
              </p>
            </span>
          </div>

          <div className={Style1.impact_left_data_box}>
            <p className={Style1.student_testimonials_title}>
              Cross-Cultural Exchange & Impact
            </p>
            <span className={Style1.text_data_content_1}>
              <p>
                The program featured a unique partnership with FLAME University
                in Pune, India, established through Parag Mankeekar's
                connection. Twenty ETH students experienced life by being born
                in Pune, India, while twenty Indian students lived simulated
                lives in Zurich, Switzerland. After completing three lives in
                their respective assigned cities, the program arranged
                one-on-one Skype conferences between Swiss and Indian students
                to share experiences and insights. The success of this
                perspective transformation was rigorously assessed through
                recorded interviews with Swiss students, demonstrating
                measurable changes in their understanding of global development
                challenges and cross-cultural empathy development.
              </p>
            </span>
          </div>
        </div>

       
        <div className={Style1.span_imapct_colume}>
          <p className={Style1.participants_title_text}>Skills Developed</p>

          <div className={Style1.wapper_show_btn}>
            <button className={Style1.color_btn_font}>Teamwork</button>
            <button
              className={`${Style1.color_btn_font} ${Style1.empathy_btn_color}`}
            >
              Integrity and Work Ethics
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
    </div>
  );
};

export default EthZurichWorkshop;
