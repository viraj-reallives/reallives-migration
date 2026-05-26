import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { landingContent } from '@content/landing';
import styles from './LandingContactModal.module.css';

const { contactModal: contact } = landingContent;

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2} = ?`,
    answer: num1 + num2,
  };
}

export default function LandingContactModal({ open, onClose }) {
  const labels = contact?.formLabels ?? {};
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setUserCaptchaInput('');
    setCaptchaError('');
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    refreshCaptcha();
  }, [refreshCaptcha]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open, resetForm]);

  if (!open || !contact) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userCaptchaInput, 10) !== captcha.answer) {
      setCaptchaError('Incorrect answer. Please try again.');
      refreshCaptcha();
      return;
    }

    setIsSending(true);
    setCaptchaError('');

    const submissionData = new FormData();
    submissionData.append('access_key', contact.web3formsAccessKey);
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('message', formData.message);
    submissionData.append('subject', contact.formSubject);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setCaptchaError('Submission failed. Please try again.');
      }
    } catch {
      setCaptchaError('Network error. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim() &&
    userCaptchaInput.trim();

  const mailHref = contact.email ? `mailto:${contact.email}` : undefined;

  return createPortal(
    <div
      className={styles.overlay}
      role="presentation"
      onClick={onClose}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="landing-contact-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close contact form"
        >
          <X size={22} aria-hidden />
        </button>

        <header className={styles.header}>
          <h2 id="landing-contact-title" className={styles.title}>
            {contact.heading}
          </h2>
          <p className={styles.subtitle}>{contact.subheading}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.formPanel}>
            {submitted ? (
              <div className={styles.success}>
                <h3 className={styles.successTitle}>{labels.successTitle}</h3>
                <p className={styles.successBody}>{labels.successBody}</p>
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={resetForm}
                >
                  {labels.sendAgain}
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="landing-contact-name" className={styles.label}>
                    {labels.name}
                  </label>
                  <input
                    id="landing-contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="landing-contact-email" className={styles.label}>
                    {labels.email}
                  </label>
                  <input
                    id="landing-contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    htmlFor="landing-contact-message"
                    className={styles.label}
                  >
                    {labels.message}
                  </label>
                  <textarea
                    id="landing-contact-message"
                    name="message"
                    rows={5}
                    className={styles.textarea}
                    placeholder={labels.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <div className={styles.captchaRow}>
                    <label
                      htmlFor="landing-contact-captcha"
                      className={styles.captchaLabel}
                    >
                      {labels.captcha}{' '}
                      <strong className={styles.captchaQuestion}>
                        {captcha.question}
                      </strong>
                    </label>
                    <input
                      id="landing-contact-captcha"
                      type="number"
                      inputMode="numeric"
                      className={`${styles.input} ${styles.captchaInput}`}
                      placeholder={labels.captchaPlaceholder}
                      value={userCaptchaInput}
                      onChange={(e) => setUserCaptchaInput(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className={styles.captchaRefresh}
                      onClick={refreshCaptcha}
                      aria-label={labels.captchaRefresh}
                    >
                      ↻
                    </button>
                  </div>
                  {captchaError ? (
                    <p className={styles.error} role="alert">
                      {captchaError}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!isFormValid || isSending}
                >
                  {isSending ? labels.sending : labels.submit}
                </button>
              </form>
            )}
          </div>

          <aside className={styles.infoPanel} aria-label={contact.contactInformationHeading}>
            <h3 className={styles.infoTitle}>{contact.contactInformationHeading}</h3>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{contact.emailLabel}</span>
              {mailHref ? (
                <a href={mailHref} className={styles.infoLink}>
                  {contact.email}
                </a>
              ) : (
                <span className={styles.infoText}>{contact.email}</span>
              )}
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{contact.addressLabel}</span>
              <span className={styles.infoText}>{contact.address}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body,
  );
}
