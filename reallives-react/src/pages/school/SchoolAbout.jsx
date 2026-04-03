import { useState } from 'react';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './SchoolAbout.module.css';

export default function SchoolAbout() {
  const { about } = useSiteContent();
  const [activeTab, setActiveTab] = useState(0);

  if (!about) {
    return null;
  }

  const tabs = about.tabs ?? [];
  const history = about.history;
  const team = about.team;
  const globalSupport = about.globalSupport;

  const firstMilestoneImages = history?.milestones?.[0]?.images;

  return (
    <section className={styles.about} aria-labelledby="school-about-heading">
      <h1 id="school-about-heading" className={styles.heading}>
        {about.heading}
      </h1>

      <div className={styles.tabBar} role="tablist" aria-label={about.heading}>
        {tabs.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`about-tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`about-panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={clsx(styles.tab, activeTab === index && styles.tabActive)}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div
          id="about-panel-0"
          role="tabpanel"
          aria-labelledby="about-tab-0"
          className={styles.panel}
        >
          {firstMilestoneImages?.length ? (
            <div className={styles.gallery}>
              {firstMilestoneImages.map((src) => (
                <img key={src} src={src} alt="" className={styles.galleryImg} />
              ))}
            </div>
          ) : null}

          <div className={styles.timeline}>
            {history?.milestones?.map((m) => (
              <article key={m.version} className={styles.milestone}>
                <div className={styles.milestoneHeader}>
                  <h2 className={styles.version}>{m.version}</h2>
                  {m.badge ? <span className={styles.badge}>{m.badge}</span> : null}
                </div>
                {m.description ? <p className={styles.milestoneBody}>{m.description}</p> : null}
              </article>
            ))}
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div
          id="about-panel-1"
          role="tabpanel"
          aria-labelledby="about-tab-1"
          className={styles.panel}
        >
          <div className={styles.bioStack}>
            {team?.leader ? (
              <div className={styles.bioRow}>
                <div>
                  {team.leader.role ? (
                    <p className={styles.bioRole}>{team.leader.role}</p>
                  ) : null}
                  {team.leader.name ? <h2 className={styles.bioName}>{team.leader.name}</h2> : null}
                  {team.leader.bioParagraphs?.map((p, i) => (
                    <p key={`leader-bio-${i}`} className={styles.bioParagraph}>
                      {p}
                    </p>
                  ))}
                </div>
                {team.leader.imagePath ? (
                  <div className={styles.bioImageWrap}>
                    <img
                      src={team.leader.imagePath}
                      alt=""
                      className={styles.bioImage}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}

            {team?.academicResearchCoordinator ? (
              <div className={clsx(styles.bioRow, styles.bioRowReverse)}>
                {team.academicResearchCoordinator.imagePath ? (
                  <div className={styles.bioImageWrap}>
                    <img
                      src={team.academicResearchCoordinator.imagePath}
                      alt=""
                      className={styles.bioImage}
                    />
                  </div>
                ) : null}
                <div>
                  {team.academicResearchCoordinator.role ? (
                    <p className={styles.bioRole}>{team.academicResearchCoordinator.role}</p>
                  ) : null}
                  {team.academicResearchCoordinator.name ? (
                    <h2 className={styles.bioName}>{team.academicResearchCoordinator.name}</h2>
                  ) : null}
                  {team.academicResearchCoordinator.bioParagraphs?.map((p, i) => (
                    <p key={`arc-bio-${i}`} className={styles.bioParagraph}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div
          id="about-panel-2"
          role="tabpanel"
          aria-labelledby="about-tab-2"
          className={styles.panel}
        >
          {team?.workingTeamHeading ? (
            <h2 className={styles.subheading}>{team.workingTeamHeading}</h2>
          ) : null}
          <div className={styles.workingGrid}>
            {team?.workingTeam?.map((m) => (
              <div key={`${m.name}-${m.role}`} className={styles.memberCard}>
                <h3 className={styles.memberName}>{m.name}</h3>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            ))}
          </div>

          {team?.itinerantHeading ? (
            <h2 className={styles.subheading}>{team.itinerantHeading}</h2>
          ) : null}
          {team?.itinerantIntroParagraphs?.map((p, i) => (
            <p key={`itinerant-intro-${i}`} className={styles.intro}>
              {p}
            </p>
          ))}
          <div className={styles.itinerantGrid}>
            {team?.itinerantNameSlots?.map((column, colIndex) => (
              <ul key={`col-${colIndex}`} className={styles.nameList}>
                {column.map((name) => (
                  <li key={name} className={styles.nameItem}>
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div
          id="about-panel-3"
          role="tabpanel"
          aria-labelledby="about-tab-3"
          className={styles.panel}
        >
          {globalSupport?.specialThanksHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.specialThanksHeading}</h2>
              {globalSupport.specialThanks?.map((item) => (
                <div key={item.imagePath} className={styles.thanksRow}>
                  <div className={styles.thanksCard}>
                    {item.imagePath ? (
                      <img
                        src={item.imagePath}
                        alt=""
                        className={styles.thanksImg}
                      />
                    ) : null}
                    {item.body ? <p className={styles.thanksBody}>{item.body}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {globalSupport?.alwaysGratefulHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.alwaysGratefulHeading}</h2>
              <div className={styles.gratefulGrid}>
                {globalSupport.alwaysGratefulMembers?.map((member) => (
                  <div key={member.imagePath} className={styles.gratefulCard}>
                    {member.imagePath ? (
                      <img
                        src={member.imagePath}
                        alt=""
                        className={styles.gratefulThumb}
                      />
                    ) : null}
                    <div>
                      {member.name ? <h3 className={styles.gratefulName}>{member.name}</h3> : null}
                      {member.location ? (
                        <p className={styles.gratefulLocation}>{member.location}</p>
                      ) : null}
                      {member.description ? (
                        <p className={styles.gratefulDesc}>{member.description}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {globalSupport?.thanksHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.thanksHeading}</h2>
              <div className={styles.thanksListGrid}>
                {globalSupport.thanksEntries?.map((entry) => (
                  <div key={`${entry.name}-${entry.location}`} className={styles.thanksEntry}>
                    {entry.name ? <h3 className={styles.thanksEntryName}>{entry.name}</h3> : null}
                    {entry.location ? (
                      <p className={styles.thanksEntryLoc}>{entry.location}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
