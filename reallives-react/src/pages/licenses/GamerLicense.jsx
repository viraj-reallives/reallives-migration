import { Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { licensesContent } from '@content/licenses';
import LicenseTierCard from '@components/common/LicenseTierCard/LicenseTierCard';
import Modal from '@components/common/Modal/Modal';
import styles from './LicenseDetailPage.module.css';
import Style1 from "../../pages/licenses/override_licences_css/LicenseHub_override.module.css";
import Rcmi_pricing_logo from "../../add-image/RCMI-logo-pricing.svg";
import Emapthy_pricing_logo from "../../add-image/empathy-logo-pricing.svg";
import Rl_logo_pricing from "../../add-image/real-r-included.svg";
import Realboard_pricing_logo from "../../add-image/realboard.svg";

function IncludedPanel() {
  return (

    <aside
      className={`${styles.includedPanel} ${Style1.includedPanel_override_style}`}
      aria-label="What’s Included"
    >
      <h2 className={`${styles.includedTitle} ${Style1.color_cccccc}`}>
        What’s Included
      </h2>



      <p className={`${styles.includedDescription} ${Style1.color_cccccc}`}>
        All plans include the same core features. No hidden costs. Complete
        transparency
      </p>

      <ul className={`${styles.includedList} ${Style1.includedList_override_style}`}>

        <li className={styles.includedItem}>

          <span className={Style1.box_product_container}>

            <div className={`${styles.includedItemTop} ${Style1.flex_center_gap_10px}`}>

              <div className={Style1.icon_row_box}>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/q_auto/f_auto/v1771840605/reallives-logo_v5cdkc.png"
                  alt=""
                />
              </div>

              <p className={`${styles.includedItemTitle} ${Style1.include_title_text}`}>
                RealLives<br />Simulator
              </p>
            </div>
           

            <p className={`${styles.includedItemDesc}  ${Style1.color_cccccc}` }>
              Live full life journeys across 193 countries, powered by
              real-world data and linked to UN SDGs. Build empathy through
              authentic global experiences.
            </p>

          </span>
        </li>

        <li className={styles.includedItem}>

          <div className={Style1.box_product_container}>

            <div className={`${styles.includedItemTop}  ${Style1.flex_center_gap_10px}`}>
              <div className={Style1.icon_row_box}>
                <img src={Rcmi_pricing_logo} alt="" />
              </div>

              <p className={`${styles.includedItemTitle} ${Style1.include_title_text}`}>
                RealLives ChangeMaker <br /> Index
              </p>
            </div>
            <p className={`${styles.includedItemDesc} ${Style1.color_cccccc}`}>
              An advanced personality tracker measuring 18 competencies and
              generating a personalised ChangeMaker report based on your
              choices.
            </p>
          </div>
        </li>

      
        <li className={styles.includedItem}>
          <span className={Style1.box_product_container}>

            <div className={`${styles.includedItemTop} ${Style1.flex_center_gap_10px}`}>
              <div className={Style1.icon_row_box}>
                <img src={Emapthy_pricing_logo} alt="" />
              </div>

              <p
                className={`${styles.includedItemTitle} ${Style1.include_title_text}`}
              >
                Empathy Canvas
              </p>
            </div>
            <p className={`${styles.includedItemDesc}  ${Style1.color_cccccc}`}>
              Reflect on key life moments, capture insights, and deepen
              understanding through guided emotional reflections.
            </p>
          </span>
        </li>

         
        <li className={styles.includedItem}>
          <span className={Style1.box_product_container}>

            <div className={`${styles.includedItemTop} ${Style1.flex_center_gap_10px}`}>
              <div className={Style1.icon_row_box}>
                <img src={Realboard_pricing_logo} alt="" />
              </div>

              <p
                className={`${styles.includedItemTitle} ${Style1.include_title_text}`}
              >
                RealBoard
              </p>
            </div>

            <p className={`${styles.includedItemDesc} ${Style1.color_cccccc}`}>
              A private social network for schools that boosts student
              collaboration, communication, and shared learning.
            </p>
          </span>
        </li>

      
        <li className={styles.includedItem}>
          <span className={Style1.box_product_container}>
            <div className={`${styles.includedItemTop} ${Style1.flex_center_gap_10px}`}>
              <div className={Style1.icon_row_box}>
                <img src={Rl_logo_pricing} alt="" />
              </div>
              <p
                className={`${styles.includedItemTitle} ${Style1.include_title_text}`}
              >
                Real AI
              </p>
            </div>

            <p className={`${styles.includedItemDesc} ${Style1.color_cccccc} `}>
              Live full life journeys across 193 countries, powered by
              real-world data and linked to UN SDGs. Build empathy through
              authentic global experiences.
            </p>
          </span>
        </li>

      </ul>
    </aside>

  );
}

export default function GamerLicense() {
  const content = licensesContent.gamer;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTier, setActiveTier] = useState(null);

  const modalBody = useMemo(() => {
    if (!activeTier) return '';
    return `You'll be redirected to a quick registration form to get started with your ${activeTier.name} License. No payment is required at this stage, we'll only collect basic details.`;
  }, [activeTier]);

  const onBuy = tier => {
    setActiveTier(tier);
    setIsModalOpen(true);
  };

  const onConfirm = () => {
    if (content.registerUrl) {
      window.open(content.registerUrl, '_blank', 'noopener,noreferrer');
    }
    setIsModalOpen(false);
  };

  return (
    <main className={styles.page}>

      <div className={`${styles.container} ${Style1.license_conatier_main} ${Style1.max_width} ${Style1.container_override_style}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          
          <p className={`${styles.subtitle} ${Style1.color_cccccc } `}>{content.description}</p>
        </header>

        <div className={styles.topBackRow}>
          <button
            type="button"
            className={`${styles.topBackBtn} ${Style1.color_cccccc }`}
            onClick={() => navigate('/reallives/licenses')}
          >
            ← Back to Licenses
          </button>
        </div>

         
        <section className={`${styles.mainGrid} ${Style1.left_side_container}`} aria-label="License tiers">
          <div className={styles.tiersGrid}>
            {content.tiers.slice(0, 4).map(tier => (
              <LicenseTierCard key={tier.id} tier={tier} onBuy={onBuy} />
            ))}
          </div>

          <IncludedPanel />
        </section>

        <div className={styles.bottomRow} aria-label="License actions">
          <button
            type="button"
            className={styles.bottomBtn}
            onClick={() => navigate('/reallives/licenses')}
          >
            Back
          </button>
          <Link to={content.visitPath} className={`${styles.bottomBtn} ${styles.bottomBtnPrimary}`}>
            Visit Website
          </Link>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="You're almost there"
        body={modalBody}
        confirmText="Start Registration"
        onConfirm={onConfirm}
      />
    </main>
  );
}

