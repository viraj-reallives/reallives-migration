// import { useState } from 'react';
// import clsx from 'clsx';
// import { useSiteContent } from '@hooks/useSiteContent';
// import styles from '../school/SchoolAbout.module.css';

// export default function UniversityAbout() {
//   const { about } = useSiteContent();
//   const [activeTab, setActiveTab] = useState(0);

//   if (!about) {
//     return null;
//   }

//   const tabs = about.tabs ?? [];
//   const history = about.history;
//   const team = about.team;
//   const globalSupport = about.globalSupport;

//   const firstMilestoneImages = history?.milestones?.[0]?.images;

//   return (
//     <section className={styles.about} aria-labelledby="university-about-heading">
//       <h1 id="university-about-heading" className={styles.heading}>
//         {about.heading}
//       </h1>

//       <div className={styles.tabBar} role="tablist" aria-label={about.heading}>
//         {tabs.map((label, index) => (
//           <button
//             key={label}
//             type="button"
//             role="tab"
//             id={`about-tab-${index}`}
//             aria-selected={activeTab === index}
//             aria-controls={`about-panel-${index}`}
//             tabIndex={activeTab === index ? 0 : -1}
//             className={clsx(styles.tab, activeTab === index && styles.tabActive)}
//             onClick={() => setActiveTab(index)}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {activeTab === 0 && (
//         <div
//           id="about-panel-0"
//           role="tabpanel"
//           aria-labelledby="about-tab-0"
//           className={styles.panel}
//         >
//           {firstMilestoneImages?.length ? (
//             <div className={styles.gallery}>
//               {firstMilestoneImages.map((src) => (
//                 <img key={src} src={src} alt="" className={styles.galleryImg} />
//               ))}
//             </div>
//           ) : null}

//           <div className={styles.timeline}>
//             {history?.milestones?.map((m) => (
//               <article key={m.version} className={styles.milestone}>
//                 <div className={styles.milestoneHeader}>
//                   <h2 className={styles.version}>{m.version}</h2>
//                   {m.badge ? <span className={styles.badge}>{m.badge}</span> : null}
//                 </div>
//                 {m.description ? <p className={styles.milestoneBody}>{m.description}</p> : null}
//               </article>
//             ))}
//           </div>
//         </div>
//       )}

//       {activeTab === 1 && (
//         <div
//           id="about-panel-1"
//           role="tabpanel"
//           aria-labelledby="about-tab-1"
//           className={styles.panel}
//         >
//           <div className={styles.bioStack}>
//             {team?.leader ? (
//               <div className={styles.bioRow}>
//                 <div>
//                   {team.leader.role ? (
//                     <p className={styles.bioRole}>{team.leader.role}</p>
//                   ) : null}
//                   {team.leader.name ? <h2 className={styles.bioName}>{team.leader.name}</h2> : null}
//                   {team.leader.bioParagraphs?.map((p, i) => (
//                     <p key={`leader-bio-${i}`} className={styles.bioParagraph}>
//                       {p}
//                     </p>
//                   ))}
//                 </div>
//                 {team.leader.imagePath ? (
//                   <div className={styles.bioImageWrap}>
//                     <img
//                       src={team.leader.imagePath}
//                       alt=""
//                       className={styles.bioImage}
//                     />
//                   </div>
//                 ) : null}
//               </div>
//             ) : null}

//             {team?.academicResearchCoordinator ? (
//               <div className={clsx(styles.bioRow, styles.bioRowReverse)}>
//                 {team.academicResearchCoordinator.imagePath ? (
//                   <div className={styles.bioImageWrap}>
//                     <img
//                       src={team.academicResearchCoordinator.imagePath}
//                       alt=""
//                       className={styles.bioImage}
//                     />
//                   </div>
//                 ) : null}
//                 <div>
//                   {team.academicResearchCoordinator.role ? (
//                     <p className={styles.bioRole}>{team.academicResearchCoordinator.role}</p>
//                   ) : null}
//                   {team.academicResearchCoordinator.name ? (
//                     <h2 className={styles.bioName}>{team.academicResearchCoordinator.name}</h2>
//                   ) : null}
//                   {team.academicResearchCoordinator.bioParagraphs?.map((p, i) => (
//                     <p key={`arc-bio-${i}`} className={styles.bioParagraph}>
//                       {p}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       )}

