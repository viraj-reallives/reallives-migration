import { Link } from 'react-router-dom';
import { landingContent } from '@content/landing';
import styles from './LandingFooter.module.css';
import logo_reallives from "../../../add-image/realives-logo-footer.svg";
import Style1  from '../../costom_css/LandingFooter_overide.module.css';   


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

function trimText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default function LandingFooter() {
  const { footer = {} } = landingContent;
  const {
    about,
    contact = {},
    logo,
    copyright,
    socialLinks = [],
    links = [],
    organizationName = '',
    linksColumnTitle = 'Company',
    contactColumnTitle = 'Contact',
    socialColumnTitle = 'Social Media',
  } = footer;

  const email = trimText(contact.email);
  const phone = trimText(contact.phone);
  const address = trimText(contact.address);
  const hasContact = Boolean(email || phone || address);

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>
       
        <div className={`${styles.top} ${Style1.top_footer_override}`}>

          <div className={styles.brand}>

            {logo ? (
              <div className={styles.logoWrap}>
                <img
                  src={logo_reallives}
                  alt={organizationName || 'RealLives'}
                  className={styles.logoImg}
                />
              </div>

            ) : null}

            {about ? <p className={`${styles.about} ${Style1.footer_description}`}>{about}</p> : null}
            {/* ooter_description  */}
          </div>

          <div className={styles.sideColumns}>
            {links.length > 0 ? (
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>{linksColumnTitle}</h4>
                <ul className={styles.linkList}>
                  {links.map((item, i) => (
                    <li key={`${item.path}-${item.label}-${i}`} className={styles.linkItem}>
                      <Link to={item.path} className={styles.navLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {hasContact ? (
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>{contactColumnTitle}</h4>
                <ul className={styles.contactList}>
                  {email ? (
                    <li className={styles.contactItem}>
                      <a className={styles.contactValue} href={`mailto:${email}`}>
                        {email}
                      </a>
                    </li>
                  ) : null}
                  {phone ? (
                    <li className={styles.contactItem}>
                      <a className={styles.contactValue} href={`tel:${phone.replace(/\s/g, '')}`}>
                        {phone}
                      </a>
                    </li>
                  ) : null}
                  {address ? (
                    <li className={styles.contactItem}>
                      <span className={styles.contactValue}>{address}</span>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}

            {socialLinks.length > 0 ? (
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>{socialColumnTitle}</h4>
                <div className={styles.socialList}>
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
                          <img src={rasterSrc} alt="" className={styles.socialRaster} />
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

        {copyright ? (
          <div className={styles.bottom}>
            <p className={styles.copyright}>{copyright}</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
