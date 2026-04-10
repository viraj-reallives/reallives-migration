import { useEffect, useRef, useState } from 'react';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolProducts.module.css';
import Style1 from '../../components/costom_css/schoolproduct_overide.module.css';

function RealLivesSimPanel({ data, isActive = true }) {
  const paths = data?.heroVideoPaths?.length ? data.heroVideoPaths : [];
  const labels = data?.videoTrackLabels?.length === paths.length ? data.videoTrackLabels : paths.map((_, i) => String(i + 1));
  const [videoIx, setVideoIx] = useState(0);
  const stackRef = useRef(null);
  const pathKey = paths.join('|');

  useEffect(() => {
    const root = stackRef.current;
    if (!root || !data) return;
    const vids = root.querySelectorAll('video');
    vids.forEach((v, i) => {
      if (!isActive) {
        v.pause();
        return;
      }
      if (i === videoIx) {
        void v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [data, isActive, pathKey, videoIx]);

  if (!data) return null;

  const hasVideo = paths.length > 0;

  return (
    <div className={styles.panel}>
      {hasVideo ? (
        <div className={styles.videoHero}>
          <div ref={stackRef} className={styles.videoStack}>
            {paths.map((path, i) => (
              <video
                key={path}
                className={`${styles.videoLayer} ${i === videoIx ? styles.videoLayerActive : ''}`}
                src={path}
                muted
                loop
                playsInline
                preload="auto"
              />
            ))}
            {paths.length > 1 ? (
              <div className={styles.videoControls} role="group" aria-label="Choose video">
                {paths.map((path, i) => (
                  <button
                    key={path}
                    type="button"
                    className={`${styles.videoTrackBtn} ${i === videoIx ? styles.videoTrackActive : ''}`}
                    onClick={() => setVideoIx(i)}
                    aria-pressed={i === videoIx}
                    aria-label={labels[i] ? `Video ${labels[i]}` : `Video ${i + 1}`}
                  >
                    {labels[i]}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

     

      <div className={`${styles.whyGrid} ${Style1.padding_overide}`}>
        <div>
          {data.whyHeading ? <h2 className={styles.whyHeading}>{data.whyHeading}</h2> : null}
          {data.whyParagraphs?.map((p) => (
            <p key={p.slice(0, 48)} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
        {data.worldImagePath ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override}`}>
            <img src={data.worldImagePath} alt="" />
          </div>
        ) : null}
      </div>

      {data.fosterHeading || data.fosterDescription ? (

        <div className={`${styles.foster} ${Style1.footer_empathy_experience}`}>

          {data.fosterHeading ? <h2 className={styles.fosterHeading}>{data.fosterHeading}</h2> : null}
          {data.fosterDescription ? <p className={styles.paragraph}>{data.fosterDescription}</p> : null}
        </div>
      ) : null}

      {data.demoIframeSrc ? (
        <div className={styles.embedBlock}>
          {data.experienceHeading ? <h2 className={styles.embedHeading}>{data.experienceHeading}</h2> : null}
          <div className={styles.iframeWrap}>
            <iframe
              className={styles.iframe}
              src={data.demoIframeSrc}
              title={data.experienceHeading || 'RealLives demo'}
              allow="clipboard-write"
            />
          </div>
        </div>
      ) : null}

      {data.drivenByDataText || data.dataLogos?.length ? (
        <div className={styles.driven}>
          {data.drivenByDataText ? <p className={styles.drivenText}>{data.drivenByDataText}</p> : null}
          {data.dataLogos?.length ? (
            <div className={`${styles.logoRow} ${Style1.logoRow_override}`}>
              {data.dataLogos.map((logoPath) => (
                <img key={logoPath} src={logoPath} alt="" />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={`${styles.outcomesGrid} ${Style1.grid_learning_outcome}`}>
        <div>
          {data.learningOutcomesHeading ? (
            <h2 className={styles.whyHeading}>{data.learningOutcomesHeading}</h2>
          ) : null}
          <div className={styles.outcomeList}>
            {data.learningOutcomes?.map((o) => (
              <div key={o.number} className={styles.outcomeItem}>
                <div className={styles.outcomeNum}>{o.number}</div>
                <div>
                  {o.title ? <p className={styles.outcomeTitle}>{o.title}</p> : null}
                  {o.description ? <p className={styles.outcomeDesc}>{o.description}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        {data.learningOutcomesImagePath ? (
          <div className={`${styles.mediaCard} ${Style1.image_style_override} ${Style1.image_style_override}`}>
            <img src={data.learningOutcomesImagePath} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function RcmiPanel({ data }) {
  if (!data) return null;

  return (
    <div className={styles.panel}>

      <div className={`${styles.rcmiHero} ${Style1.rcmi_hero_section}`}>
        {data.illustrationPath ? (
          
         
          <div className={`${styles.rcmiIllustrationCard} ${Style1.rcmiIllustrationCard_card_override_style}`}>
            <img src={data.illustrationPath} alt="" />
          </div>

        ) : null}

        <div className={Style1.hight_100}>
          
          {data.title ? <h2 className={`${styles.rcmiTitle}  ${Style1.white_color}`}>{data.title}</h2> : null}
          {data.description ? <p className={`${styles.paragraph} ${Style1.color_e1e1e1}`}>{data.description}</p> : null}
          
          {data.highlights?.length ? (
            <div className={styles.highlights}>
              {data.highlights.map((text) => (
                <div key={text} className={styles.highlightRow}>
                  <span className={styles.highlightDot} aria-hidden="true" />
                  <p className={`${styles.highlightText} ${Style1.color_e1e1e1}`}>{text}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {data.clustersHeading ||
      data.clustersDescription ||
      data.clusterLabels?.length ||
      data.clusterDescriptions?.length ? (
        
        <div className={`${styles.rcmiClustersSection} ${Style1.rcmiClustersSection_override_container}`}>
          {data.clustersHeading || data.clustersDescription ? (
            <div className={styles.clusterIntro}>
              {data.clustersHeading ? <h2>{data.clustersHeading}</h2> : null}
              {data.clustersDescription ? <p>{data.clustersDescription}</p> : null}
            </div>
          ) : null}

          {data.clusterLabels?.length ? (
            <div className={styles.clusterGrid}>
              {data.clusterLabels.map((cl, i) => (
                <div key={i} className={styles.clusterLabelBox}>
                  {cl.lines.map((line, li) => (
                    <span key={line}>
                      {line}
                      {li < cl.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ) : null}

          {data.clusterDescriptions?.length ? (
            <div className={styles.clusterDescGrid}>
              {data.clusterDescriptions.map((text) => (
                <p key={text.slice(0, 40)} className={styles.clusterDescCard}>
                  {text}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {data.howItWorksHeading || data.howItWorksImagePath ? (
        <div className={`${styles.howItWorks} ${styles.rcmiHowItWorks}`}>
          {data.howItWorksHeading ? <h2>{data.howItWorksHeading}</h2> : null}
          {data.howItWorksImagePath ? (
            <div className={`${styles.mediaCard} ${Style1.p_1_rem}`}>
              <img src={data.howItWorksImagePath} alt="" />
            </div>
          ) : null}
        </div>
      ) : null}

      {data.demoIframeSrc ? (
        <div className={`${styles.embedBlock} ${styles.embedRcmi}`}>
          {data.experienceEmbedHeading ? (
            <h2 className={styles.embedHeading}>{data.experienceEmbedHeading}</h2>
          ) : null}
          
          <div className={`${styles.iframeWrap} ${Style1.iframe_conntainer_override}`}>

            <iframe
              className={styles.iframe}
              src={data.demoIframeSrc}
              title={data.experienceEmbedHeading || 'RCMI demo'}
              allow="clipboard-write"
            />
          </div>

        </div>
      ) : null}
    </div>
  );
}

function EmpathyCanvasPanel({ data }) {
  if (!data) return null;

  return (
    <div className={`${styles.panel} ${styles.empathyPanel} `}>
      {data.mainDiagramPath ? (
        <div className={styles.canvasHero}>
          <img src={data.mainDiagramPath} alt="" />
        </div>
      ) : null}

      {data.questionCardRows?.map((row, ri) => (
        <div key={ri} className={styles.cardRows}>
          {data.tailoredTitle ? <h2 className={styles.sectionTitle}>{data.tailoredTitle}</h2> : null}
          <div className={styles.cardRow}>
            {row.map((card) => (
              <div key={card.imagePath} className={styles.empathyCard}>
                {card.questionLines?.length ? (
                  <p>
                    {card.questionLines.map((line, li) => (
                      <span key={line}>
                        {line}
                        {li < card.questionLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                ) : null}
                {card.imagePath ? <img src={card.imagePath} alt="" /> : null}
              </div>
            ))}
          </div>
        </div>
      ))}

      {data.overviewImagePath ? (

        <div className={`${styles.splitBanner} ${Style1.empathyPanel_override }`}>
          {data.tailoredTitle ? <h2 className={styles.sectionTitle}>{data.tailoredTitle}</h2> : null}
          <img className={Style1.splitBanne_img} src={data.overviewImagePath} alt="" />
        </div>
      ) : null}

      {data.realAiScoreImagePath || data.realAiScoreHeading ? (

        <div className={`${styles.aiScoreBanner} ${Style1.empathyPanel_override}`}>
          {data.realAiScoreHeading ? <h2 className={styles.sectionTitle}>{data.realAiScoreHeading}</h2> : null}
          {data.realAiScoreImagePath ? <img src={data.realAiScoreImagePath} alt="" /> : null}
        </div>
      ) : null}
    </div>
  );
}

function RealBoardPanel({ data }) {
  const slides = data?.slides?.length ? data.slides : [];
  const [slideIx, setSlideIx] = useState(0);

  if (!data) return null;

  const safeIx = slides.length ? slideIx % slides.length : 0;
  const current = slides[safeIx];

  return (
    <div className={`${styles.panel} ${styles.realboardPanel}`}>
      {data.bannerPath ? (
        <div className={styles.realboardBanner}>
        <img src={data.bannerPath} alt="" />
        </div>
      ) : null}

      {slides.length ? (
      
        <div className={`${styles.sliderShell} ${Style1.sliderShell_override}`}>

          <div className={styles.sliderSide}>
            {data.platformHeadingLines?.map((line) => (
              <p key={line} className={styles.sideHeading}>
                {line}
              </p>
            ))}
            {data.useCasesHeadingLines?.map((line) => (
              <p key={line} className={styles.sideHeadingAccent}>
                {line}
              </p>
            ))}
          </div>

          <div className={styles.sliderRail}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => setSlideIx((i) => (i - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className={styles.sliderCenter}>
              {current?.title ? <h4 className={styles.slideTitle}>{current.title}</h4> : null}
              {current?.imagePath ? (
              
                <div className={`${styles.slideImage} ${Style1.p_1_rem} ${Style1.card_image_override}`}>
                  <img src={current.imagePath} alt="" />
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => setSlideIx((i) => (i + 1) % slides.length)}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

        </div>
      ) : null}

      {data.whyHeadingLines?.length || data.educatorBenefits?.length ? (
        <div className={styles.whyEducators}>
          <h3>
            {data.whyHeadingLines?.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h3>
          {data.educatorBenefits?.map((b) => (
            <div key={b.title} className={styles.benefitBlock}>
              {b.title ? <h4>{b.title}</h4> : null}
              {b.body ? <p>{b.body}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function RealAiPanel({ data }) {
  if (!data) return null;

  const empathyHeadingLines = data.empathyCanvasAnalysisHeading?.split('\n').filter(Boolean) ?? [];

  return (
    <div className={`${styles.panel} ${styles.realAiPanel}`}>
      {data.videoPath ? (
        <div className={styles.aiVideoWrap}>
          <video className={styles.aiVideo} src={data.videoPath} autoPlay muted loop playsInline />
        </div>
      ) : null}

      <div className={styles.aiHeader}>
        <div className={styles.aiBrand}>
          {data.logoPath ? <img src={data.logoPath} alt="" /> : null}
          {data.brandLine ? <p className={styles.aiBrandText}>{data.brandLine}</p> : null}
        </div>
        {data.tagline ? <p className={styles.tagline}>{data.tagline}</p> : null}
      </div>

      <div>
        {data.gridImages?.length ? (
          <>
            <div className={styles.aiGridTop}>
              {data.gridImages.slice(0, 3).map((src) => (
                <div key={src} className={styles.aiGridCell}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            <div className={styles.aiGridBottom}>
              {data.gridImages.slice(3).map((src) => (
                <div key={src} className={styles.aiGridCell}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>

      {data.empathyCanvasAnalysisParagraphs?.length || data.empathyCanvasImagePath ? (
        <div className={styles.analysisRow}>
          <div>
            {empathyHeadingLines.length ? (
              <h3 className={styles.analysisHeading}>
                {empathyHeadingLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
            ) : null}
            <div>
              {data.empathyCanvasAnalysisParagraphs.map((p) => (
                <p key={p.slice(0, 48)} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {data.empathyCanvasImagePath ? (
            <img className={styles.analysisImg} src={data.empathyCanvasImagePath} alt="" />
          ) : null}
        </div>
      ) : null}

      {data.rcmiAnalysisParagraphs?.length || data.rcmiReportImagePath ? (
        <div className={`${styles.analysisRow} ${styles.rcmiBg}`}>
          {data.rcmiReportImagePath ? (
            <img className={styles.analysisImg} src={data.rcmiReportImagePath} alt="" />
          ) : null}
          <div>
            {data.rcmiAnalysisHeading ? <h3 className={styles.analysisHeading}>{data.rcmiAnalysisHeading}</h3> : null}
            <div>
              {data.rcmiAnalysisParagraphs.map((p) => (
                <p key={p.slice(0, 48)} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function renderProductTabPanel(tabId, activeId, products) {
  const isActive = activeId === tabId;
  switch (tabId) {
    case 'tab1':
      return <RealLivesSimPanel data={products.realLivesSim} isActive={isActive} />;
    case 'tab2':
      return <RcmiPanel data={products.changeMakerIndexTab} />;
    case 'tab3':
      return <EmpathyCanvasPanel data={products.empathyCanvasTab} />;
    case 'tab4':
      return <RealBoardPanel data={products.realBoardTab} />;
    case 'tab5':
      return <RealAiPanel data={products.realAiTab} />;
    default:
      return null;
  }
}

export default function SchoolProducts() {
  const { products } = useSiteContent();
  const tabs = products?.productTabs ?? [];
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? 'tab1');

  if (!products) return null;

  return (
    <section className={styles.section} id="products">

      <div className={`${styles.inner} ${Style1.video_width_add}`}>

        <header className={styles.header}>
          {products.heading ? <h1 className={styles.title}>{products.heading}</h1> : null}
          {products.subheading ? <p className={styles.subtitle}>{products.subheading}</p> : null}
        </header>

        {tabs.length ? (
          <div className={styles.tabList} role="tablist" aria-label="Products">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeId === tab.id}
                id={`product-tab-${tab.id}`}
                className={`${styles.tab} ${activeId === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.productPanels}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`product-panel-${tab.id}`}
              hidden={activeId !== tab.id}
              aria-labelledby={`product-tab-${tab.id}`}
            >
              {renderProductTabPanel(tab.id, activeId, products)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
