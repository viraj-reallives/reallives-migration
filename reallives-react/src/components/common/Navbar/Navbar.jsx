import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import { useTheme } from '@context/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { navLinks = [], footer = {} } = useSiteContent();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme() ?? {};
  const [menuOpen, setMenuOpen] = useState(false);

  const logoSrc = footer.logo ?? footer.logoPath ?? '';
  const homePath = navLinks[0]?.path ?? '/';

  const isActive = path => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={homePath} className={styles.logoLink}>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={footer.organizationName ?? ''}
              className={styles.logoImg}
            />
          ) : null}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(styles.navLink, isActive(link.path) && styles.navLinkActive)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => toggleTheme?.()}
            aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className={styles.overlay}
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className={styles.mobilePanel} role="dialog" aria-modal="true" aria-label="Site navigation">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(styles.mobileLink, isActive(link.path) && styles.navLinkActive)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </header>
  );
}
