import { useEffect } from 'react';
import styles from './Modal.module.css';

export default function Modal({
  isOpen,
  onClose,
  heading,
  body,
  confirmText,
  onConfirm,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={heading}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.body}>{body}</p>

        <div className={styles.actions}>
          <button type="button" className={styles.secondaryBtn} onClick={onClose}>
            Go Back
          </button>
          <button type="button" className={styles.primaryBtn} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

