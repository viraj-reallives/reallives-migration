import { Link } from 'react-router-dom';
import { licensesContent } from '@content/licenses';
import LicenseCard from '@components/common/LicenseCard/LicenseCard';
import styles from './LicenseHub.module.css';
import Style1 from "../../pages/licenses/override_licences_css/LicenseHub_override.module.css"

const userOrder = ['school', 'university', 'homeschooler', 'gamer'];

export default function LicenseHub() {
  return (
    <main className={`${styles.page} ${Style1.license_conatier_main}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Select your segment</h1>
          <p className={`${styles.subheading} ${Style1.subheading_description}`}>
            Flexible licensing options designed for every type of learner and explorer
          </p>
        </header>

        <section className={`${styles.grid} ${Style1.grid_university_style}`} aria-label="Select a license type">
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

