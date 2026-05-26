import { licenseHubMaterialIcon } from '@content/licenses';
import styles from './LicenseCard.module.css';

export default function LicenseCard({ userType, license }) {
  const href = license?.externalPricingUrl;
  const label = license?.title ?? 'License';
  const symbol = licenseHubMaterialIcon[userType] ?? 'sell';

  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: open pricing on RealLives (new tab)`}
    >
      <div className={`${styles.card} ${styles[userType] ?? ''}`}>
        <div className={styles.iconWrap}>
          <span
            className={`material-symbols-outlined ${styles.materialIcon}`}
            aria-hidden
          >
            {symbol}
          </span>
        </div>
        <div className={styles.title}>{license?.title}</div>
        {license?.description ? (
          <p className={styles.description}>{license.description}</p>
        ) : null}
      </div>
    </a>
  );
}
