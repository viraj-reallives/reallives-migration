import { Link } from 'react-router-dom';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './Footer.module.css';

function isSubSiteIndexPath(path) {
  return (
    /^\/reallives\/(school|university|homeschooler)$/.test(path) ||
    path === '/reallives/gamer'
  );
}

/** Groups navLinks into Products / Education / Company like the school HTML footer. */
function groupNavLinksIntoColumns(navLinks) {
  const products = [];
  const education = [];
  const company = [];

  for (const link of navLinks) {
    const p = link.path;
    if (p.endsWith('/products') || p.endsWith('/pricing')) {
      products.push(link);
    } else if (
      p.endsWith('/changemaker') ||
      p.endsWith('/impact') ||
      p.endsWith('/research') ||
      p.endsWith('/foundation') ||
      isSubSiteIndexPath(p)
    ) {
      education.push(link);
    } else if (p.endsWith('/about') || p.endsWith('/contact')) {
      company.push(link);
    }
  }

  return [
    { title: 'Products', links: products },
    { title: 'Education', links: education },
    { title: 'Company', links: company },
  ].filter(col => col.links.length > 0);
}

/** External-only links from footer.columns (e.g. Terms & Conditions), not in nav. */
function getExtraExternalLinks(footer, navPaths) {
  const set = new Set(navPaths);
  const out = [];
  for (const col of footer.columns ?? []) {
    for (const link of col.links ?? []) {
      if (link.href && link.external && typeof link.href === 'string' && !set.has(link.href)) {
        out.push({ label: link.label, href: link.href, external: true });
      }
    }
  }
  return out;
}

function mergeCompanyExtras(columns, extras) {
  if (!extras.length) return columns;
  const next = columns.map(c => ({ ...c, links: [...c.links] }));
  const idx = next.findIndex(c => c.title === 'Company');
  if (idx >= 0) {
    next[idx] = { ...next[idx], links: [...next[idx].links, ...extras] };
    return next;
  }
  next.push({ title: 'Company', links: [...extras] });
  return next;
}

function SocialPlatformIcon({ icon, className }) {
  if (icon === 'youtube') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    );
  }
  if (icon === 'linkedin') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    );
  }
  return null;
}

function renderColumnLink(link) {
  if (link.href && link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.columnLink}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.path} className={styles.columnLink}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const { navLinks = [], footer = {} } = useSiteContent();
  const logoSrc = footer.logo ?? footer.logoPath ?? '';
  const navPaths = navLinks.map(l => l.path);
  const extras = getExtraExternalLinks(footer, navPaths);
  const columns = mergeCompanyExtras(groupNavLinksIntoColumns(navLinks), extras);
  const socialLinks = footer.socialLinks ?? [];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={footer.organizationName ?? ''}
                  className={styles.logoImg}
                />
              ) : null}
              {footer.organizationName ? (
                <span className={styles.orgName}>{footer.organizationName}</span>
              ) : null}
            </div>
            {footer.tagline ? <p className={styles.tagline}>{footer.tagline}</p> : null}
          </div>

          <div className={styles.columns}>
            {columns.map(col => (
              <div key={col.title} className={styles.column}>
                <h4 className={styles.columnTitle}>{col.title}</h4>
                <ul className={styles.linkList}>
                  {col.links.map((link, i) => (
                    <li
                      key={`${col.title}-${link.path ?? link.href ?? 'x'}-${link.label}-${i}`}
                      className={styles.linkItem}
                    >
                      {renderColumnLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {socialLinks.length > 0 ? (
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Social Media</h4>
                <div className={styles.socialRow}>
                  {socialLinks.map((item, i) => {
                    const href = item.url ?? item.href;
                    const platform = item.platform ?? item.label ?? '';
                    const builtInIcon = item.icon === 'youtube' || item.icon === 'linkedin';
                    const rasterSrc =
                      !builtInIcon &&
                      ((typeof item.icon === 'string' && item.icon.startsWith('/')
                        ? item.icon
                        : null) ||
                        item.iconPath ||
                        null);
                    return (
                      <a
                        key={`${href}-${platform}-${i}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        {builtInIcon ? (
                          <SocialPlatformIcon icon={item.icon} className={styles.socialSvg} />
                        ) : null}
                        {rasterSrc ? (
                          <img src={rasterSrc} alt="" className={styles.socialIcon} />
                        ) : null}
                        <span className={styles.socialLabel}>{platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {footer.copyright ? (
          <div className={styles.bottom}>
            <p className={styles.copyright}>{footer.copyright}</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
