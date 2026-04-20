import { coreVisionQuestions } from '@content/coreVision';
import styles from './CoreVisionCards.module.css';

export default function CoreVisionCards({ compact = false }) {
  return (
    <div className={`${styles.grid} ${compact ? styles.gridCompact : ''}`}>
      {coreVisionQuestions.map((item) => (
        <article key={item.question} className={`${styles.card} ${compact ? styles.cardCompact : ''}`} tabIndex={0}>
          <div className={styles.cardFront}>
            <p className={styles.cardEyebrow}>Core Question</p>
            <h2 className={styles.cardTitle}>{item.question}</h2>
            <p className={styles.cardHint}>Hover to reveal definition</p>
          </div>
          <div className={styles.cardAnswer}>
            <p className={styles.cardAnswerLabel}>Definition</p>
            <p className={styles.cardAnswerText}>{item.definition}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
