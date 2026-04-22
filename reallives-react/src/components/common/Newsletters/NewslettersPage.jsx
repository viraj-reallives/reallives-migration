import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SiteContext from '@context/SiteContext';
import { newslettersContent } from '@content/newsletters';
import styles from './NewslettersPage.module.css';
import Style1 from "../Newsletters/NewsletterPage_override..module.css"

const NEWSLETTER_AUTHORS = [
  {
    name: 'Dr. Parag Mankeekar',
    role:
      "Co-Founder @ RealLives Foundation | RealLives Simulation, Edupreneur, 'Games for Good & Changemaking' advocator",
    avatar: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-newsletter-page/ceo-image.jpg',
    linkedin: 'https://www.linkedin.com/in/reallives/',
  },
];

function getHeroImagePositionClass(articleId) {
  if (articleId.includes('sir-ken-robinson')) {
    return styles.heroFocusTop;
  }

  return styles.heroFocusCenter;
}

function isSubheadingLine(paragraph) {
  const text = paragraph.trim();
  if (!text || text.includes('http://') || text.includes('https://')) return false;
  if (/^[*-]\s/.test(text)) return false;
  if (text.length > 90) return false;
  if (/^[0-9]+\./.test(text)) return true;
  if (text.endsWith(':') || text.endsWith('?')) return true;
  return !/[.!]$/.test(text);
}

function isInlineImageBlock(block) {
  return typeof block === 'object' && block !== null && block.type === 'image';
}

function isExternalLinkBlock(block) {
  return (
    typeof block === 'object' &&
    block !== null &&
    block.type === 'link' &&
    typeof block.href === 'string'
  );
}

