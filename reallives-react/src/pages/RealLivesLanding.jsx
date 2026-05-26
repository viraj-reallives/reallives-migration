// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { landingContent } from "@content/landing";
// import Carousel from "@components/common/Carousel/Carousel";
// import styles from "./RealLivesLanding.module.css";
// import styles1 from "../components/costom_css/realliveslanding.coustome.module.css";
// import logo_rl from "../add-image/logo.svg";
// import rl_mid_logo from "../add-image/mid-rl-logo.svg";
// import card_logo_university from "../add-image/logo-card-rl.svg";
// import card_banner_1 from "../add-image/card_banner_1.png";
// import albany_university_logo_1 from "../add-image/albany-universty-logo.svg";
// import uppsala_university_logo_1 from "../add-image/Uppsala_University_logo-card.svg";
// import second_research_paper_1 from "../add-image/second_research_paper.png";
// import therd_research_paper_1 from "../add-image/therd-research-paper.png";
// import mumbai_workshop_1 from "../add-image/mumbai_workshop_1.png";
// import eth_workshop_1 from "../add-image/school-3-image-slider.png";
// import kyungeeh_university_workshop_1 from "../add-image/3-rd-workshop-2.png";
// import navamindradhiraj_university_workshop_1 from "../add-image/second-workshop-2.png";
// import banner_home_5_card from "../add-image/banner-home-card.png";
// import earth_banner_image from "../add-image/earth-banner-card.png";
// import { X, MoveRight } from "lucide-react";
// // import { X } from "lucide-react";

// export default function RealLivesLanding() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const useTypewriter = (texts, speed = 80, delay = 1200) => {
//     const [textIndex, setTextIndex] = useState(0);
//     const [displayText, setDisplayText] = useState("");
//     const [charIndex, setCharIndex] = useState(0);

//     useEffect(() => {
//       if (!texts || texts.length === 0) return;

//       if (charIndex < texts[textIndex].length) {
//         const timeout = setTimeout(() => {
//           setDisplayText((prev) => prev + texts[textIndex][charIndex]);
//           setCharIndex((prev) => prev + 1);
//         }, speed);

//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setDisplayText("");
//           setCharIndex(0);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }, delay);

//         return () => clearTimeout(timeout);
//       }
//     }, [charIndex, textIndex, texts, speed, delay]);

//     return displayText;
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = 6;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   const { carousel, entryCards, ctas, footer } = landingContent;
//   const logoSrc = footer?.logo ?? "";

//   return (
//     <div className={styles.page}>
//       <header className={`${styles.header} `}>
//         <div
//           className={`${styles.headerInner} ${styles1.header_transparent_background}`}
//         >
//           <Link to="/" className={styles.logoLink} aria-label="RealLives Home">
//             {logoSrc ? (
//               <img
//                 src={logo_rl}
//                 alt="RealLives"
//                 className={`${styles.logoImg} ${styles1.rl_logo}`}
//               />
//             ) : (
//               <span className={styles.logoFallback}>RealLives</span>
//             )}
//           </Link>

//           <div className={`${styles.headerCtas} ${styles1.headerCtas_override_style}`}>
//             <Link
//               to={ctas.buyLicense.path}
//               className={`${styles.ctaBtn} ${styles1.home_btn_event}`}
//               aria-label="Buy License"
//             >
//               Buy License
//             </Link>
//             <a
//               href={ctas.login.url}
//               className={`${styles.ctaBtn} ${styles1.home_btn_event}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       </header>

//       <section className={styles.carouselSection}>

//         <div className={styles1.container_new_home}>

//           <div className={`${styles1.outer_first_home_new} ${currentIndex === 0 ? styles1.slide_active : styles1.card_none}`}>
//             <div className={styles1.inner_top_home_label}>
//               <div className={styles1.manrope_text}>RealLives Builds</div>
//               <div className={styles1.manrope_text}>21st Century Skills</div>
//             </div>

