import { useEffect } from 'react';
import styles from './GoogleTag.module.css';

const GTAG_ID = 'AW-16856549656';
const SCRIPT_MARKER = 'data-reallives-gtag';

/**
 * Google Ads gtag.js — injected once at app root. Matches Google’s snippet order.
 */
export default function GoogleTag() {
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
