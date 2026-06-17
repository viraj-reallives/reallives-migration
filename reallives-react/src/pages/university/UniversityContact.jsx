// import { useState } from 'react';
// import PageHeader from '@components/common/PageHeader/PageHeader';
// import { useSiteContent } from '@hooks/useSiteContent';
// import styles from '../school/SchoolContact.module.css';

// export default function UniversityContact() {
//   const { contact } = useSiteContent();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   if (!contact) {
//     return null;
//   }

//   const labels = contact.formLabels ?? {};
//   const mailHref = contact.email ? `mailto:${contact.email}` : undefined;

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log({ name, email, message });
//     // connect to email API or backend here
//   }

//   return (
//     <div className={styles.page}>
//       <PageHeader heading={contact.heading} />

//       <div className={styles.grid}>
//         <div className={styles.formSection}>
//           <form className={styles.form} onSubmit={handleSubmit} noValidate>
//             <div className={styles.field}>
//               <label htmlFor="contact-name" className={styles.label}>
//                 {labels.name}
//               </label>
//               <input
//                 id="contact-name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 className={styles.input}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.field}>
//               <label htmlFor="contact-email" className={styles.label}>
//                 {labels.email}
//               </label>
//               <input
//                 id="contact-email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 className={styles.input}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.field}>
//               <label htmlFor="contact-message" className={styles.label}>
//                 {labels.message}
//               </label>
//               <textarea
//                 id="contact-message"
//                 name="message"
//                 rows={5}
//                 className={styles.textarea}
//                 placeholder={labels.messagePlaceholder}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit" className={styles.submit}>
//               {labels.submit}
//             </button>
//           </form>
//         </div>

//         <aside className={styles.infoSection} aria-label={contact.contactInformationHeading}>
//           <h2 className={styles.infoTitle}>{contact.contactInformationHeading}</h2>

//           <div className={styles.item}>
//             <svg className={styles.icon} aria-hidden viewBox="0 0 24 24" fill="currentColor">
//               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//             </svg>
//             <div className={styles.itemBody}>
//               <h3 className={styles.itemLabel}>{contact.emailLabel}</h3>
//               {mailHref ? (
//                 <a href={mailHref} className={styles.emailLink}>
//                   {contact.email}
//                 </a>
//               ) : (
//                 <p className={styles.addressText}>{contact.email}</p>
//               )}
//             </div>
//           </div>

//           <div className={styles.item}>
//             <svg className={styles.icon} aria-hidden viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//             </svg>
//             <div className={styles.itemBody}>
//               <h3 className={styles.itemLabel}>{contact.addressLabel}</h3>
//               <p className={styles.addressText}>{contact.address}</p>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import PageHeader from "@components/common/PageHeader/PageHeader";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "../school/SchoolContact.module.css";
import Style1 from "../school/SchoolContact_override.module.css";

export default function UniversityContact() {
  const { contact } = useSiteContent();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UI & Submission States
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  if (!contact) return null;

  const labels = contact.formLabels ?? {};
  const mailHref = contact.email ? `mailto:${contact.email}` : undefined;

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(num1 + num2);
    setUserCaptchaInput("");
    setCaptchaError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (parseInt(userCaptchaInput) !== captchaAnswer) {
      setCaptchaError("Incorrect CAPTCHA, please try again.");
      generateCaptcha();
      return;
    }

    setIsSending(true);

    const submissionData = new FormData();
    submissionData.append("access_key", "66469d30-3566-42fe-a853-2d5a0404a9b5"); // Aapki API Key
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("subject", "University Department Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setCaptchaError("Submission failed. Try again.");
      }
    } catch (error) {
      setCaptchaError("Network error.");
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.message && userCaptchaInput;

  return (
    <div className={styles.page}>
      <PageHeader heading={contact.heading} />

      <div className={styles.grid}>
        {/* ✅ FORM SECTION */}
        <div className={styles.formSection}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ color: "green", marginBottom: '15px' }}>
                Response submitted successfully!
              </h3>
              <button
                onClick={() => {
                  setSubmitted(false);
                  generateCaptcha();
                }}
                className={styles.submit}
              >
                Send Again
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  {labels.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
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
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* CAPTCHA FIELD */}
              <div className={styles.field}>
                <label className={styles.label}>
                  Security Check: <strong>{captchaQuestion}</strong>
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="number"
                    value={userCaptchaInput}
                    onChange={(e) => setUserCaptchaInput(e.target.value)}
                    className={styles.input}
                    placeholder="Answer"
                    required
                  />
                  <button 
                    type="button" 
                    className={Style1.refresh_button} 
                    onClick={generateCaptcha}
                    title="Refresh Captcha"
                  >
                    ↻
                  </button>
                </div>
                {captchaError && (
                  <p style={{ color: "red", fontSize: '0.85rem', marginTop: '5px' }}>{captchaError}</p>
                )}
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={!isFormValid || isSending}
              >
                {isSending ? "Sending..." : labels.submit}
              </button>
            </form>
          )}
        </div>

        {/* ✅ INFO SECTION (WITH ICONS) */}
        <aside className={`${styles.infoSection} ${Style1.infoSection_override_style}`} aria-label={contact.contactInformationHeading}>
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