import { Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { licensesContent } from '@content/licenses';
import LicenseTierCard from '@components/common/LicenseTierCard/LicenseTierCard';
import Modal from '@components/common/Modal/Modal';
import styles from './LicenseDetailPage.module.css';

function IncludedPanel() {
  return (
    <aside className={styles.includedPanel} aria-label="What’s Included">
      <h2 className={styles.includedTitle}>What’s Included</h2>
      <p className={styles.includedDescription}>
        All plans include the same core features. No hidden costs. Complete transparency
      </p>

      <ul className={styles.includedList}>
        <li className={styles.includedItem}>
          <div className={styles.includedItemTop}>
            <div className={styles.includedIcon}>
              <span aria-hidden="true">R</span>
            </div>
            <p className={styles.includedItemTitle}>RealLives Simulator</p>
          </div>
          <p className={styles.includedItemDesc}>
            Live full life journeys across 193 countries, powered by real-world data and linked to UN
            SDGs. Build empathy through authentic global experiences.
          </p>
        </li>

        <li className={styles.includedItem}>
          <div className={styles.includedItemTop}>
            <div className={`${styles.includedIcon} ${styles.includedIconPurple}`}>
              <span aria-hidden="true">C</span>
            </div>
            <p className={styles.includedItemTitle}>RealLives ChangeMaker Index</p>
          </div>
          <p className={styles.includedItemDesc}>
            An advanced personality tracker measuring 18 competencies and generating a personalised
            ChangeMaker report based on your choices.
          </p>
        </li>

        <li className={styles.includedItem}>
          <div className={styles.includedItemTop}>
            <div className={`${styles.includedIcon} ${styles.includedIconPink}`}>
              <span aria-hidden="true">E</span>
            </div>
            <p className={styles.includedItemTitle}>Empathy Canvas</p>
          </div>
          <p className={styles.includedItemDesc}>
            Reflect on key life moments, capture insights, and deepen understanding through guided
            emotional reflections.
          </p>
        </li>

        <li className={styles.includedItem}>
          <div className={styles.includedItemTop}>
            <div className={`${styles.includedIcon} ${styles.includedIconDeepTeal}`}>
              <span aria-hidden="true">B</span>
            </div>
            <p className={styles.includedItemTitle}>RealBoard</p>
          </div>
          <p className={styles.includedItemDesc}>
            A private social network for schools that boosts student collaboration, communication, and
            shared learning.
          </p>
        </li>

        <li className={styles.includedItem}>
          <div className={styles.includedItemTop}>
            <div className={`${styles.includedIcon} ${styles.includedIconTeal}`}>
              <span aria-hidden="true">A</span>
            </div>
            <p className={styles.includedItemTitle}>Real AI</p>
          </div>
          <p className={styles.includedItemDesc}>
            Live full life journeys across 193 countries, powered by real-world data and linked to UN
            SDGs. Build empathy through authentic global experiences.
          </p>
        </li>
      </ul>
    </aside>
  );
}

export default function UniversityLicense() {
  const content = licensesContent.university;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTier, setActiveTier] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleTiers = showAll ? content.tiers : content.tiers.slice(0, 4);

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
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.subtitle}>{content.description}</p>
        </header>

        <div className={styles.topBackRow}>
          <button
            type="button"
            className={styles.topBackBtn}
            onClick={() => navigate('/reallives/licenses')}
          >
            ← Back to Licenses
          </button>
        </div>

        <section className={styles.mainGrid} aria-label="License tiers">
          <div>
            <div className={styles.tiersGrid}>
              {visibleTiers.map(tier => (
                <LicenseTierCard key={tier.id} tier={tier} onBuy={onBuy} />
              ))}
            </div>

            {content.tiers.length > 4 ? (
              <button
                type="button"
                className={styles.viewMoreBtn}
                onClick={() => setShowAll(prev => !prev)}
              >
                {showAll ? 'View less' : 'View more'}
              </button>
            ) : null}
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