//             <div className={styles1.inner_mid_home_label}>
//               <div className={styles1.icon_rl_mid}>
//                 <img src={rl_mid_logo} alt="RealLives Logo" />
//               </div>
//             </div>
//           </div>

//           <div className={` ${styles1.pdf_container_home_new}  ${currentIndex === 1 ? styles1.slide_active : styles1.card_none}`} >
//             <div className={styles1.inner_top_home_label}>
//               <div className={styles1.manrope_text}>Powerful Learning,</div>
//               <div className={styles1.manrope_text}>
//                 Proven by Global Research
//               </div>
//             </div>

//             <div className={styles1.container_label_pdf_structure}>
//               <div className={styles1.label_card_new_str}>
//                 <div className={styles1.head_view_logo_pdf}>
//                   <span className={styles1.icon_span_label_str}>
//                     <div className={styles1.icon_pdf_logo}>
//                       <img src={card_logo_university} alt="University Logo" />
//                     </div>

//                     <p
//                       className={`${styles1.manrope_text} ${styles1.title_card_text}`}
//                     >
//                       Korea University
//                     </p>
//                   </span>

//                   <Link
//                     to="/reallives/school/Korea-University-Research"
//                     className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
//                   >
//                     View Paper
//                   </Link>
//                 </div>

//                 <div className={styles1.pdf_img_viwe}>
//                   <img src={card_banner_1} alt="" />
//                 </div>
//               </div>

//               <div className={styles1.label_card_new_str}>
//                 <div className={styles1.head_view_logo_pdf}>
//                   <span className={styles1.icon_span_label_str}>
//                     <div className={styles1.icon_pdf_logo}>
//                       <img
//                         className={styles1.image_fit}
//                         src={albany_university_logo_1}
//                         alt="Albany University Logo"
//                       />
//                     </div>

//                     <p
//                       className={`${styles1.manrope_text} ${styles1.title_card_text}`}
//                     >
//                       University at Albany
//                     </p>
//                   </span>

//                   <Link
//                     to="/reallives/school/SUNY-Albany-Research"
//                     className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
//                   >
//                     View Paper
//                   </Link>
//                 </div>

//                 <div className={styles1.pdf_img_viwe}>
//                   <img src={second_research_paper_1} alt="" />
//                 </div>
//               </div>

//               <div className={styles1.label_card_new_str}>
//                 <div className={styles1.head_view_logo_pdf}>
//                   <span className={styles1.icon_span_label_str}>
//                     <div className={styles1.icon_pdf_logo}>
//                       <img
//                         className={styles1.image_fit}
//                         src={uppsala_university_logo_1}
//                         alt="Uppsala University Logo"
//                       />
//                     </div>

//                     <p
//                       className={`${styles1.manrope_text} ${styles1.title_card_text}`}
//                     >
//                       Uppsala University
//                     </p>
//                   </span>

//                   <Link
//                     to="/reallives/school/Uppsala-University-Research"
//                     className={`${styles1.manrope_text} ${styles1.view_paper_btn}`}
//                   >
//                     View Paper
//                   </Link>
//                 </div>

//                 <div className={styles1.pdf_img_viwe}>
//                   <img src={therd_research_paper_1} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={` ${styles1.global_impact_container}  ${currentIndex === 2 ? styles1.slide_active : styles1.card_none}`} >
//             <div className={styles1.inner_top_home_label}>
//               <p className={styles1.manrope_text}>Our Global Impact</p>
//             </div>

//             <div className={styles1.global_impact_banner_container}>
//               <div className={styles1.image_banner_label_box_new}>
//                 <div className={styles1.outer_wrapper_image}>
//                   <img
//                     className={styles1.image_cover_style}
//                     src={mumbai_workshop_1}
//                     alt=""
//                   />
//                 </div>

//                 <p
//                   className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
//                 >
//                   IIT Bombay, India
//                 </p>
//               </div>

