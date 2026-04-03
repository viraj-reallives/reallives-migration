import { useState } from 'react';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import styles from './GamerAbout.module.css';

export default function GamerAbout() {
  const { about } = useSiteContent();
  const [activeTab, setActiveTab] = useState(0);

  if (!about) {
    return null;
  }

  const tabs = about.tabs ?? [];
  const history = about.history;
  const team = about.team;
  const gs = about.globalSupport;
  const inventor = about.inventor;

  const gratefulMembers = gs?.alwaysGratefulMembers ?? gs?.gratefulMembers ?? [];
  const thanksList = gs?.thanksEntries ?? gs?.thanksNames ?? [];
  const thanksTitle = gs?.thanksHeading ?? gs?.thanksSectionHeading;

  return (
    <section className={styles.about} aria-labelledby="gamer-about-heading" id="about-us-gamer">
      <h1 id="gamer-about-heading" className={styles.heading}>
        {about.heading}
      </h1>

      <div className={styles.tabBar} role="tablist" aria-label={about.heading}>
        {tabs.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            className={clsx(styles.tab, activeTab === index && styles.tabActive)}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div role="tabpanel">
          {history?.milestoneImages?.length ? (
            <div className={styles.gallery}>
              {history.milestoneImages.map((src) => (
                <img key={src} src={src} alt="" className={styles.galleryImg} />
              ))}
            </div>
          ) : null}
          {history?.milestones?.map((m) => (
            <article key={m.version} className={styles.milestone}>
              <div className={styles.milestoneHead}>
                <h2 className={styles.version}>{m.version}</h2>
                {m.badge ? <span className={styles.badge}>{m.badge}</span> : null}
              </div>
              {m.description ? <p className={styles.milestoneBody}>{m.description}</p> : null}
            </article>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div role="tabpanel">
          <div className={styles.bioStack}>
            {team?.leader ? (
              <div className={styles.bioRow}>
                <div>
                  {team.leader.role ? <p className={styles.bioRole}>{team.leader.role}</p> : null}
                  {team.leader.name ? <h2 className={styles.bioName}>{team.leader.name}</h2> : null}
                  {team.leader.bioParagraphs?.map((p, i) => (
                    <p key={`l-${i}`} className={styles.bioParagraph}>
                      {p}
                    </p>
                  ))}
                </div>
                {team.leader.imagePath ? (
                  <div className={styles.bioImgWrap}>
                    <img src={team.leader.imagePath} alt="" className={styles.bioImg} />
                  </div>
                ) : null}
              </div>
            ) : null}

            {team?.academicResearchCoordinator ? (
              <div className={clsx(styles.bioRow, styles.bioRowReverse)}>
                {team.academicResearchCoordinator.imagePath ? (
                  <div className={styles.bioImgWrap}>
                    <img
                      src={team.academicResearchCoordinator.imagePath}
                      alt=""
                      className={styles.bioImg}
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
                    <p key={`a-${i}`} className={styles.bioParagraph}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {team?.workingTeamHeading ? <h3 className={styles.subheading}>{team.workingTeamHeading}</h3> : null}
          <div className={styles.workGrid}>
            {team?.workingTeam?.map((m) => (
              <div key={`${m.name}-${m.role}`} className={styles.memberCard}>
                <div className={styles.memberName}>{m.name}</div>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            ))}
          </div>

          {team?.itinerantHeading ? (
            <h3 className={styles.subheading}>{team.itinerantHeading}</h3>
          ) : null}
          {team?.itinerantIntroParagraphs?.map((p, i) => (
            <p key={`it-${i}`} className={styles.intro}>
              {p}
            </p>
          ))}
          <div className={styles.itinerantGrid}>
            {team?.itinerantNameSlots?.map((col, i) => (
              <ul key={`col-${i}`} className={styles.nameList}>
                {col.map((name) => (
                  <li key={name} className={styles.nameItem}>
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      {activeTab === 2 && gs && (
        <div role="tabpanel">
          {gs.specialThanksHeading ? (
            <div>
              <h2 className={styles.supportHeading}>{gs.specialThanksHeading}</h2>
              {gs.specialThanks?.map((item) => (
                <div key={item.imagePath} className={styles.thanksRow}>
                  <div className={styles.thanksCard}>
                    {item.imagePath ? (
                      <img src={item.imagePath} alt="" className={styles.thanksImg} />
                    ) : null}
                    {item.body ? <p className={styles.thanksBody}>{item.body}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {gs.alwaysGratefulHeading ? (
            <div>
              <h2 className={styles.supportHeading}>{gs.alwaysGratefulHeading}</h2>
              <div className={styles.gratefulGrid}>
                {gratefulMembers.map((member) => (
                  <div key={member.imagePath} className={styles.gratefulCard}>
                    {member.imagePath ? (
                      <img src={member.imagePath} alt="" className={styles.gratefulThumb} />
                    ) : null}
                    <div>
                      {member.name ? <h3 className={styles.gratefulName}>{member.name}</h3> : null}
                      {member.location ? (
                        <p className={styles.gratefulLoc}>{member.location}</p>
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

          {thanksTitle ? (
            <div>
              <h2 className={styles.supportHeading}>{thanksTitle}</h2>
              <div className={styles.thanksListGrid}>
                {thanksList.map((entry) => (
                  <div key={`${entry.name}-${entry.location}`} className={styles.thanksEntry}>
                    <div className={styles.thanksEntryName}>{entry.name}</div>
                    <p className={styles.thanksEntryLoc}>{entry.location}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {activeTab === 3 && inventor && (
        <div role="tabpanel" className={styles.inventor}>
          <div>
            {inventor.imagePath ? (
              <div className={styles.inventorImgWrap}>
                <img src={inventor.imagePath} alt="" className={styles.inventorImg} />
              </div>
            ) : null}
          </div>
          <div>
            {inventor.title ? <h2 className={styles.inventorTitles}>{inventor.title}</h2> : null}
            {inventor.names ? <p className={styles.inventorNames}>{inventor.names}</p> : null}
            {inventor.bioParagraphs?.map((p, i) => (
              <p key={`inv-${i}`} className={styles.bioParagraph}>
                {p}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