//       {activeTab === 2 && (
//         <div
//           id="about-panel-2"
//           role="tabpanel"
//           aria-labelledby="about-tab-2"
//           className={styles.panel}
//         >
//           {team?.workingTeamHeading ? (
//             <h2 className={styles.subheading}>{team.workingTeamHeading}</h2>
//           ) : null}
//           <div className={styles.workingGrid}>
//             {team?.workingTeam?.map((m) => (
//               <div key={`${m.name}-${m.role}`} className={styles.memberCard}>
//                 <h3 className={styles.memberName}>{m.name}</h3>
//                 <p className={styles.memberRole}>{m.role}</p>
//               </div>
//             ))}
//           </div>

//           {team?.itinerantHeading ? (
//             <h2 className={styles.subheading}>{team.itinerantHeading}</h2>
//           ) : null}
//           {team?.itinerantIntroParagraphs?.map((p, i) => (
//             <p key={`itinerant-intro-${i}`} className={styles.intro}>
//               {p}
//             </p>
//           ))}
//           <div className={styles.itinerantGrid}>
//             {team?.itinerantNameSlots?.map((column, colIndex) => (
//               <ul key={`col-${colIndex}`} className={styles.nameList}>
//                 {column.map((name) => (
//                   <li key={name} className={styles.nameItem}>
//                     {name}
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//         </div>
//       )}

//       {activeTab === 3 && (
//         <div
//           id="about-panel-3"
//           role="tabpanel"
//           aria-labelledby="about-tab-3"
//           className={styles.panel}
//         >
//           {globalSupport?.specialThanksHeading ? (
//             <div className={styles.supportSection}>
//               <h2 className={styles.supportHeading}>{globalSupport.specialThanksHeading}</h2>
//               {globalSupport.specialThanks?.map((item) => (
//                 <div key={item.imagePath} className={styles.thanksRow}>
//                   <div className={styles.thanksCard}>
//                     {item.imagePath ? (
//                       <img
//                         src={item.imagePath}
//                         alt=""
//                         className={styles.thanksImg}
//                       />
//                     ) : null}
//                     {item.body ? <p className={styles.thanksBody}>{item.body}</p> : null}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : null}

//           {globalSupport?.alwaysGratefulHeading ? (
//             <div className={styles.supportSection}>
//               <h2 className={styles.supportHeading}>{globalSupport.alwaysGratefulHeading}</h2>
//               <div className={styles.gratefulGrid}>
//                 {globalSupport.alwaysGratefulMembers?.map((member) => (
//                   <div key={member.imagePath} className={styles.gratefulCard}>
//                     {member.imagePath ? (
//                       <img
//                         src={member.imagePath}
//                         alt=""
//                         className={styles.gratefulThumb}
//                       />
//                     ) : null}
//                     <div>
//                       {member.name ? <h3 className={styles.gratefulName}>{member.name}</h3> : null}
//                       {member.location ? (
//                         <p className={styles.gratefulLocation}>{member.location}</p>
//                       ) : null}
//                       {member.description ? (
//                         <p className={styles.gratefulDesc}>{member.description}</p>
//                       ) : null}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : null}

//           {globalSupport?.thanksHeading ? (
//             <div className={styles.supportSection}>
//               <h2 className={styles.supportHeading}>{globalSupport.thanksHeading}</h2>
//               <div className={styles.thanksListGrid}>
//                 {globalSupport.thanksEntries?.map((entry) => (
//                   <div key={`${entry.name}-${entry.location}`} className={styles.thanksEntry}>
//                     {entry.name ? <h3 className={styles.thanksEntryName}>{entry.name}</h3> : null}
//                     {entry.location ? (
//                       <p className={styles.thanksEntryLoc}>{entry.location}</p>
//                     ) : null}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : null}
//         </div>
//       )}
//     </section>
//   );
// }


import { useState } from 'react';
import clsx from 'clsx';
import { useSiteContent } from '@hooks/useSiteContent';
import LinkedInGlyph from '../../components/icons/LinkedInGlyph';
import {
  advisorTeamMembers,
  internTeamMembers,
  workingTeamMembers,
} from '../../data/workingTeamMembers';
// CSS Paths maintained as per your second snippet
import styles from "../../pages/school/SchoolAbout.module.css";
import Styles1 from "../../components/costom_css/School_About_override.module.css";

