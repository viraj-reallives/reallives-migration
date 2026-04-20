import { useNavigate } from "react-router-dom";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "../school/SchoolResearch.module.css";
import Style1 from "../../pages/research/Research_Card1.module.css";

const Uppsala_University = () => {
  const navigate = useNavigate();
  const { research } = useSiteContent();

  if (!research) return null;

  const item = research.items.find(
    (i) => i.id === "research2-content-6"
  );

  if (!item || !item.detail) return null;

  const d = item.detail;
  const lb = research.detailPanelLabels;

  return (
    <div className={Style1.padding_research_container}>
      <div className={styles.detailInner}>

        <button
          onClick={() => navigate("/reallives/school/research")}
          className={`${styles.backBtn} ${Style1.back_btn_override}`}
        >
          ← {research.goBackText}
        </button>

        <div className={styles.detailHero}>
          {d.heroImagePath && <img src={d.heroImagePath} alt="" />}
          <div className={styles.detailHeroOverlay}>
            {d.heroTitle && (
              <h3 className={styles.detailHeroTitle}>{d.heroTitle}</h3>
            )}
            {d.heroSubtitle && (
              <p className={styles.detailHeroSub}>{d.heroSubtitle}</p>
            )}
          </div>
        </div>

        <div className={styles.detailMain}>
          <div className={styles.detailGrid}>

            <div>
              <dl className={styles.detailDl}>
                <div>
                  <dt className={styles.detailDt}>{lb.paperTitle}</dt>
                  <dd className={styles.detailDd}>{item.paperTitle}</dd>
                </div>
                <div>
                  <dt className={styles.detailDt}>{lb.institution}</dt>
                  <dd className={styles.detailDd}>{item.institution}</dd>
                </div>
                <div>
                  <dt className={styles.detailDt}>{lb.whatWasStudied}</dt>
                  <dd className={styles.detailDd}>
                    {item.whatWasStudied}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              {d.keyFindings?.length > 0 && (
                <div>
                  <p className={styles.detailColTitle}>
                    {research.keyFindingsLabel}
                  </p>
                  <ul className={styles.findingsList}>
                    {d.keyFindings.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}

              {d.methods && (
                <div className={styles.methodsBlock}>
                  <p className={styles.detailColTitle}>
                    {research.methodsLabel}
                  </p>
                  <p className={styles.methodsText}>{d.methods}</p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.detailActions}>
            {d.pdfPath && research.readPaperText && (
              <a
                className={styles.pdfLink}
                href={d.pdfPath}
                download
                rel="noopener noreferrer"
              >
                {research.readPaperText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uppsala_University;