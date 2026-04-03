import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@components/common/Modal/Modal';
import LicenseTierCard from '@components/common/LicenseTierCard/LicenseTierCard';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './GamerPricing.module.css';

const GAMER_REGISTER_URL = 'https://reallivesworld.com/register-gamer';

function tierForCard(tier) {
  if (!tier) return tier;
  return {
    name: tier.name,
    price: tier.price,
    period: tier.validityLabel ?? tier.period,
    benefits: [tier.maxLivesLabel].filter(Boolean),
  };
}

export default function GamerPricing() {
  const { pricing } = useSiteContent();
  const [modalOpen, setModalOpen] = useState(false);
  const modal = pricing?.purchaseModal;

  if (!pricing) {
    return null;
  }

  const savings = pricing.savingsNote;
  const showSavings =
    savings?.text &&
    savings?.adjacentTierId &&
    pricing.tiers?.some((t) => t.id === savings.adjacentTierId);

  function handleConfirm() {
    window.location.href = GAMER_REGISTER_URL;
  }

  return (
    <div className={styles.page} id="pricing">
      <header className={styles.headerBlock}>
        {pricing.sectionHeading ? <h1 className={styles.sectionTitle}>{pricing.sectionHeading}</h1> : null}
      </header>

      {showSavings ? <p className={styles.savingsBanner}>{savings.text}</p> : null}

      {pricing.whatsIncluded?.heading || pricing.whatsIncluded?.description ? (
        <div className={styles.included}>
          {pricing.whatsIncluded.heading ? (
            <h2 className={styles.includedHeading}>{pricing.whatsIncluded.heading}</h2>
          ) : null}
          {pricing.whatsIncluded.description ? (
            <p className={styles.includedDesc}>{pricing.whatsIncluded.description}</p>
          ) : null}
        </div>
      ) : null}

      {pricing.toolInfoNote ? <p className={styles.toolNote}>{pricing.toolInfoNote}</p> : null}

      <div className={styles.grid}>
        {pricing.tiers?.map((tier) => (
          <LicenseTierCard
            key={tier.id ?? tier.name}
            tier={tierForCard(tier)}
            onBuy={() => setModalOpen(true)}
          />
        ))}
      </div>

      {pricing.includedProductCards?.length ? (
        <div className={styles.productCardsWrap}>
          <div className={styles.productCards}>
            {pricing.includedProductCards.map((card) => (
              <article key={card.title} className={styles.productCard}>
                {card.imagePath ? (
                  <img src={card.imagePath} alt="" className={styles.productThumb} />
                ) : (
                  <span />
                )}
                <div>
                  {card.title ? <h3 className={styles.productTitle}>{card.title}</h3> : null}
                  {card.description ? <p className={styles.productDesc}>{card.description}</p> : null}
                  {card.featureTags?.length ? (
                    <div className={styles.tags}>
                      {card.featureTags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {card.learnMoreLinkText && card.productTabId ? (
                    <Link to={`/reallives/gamer/products#${card.productTabId}`} className={styles.learnMore}>
                      {card.learnMoreLinkText}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

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