//               <div className={styles1.image_banner_label_box_new}>
//                 <div className={styles1.outer_wrapper_image}>
//                   <img
//                     className={styles1.image_cover_style}
//                     src={eth_workshop_1}
//                     alt=""
//                   />
//                 </div>

//                 <p
//                   className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
//                 >
//                   ETH Zürich, Switzerland
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className={` ${styles1.global_impact_container} ${currentIndex === 3 ? styles1.slide_active : styles1.card_none}`}>
//             <div className={styles1.inner_top_home_label}>
//               <p className={styles1.manrope_text}>RealLives Worldwide Impact</p>
//             </div>

//             <div className={styles1.global_impact_banner_container}>
//               <div className={styles1.image_banner_label_box_new}>
//                 <div className={styles1.outer_wrapper_image}>
//                   <img
//                     className={styles1.image_cover_style}
//                     src={kyungeeh_university_workshop_1}
//                     alt=""
//                   />
//                 </div>

//                 <p
//                   className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
//                 >
//                   Kyunghee University, Korea
//                 </p>
//               </div>

//               <div className={styles1.image_banner_label_box_new}>
//                 <div className={styles1.outer_wrapper_image}>
//                   <img
//                     className={styles1.image_cover_style}
//                     src={navamindradhiraj_university_workshop_1}
//                     alt=""
//                   />
//                 </div>

//                 <p
//                   className={`${styles1.title_university_text_new} ${styles1.manrope_text}`}
//                 >
//                   Navamindradhiraj University, Thailand
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className={`${styles1.global_impact_container} ${currentIndex === 4 ? styles1.slide_active : styles1.card_none}`} >
//             <div className={styles1.inner_top_home_label}>
//               <p className={styles1.manrope_text}>
//                 The RealLives Learning Ecosystem
//               </p>
//             </div>

//             <div className={styles1.image_banner_full_new}>
//               <img src={banner_home_5_card} alt="" />
//             </div>
//           </div>

//           <div className={`${styles1.global_impact_container_last}  ${currentIndex === 5 ? styles1.slide_active : styles1.card_none}`} >
//             <div className={styles1.inner_top_home_label}>
//               <p className={styles1.manrope_text}>
//                 Live Billions of Lives <br />
//                 Across the World
//               </p>
//             </div>

//             <div className={styles1.image_banner_full_new}>
//               <img
//                 className={styles1.earth_style_hight}
//                 src={earth_banner_image}
//                 alt=""
//               />

//               <span className={styles1.overflay_data_text_image}>
//                 <p>
//                   Every one gets a unique life story, shaped by <br />
//                   real-world data and statistics from over 193 countries. <br />
//                   No two journeys are ever the same.
//                 </p>
//               </span>
//             </div>
//           </div>

//           <div className={styles1.inner_bottom_home_label}>
//             {[...Array(total)].map((_, index) => (
//               <div
//                 key={index}
//                 className={styles1.label_up_fill}
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <div
//                   key={currentIndex}
//                   className={`${styles1.fill}
//               ${index === currentIndex ? styles1.active : ""}
//               ${index < currentIndex ? styles1.filled : ""}
//             `}
//                 ></div>
//               </div>
//             ))}

//             <button
//               className={`${styles1.step_into_stories_btn} ${styles1.manrope_text}`}
//               onClick={() => setIsModalOpen(true)}
//             >
//               RealLives in Real Life <MoveRight />
//             </button>

//             <button className={`${styles1.step_into_stories_btn} ${styles1.manrope_text}`}>RealLives in Real Life <MoveRight /></button>
//           </div>

//         </div>

//         {isModalOpen && (
//           <div
//             className={styles1.modal_overlay}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <div
//               className={styles1.modal_content}
//               onClick={(e) => e.stopPropagation()}
//             >

//               <button
//                 className={styles1.modal_close}
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 <X size={22} />
//               </button>

//               <Carousel slides={carousel.slides} />
//             </div>
//           </div>
//         )}

//       </section>

