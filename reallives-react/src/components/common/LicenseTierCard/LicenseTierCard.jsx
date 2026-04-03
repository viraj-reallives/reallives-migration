import styles from './LicenseTierCard.module.css';

function parseMaxLives(benefits) {
  const list = Array.isArray(benefits) ? benefits : [];
  const asString = list.filter(b => typeof b === 'string' && b.trim());

  const maxLives = asString.find(b => /Max Lives/i.test(b));
  if (maxLives) return maxLives;

  const students = asString.find(b => /\bstudents?\b/i.test(b) || /\bStudent\b/.test(b));
  if (students) return students;

  return asString[0] ?? '';
}

export default function LicenseTierCard({ tier, onBuy }) {
  const validity = tier?.period ?? '';
  const maxLives = parseMaxLives(tier?.benefits);

  return (
    <div className={styles.card} role="group" aria-label={tier?.name ?? 'License tier'}>
      <div className={styles.tierName}>{tier?.name}</div>

      <div className={styles.priceRow}>
        <div className={styles.price}>{tier?.price}</div>
      </div>

      <div className={styles.statsRow} aria-label="Validity and maximum lives">
        <div className={styles.stat}>{validity}</div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.stat}>{maxLives}</div>
      </div>

      <div className={styles.buyRow}>
        <button
          type="button"
          className={styles.buyBtn}
          onClick={() => onBuy?.(tier)}
          aria-label={`Buy License for ${tier?.name ?? ''}`}
        >
          Buy License
          <span className={styles.buyArrow} aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

