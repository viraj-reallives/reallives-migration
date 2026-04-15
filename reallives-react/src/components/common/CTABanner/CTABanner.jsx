import { Link } from 'react-router-dom';
import styles from './CTABanner.module.css';
import Style1 from "../../costom_css/SchoolImpact_override.module.css"


export default function CTABanner({ heading, subheading, buttonText, buttonPath }) {
  if (!heading && !subheading && !buttonText) return null;

  return (
    <section className={`${styles.section} ${Style1.background_change_color}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {heading ? <h2 className={styles.title}>{heading}</h2> : null}
          {subheading ? <p className={styles.subtitle}>{subheading}</p> : null}
          {buttonText && buttonPath ? (
            <div className={styles.actions}>
              <Link to={buttonPath} className={styles.button}>
                {buttonText}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
