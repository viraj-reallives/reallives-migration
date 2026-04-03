import { useState } from 'react';
import Modal from '@components/common/Modal/Modal';
import LicenseTierCard from '@components/common/LicenseTierCard/LicenseTierCard';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolPricing.module.css';

const SCHOOL_REGISTER_URL = 'https://reallivesworld.com/register-school';

function tierForCard(tier) {
  if (!tier) return tier;
  const benefits = [tier.studentCount, ...(tier.features ?? [])].filter(Boolean);
  return {
    ...tier,
    benefits,
  };
}

export default function SchoolPricing() {
  const { pricing } = useSiteContent();
  const [modalOpen, setModalOpen] = useState(false);
  const modal = pricing?.purchaseModal;

  if (!pricing) {
    return null;
  }

  function handleConfirm() {
    window.open(SCHOOL_REGISTER_URL, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={styles.page} id="pricing">
      <header className={styles.header}>
        {pricing.heading ? <h1 className={styles.title}>{pricing.heading}</h1> : null}
      </header>

      {pricing.includedHeading || pricing.includedDescription ? (
        <div className={styles.included}>
          {pricing.includedHeading ? (
            <h2 className={styles.includedHeading}>{pricing.includedHeading}</h2>
          ) : null}
          {pricing.includedDescription ? (
            <p className={styles.includedDesc}>{pricing.includedDescription}</p>
          ) : null}
        </div>
      ) : null}

      {pricing.toolInfoNote ? <p className={styles.toolNote}>{pricing.toolInfoNote}</p> : null}

      <div className={styles.grid}>
        {pricing.tiers?.map((tier) => (
          <LicenseTierCard
            key={tier.name}
            tier={tierForCard(tier)}
            onBuy={() => setModalOpen(true)}
          />
        ))}
      </div>

      {modal ? (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          heading={modal.heading}
          body={modal.body}
          confirmText={modal.confirmText}
          onConfirm={handleConfirm}
        />
      ) : null}
    </div>
  );
}
