import styles from './PageHeader.module.css';

export default function PageHeader({ heading, subheading }) {
  if (!heading && !subheading) return null;

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        {heading ? <h1 className={styles.heading}>{heading}</h1> : null}
        {subheading ? <p className={styles.subheading}>{subheading}</p> : null}
      </div>
    </header>
  );
}
