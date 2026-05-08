import { useEffect } from 'react';
import styles from './GamerGoogleTag.module.css';

const GTAG_ID = 'AW-16856549656';
const SCRIPT_MARKER = 'data-reallives-gamer-gtag';

/**
 * Injects the Google tag for Google Ads (gtag.js) into document.head while the
 * gamer sub-site is mounted. Matches Google’s recommended snippet order.
 */
export default function GamerGoogleTag() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
    script.setAttribute(SCRIPT_MARKER, '');

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    document.head.prepend(script);

    gtag('js', new Date());
    gtag('config', GTAG_ID);

    return () => {
      script.remove();
    };
  }, []);

  return <span className={styles.hidden} aria-hidden="true" />;
}