//       <section
//         className={`${styles.cardsSection} ${styles1.section_second_style}`}
//         aria-label="Explore sub-sites"
//       >
//         <p className={`${styles1.who_i_am_text} ${styles1.noto_sans_text}`}>
//           Who am I?
//         </p>

//         <div
//           className={`${styles.cardsContainer} ${styles1.cards_container_outer}`}
//         >
//           {entryCards.map((card, index) => {
//             const texts = Array.isArray(card.title_robot)
//               ? card.title_robot
//               : [card.title_robot];
//             const typedText = useTypewriter(texts);
//             return (
//               <Link
//                 key={card.path}
//                 to={card.path}
//                 className={`${styles.entryCard} ${styles1.card_style_overide}`}
//               >
//                 {" "}
//                 <h3 className={styles1.title_text_cards}>{card.label}</h3>{" "}
//                 <p
//                   className={`${styles.entryDescription} ${styles1.description_text_title}`}
//                 >
//                   {" "}
//                   <span className={styles1.robot_text}>{typedText}</span>{" "}
//                 </p>{" "}
//                 <p className={styles1.title_text_number}>{card.description}</p>{" "}
//                 <button className={styles1.explor_btn_new}>
//                   Explore for School <MoveRight />
//                   {/* <span class="material-symbols-outlined"> arrow_forward </span> */}
//                 </button>
//               </Link>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";

import {
  GraduationCap,
  School,
  BookOpen,
  Gamepad2,
  X,
  Menu,
  MoveRight,
} from "lucide-react";

// Swiper Imports

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

// CSS MODULE

import Style1 from "../components/costom_css/realliveslanding.coustome.module.css";

// const impact_image = "https://img.icons8.com/fluency/96/combo-chart.png";

// const research_image = "https://img.icons8.com/fluency/96/research.png";

