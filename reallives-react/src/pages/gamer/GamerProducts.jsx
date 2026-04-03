import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './GamerProducts.module.css';

function RealLivesSimPanel({ data }) {
  const paths =
    data?.heroVideoPaths?.length > 0
      ? data.heroVideoPaths
      : data?.heroVideoPath
        ? [data.heroVideoPath]
        : [];
  const labels =
    data?.videoTrackLabels?.length === paths.length
      ? data.videoTrackLabels
      : paths.map((_, i) => String(i + 1));
  const [videoIx, setVideoIx] = useState(0);

  if (!data) return null;

  const src = paths[Math.min(videoIx, paths.length - 1)] || '';

  return (
    <div className={styles.panel}>
      {src ? (
        <div className={styles.videoHero}>
          <video key={src} className={styles.video} src={src} autoPlay muted loop playsInline />
          {paths.length > 1 ? (
            <div className={styles.videoControls}>
              {paths.map((path, i) => (
                <button
                  key={path}
                  type="button"
                  className={clsx(styles.videoTrackBtn, i === videoIx && styles.videoTrackActive)}
                  onClick={() => setVideoIx(i)}
                  aria-label={labels[i]}
                >
                  {labels[i]}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={styles.twoCol}>
        <div>
          {data.whyHeading ? <h2 className={styles.heading}>{data.whyHeading}</h2> : null}
          {data.whyParagraphs?.map((p, i) => (
            <p key={i} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
        {data.worldImagePath ? (
          <div className={styles.mediaCard}>
            <img src={data.worldImagePath} alt="" />
          </div>
        ) : null}
      </div>

      {data.fosterHeading || data.fosterDescription ? (
        <div>
          {data.fosterHeading ? <h2 className={styles.heading}>{data.fosterHeading}</h2> : null}
          {data.fosterDescription ? <p className={styles.paragraph}>{data.fosterDescription}</p> : null}
        </div>
      ) : null}

      {data.arcadeEmbedUrl ? (
        <div className={styles.embedBlock}>
          {data.experienceHeading ? <h2 className={styles.heading}>{data.experienceHeading}</h2> : null}
          <div className={styles.iframeWrap}>
            <iframe
              className={styles.iframe}
              src={data.arcadeEmbedUrl}
              title={data.experienceHeading || 'RealLives demo'}
              allow="clipboard-write"
            />
          </div>
        </div>
      ) : null}

      {data.drivenByDataText || data.dataLogos?.length ? (
        <div>
          {data.drivenByDataText ? (
            <p className={styles.paragraph} style={{ fontWeight: 700 }}>
              {data.drivenByDataText}
            </p>
          ) : null}
          {data.dataLogos?.length ? (
            <div className={styles.logoRow}>
              {data.dataLogos.map((logoPath) => (
                <img key={logoPath} src={logoPath} alt="" />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={styles.twoCol}>
        <div>
          {data.learningOutcomesHeading ? (
            <h2 className={styles.heading}>{data.learningOutcomesHeading}</h2>
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
          <div className={styles.mediaCard}>
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
      <div className={styles.rcmiHero}>
        {data.illustrationPath ? (
          <div className={styles.mediaCard}>
            <img src={data.illustrationPath} alt="" />
          </div>
        ) : null}
        <div>
          {data.title ? <h2 className={styles.rcmiTitle}>{data.title}</h2> : null}
          {data.description ? <p className={styles.paragraph}>{data.description}</p> : null}
          {data.highlights?.map((text) => (
            <div key={text} className={styles.highlightRow}>
              <span className={styles.highlightDot} aria-hidden />
              <p className={styles.paragraph} style={{ margin: 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {data.clustersHeading ? <h2 className={styles.heading}>{data.clustersHeading}</h2> : null}
      {data.clustersDescription ? <p className={styles.paragraph}>{data.clustersDescription}</p> : null}

      {data.clusterColumnLabels?.length ? (
        <div className={styles.clusterGrid}>
          {data.clusterColumnLabels.map((label, i) => (
            <div key={i} className={styles.clusterLabelBox}>
              {label.split('\n').map((line, li) => (
                <span key={line}>
                  {line}
                  {li < label.split('\n').length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
          ))}
        </div>
      ) : null}

      {data.clusterColumnDescriptions?.length ? (
        <div className={styles.clusterDescGrid}>
          {data.clusterColumnDescriptions.map((text) => (
            <p key={text.slice(0, 40)} className={styles.clusterDescCard}>
              {text}
            </p>
          ))}
        </div>
      ) : null}

      {data.howItWorksHeading || data.howItWorksDiagramPath ? (
        <div>
          {data.howItWorksHeading ? <h2 className={styles.heading}>{data.howItWorksHeading}</h2> : null}
          {data.howItWorksDiagramPath ? (
            <div className={styles.mediaCard}>
              <img src={data.howItWorksDiagramPath} alt="" />
            </div>
          ) : null}
        </div>
      ) : null}

      {data.experienceRcmiArcadeUrl ? (
        <div className={styles.embedBlock}>
          {data.experienceRcmiHeading ? (
            <h2 className={styles.heading}>{data.experienceRcmiHeading}</h2>
          ) : null}
          <div className={styles.iframeWrap}>
            <iframe
              className={styles.iframe}
              src={data.experienceRcmiArcadeUrl}
              title={data.experienceRcmiHeading || 'RCMI'}
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
    <div className={styles.panel}>
      {data.bannerImagePath ? (
        <div className={styles.bannerFull}>
          <img src={data.bannerImagePath} alt="" />
        </div>
      ) : null}
      {data.tailoredHeading || data.tailoredImagePath ? (
        <div className={styles.splitBanner}>
          {data.tailoredHeading ? <h2 className={styles.heading}>{data.tailoredHeading}</h2> : null}
          {data.tailoredImagePath ? <img src={data.tailoredImagePath} alt="" /> : null}
        </div>
      ) : null}
      {data.personalisedHeading || data.personalisedImagePath ? (
        <div className={styles.splitBanner}>
          {data.personalisedHeading ? <h2 className={styles.heading}>{data.personalisedHeading}</h2> : null}
          {data.personalisedImagePath ? <img src={data.personalisedImagePath} alt="" /> : null}
        </div>
      ) : null}
    </div>
  );
}

function RealBoardPanel({ data }) {
  const slides = data?.slides?.length ? data.slides : [];
  const [slideIx, setSlideIx] = useState(0);

  if (!data) return null;

  const len = slides.length;
  const safeIx = len ? slideIx % len : 0;
  const current = slides[safeIx];

  return (
      <div className={styles.panel}>
        {data.bannerImagePath ? (
          <div className={styles.bannerFull}>
            <img src={data.bannerImagePath} alt="" />
          </div>
        ) : null}

        {len ? (
          <div className={styles.sliderShell}>
            <div>
              {data.sidebarPrimaryHeadingLines?.map((line) => (
                <p key={line} className={styles.sideHeading}>
                  {line}
                </p>
              ))}
              {data.sidebarSecondaryHeadingLines?.map((line) => (
                <p key={line} className={styles.sideHeadingAccent}>
                  {line}
                </p>
              ))}
            </div>

            <div className={styles.sliderRail}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => setSlideIx((i) => (i - 1 + len) % len)}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <div className={styles.sliderCenter}>
                {current?.imagePath ? (
                  <div className={styles.slideImage}>
                    <img src={current.imagePath} alt={current.alt || ''} />
                  </div>
                ) : null}
              </div>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => setSlideIx((i) => (i + 1) % len)}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>
        ) : null}

        {data.educatorLoveHeadingLines?.length || data.educatorPoints?.length ? (
          <div className={styles.whyEducators}>
            <h3>
              {data.educatorLoveHeadingLines?.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            {data.educatorPoints?.map((b) => (
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
    <div className={styles.panel}>
      {data.videoPath ? (
        <div className={styles.aiVideoWrap}>
          <video className={styles.aiVideo} src={data.videoPath} autoPlay muted loop playsInline />
        </div>
      ) : null}

      <div className={styles.aiHeader}>
        <div className={styles.aiBrand}>
          {data.logoPath ? <img src={data.logoPath} alt="" /> : null}
          {data.brandLine ? (
            <p className={styles.paragraph} style={{ margin: 0, fontWeight: 800 }}>
              {data.brandLine}
            </p>
          ) : null}
        </div>
        {data.tagline ? <p className={styles.tagline}>{data.tagline}</p> : null}
      </div>

      {data.gridImages?.length ? (
        <div>
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
        </div>
      ) : null}

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
            {data.empathyCanvasAnalysisParagraphs?.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
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
            {data.rcmiAnalysisHeading ? (
              <h3 className={styles.analysisHeading}>{data.rcmiAnalysisHeading}</h3>
            ) : null}
            {data.rcmiAnalysisParagraphs?.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ProductPanel({ activeId, products }) {
  switch (activeId) {
    case 'tab1':
      return <RealLivesSimPanel data={products.realLivesSim} />;
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

export default function GamerProducts() {
  const { products } = useSiteContent();
  const tabs = useMemo(() => products?.productTabs ?? [], [products?.productTabs]);
  const location = useLocation();

  const hashId = useMemo(() => {
    const raw = location.hash?.replace(/^#/, '') ?? '';
    return raw && tabs.some((t) => t.id === raw) ? raw : null;
  }, [location.hash, tabs]);

  const defaultTabId = tabs[0]?.id ?? 'tab1';
  const [pickedId, setPickedId] = useState(null);
  const activeId = hashId ?? pickedId ?? defaultTabId;

  if (!products) return null;

  return (
    <section className={styles.page} id="products">
      <div className={styles.inner}>
        {tabs.length ? (
          <div className={styles.tabList} role="tablist" aria-label="Products">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeId === tab.id}
                id={`gamer-product-tab-${tab.id}`}
                className={clsx(styles.tab, activeId === tab.id && styles.tabActive)}
                onClick={() => setPickedId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}

        <div role="tabpanel" aria-labelledby={`gamer-product-tab-${activeId}`}>
          <ProductPanel activeId={activeId} products={products} />
        </div>
      </div>
    </section>
  );
}
