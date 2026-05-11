import { Link } from 'react-router-dom';
import {
  licensesContent,
  licenseHubCopy,
} from '@content/licenses';
import LicenseCard from '@components/common/LicenseCard/LicenseCard';
import styles from './LicenseHub.module.css';

const userOrder = ['school', 'university', 'homeschooler', 'gamer'];

export default function LicenseHub() {
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