const RealLivesLanding = () => {
  // const [darkMode, setDarkMode] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  // Screen width state for responsive images inside slider
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide Global Footer logic

  useEffect(() => {
    const allFooters = document.querySelectorAll("footer");

    let globalFooter = null;

    allFooters.forEach((footer) => {
      if (!footer.classList.contains(Style1.footer_container_landing)) {
        globalFooter = footer;
      }
    });

    if (globalFooter) {
      globalFooter.style.setProperty("display", "none", "important");
    }

    return () => {
      if (globalFooter) {
        globalFooter.style.display = "block";
      }
    };
  }, []);

  // Body theme class toggle

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add(Style1.dark_theme);
  //   } else {
  //     document.body.classList.remove(Style1.dark_theme);
  //   }
  // }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(Style1.dark_theme);

      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove(Style1.dark_theme);
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navigate = useNavigate();

  const cardData = [
    {
      title: "School",

      subTitle: "Early Education",

      desc: "Build a strong foundation for your future self through interactive learning and social growth.",

      btnText: "Explore School",

      path: "/reallives/school",

      badge: "Foundation",

      icon: <School size={24} color="#00bcd4" />,

      image:
        "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png",
    },

    {
      title: "University",

      subTitle: "Higher Education",

      desc: "Master your chosen field and prepare for the professional world with advanced simulations.",

      btnText: "Explore University",

      path: "/reallives/university",

      badge: "Mastery",

      icon: <GraduationCap size={24} color="#00bcd4" />,

      image:
        "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/school-3-image-slider_troncd.png",
    },

    {
      title: "Home Schooler",

      subTitle: "Character Building",

      desc: "Help your child grow wiser about the world one life at a time in a personalized environment.",

      btnText: "Explore Home Schooler",

      path: "/reallives/homeschooler",

      badge: "Personalized",

      icon: <BookOpen size={24} color="#00bcd4" />,

      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop",
    },

    {
      title: "Gamer",

      subTitle: "Endless Replayability",

      desc: "Live a billion lives. Discover who you could be through the power of choice.",

      btnText: "Explore Gamer",

      path: "/reallives/gamer",

      badge: "Gaming",

      icon: <Gamepad2 size={24} color="#00bcd4" />,

      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const sliderData = [
    {
      title: "Life doesn’t always give you equal opportunities",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_01.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-1.png",

      alt: "Life opportunities",

      subheading: "",
    },

    {
      title: "Jump into a life face whatever comes your way",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_02.jpg",

      mobileImage:
        "https://reallivesfrontend.s3.us-east-1.amazonaws.com/iPhone+16+Pro+Max+-+22.png",

      alt: "Face challenges",

      subheading: "",
    },

    {
      title: "Live a life in a different country Face what comes your way",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_04.jpg",

      mobileImage:
        "https://reallivesfrontend.s3.us-east-1.amazonaws.com/iPhone+16+Pro+Max+-+23.png",

      alt: "Different country",

      subheading: "",
    },

    {
      title: "You are the world",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_05.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-5.png",

      alt: "World",

      subheading: "",
    },

    {
      title: "Experience life with interactive role-play",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_06.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-6.png",

      alt: "Interactive role-play",

      subheading: "",
    },

    {
      title:
        "Live a character, the one who does not have control on starting position in life",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_07.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-7.png",

      alt: "Starting position",

      subheading: "",
    },

    {
      title:
        "Experience how even the most fortunate are trapped by circumstances",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_08.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-10.png",

      alt: "Circumstances",

      subheading: "",
    },

    {
      title:
        "Enjoy the randomness of being born in any country and any culture",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_09.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-18.png",

      alt: "Randomness",

      subheading: "",
    },

    {
      title: "Design any character that you wish to be",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_10.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-9.png",

      alt: "Design character",

      subheading: "",
    },

    {
      title: "Life rarely begins with equal opportunities",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_12.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-10.png",

      alt: "Equal opportunities",

      subheading: "",
    },

    {
      title: "Take a chance on living a random life on earth",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_13.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-11.png",

      alt: "Random life",

      subheading: "",
    },

    {
      title: "Experience and live the life of an ordinary person!",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_14.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-12.png",

      alt: "Ordinary person",

      subheading: "",
    },

    {
      title: "Live and experience a trillion human life stories",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_15.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-13.png",

      alt: "Life stories",

      subheading: "",
    },

    {
      title: "In the real world not everything is possible for every one",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_16.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-14.png",

      alt: "Real world",

      subheading: "",
    },

    {
      title: "An eye opener on how life is lived in various cultures",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_17.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-15.png",

      alt: "Cultures",

      subheading: "",
    },

    {
      title: "One’s abilities and choices are contingent upon one’s context",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_18.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-16.png",

      alt: "Abilities",

      subheading: "",
    },

    {
      title: "Surprisingly informative and enlightening",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_19.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-17.png",

      alt: "Enlightening",

      subheading: "",
    },

    {
      title: "Informative time-sink",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_20.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-18.png",

      alt: "Time-sink",

      subheading: "",
    },

    {
      title:
        "Experience how the millions of unfortunate are trapped by circumstances",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_21.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-19.png",

      alt: "Millions",

      subheading: "",
    },

    {
      title:
        "Some one at some point has probably led a life similar to the one you are playing",

      image:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/homescreen-img/homeimage_23.jpg",

      mobileImage:
        "https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/mobilehomescreen/homeimage-mobile-20.png",

      alt: "Similar life",

      subheading: "",
    },
  ];

  return (
    <div className={Style1.landing_container}>
      {/* <div
        className={`${Style1.lamp_wrapper} ${darkMode ? Style1.lamp_off : Style1.lamp_on}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div className={Style1.lamp_rope}></div>

        <div className={Style1.lamp_body}>
          <div className={Style1.light_bulb}></div>
        </div>

        <div className={Style1.pull_handle}></div>
      </div> */}

      {/* HEADER */}

      <div className={Style1.header_content_container}>
        {/* <header className={Style1.header_wrapper}>
          <div className={Style1.header}>
            <nav className={Style1.nav_left}>
              <Link to="/" className={Style1.logo_reallives}>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771840605/reallives-logo_v5cdkc.png"
                  alt="Logo"
                />
              </Link>
            </nav>

            <div className={Style1.nav_right}>
              <Link to="/reallives/licenses" className={Style1.white_btn}>
                Buy License
              </Link>

              <a
                href="https://reallivesworld.com/login"
                target="_blank"
                rel="noreferrer"
                className={Style1.glow_btn}
              >
                <span>Get Started</span>
              </a>
            </div>

            <div className={Style1.mobile_controls}>
              <div className={Style1.mobile_toggle_container}>
                <label className={Style1.switch}>
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />

                  <span className={Style1.slider_round}>
                    <span className={Style1.icon_sun}>☀️</span>

                    <span className={Style1.icon_moon}>🌙</span>
                  </span>
                </label>
              </div>

              <button
                className={Style1.mobile_menu_btn}
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

       

          <div
            className={`${Style1.mobile_menu} ${mobileMenu ? Style1.mobile_menu_active : ""}`}
          >
            <Link
              to="/buy-license"
              className={Style1.white_btn}
              onClick={() => setMobileMenu(false)}
            >
              Buy License
            </Link>

            <Link
              to="/login"
              className={Style1.glow_btn}
              onClick={() => setMobileMenu(false)}
            >
              <span>Get Started</span>
            </Link>
          </div>
        </header> */}

        <header
          className={Style1.header_wrapper}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 100 + "%",
            zIndex: 1010,
          }}
        >
          <div
            className={Style1.header}
            style={{ position: "relative", zIndex: 1012 }}
          >
            <nav className={Style1.nav_left}>
              <Link to="/" className={Style1.logo_reallives}>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771840605/reallives-logo_v5cdkc.png"
                  alt="Logo"
                />
              </Link>
            </nav>

            <div className={Style1.nav_right}>
              <Link to="/reallives/licenses" className={Style1.white_btn}>
                Buy License
              </Link>

              <a
                href="https://reallivesworld.com/login"
                target="_blank"
                rel="noreferrer"
                className={Style1.glow_btn}
              >
                <span>Get Started</span>
              </a>
            </div>

            <div
              className={Style1.mobile_controls}
              style={{ position: "relative", zIndex: 1015 }}
            >
              <div className={Style1.mobile_toggle_container}>
                <label className={Style1.switch}>
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />

                  <span className={Style1.slider_round}>
                    <span className={Style1.icon_sun}>☀️</span>
                    <span className={Style1.icon_moon}>🌙</span>
                  </span>
                </label>
              </div>

              <button
                className={Style1.mobile_menu_btn}
                onClick={() => setMobileMenu(!mobileMenu)}
                style={{
                  position: "relative",
                  zIndex: 1020,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: mobileMenu ? "#000000" : "inherit",
                }}
              >
                {mobileMenu ? (
                  <X size={28} style={{ color: "#000000" }} />
                ) : (
                  <Menu size={28} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`${Style1.mobile_menu} ${mobileMenu ? Style1.mobile_menu_active : ""}`}
            style={{
              zIndex: 1005,
            }} 
          >
            <Link
              to="/buy-license"
              className={Style1.white_btn}
              onClick={() => setMobileMenu(false)}
            >
              Buy License
            </Link>

            <Link
              to="/login"
              className={Style1.glow_btn}
              onClick={() => setMobileMenu(false)}
            >
              <span>Get Started</span>
            </Link>
          </div>
        </header>

        {/* IN-LINE AUTO-SLIDER REPLACED BUTTON HERE */}

        <div
          className={Style1.landing_content_1}
          style={{
            height: "100vh",
            width: "100%",
            padding: 0,
            margin: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className={Style1.inline_slider_wrapper}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Swiper
              modules={[
                Autoplay,
                Pagination,
                ...[
                  typeof window !== "undefined"
                    ? require("swiper/modules").EffectFade
                    : null,
                ].filter(Boolean),
              ]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              style={{ width: "100%", height: "100%" }}
              className={Style1.mySwiper}
            >
              {sliderData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "100%", height: "100%" }}
                >
                  <div
                    className={Style1.swiper_slide_inner}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.40)",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    ></div>

                    <img
                      src={windowWidth <= 768 ? slide.mobileImage : slide.image}
                      alt={slide.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />

                    <div
                      className={Style1.old_slider_title_wrapper}
                      style={{ zIndex: 2 }}
                    >
                      <h2 className={Style1.old_slider_title}>{slide.title}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            className={Style1.button_style1}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* MODAL (Kept intact just in case required elsewhere) */}

      {isModalOpen && (
        <div
          className={Style1.modal_overlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={Style1.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={Style1.close_modal}
              onClick={() => setIsModalOpen(false)}
            >
              <X size={30} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className={Style1.mySwiper}
            >
              {sliderData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={Style1.swiper_slide_inner}>
                    <img
                      src={windowWidth <= 768 ? slide.mobileImage : slide.image}
                      alt={slide.title}
                      className={Style1.swiper_img}
                    />

                    <div className={Style1.old_slider_title_wrapper}>
                      <h2 className={Style1.old_slider_title}>{slide.title}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* CARD SECTION */}

      <div className={Style1.card_container}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={Style1.blog_card}
            onClick={() => navigate(card.path)}
            style={{ cursor: "pointer" }}
          >
            <div className={Style1.card_image_wrapper}>
              <img src={card.image} alt={card.title} />

              <div className={Style1.wave_shape}></div>
            </div>

            <div className={Style1.card_content}>
              <div className={Style1.badge_row}>
                <span className={`${Style1.badge} ${Style1.success}`}>
                  {card.badge}
                </span>

                {card.icon}
              </div>

              <h4
                className={Style1.robo_text_top}
                style={{ color: darkMode ? "#ccc" : "#666" }}
              >
                {card.title}
              </h4>

              <h3 className={Style1.robo_text_main}>{card.subTitle}</h3>

              <p
                className={Style1.card_desc}
                style={{ color: darkMode ? "#aaa" : "#555" }}
              >
                {card.desc}
              </p>

              <div className={Style1.card_footer}>
                <div
                  className={Style1.explore_btn}
                  style={{
                    textDecoration: "none",

                    fontWeight: "600",

                    color: "#00bcd4",

                    display: "flex",

                    alignItems: "center",

                    gap: "5px",
                  }}
                >
                  {card.btnText} <MoveRight size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}

      <footer
        className={`${Style1.footer_container_landing} ${Style1.background_color_none}`}
      >
        <div className={Style1.footer_main}>
          <div className={Style1.footer_branding}>
            <div className={Style1.footer_logo}>
              <img
                src="https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/reallives-logo.svg"
                alt="RealLives"
              />
            </div>

            <p className={Style1.footer_desc}>
              The Largest Gamified Simulation Engine of Human Experience on the
              Planet. We're revolutionizing gaming by bringing back the power of
              imagination through immersive text-based simulations.
            </p>
          </div>

          <div className={Style1.footer_links_wrapper}>
            <div className={Style1.link_column}>
              <h3>Company</h3>

              <Link to="/reallives/school/about">About Us</Link>
              <Link to="/reallives/school/contact">Contact Us</Link>
            </div>

            <div className={Style1.link_column}>
              <h3>Social Media</h3>

              <a
                href="https://www.youtube.com/@reallivessimulation-empathy"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>

              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEbRyAm_bGh7wAAAZ4voPBoloXDarhnGcTXdJ-ArSowWI2dsaeJkt5Ty5-e_QFyCBGFfZEN8yiPqERueaxyira4Zgo1i0TkWzFt6ca-JrJ05TGcdodpNjpqbVo9XLLEKhI5KDI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Freallives-foundation%2F"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={Style1.footer_bottom}>
          <hr className={Style1.footer_divider} />

          <p>© 2026 RealLives Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RealLivesLanding;