function renderHighlightedText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function ArticleCard({ article, compact = false }) {
  return (
    <Link to={article.id} className={styles.cardLink}>
      <article className={`${styles.articleCard} ${compact ? styles.compactCard : ''} ${Style1.compactcard_style_grid}`}>
        <div className={styles.thumbWrap}>
          <img src={article.imagePath} alt={article.title} className={styles.thumb} />
        </div>
        <div className={styles.articleBody}>
          <p className={styles.metaLine}>
            <span>{article.author}</span>
            <span>{article.publishedOn}</span>
          </p>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          {!compact ? <p className={styles.articleExcerpt}>{article.excerpt}</p> : null}
          <div className={styles.articleFooter}>
            <div className={styles.tagRow}>
              <span className={styles.categoryPill}>{article.category}</span>
              {article.tags?.slice(0, 1).map((tag) => (
                <span key={tag} className={styles.categoryPill}>
                  {tag}
                </span>
              ))}
            </div>
            <span className={styles.readTime}>{article.readTime}</span>
          </div>
          <span className={styles.readArticleCta}>
            <span>Read article</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function NewslettersPage() {
  const { siteKey } = useContext(SiteContext);
  const { articleId } = useParams();
  const siteContent = newslettersContent[siteKey];
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const topTagFilters = useMemo(() => {
    if (!siteContent?.articles?.length) return [];

    const tagCounts = new Map();
    siteContent.articles.forEach((article) => {
      article.tags?.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    return [...tagCounts.entries()]
      .sort((first, second) => {
        if (second[1] !== first[1]) return second[1] - first[1];
        return first[0].localeCompare(second[0]);
      })
      .slice(0, 5)
      .map(([tag, count]) => ({ tag, count }));
  }, [siteContent]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [articleId, siteKey]);

  useEffect(() => {
    setIsFilterOpen(false);
    setSelectedTag('');
  }, [siteKey]);

  useEffect(() => {
    if (!isFilterOpen) return;

    function handleClickOutside(event) {
      if (!filterRef.current) return;
      if (!filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsFilterOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFilterOpen]);

  const visibleArticles = useMemo(() => {
    if (!siteContent?.articles?.length) return [];
    const searchLower = query.trim().toLowerCase();

    const filteredArticles = siteContent.articles.filter((article) => {
      const textMatch =
        searchLower.length === 0 ||
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower);
      const tagMatch = selectedTag.length === 0 || article.tags?.includes(selectedTag);

      return textMatch && tagMatch;
    });

    return filteredArticles.sort(
      (first, second) => new Date(second.publishedOn) - new Date(first.publishedOn)
    );
  }, [query, selectedTag, siteContent]);

  if (!siteContent) return null;

  if (articleId) {
    const selectedArticle = siteContent.articles.find((article) => article.id === articleId);
    if (!selectedArticle) {
      return (
        <section className={styles.articlePage}>
          <div className={styles.articleContentWrap}>
            <Link to=".." relative="path" className={styles.backToListLink}>
              ← Back to all posts
            </Link>
            <p className={styles.emptyState}>Article not found for this newsletter section.</p>
          </div>
        </section>
      );
    }

    return (
      <article className={styles.articlePage}>
        <div className={styles.articleTopBar}>
          <Link to=".." relative="path" className={styles.backToListLink}>
            ← All posts
          </Link>
          <p className={styles.articlePublished}>Published {selectedArticle.publishedOn}</p>
        </div>

        <img
          src={selectedArticle.imagePath}
          alt={selectedArticle.title}
          className={`${styles.articleHeroImage} ${getHeroImagePositionClass(selectedArticle.id)}`}
        />

        <div className={styles.articleContentWrap}>
          <h1 className={styles.articlePageTitle}>{selectedArticle.title}</h1>

          <div className={styles.articleMetaWrap}>
            <span className={styles.readMinutesPill}>{selectedArticle.readMinutes} min read</span>
            <div className={styles.authorBlock}>
              <div className={styles.authorRow}>
                {selectedArticle.authorAvatar ? (
                  <img
                    src={selectedArticle.authorAvatar}
                    alt={selectedArticle.author}
                    className={styles.authorAvatar}
                  />
                ) : null}
                <div>
                  <p className={styles.authorName}>{selectedArticle.author}</p>
                  <p className={styles.authorRole}>{selectedArticle.authorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {selectedArticle.tags?.length ? (
            <div className={styles.articleTags}>
              {selectedArticle.tags.map((tag) => (
                <span key={tag} className={styles.categoryPill}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className={styles.articleBodyText}>
            {selectedArticle.content.map((block, index) => {
              if (isInlineImageBlock(block)) {
                return (
                  <figure key={`${selectedArticle.id}-image-${index}`} className={styles.inlineImageWrap}>
                    <img src={block.src} alt={block.alt} className={styles.inlineArticleImage} />
                  </figure>
                );
              }

              if (isExternalLinkBlock(block)) {
                return (
                  <p key={`${selectedArticle.id}-link-${index}`}>
                    <a
                      href={block.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineExternalLink}
                    >
                      {block.label || block.href}
                    </a>
                  </p>
                );
              }

              return (
                <p
                  key={`${selectedArticle.id}-text-${index}`}
                  className={isSubheadingLine(block) ? styles.articleSubheading : undefined}
                >
                  {renderHighlightedText(block)}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    );
  }

  const featuredArticle = visibleArticles[0];
  const sideList = visibleArticles.slice(0, 3);
  const gridCards = visibleArticles.slice(3);

  return (
    <section className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.kicker}>Newsletters</p>
          <h1 className={styles.heading}>{siteContent.heading}</h1>
          <p className={styles.intro}>{siteContent.intro}</p>
        </div>
        <div className={styles.controlBar}>
          <input
            type="search"
            className={styles.searchInput}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, topics, authors..."
            aria-label="Search newsletters"
          />
          <div className={styles.actionsRow}>
            {topTagFilters.length ? (
              <div className={styles.filterBlock} ref={filterRef}>
                <button
                  type="button"
                  className={`${styles.filterToggle} ${isFilterOpen ? styles.filterToggleActive : ''}`}
                  onClick={() => setIsFilterOpen((open) => !open)}
                  aria-expanded={isFilterOpen}
                  aria-controls="newsletter-tag-filters"
                >
                  <span className={styles.filterIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" className={styles.filterIconSvg}>
                      <path
                        d="M3 6.75c0-.41.34-.75.75-.75h16.5a.75.75 0 0 1 .56 1.25l-6.31 7.15v4.97a.75.75 0 0 1-1.16.63l-3-1.88a.75.75 0 0 1-.34-.64v-3.08L3.19 7.25a.75.75 0 0 1-.19-.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>Filter</span>
                  {selectedTag ? (
                    <>
                      <span className={styles.filterActiveTag}>{selectedTag}</span>
                      <button
                        type="button"
                        className={styles.clearFilterButton}
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedTag('');
                          setIsFilterOpen(false);
                        }}
                        aria-label="Clear tag filter"
                        title="Clear filter"
                      >
                        <svg viewBox="0 0 24 24" className={styles.clearIconSvg} aria-hidden="true">
                          <path
                            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </>
                  ) : null}
                </button>

                {isFilterOpen ? (
                  <div
                    id="newsletter-tag-filters"
                    className={styles.filterPopover}
                    aria-label="Popular topic filters"
                  >
                    <div className={styles.categoryRow}>
                      {topTagFilters.map(({ tag, count }) => (
                        <button
                          key={tag}
                          type="button"
                          className={`${styles.filterPill} ${selectedTag === tag ? styles.filterPillActive : ''}`}
                          onClick={() => {
                            setSelectedTag((currentTag) => (currentTag === tag ? '' : tag));
                            setIsFilterOpen(false);
                          }}
                          aria-pressed={selectedTag === tag}
                        >
                          {tag} ({count})
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

            <Link to={`/reallives/${siteKey}/technical-blogs`} className={styles.technicalBlogsCta}>
              Technical Blogs
            </Link>
          </div>
        </div>
      </header>

      {featuredArticle ? (
        <section className={styles.featuredSection}>
          <Link to={featuredArticle.id} className={styles.cardLink}>
            <article className={styles.featuredCard}>
              <img
                src={featuredArticle.imagePath}
                alt={featuredArticle.title}
                className={styles.featuredImage}
              />
              <div className={styles.featuredBody}>
                <p className={styles.sectionLabel}>Featured Post</p>
                <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                <p className={styles.featuredSummary}>{featuredArticle.excerpt}</p>
                <p className={styles.metaLine}>
                  <span>{featuredArticle.author}</span>
                  <span>{featuredArticle.publishedOn}</span>
                </p>
                {featuredArticle.tags?.length ? (
                  <div className={styles.featuredTags}>
                    {featuredArticle.tags.map((tag) => (
                      <span key={tag} className={styles.categoryPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <span className={styles.readArticleCta}>
                  <span>Read article</span>
                  <span className={styles.ctaArrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>
          <aside className={`${styles.sideFeed} ${Style1.sideFeed_container_style}`}>
            <section className={styles.authorsStrip} aria-label="Newsletter authors">
              <p className={styles.authorsKicker}>Authors</p>
              <div className={styles.authorsRow}>
                {NEWSLETTER_AUTHORS.map((author) => (
                  <a
                    key={author.name}
                    className={styles.authorChip}
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on LinkedIn`}
                    title={`${author.name} on LinkedIn`}
                  >
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className={styles.authorChipAvatar}
                      loading="lazy"
                    />
                    <div className={styles.authorChipBody}>
                      <p className={styles.authorChipName}>{author.name}</p>
                      <p className={styles.authorChipRole}>{author.role}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
            <h3 className={styles.sideHeading}>Recent Highlights</h3>
            {sideList.map((article) => (
              <ArticleCard key={article.id} article={article} compact />
            ))}
          </aside>
        </section>
      ) : (
        <p className={styles.emptyState}>No newsletters found for this filter.</p>
      )}

      {gridCards.length ? (
        <section className={styles.gridSection}>
          {gridCards.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      ) : null}

      <section className={styles.promoStrip}>
        <div>
          <p className={styles.sectionLabel}>{siteContent.highlightedCategory}</p>
          <h3 className={styles.promoHeading}>{siteContent.featuredTitle}</h3>
          <p className={styles.promoText}>{siteContent.featuredSummary}</p>
        </div>
        <div className={styles.promoCard}>
          <h4 className={styles.promoCardTitle}>Why this section?</h4>
          <p className={styles.promoCardText}>{siteContent.highlightedCategorySummary}</p>
          <p className={styles.promoStat}>
            <strong>{siteContent.articles.length}+</strong> planned articles
          </p>
        </div>
      </section>
    </section>
  );
}
