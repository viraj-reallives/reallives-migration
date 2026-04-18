import { useState, useEffect } from "react";
import PageHeader from "@components/common/PageHeader/PageHeader";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolContact.module.css";
import Style1 from "../school/SchoolContact_override.module.css"

export default function SchoolContact() {
  const { contact } = useSiteContent();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!contact) return null;

  const labels = contact.formLabels ?? {};
  const mailHref = contact.email ? `mailto:${contact.email}` : undefined;


  useEffect(() => {
    generateCaptcha();
  }, []);

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

    if (parseInt(userCaptchaInput) !== captchaAnswer) {
      setCaptchaError("Incorrect CAPTCHA, please try again.");
      generateCaptcha();
      return;
    }

    setIsSending(true);

    const submissionData = new FormData();
    submissionData.append("access_key", "66469d30-3566-42fe-a853-2d5a0404a9b5");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("subject", "School Contact Form");

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
        
        {/* ✅ FORM */}
        <div className={styles.formSection}>
          {submitted ? (
            <div>
              <h3 style={{ color: "green" }}>
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
            <form className={styles.form} onSubmit={handleSubmit}>
              
              <div className={styles.field}>
                <label className={styles.label}>{labels.name}</label>
                <input
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{labels.email}</label>
                <input
                  name="email"
                  type="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{labels.message}</label>
                <textarea
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              
              <div className={styles.field}>
                <label>
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
                  <button type="button" className={Style1.refresh_button} onClick={generateCaptcha}>
                    ↻
                  </button>
                </div>

                {captchaError && (
                  <p style={{ color: "red" }}>{captchaError}</p>
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

        
        <aside className={`${styles.infoSection} ${Style1.infoSection_override_style}`}>
          <h2 className={styles.infoTitle}>
            {contact.contactInformationHeading}
          </h2>

          <div>
            <h3>{contact.emailLabel}</h3>
            {mailHref ? (
              <a href={mailHref}>{contact.email}</a>
            ) : (
              <p>{contact.email}</p>
            )}
          </div>

          <div>
            <h3>{contact.addressLabel}</h3>
            <p>{contact.address}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}