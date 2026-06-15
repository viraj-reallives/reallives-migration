import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {
  getMobileAppStoreUrl,
  PLAY_STORE_URL,
} from '@/utils/registrationRedirect';
import rlLogo from '@/add-image/logo.svg';
import styles from './MobileAppBanner.module.css';

const STORAGE_KEY = 'rl-mobile-app-banner-dismissed';
const MOBILE_MQ = '(max-width: 768px)';

export default function MobileAppBanner() {
  const [visible, setVisible] = useState(false);
  const [storeUrl, setStoreUrl] = useState(PLAY_STORE_URL);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);

    const sync = () => {
      const dismissed = localStorage.getItem(STORAGE_KEY) === '1';
      const isMobile = mq.matches;
      const url = getMobileAppStoreUrl() ?? PLAY_STORE_URL;

      setStoreUrl(url);
      setVisible(isMobile && !dismissed);
    };

    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('has-mobile-app-banner', visible);
    return () => document.body.classList.remove('has-mobile-app-banner');
  }, [visible]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className={styles.banner}
      role="region"
      aria-label="Download the RealLives app"
    >
      <button
        type="button"
        className={styles.closeBtn}
        onClick={dismiss}
        aria-label="Dismiss download banner"
      >
        <X size={18} strokeWidth={2} aria-hidden="true" />
      </button>

      <img src={rlLogo} alt="" className={styles.icon} width={44} height={44} />

      <div className={styles.copy}>
        <span className={styles.title}>RealLives Simulation</span>
        <span className={styles.subtitle}>Live immersive life journeys</span>
      </div>

      <a
        href={storeUrl}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get app
      </a>
    </aside>
  );
}
