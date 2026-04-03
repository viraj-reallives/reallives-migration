import { useContext, useEffect, useRef, useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import { useTheme } from '@context/ThemeContext';
import SiteContext from '@context/SiteContext';
import styles from './Navbar.module.css';

const SITE_CONFIG = {
  school: {
    label: 'School',
    description: 'Empowering classrooms with lived experience',
    path: '/reallives/school',
  },
  university: {
    label: 'University',
    description: 'Our impactful journey from the year 2004',
    path: '/reallives/university',
  },
  homeschooler: {
    label: 'Home Schooler',
    description: 'Flexible learning beyond the classroom',
    path: '/reallives/homeschooler',
  },
  gamer: {
    label: 'Gamer',
    description: 'Live a billion lives, discover who you could be',
    path: '/reallives/gamer',
  },
};

function ImpactIcon() {
  return (
    <svg className={styles.itemIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="11" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="13" rx="1" />
      <rect x="17" y="3" width="4" height="17" rx="1" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className={styles.itemIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className={styles.itemIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="4 6 12 12 20 6" />
    </svg>
  );
}

export default function Navbar() {
  const { footer = {} } = useSiteContent();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme() ?? {};
  const { siteKey } = useContext(SiteContext) ?? {};

  const [menuOpen, setMenuOpen] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'impact' | 'story' | null
  const [mobileImpactOpen, setMobileImpactOpen] = useState(false);
  const [mobileStoryOpen, setMobileStoryOpen] = useState(false);

  const rootRef = useRef(null);

  const basePath = useMemo(
    () => (siteKey ? `/reallives/${siteKey}` : '/'),
    [siteKey],
  );

  const logoSrc = footer.logo ?? footer.logoPath ?? '';

  const isPathActive = (path) => location.pathname.startsWith(path);

  const isNavItemActive = (key) => {
    if (!siteKey) return false;
    switch (key) {
      case 'products':
        return isPathActive(`${basePath}/products`);
      case 'impact':
        return (
          isPathActive(`${basePath}/changemaker`) || isPathActive(`${basePath}/impact`)
        );
      case 'research':
        return isPathActive(`${basePath}/research`);
      case 'pricing':
        return isPathActive(`${basePath}/pricing`);
      case 'story':
        return (
          isPathActive(`${basePath}/about`) || isPathActive(`${basePath}/contact`)
        );
      case 'foundation':
        return isPathActive(`${basePath}/foundation`);
      default:
        return false;
    }
  };

  const siteLabel = SITE_CONFIG[siteKey]?.label ?? 'RealLives';

  const otherSites = useMemo(() => {
    return Object.entries(SITE_CONFIG)
      .filter(([key]) => key !== siteKey)
      .map(([key, value]) => ({ key, ...value }));
  }, [siteKey]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target)) {
        setSwitcherOpen(false);
        setOpenDropdown(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSwitcherOpen(false);
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setSwitcherOpen(false);
  };

  const handleSiteSwitch = (path) => {
    closeAllDropdowns();
    setMenuOpen(false);
    navigate(path);
  };

  const handlePrimaryNavClick = (path) => {
    closeAllDropdowns();
    setMenuOpen(false);
    navigate(path);
  };

  const isGamer = siteKey === 'gamer';
  const isHomeIndex = siteKey && location.pathname === `/reallives/${siteKey}`;

  const desktopOurStory = (
    <div className={styles.navItemWithDropdown}>
      <button
        type="button"
        className={clsx(
          styles.navItem,
          isNavItemActive('story') && styles.navItemActive,
        )}
        onClick={() =>
          setOpenDropdown((current) => (current === 'story' ? null : 'story'))
        }
        aria-haspopup="menu"
        aria-expanded={openDropdown === 'story'}
      >
        <span className={styles.navLabel}>Our Story</span>
        <span className={styles.navCaret} aria-hidden="true" />
      </button>

      {openDropdown === 'story' && (
        <div className={styles.dropdownPanel} role="menu">
          <button
            type="button"
            className={styles.dropdownItem}
            onClick={() => handlePrimaryNavClick(`${basePath}/about`)}
          >
            <span className={styles.dropdownIconWrap}>
              {logoSrc ? (
                <img src={logoSrc} alt="" className={styles.dropdownLogoIcon} />
              ) : (
                <span className={styles.itemDot} aria-hidden="true" />
              )}
            </span>
            <div className={styles.dropdownItemBody}>
              <span className={styles.dropdownItemTitle}>About Us</span>
              <span className={styles.dropdownItemDescription}>
                Our impactful journey from the year 2004
              </span>
            </div>
          </button>
          <button
            type="button"
            className={styles.dropdownItem}
            onClick={() => handlePrimaryNavClick(`${basePath}/contact`)}
          >
            <span className={styles.dropdownIconWrap}>
              <MailIcon />
            </span>
            <div className={styles.dropdownItemBody}>
              <span className={styles.dropdownItemTitle}>Contact Us</span>
              <span className={styles.dropdownItemDescription}>
                Get in touch, we would love to help you out
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );

  const mobileOurStory = (
    <div className={styles.mobileGroup}>
      <button
        type="button"
        className={clsx(
          styles.mobileItem,
          isNavItemActive('story') && styles.navItemActive,
        )}
        onClick={() => setMobileStoryOpen((open) => !open)}
        aria-expanded={mobileStoryOpen}
      >
        <span className={styles.navLabel}>Our Story</span>
        <span
          className={clsx(
            styles.accordionCaret,
            mobileStoryOpen && styles.accordionCaretOpen,
          )}
          aria-hidden="true"
        />
      </button>
      {mobileStoryOpen && (
        <div className={styles.mobileSubmenu}>
          <button
            type="button"
            className={styles.mobileSubItem}
            onClick={() => handlePrimaryNavClick(`${basePath}/about`)}
          >
            {logoSrc ? (
              <img src={logoSrc} alt="" className={styles.dropdownLogoIcon} />
            ) : (
              <span className={styles.itemDot} aria-hidden="true" />
            )}
            <div className={styles.dropdownItemBody}>
              <span className={styles.dropdownItemTitle}>About Us</span>
              <span className={styles.dropdownItemDescription}>
                Our impactful journey from the year 2004
              </span>
            </div>
          </button>
          <button
            type="button"
            className={styles.mobileSubItem}
            onClick={() => handlePrimaryNavClick(`${basePath}/contact`)}
          >
            <MailIcon />
            <div className={styles.dropdownItemBody}>
              <span className={styles.dropdownItemTitle}>Contact Us</span>
              <span className={styles.dropdownItemDescription}>
                Get in touch, we would love to help you out
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className={styles.header} ref={rootRef}>
      <div className={styles.inner}>
        <div className={styles.leftCluster}>
          <button
            type="button"
            className={styles.logoButton}
            onClick={() => handlePrimaryNavClick(basePath)}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={footer.organizationName ?? 'RealLives'}
                className={styles.logoImg}
              />
            ) : (
              <span className={styles.logoFallback}>RealLives</span>
            )}
          </button>

          <div className={styles.siteSwitcher}>
            <button
              type="button"
              className={styles.siteSwitcherButton}
              onClick={() => {
                setSwitcherOpen((open) => !open);
                setOpenDropdown(null);
              }}
              aria-haspopup="menu"
              aria-expanded={switcherOpen}
            >
              <span className={styles.siteSwitcherLabel}>{siteLabel}</span>
              <span className={styles.siteSwitcherArrow} aria-hidden="true" />
            </button>

            {switcherOpen && (
              <div className={styles.siteSwitcherDropdown} role="menu">
                {otherSites.map((site) => (
                  <button
                    key={site.key}
                    type="button"
                    className={styles.siteSwitcherItem}
                    onClick={() => handleSiteSwitch(site.path)}
                  >
                    <div className={styles.siteSwitcherItemTop}>
                      <span className={styles.siteSwitcherItemLabel}>
                        {site.label} <span className={styles.itemArrow} aria-hidden="true">›</span>
                      </span>
                    </div>
                    <p className={styles.siteSwitcherItemDescription}>{site.description}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <nav className={styles.desktopNav} aria-label="Primary">
          {isGamer ? (
            <>
              <Link
                to={`/reallives/${siteKey}`}
                className={clsx(
                  styles.navItem,
                  styles.navItemLink,
                  isHomeIndex && styles.navItemActive,
                )}
                onClick={() => closeAllDropdowns()}
              >
                <span className={styles.navLabel}>Home</span>
              </Link>
              <Link
                to="/reallives/gamer/products"
                className={clsx(
                  styles.navItem,
                  styles.navItemLink,
                  isNavItemActive('products') && styles.navItemActive,
                )}
                onClick={() => closeAllDropdowns()}
              >
                <span className={styles.navLabel}>Products</span>
              </Link>
              <Link
                to="/reallives/gamer/pricing"
                className={clsx(
                  styles.navItem,
                  styles.navItemLink,
                  isNavItemActive('pricing') && styles.navItemActive,
                )}
                onClick={() => closeAllDropdowns()}
              >
                <span className={styles.navLabel}>Pricing</span>
              </Link>
              {desktopOurStory}
            </>
          ) : (
            <>
              <Link
                to={`/reallives/${siteKey}`}
                className={clsx(
                  styles.navItem,
                  styles.navItemLink,
                  isHomeIndex && styles.navItemActive,
                )}
                onClick={() => closeAllDropdowns()}
              >
                <span className={styles.navLabel}>Home</span>
              </Link>
              <button
                type="button"
                className={clsx(
                  styles.navItem,
                  isNavItemActive('products') && styles.navItemActive,
                )}
                onClick={() => handlePrimaryNavClick(`${basePath}/products`)}
              >
                <span className={styles.navLabel}>Products</span>
              </button>

              <div className={styles.navItemWithDropdown}>
                <button
                  type="button"
                  className={clsx(
                    styles.navItem,
                    isNavItemActive('impact') && styles.navItemActive,
                  )}
                  onClick={() =>
                    setOpenDropdown((current) => (current === 'impact' ? null : 'impact'))
                  }
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === 'impact'}
                >
                  <span className={styles.navLabel}>Impact</span>
                  <span className={styles.navCaret} aria-hidden="true" />
                </button>

                {openDropdown === 'impact' && (
                  <div className={styles.dropdownPanel} role="menu">
                    <button
                      type="button"
                      className={styles.dropdownItem}
                      onClick={() => handlePrimaryNavClick(`${basePath}/changemaker`)}
                    >
                      <span className={styles.dropdownIconWrap}>
                        <ImpactIcon />
                      </span>
                      <div className={styles.dropdownItemBody}>
                        <span className={styles.dropdownItemTitle}>ChangeMaker Project</span>
                        <span className={styles.dropdownItemDescription}>
                          The journey from awareness to action
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className={styles.dropdownItem}
                      onClick={() => handlePrimaryNavClick(`${basePath}/impact`)}
                    >
                      <span className={styles.dropdownIconWrap}>
                        <GlobeIcon />
                      </span>
                      <div className={styles.dropdownItemBody}>
                        <span className={styles.dropdownItemTitle}>Our Impact Stories</span>
                        <span className={styles.dropdownItemDescription}>
                          7 Countries and over a hundred workshops
                        </span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                className={clsx(
                  styles.navItem,
                  isNavItemActive('research') && styles.navItemActive,
                )}
                onClick={() => handlePrimaryNavClick(`${basePath}/research`)}
              >
                <span className={styles.navLabel}>Research</span>
              </button>

              <button
                type="button"
                className={clsx(
                  styles.navItem,
                  isNavItemActive('pricing') && styles.navItemActive,
                )}
                onClick={() => handlePrimaryNavClick(`${basePath}/pricing`)}
              >
                <span className={styles.navLabel}>Pricing</span>
              </button>

              {desktopOurStory}

              <Link
                to={`/reallives/${siteKey}/foundation`}
                className={clsx(
                  styles.navItemExternal,
                  styles.navItemLink,
                  isNavItemActive('foundation') && styles.navItemActive,
                )}
                onClick={() => closeAllDropdowns()}
              >
                <span className={styles.navLabel}>Foundation</span>
              </Link>
            </>
          )}
        </nav>

        <div className={styles.rightCluster}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => toggleTheme?.()}
            aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <div className={styles.ctaRow}>
            <a
              href="https://reallivesworld.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.loginButton}
            >
              Log In
            </a>
            <Link to={`/reallives/${siteKey}/pricing`} className={styles.primaryCta}>
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setMobileImpactOpen(false);
              setMobileStoryOpen(false);
              setOpenDropdown(null);
              setSwitcherOpen(false);
            }}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className={styles.overlay}
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className={styles.mobileTop}>
              <div className={styles.mobileSiteSwitcher}>
                <button
                  type="button"
                  className={styles.siteSwitcherButton}
                  onClick={() => setSwitcherOpen((open) => !open)}
                  aria-haspopup="menu"
                  aria-expanded={switcherOpen}
                >
                  <span className={styles.siteSwitcherLabel}>{siteLabel}</span>
                  <span className={styles.siteSwitcherArrow} aria-hidden="true" />
                </button>

                {switcherOpen && (
                  <div className={styles.siteSwitcherDropdown} role="menu">
                    {otherSites.map((site) => (
                      <button
                        key={site.key}
                        type="button"
                        className={styles.siteSwitcherItem}
                        onClick={() => handleSiteSwitch(site.path)}
                      >
                        <div className={styles.siteSwitcherItemTop}>
                          <span className={styles.siteSwitcherItemLabel}>
                            {site.label}{' '}
                            <span className={styles.itemArrow} aria-hidden="true">
                              ›
                            </span>
                          </span>
                        </div>
                        <p className={styles.siteSwitcherItemDescription}>
                          {site.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <nav className={styles.mobileNav} aria-label="Primary mobile">
              {isGamer ? (
                <>
                  <Link
                    to={`/reallives/${siteKey}`}
                    className={clsx(
                      styles.mobileItem,
                      styles.navItemLink,
                      isHomeIndex && styles.navItemActive,
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navLabel}>Home</span>
                  </Link>
                  <Link
                    to="/reallives/gamer/products"
                    className={clsx(
                      styles.mobileItem,
                      styles.navItemLink,
                      isNavItemActive('products') && styles.navItemActive,
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navLabel}>Products</span>
                  </Link>
                  <Link
                    to="/reallives/gamer/pricing"
                    className={clsx(
                      styles.mobileItem,
                      styles.navItemLink,
                      isNavItemActive('pricing') && styles.navItemActive,
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navLabel}>Pricing</span>
                  </Link>
                  {mobileOurStory}
                </>
              ) : (
                <>
                  <Link
                    to={`/reallives/${siteKey}`}
                    className={clsx(
                      styles.mobileItem,
                      styles.navItemLink,
                      isHomeIndex && styles.navItemActive,
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navLabel}>Home</span>
                  </Link>
                  <button
                    type="button"
                    className={clsx(
                      styles.mobileItem,
                      isNavItemActive('products') && styles.navItemActive,
                    )}
                    onClick={() => handlePrimaryNavClick(`${basePath}/products`)}
                  >
                    <span className={styles.navLabel}>Products</span>
                  </button>

                  <div className={styles.mobileGroup}>
                    <button
                      type="button"
                      className={clsx(
                        styles.mobileItem,
                        isNavItemActive('impact') && styles.navItemActive,
                      )}
                      onClick={() => setMobileImpactOpen((open) => !open)}
                      aria-expanded={mobileImpactOpen}
                    >
                      <span className={styles.navLabel}>Impact</span>
                      <span
                        className={clsx(
                          styles.accordionCaret,
                          mobileImpactOpen && styles.accordionCaretOpen,
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileImpactOpen && (
                      <div className={styles.mobileSubmenu}>
                        <button
                          type="button"
                          className={styles.mobileSubItem}
                          onClick={() => handlePrimaryNavClick(`${basePath}/changemaker`)}
                        >
                          <ImpactIcon />
                          <div className={styles.dropdownItemBody}>
                            <span className={styles.dropdownItemTitle}>ChangeMaker Project</span>
                            <span className={styles.dropdownItemDescription}>
                              The journey from awareness to action
                            </span>
                          </div>
                        </button>
                        <button
                          type="button"
                          className={styles.mobileSubItem}
                          onClick={() => handlePrimaryNavClick(`${basePath}/impact`)}
                        >
                          <GlobeIcon />
                          <div className={styles.dropdownItemBody}>
                            <span className={styles.dropdownItemTitle}>Our Impact Stories</span>
                            <span className={styles.dropdownItemDescription}>
                              7 Countries and over a hundred workshops
                            </span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className={clsx(
                      styles.mobileItem,
                      isNavItemActive('research') && styles.navItemActive,
                    )}
                    onClick={() => handlePrimaryNavClick(`${basePath}/research`)}
                  >
                    <span className={styles.navLabel}>Research</span>
                  </button>

                  <button
                    type="button"
                    className={clsx(
                      styles.mobileItem,
                      isNavItemActive('pricing') && styles.navItemActive,
                    )}
                    onClick={() => handlePrimaryNavClick(`${basePath}/pricing`)}
                  >
                    <span className={styles.navLabel}>Pricing</span>
                  </button>

                  {mobileOurStory}

                  <Link
                    to={`/reallives/${siteKey}/foundation`}
                    className={clsx(
                      styles.mobileItemExternal,
                      styles.mobileItem,
                      styles.navItemLink,
                      isNavItemActive('foundation') && styles.navItemActive,
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.navLabel}>Foundation</span>
                  </Link>
                </>
              )}
            </nav>

            <div className={styles.mobileFooter}>
              <a
                href="https://reallivesworld.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.loginButton}
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </a>
              <Link
                to={`/reallives/${siteKey}/pricing`}
                className={styles.primaryCta}
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
