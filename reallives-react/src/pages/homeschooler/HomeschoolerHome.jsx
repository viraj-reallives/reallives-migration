import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '@hooks/useSiteContent';
import CoreVisionCards from '@components/common/CoreVision/CoreVisionCards';
import styles from '../school/SchoolHome.module.css';

function CtaLink({ to, className, children }) {
  return (
    <Link to={to} className={className}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function WhoCanUsePanel({ supportingText, images, isActive = true }) {
  const videoRef = useRef(null);
  const videoUrl = images?.heroVideoUrl;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!isActive) {
      v.pause();
      return;
    }
    void v.play().catch(() => {});
  }, [isActive, videoUrl]);

  if (!supportingText || !images) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.videoWrap}>
        {images.heroVideoUrl ? (
          <video
            ref={videoRef}
            className={styles.video}
            src={images.heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : null}
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>{supportingText.whySchoolsHeading}</h2>
            {supportingText.whySchoolsBullets?.map((item, i) => (
              <p key={`${item.title}-${i}`} className={styles.paragraph}>
                <span className={styles.leadStrong}>{item.title}</span>
                {item.body}
              </p>
            ))}
          </section>
        </div>
        {images.illustration ? (
          <div className={styles.mediaCard}>
            <img src={images.illustration} alt="" />
          </div>
        ) : null}
      </div>

      <div className={`${styles.splitSection} ${styles.splitReverse}`}>
        {images.classroomDiagram ? (
          <div className={styles.mediaCard}>
            <img src={images.classroomDiagram} alt="" />
          </div>
        ) : null}
        <div>
          <h2 className={styles.blockTitle}>{supportingText.howItWorksHeading}</h2>
          <p className={styles.subheading}>{supportingText.howItWorksSubheading}</p>
          {supportingText.howItWorksParagraphs?.map((row) => (
            <p key={row.label} className={styles.paragraph}>
              <span className={styles.leadStrong}>{row.label}</span> {row.body}
            </p>
          ))}
        </div>
      </div>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsInner}>
          <h2 className={styles.benefitsHeading}>{supportingText.educationalBenefitsHeading}</h2>
          {supportingText.educationalBenefits?.map((item) => (
            <p key={item.title} className={styles.paragraph}>
              <span className={styles.leadStrong}>{item.title}</span>
              {item.body}
            </p>
          ))}
        </div>
      </section>

      <div className={styles.gettingStarted}>
        <div>
          <h2 className={styles.blockTitle}>{supportingText.gettingStartedHeading}</h2>
          <p className={styles.subheading}>{supportingText.gettingStartedSubheading}</p>
          {supportingText.gettingStartedParagraphs?.map((text) => (
            <p key={text.slice(0, 48)} className={styles.paragraph}>
              {text}
            </p>
          ))}
          {supportingText.gettingStartedCtaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink to={supportingText.gettingStartedCtaPath} className={styles.ctaButton}>
                {supportingText.gettingStartedCtaText || 'Get Started'}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.gettingStartedIllustration ? (
          <div className={styles.mediaCard}>
            <img src={images.gettingStartedIllustration} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SkillsPanel({ data, images }) {
  if (!data || !images) return null;

  return (
    <div className={styles.panel}>
      {images.empathy21CenturyBanner ? (
        <div className={styles.bannerFull}>
          <img src={images.empathy21CenturyBanner} alt="" />
        </div>
      ) : null}

      <div className={styles.gridTwo}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>{data.introColumns.left.title}</h2>
            {data.introColumns.left.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </section>
          <section>
            <h2 className={styles.blockTitle}>{data.introColumns.right.title}</h2>
            {data.introColumns.right.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </section>
        </div>
        {images.supportedByRealLives ? (
          <div className={styles.mediaCard}>
            <img src={images.supportedByRealLives} alt="" />
          </div>
        ) : null}
      </div>

      <div className={styles.splitSection}>
        <div>
          <h2 className={styles.blockTitle}>{data.experienceBlock.title}</h2>
          <p className={styles.paragraph}>{data.experienceBlock.lead}</p>
          <p className={styles.leadStrong}>{data.experienceBlock.listHeading}</p>
          <ul className={styles.list}>
            {data.experienceBlock.listItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {images.experienceAuthentic ? (
          <div className={styles.mediaCard}>
            <img src={images.experienceAuthentic} alt="" />
          </div>
        ) : null}
      </div>

      <div className={`${styles.gettingStarted} ${styles.splitReverse}`}>
        <div>
          <h2 className={styles.blockTitle}>{data.empathyCanvas.title}</h2>
          <p className={styles.subheading}>{data.empathyCanvas.subtitle}</p>
          {data.empathyCanvas.steps?.map((step) => (
            <p key={step.label} className={styles.stepBlock}>
              <span className={styles.stepLabel}>{step.label}</span> {step.body}
            </p>
          ))}
          {data.empathyCanvas.learnMorePath ? (
            <div className={styles.ctaRow}>
              <CtaLink
                to={data.empathyCanvas.learnMorePath}
                className={`${styles.ctaButton} ${styles.ctaSecondary}`}
              >
                {data.empathyCanvas.learnMoreText}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.empathyCanvasIllustration ? (
          <div className={styles.mediaCard}>
            <img src={images.empathyCanvasIllustration} alt="" />
          </div>
        ) : null}
      </div>

      <div className={styles.gettingStarted}>
        <div>
          <h2 className={styles.blockTitle}>{data.closingCta.title}</h2>
          <p className={styles.paragraph}>{data.closingCta.body}</p>
          {data.closingCta.ctaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink to={data.closingCta.ctaPath} className={styles.ctaButton}>
                {data.closingCta.ctaText}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.readyToTransform ? (
          <div className={styles.mediaCard}>
            <img src={images.readyToTransform} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SdgPanel({ data, images }) {
  if (!data || !images) return null;

  const videoUrl = images.sdgImpactVideo;

  return (
    <div className={styles.panel}>
      <div className={styles.sdgHero}>
        {images.sdgBackground ? (
          <img className={styles.sdgHeroBg} src={images.sdgBackground} alt="" />
        ) : null}
        <div className={styles.sdgHeroOverlay}>
          <h2>{data.sdgHeroOverlay.title}</h2>
          {data.sdgHeroOverlay.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.stack}>
          <section>
            <h2 className={styles.blockTitle}>{data.sdgMain.title}</h2>
            {data.sdgMain.intro ? <p className={styles.paragraph}>{data.sdgMain.intro}</p> : null}
            {data.sdgMain.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className={styles.paragraph}>
                {p}
              </p>
            ))}
            {data.sdgMain.actionTagline ? (
              <p className={styles.actionTagline}>{data.sdgMain.actionTagline}</p>
            ) : null}
          </section>
        </div>
        {images.sdgEarth ? (
          <div className={styles.mediaCard}>
            <img src={images.sdgEarth} alt="" />
          </div>
        ) : null}
      </div>

      <section className={styles.sdgImpact}>
        <h2 className={styles.sdgImpactTitle}>{data.sdgImpact.title}</h2>
        {videoUrl ? (
          <div className={styles.videoFrame}>
            <video src={videoUrl} autoPlay muted loop playsInline />
          </div>
        ) : null}
        <div className={styles.sdgGroups}>
          {data.sdgImpact.relevanceGroups?.map((group) => (
            <div key={group.label}>
              <p className={styles.sdgGroupLabel}>{group.label}</p>
              <div className={styles.sdgIconGrid}>
                {group.goalImagePaths?.map((src) => (
                  <img key={src} src={src} alt="" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.splitSection}>
        <div>
          <h2 className={styles.blockTitle}>{data.awarenessToAction.title}</h2>
          <p className={styles.mutedLead}>{data.awarenessToAction.lead}</p>
          <ul className={styles.list}>
            {data.awarenessToAction.listItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {images.sdgAnnouncement ? (
          <div className={styles.mediaCard}>
            <img src={images.sdgAnnouncement} alt="" />
          </div>
        ) : null}
      </div>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsInner}>
          <h2 className={styles.benefitsHeading}>{data.beyondClassroom.title}</h2>
          <ul className={styles.list}>
            {data.beyondClassroom.listItems?.map((item) => (
              <li key={item}>
                <p className={`${styles.paragraph} ${styles.listPlain}`}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.gettingStarted}>
        <div>
          <h2 className={styles.blockTitle}>{data.closingCta.title}</h2>
          <p className={styles.paragraph}>{data.closingCta.body}</p>
          {data.closingCta.ctaPath ? (
            <div className={styles.ctaRow}>
              <CtaLink to={data.closingCta.ctaPath} className={`${styles.ctaButton} ${styles.ctaSdg}`}>
                {data.closingCta.ctaText}
              </CtaLink>
            </div>
          ) : null}
        </div>
        {images.sdgGlobalAction ? (
          <div className={styles.mediaCard}>
            <img src={images.sdgGlobalAction} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CoreVisionPanel({ data }) {
  if (!data?.coreVisionHeading) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.coreVisionShell}>
        <h2 className={styles.coreVisionTitle}>{data.coreVisionHeading}</h2>
        <p className={styles.coreVisionBody}>{data.coreVisionBody}</p>
        <CoreVisionCards compact />
      </div>
    </div>
  );
}

export default function HomeschoolerHome() {
  const { hero } = useSiteContent();
  const [activeTab, setActiveTab] = useState(0);

  if (!hero) return null;

  const labels = hero.homeTabLabels || [];
  const extra = hero.homeAdditionalTabs || [];
  const supportingText = hero.supportingText;
  const images = hero.images;

  return (
    <div className={styles.page}>
      {labels.length > 0 ? (
        <div className={styles.tabBar} role="tablist" aria-label="Home sections">
          {labels.map((label, index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.homeTabPanels}>
        <div role="tabpanel" id="home-section-panel-0" hidden={activeTab !== 0}>
          <WhoCanUsePanel supportingText={supportingText} images={images} isActive={activeTab === 0} />
        </div>
        <div role="tabpanel" id="home-section-panel-1" hidden={activeTab !== 1}>
          {extra[0] ? <SkillsPanel data={extra[0]} images={images} /> : null}
        </div>
        <div role="tabpanel" id="home-section-panel-2" hidden={activeTab !== 2}>
          {extra[1] ? <SdgPanel data={extra[1]} images={images} /> : null}
        </div>
        <div role="tabpanel" id="home-section-panel-3" hidden={activeTab !== 3}>
          {extra[2] ? <CoreVisionPanel data={extra[2]} /> : null}
        </div>
      </div>
    </div>
  );
}
