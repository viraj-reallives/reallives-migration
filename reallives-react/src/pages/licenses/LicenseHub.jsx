import { Link } from 'react-router-dom';
import { licensesContent } from '@content/licenses';
import LicenseCard from '@components/common/LicenseCard/LicenseCard';
import styles from './LicenseHub.module.css';

const userOrder = ['school', 'university', 'homeschooler', 'gamer'];

export default function LicenseHub() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Select your segment</h1>
          <p className={styles.subheading}>
            Flexible licensing options designed for every type of learner and explorer
          </p>
        </header>

        <section className={styles.grid} aria-label="Select a license type">
          {userOrder.map(userType => {
            const license = licensesContent[userType];
            if (!license) return null;
            const to = `/reallives/licenses/${userType}`;
            return (
              <LicenseCard
                key={userType}
                userType={userType}
                license={license}
                to={to}
              />
            );
          })}
        </section>

        {/* Keeping a tiny internal link for accessibility/testing */}
        <div className={styles.backRow}>
          <Link to="/" className={styles.backLink}>
            Back to Portal
          </Link>
        </div>
      </div>
    </main>
  );
}

