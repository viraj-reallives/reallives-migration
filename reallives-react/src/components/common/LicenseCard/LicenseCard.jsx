import { Link } from 'react-router-dom';
import styles from './LicenseCard.module.css';

function Icon({ userType }) {
  // Inline icons to avoid dependency on raster assets.
  switch (userType) {
    case 'school':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={styles.iconSvg}>
          <path
            d="M32 10 6 22l26 12 26-12-26-12Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M14 28v14c0 5 8 8 18 8s18-3 18-8V28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M32 34v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'university':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={styles.iconSvg}>
          <path
            d="M32 12 8 24l24 12 24-12-24-12Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M14 30v10c0 6 8 10 18 10s18-4 18-10V30"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M32 36v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'homeschooler':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={styles.iconSvg}>
          <circle cx="22" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="42" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <path
            d="M14 46c1-7 5-12 11-12s10 5 11 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M30 34h4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="32" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case 'gamer':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={styles.iconSvg}>
          <path
            d="M26 22h14c8 0 14 6 14 14l-2 10c-1 4-5 6-9 5l-4-2-4 2-4-2-4 2-4-2-4 2c-4 1-8-1-9-5l-2-10c0-8 6-14 14-14Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M24 32h8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 28v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="42" cy="30" r="2.5" fill="currentColor" />
          <circle cx="46" cy="34" r="2.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LicenseCard({ userType, license, to }) {
  return (
    <Link to={to} className={styles.link} aria-label={`${license?.title ?? 'License'} details`}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <Icon userType={userType} />
        </div>
        <div className={styles.title}>{license?.title}</div>
      </div>
    </Link>
  );
}