export default function UniversityAbout() {
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
    <section className={styles.about} aria-labelledby="university-about-heading">
      <h1 id="university-about-heading" className={styles.heading}>
        {about.heading}
      </h1>

      <div className={clsx(styles.tabBar, Styles1.align_center)} role="tablist" aria-label={about.heading}>
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

      {/* Tab 0: History / Timeline */}
      {activeTab === 0 && (
        <div id="about-panel-0" role="tabpanel" aria-labelledby="about-tab-0" className={styles.panel}>
          <div className={Styles1.container_history_tab}>
            <div className={Styles1.history_first_container}>
              {firstMilestoneImages?.slice(0, 5).map((src, index) => (
                <div key={index} className={clsx(Styles1.width_88, Styles1.image_card_reallives)}>
                  <img src={src} alt="" className={Styles1.galleryImg} />
                </div>
              ))}
            </div>

            <div className={Styles1.line_arrow_box}>
              <div className={Styles1.line_inner_box}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={Styles1.arrow_box}>
                    <div className={Styles1.line_arrow_2}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={Styles1.history_second_container}>
              {history?.milestones?.map((m, i) => (
                <div key={i} className={Styles1.card_realives_version}>
                  <p className={Styles1.reallives_text_version}>RealLives {m.version}</p>
                  <p className={Styles1.reallives_description_text}>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Inventor */}
      {activeTab === 1 && (
        <div id="about-panel-1" role="tabpanel" aria-labelledby="about-tab-1" className={clsx(styles.panel, Styles1.inventor_class_style)}>
          <div className={Styles1.container_founder_reallives}>
            <div className={Styles1.image_title_fouder}>
              <span className={Styles1.inventor_container}>
                <h1>Inventor</h1>
                <p>Kathy and Bob Runyan</p>
              </span>
              <div className={Styles1.inventor_image_box}>
                <img
                  className={Styles1.width_image}
                  src="https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/bob-image.jpg"
                  alt="Bob Runyan"
                />
              </div>
            </div>
            <div className={Styles1.descritpion_container_founder}>
              <p>Bob Runyan grew up in California's emerging Silicon Valley...</p>
              <p>In 1996, he conceived software that could simulate life experiences worldwide... launch RealLives in 2001.</p>
              <p>The partnership began when Bob met Dr. Parag Mankeeker through the Ashoka Foundation.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Team */}
      {activeTab === 2 && (
        <div id="about-panel-2" role="tabpanel" aria-labelledby="about-tab-2" className={styles.panel}>
          {/* Main Leader Bio */}
          <div className={styles.bioStack}>
            {team?.leader && (
              <div className={styles.bioRow}>
                <div>
                  <p className={styles.bioRole}>{team.leader.role}</p>
                  <h2 className={styles.bioName}>{team.leader.name}</h2>
                  {team.leader.bioParagraphs?.map((p, i) => (
                    <p key={i} className={styles.bioParagraph}>{p}</p>
                  ))}
                </div>
                {team.leader.imagePath && (
                  <div className={styles.bioImageWrap}>
                    <img src={team.leader.imagePath} alt="" className={styles.bioImage} />
                  </div>
                )}
              </div>
            )}
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
                                <p className={styles.bioRole}>
                                  {team.academicResearchCoordinator.role}
                                </p>
                              ) : null}
                              {team.academicResearchCoordinator.name ? (
                                <h2 className={styles.bioName}>
                                  {team.academicResearchCoordinator.name}
                                </h2>
                              ) : null}
                              {team.academicResearchCoordinator.bioParagraphs?.map(
                                (p, i) => (
                                  <p key={`arc-bio-${i}`} className={styles.bioParagraph}>
                                    {p}
                                  </p>
                                ),
                              )}
                            </div>
                          </div>
               ):null}
          </div>

          {/* Our Advisors + Working Team + Interns */}
          <div
            className={Styles1.team_reallives_container}
            aria-labelledby="our-advisors-heading"
          >
            <h2 id="our-advisors-heading" className={Styles1.working_team_h1}>
              {team?.advisorsHeading ?? "Our Advisors"}
            </h2>
            <div className={Styles1.team_container}>
              {advisorTeamMembers.map((item) => (
                <div key={item.name} className={Styles1.team_card}>
                  <img src={item.img} alt={item.name} className={Styles1.team_img} />
                  <div className={Styles1.team_content}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <a
                      href={item.linkedinUrl}
                      className={Styles1.teamLinkedinBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} on LinkedIn`}
                    >
                      <LinkedInGlyph size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={Styles1.team_reallives_container}
            aria-labelledby="working-team-heading"
          >
            <h2
              id="working-team-heading"
              className={Styles1.working_team_h1}
            >
              {team?.workingTeamHeading || "Working Team"}
            </h2>
            <div className={Styles1.team_container}>
              {workingTeamMembers.map((item) => (
                <div key={item.name} className={Styles1.team_card}>
                  <img src={item.img} alt={item.name} className={Styles1.team_img} />
                  <div className={Styles1.team_content}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <a
                      href={item.linkedinUrl}
                      className={Styles1.teamLinkedinBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} on LinkedIn`}
                    >
                      <LinkedInGlyph size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={Styles1.team_reallives_container}
            aria-labelledby="our-interns-heading"
          >
            <h2 id="our-interns-heading" className={Styles1.working_team_h1}>
              {team?.internsHeading ?? "Our Interns"}
            </h2>
            <div className={Styles1.team_container}>
              {internTeamMembers.map((item) => (
                <div key={item.name} className={Styles1.team_card}>
                  <img src={item.img} alt={item.name} className={Styles1.team_img} />
                  <div className={Styles1.team_content}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <a
                      href={item.linkedinUrl}
                      className={Styles1.teamLinkedinBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} on LinkedIn`}
                    >
                      <LinkedInGlyph size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerant Team Members Section */}
          <div className={Styles1.interant_team_member_container}>
            <div className={Styles1.inerant_description_container}>
              <h1 className={Styles1.text_title_inerant}>{team?.itinerantHeading || "Itinerant Team Members"}</h1>
              <div className={Styles1.descritpion_container_founder_2}>
                {team?.itinerantIntroParagraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                )) || <p>RealLives is supported by a global network of contributors...</p>}
              </div>
            </div>
            <div className={Styles1.name_change_animation_box}>
              <div className={Styles1.name_box}>
                <div className={clsx(Styles1.slot, Styles1.slot_1)}>
                  <p>Manisha Sathe</p><p>Vivek Rishi</p><p>Paresh Deshpande</p><p>Nikhil Jain</p>
                  <p>Purva Deshpande</p><p>Sateesh Khomne</p><p>Namita Pandya</p>
                </div>
                <div className={clsx(Styles1.slot, Styles1.slot_2)}>
                  <p>Omkar Chandrachud</p><p>Makarand Vagaskar</p><p>Dilip Kalantri</p>
                  <p>Dr. Manasi Abhyankar</p><p>Lukesh Bundele</p><p>Yogini Barde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Global Support */}
      {activeTab === 3 && (
        <div id="about-panel-3" role="tabpanel" aria-labelledby="about-tab-3" className={styles.panel}>
          {globalSupport?.specialThanksHeading && (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.specialThanksHeading}</h2>
              {globalSupport.specialThanks?.map((item, i) => (
                <div key={i} className={styles.thanksRow}>
                  <div className={styles.thanksCard}>
                    {item.imagePath && <img src={item.imagePath} alt="" className={styles.thanksImg} />}
                    {item.body && <p className={styles.thanksBody}>{item.body}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {globalSupport?.alwaysGratefulHeading && (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.alwaysGratefulHeading}</h2>
              <div className={styles.gratefulGrid}>
                {globalSupport.alwaysGratefulMembers?.map((member, i) => (
                  <div key={i} className={styles.gratefulCard}>
                    {member.imagePath && <img src={member.imagePath} alt="" className={styles.gratefulThumb} />}
                    <div>
                      {member.name && <h3 className={styles.gratefulName}>{member.name}</h3>}
                      {member.location && <p className={styles.gratefulLocation}>{member.location}</p>}
                      {member.description && <p className={styles.gratefulDesc}>{member.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {globalSupport?.thanksHeading && (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>{globalSupport.thanksHeading}</h2>
              <div className={styles.thanksListGrid}>
                {globalSupport.thanksEntries?.map((entry, i) => (
                  <div key={i} className={styles.thanksEntry}>
                    {entry.name && <h3 className={styles.thanksEntryName}>{entry.name}</h3>}
                    {entry.location && <p className={styles.thanksEntryLoc}>{entry.location}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}