import { useState } from 'react';
import PageHeader from '@components/common/PageHeader/PageHeader';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from '../school/SchoolContact.module.css';

export default function HomeschoolerContact() {
  const { contact } = useSiteContent();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!contact) {
    return null;
  }

  const labels = contact.formLabels ?? {};
  const mailHref = contact.email ? `mailto:${contact.email}` : undefined;

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email, message });
    // connect to email API or backend here
  }

  return (
    <div className={styles.page}>
      <PageHeader heading={contact.heading} />

      <div className={styles.grid}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                {labels.name}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                {labels.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                {labels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className={styles.textarea}
                placeholder={labels.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              {labels.submit}
            </button>
          </form>
        </div>

        <aside className={styles.infoSection} aria-label={contact.contactInformationHeading}>
          <h2 className={styles.infoTitle}>{contact.contactInformationHeading}</h2>

          <div className={styles.item}>
            <svg className={styles.icon} aria-hidden viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className={styles.itemBody}>
              <h3 className={styles.itemLabel}>{contact.emailLabel}</h3>
              {mailHref ? (
                <a href={mailHref} className={styles.emailLink}>
                  {contact.email}
                </a>
              ) : (
                <p className={styles.addressText}>{contact.email}</p>
              )}
            </div>
          </div>

          <div className={styles.item}>
            <svg className={styles.icon} aria-hidden viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className={styles.itemBody}>
              <h3 className={styles.itemLabel}>{contact.addressLabel}</h3>
              <p className={styles.addressText}>{contact.address}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
