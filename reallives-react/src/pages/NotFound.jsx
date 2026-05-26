import { Link, useLocation } from 'react-router-dom';
import { useSiteTheme } from '@hooks/useSiteTheme';
import styles from './NotFound.module.css';

export default function NotFound() {
  useSiteTheme('light');
  const { pathname, search, hash } = useLocation();
  const attempted = `${pathname}${search}${hash}`;

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>404 — Page Not Found</h1>
        <p className={styles.pathLabel}>You tried to open</p>
        <div className={styles.pathBox}>
          <code>{attempted || '/'}</code>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            Go to Home
          </Link>
          <Link to="/reallives" className={styles.linkSecondary}>
            Go to RealLives
          </Link>
        </div>
      </div>
    </div>
  );
}
