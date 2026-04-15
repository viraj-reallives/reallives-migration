import styles from './PageHeader.module.css';
import Style1 from "../../costom_css/SchoolContact.override.module.css"


export default function PageHeader({ heading, subheading }) {
  if (!heading && !subheading) return null;

  return (
    <header className={`${styles.root} ${Style1.padding_bottom_none}`}>
      <div className={styles.inner}>
        {heading ? <h1 className={styles.heading}>{heading}</h1> : null}
        {subheading ? <p className={styles.subheading}>{subheading}</p> : null}
      </div>
    </header>
  );
}
