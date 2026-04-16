import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '@components/common/CTABanner/CTABanner';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolResearch.module.css';
import { useNavigate } from "react-router-dom";

function ResearchCard({ item, labels, exploreText, isExpanded, onActivate, onExploreClick }) {
   const navigate = useNavigate();
  const activate = () => onActivate();

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activate();
    }
  };

  return (
    <article
      className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={item.paperTitle}
      onClick={activate}
      onKeyDown={onKeyDown}
    >
      <div className={styles.cardHead}>
        {item.logoPath ? <img src={item.logoPath} alt="" /> : null}
        {!item.logoPath && item.heading ? <p className={styles.cardHeading}>{item.heading}</p> : null}
        {item.logoCaption && item.logoPath ? <p className={styles.logoCaption}>{item.logoCaption}</p> : null}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.field}>
          <p className={styles.fieldLabel}>{labels.paperTitle}</p>
          <p className={styles.fieldValue}>{item.paperTitle}</p>
        </div>
        <div className={styles.field}>
          <p className={styles.fieldLabel}>{labels.institution}</p>
          <p className={styles.fieldValue}>{item.institution}</p>
        </div>
        <div className={styles.field}>
          <p className={styles.fieldLabel}>{labels.whatWasStudied}</p>
          <p className={styles.fieldValue}>{item.whatWasStudied}</p>
        </div>

         <button
      type="button"
      className={styles.exploreBtn}
      onClick={(e) => {
        e.stopPropagation();
        navigate(item.detail.route); // ✅ ROUTE OPEN
      }}
    >
      {exploreText}
      <span aria-hidden="true">→</span>
    </button>

      </div>
    </article>
  );
}

function ResearchDetail({ research, item, onBack }) {
  const d = item.detail;
  const lb = research.detailPanelLabels;
  if (!d) return null;

  const institution = d.institution ?? item.institution;
  const studied = d.whatWasStudied ?? item.whatWasStudied;

  return (
    <div className={styles.detailInner}>
      <div className={styles.detailHero}>
        {d.heroImagePath ? <img src={d.heroImagePath} alt="" /> : null}
        <div className={styles.detailHeroOverlay}>
          {d.heroTitle ? <h3 className={styles.detailHeroTitle}>{d.heroTitle}</h3> : null}
          {d.heroSubtitle ? <p className={styles.detailHeroSub}>{d.heroSubtitle}</p> : null}
        </div>
      </div>
      <button type="button" className={styles.backBtn} onClick={onBack}>
        <span aria-hidden="true">←</span>
        {research.goBackText}
      </button>
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
                <dd className={styles.detailDd}>{institution}</dd>
              </div>
              <div>
                <dt className={styles.detailDt}>{lb.whatWasStudied}</dt>
                <dd className={styles.detailDd}>{studied}</dd>
              </div>
            </dl>
          </div>
          <div>
            {d.keyFindings?.length ? (
              <div>
                <p className={styles.detailColTitle}>{research.keyFindingsLabel}</p>
                <ul className={styles.findingsList}>
                  {d.keyFindings.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {d.methods ? (
              <div className={d.keyFindings?.length ? styles.methodsBlock : ''}>
                <p className={styles.detailColTitle}>{research.methodsLabel}</p>
                <p className={styles.methodsText}>{d.methods}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.detailActions}>
          {d.pdfPath && research.readPaperText ? (
            <a className={styles.pdfLink} href={d.pdfPath} download rel="noopener noreferrer">
              {research.readPaperText}
            </a>
          ) : null}
          {research.bringToSchoolText && research.bringToSchoolPath ? (
            <Link className={styles.bringLink} to={research.bringToSchoolPath}>
              {research.bringToSchoolText}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function SchoolResearch() {
  const { research } = useSiteContent();
  const [expandedId, setExpandedId] = useState(null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (expandedId && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedId]);

  if (!research) return null;

  const items = research.items ?? [];
  const labels = research.detailPanelLabels ?? {};
  const activeItem = items.find((i) => i.id === expandedId);

  return (
    <div className={styles.page} id="research">
      <header className={styles.hero}>
        <div>
          {research.heading ? <h1 className={styles.heroTitle}>{research.heading}</h1> : null}
          {research.body ? <p className={styles.heroBody}>{research.body}</p> : null}
        </div>
        {research.heroImagePath ? (
          <div className={styles.heroImage}>
            <img src={research.heroImagePath} alt="" />
          </div>
        ) : null}
      </header>

      <section className={styles.browse} aria-labelledby="browse-research-label">
        {research.browseIntro ? (
          <p className={styles.browseIntro} id="browse-research-label">
            {research.browseIntro}
          </p>
        ) : null}
        <div className={styles.grid}>
          {items.map((item) => (
            <ResearchCard
              key={item.id}
              item={item}
              labels={labels}
              exploreText={research.exploreButtonText}
              isExpanded={expandedId === item.id}
              onActivate={() => setExpandedId(item.id)}
              onExploreClick={setExpandedId}
            />
          ))}
        </div>
      </section>

      {activeItem?.detail ? (
        <div ref={detailRef} className={styles.detail}>
          <ResearchDetail research={research} item={activeItem} onBack={() => setExpandedId(null)} />
        </div>
      ) : null}

      <div className={styles.contactSpacer}>
        {research.contactPromptButtonText && research.contactBannerButtonPath ? (
          <CTABanner
            heading={research.contactBannerHeading}
            subheading={research.contactBannerSubheading}
            buttonText={research.contactPromptButtonText}
            buttonPath={research.contactBannerButtonPath}
          />
        ) : null}
      </div>
    </div>
  );
}
