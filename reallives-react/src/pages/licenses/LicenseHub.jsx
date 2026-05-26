import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  licensesContent,
  licenseHubCopy,
} from '@content/licenses';
import LicenseCard from '@components/common/LicenseCard/LicenseCard';
import styles from './LicenseHub.module.css';

const userOrder = ['school', 'university', 'homeschooler', 'gamer'];

/** Keeps document chrome light while this route is mounted (landing may leave dark on body). */
function useLicenseHubLightChrome() {
  useEffect(() => {
    document.body.classList.add('license-hub-light');
    return () => {
      document.body.classList.remove('license-hub-light');
    };
  }, []);
}

export default function LicenseHub() {
  useLicenseHubLightChrome();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{licenseHubCopy.heading}</h1>
          <p className={styles.subheading}>{licenseHubCopy.subheading}</p>
        </header>

        <section className={styles.grid} aria-label="Select a license type">
          {userOrder.map((userType) => {
            const license = licensesContent[userType];
            if (!license) return null;
            return (
              <LicenseCard key={userType} userType={userType} license={license} />
            );
          })}
        </section>

        <div className={styles.backRow}>
          <Link to={licenseHubCopy.backPath} className={styles.backLink}>
            {licenseHubCopy.backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
