import { Link } from 'react-router-dom';
import styles1 from '../components/costom_css/portal_coustome.module.css';
import styles from './Portal.module.css';
import logo_rl from "../add-image/logo.svg";
import rcmi_logo from "../add-image/rcmi-logo.png";
import { MoveRight } from "lucide-react";


function RealLivesMark() {
  return (
    <svg
      className={styles.cardIconSvg}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.15" />
      <path
        d="M19 36c0-11 7-19 13-19s13 8 13 19-7 19-13 19-13-8-13-19Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M25 38c3 2 6 3 7 3s4-1 7-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 27h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChangeMakerMark() {
  return (
    <svg
      className={styles.cardIconSvg}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="12"
        y="14"
        width="40"
        height="36"
        rx="10"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M22 45V19l20 8-20 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M46 19v26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Portal() {
  return (
    <main className={`${styles.page} ${styles1.background_black}`}>
     
      <img
        className={`${styles.bgImage}  ${styles1.portalPage}`}
        src="https://d2jn82ki4w4ftn.cloudfront.net/starting-background-img.png"
        alt="Background"
      />
      {/* <div className={styles.bgOverlay} aria-hidden="true" /> */}

      <div className={`${styles.content} ${styles1.content_overwrite_style}`}>
        <div className={styles.heading}>
          <p className={`${styles.chooseTitle} ${styles1.choose_title_starter}`}>Choose Your Experience</p>
          <p className={`${styles.exploreTitle} ${styles1.explore_title_starter}`}>Explore Lives. Create Impact.</p>
        </div>

        <div className={styles.cards}>

          <Link to="/reallives" className={styles.cardLink} aria-label="RealLives">

            <div className={`${styles.card} ${styles.cardRealLives} ${styles1.grid_cards_style}`}>

              <div className={`${styles.cardTop} ${styles1.head_starter_box}`}>
                {/* <RealLivesMark /> */}
                <div className={styles1.head_logo_reallives}>
                  <img className={styles1.image_fit_contain} src={logo_rl} alt="RealLives Logo" />
                </div>
                
              </div> 
              

              <div className={styles.cardFeatures}  aria-hidden="true">

                <span className={`${styles.featurePill} ${styles1.fetures_inner_box}`}>live a life</span>
                <span className={`${styles.featurePill} ${styles1.fetures_inner_box}`}>real world data</span>
                <span className={`${styles.featurePill} ${styles1.fetures_inner_box}`}>Empathy simulation</span>
              </div>

              <div className={styles.cardBody}>
                <h2 className={`${styles.cardHeading} ${styles1.simulation_title_text}`}>RealLives Simulation Platform</h2>
                <p className={`${styles.cardDescription} ${styles1.simulation_desc_text}`}>Experience lives across the world</p>
              
                <p className={`${styles.cardLongDescription} ${styles1.starter_mid_desc}`}>
                  Step into the lives of people from different countries and backgrounds.
                  <span className={styles.desktopOnly}>
                    {' '}
                    {'  '}
                    Build empathy, understand global systems, and make life decisions through immersive simulation.
                  </span>
                </p>
              </div>


              <div className={`${styles.cardCta} ${styles1.button_continue_card}`} aria-hidden="true">
                Continue to RealLives  <MoveRight />
              </div>

            </div>

          </Link>

          <a
            href="https://changemakerindex.com/"
            className={styles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ChangeMaker Index"
          >

            <div className={`${styles.card} ${styles.cardChangeMaker} ${styles1.grid_cards_style}`}>

              <div className={`${styles.cardTop} ${styles1.head_starter_box} ${styles1.head_color_changemaker }`}>

                  <div className={styles1.head_logo_reallives}>
                  <img className={styles1.image_fit_contain} src={rcmi_logo} alt="ChangeMaker Index Logo" />
                </div>
                
              </div>
            

              <div className={styles.cardFeatures} aria-hidden="true">

                <span className={`${styles.featurePill} ${styles1.change_text_changemaker}`}>21ST CENTURY SKILLS</span>
                <span className={`${styles.featurePill} ${styles1.change_text_changemaker}`}>EMPATHY</span>
                <span className={`${styles.featurePill} ${styles1.change_text_changemaker}`}>sdg lived experience</span>

                
              </div>


              <div className={styles.cardBody}>
                <h2 className={`${styles.cardHeading} ${styles1.simulation_title_text}`}>RealLives ChangeMaker Index (RCMI)</h2>
                <p className={`${styles.cardDescription} ${styles.cardDescriptionAlt} ${styles1.title_changemaker_color }`}>
                  Turn insight into real-world impact
                </p>
                
                <p className={`${styles.cardLongDescription} ${styles1.starter_mid_desc}`}>
                  Measure and grow across 18 changemaking competencies. Reflect on your decisions,
                  understand your impact, and build skills that prepare you for future careers and
                  responsible leadership.
                </p>
              </div>

              {/* ${styles1.button_continue_card} */}

              <div className={`${styles.cardCta}   ${styles1.button_continue_card_changemaker} `} aria-hidden="true">
                Go to RealLives ChangeMaker Index <MoveRight />
              </div>
            </div>

          </a>
          
        </div>
         
        <p className={`${styles.copyright} ${styles1.no_copy_write_title}`}>
          © 2025 RealLives World. All rights reserved.
        </p>
      </div>
    </main>
  );
}

