import { useState } from "react";
import clsx from "clsx";
import { useSiteContent } from "@hooks/useSiteContent";
import styles from "./SchoolAbout.module.css";
import Styles1 from "../../components/costom_css/School_About_override.module.css";

export default function SchoolAbout() {
  const teamData = [
    {
      name: "Parag Mankeekar",
      desc: "Team Leader",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
    {
      name: "Ravi Gulhane",
      desc: "CTO",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
    {
      name: "Ajit Ghanekar",
      desc: "Chief Stasitician",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
    {
      name: "Atharva Nijampurkar",
      desc: "Senior Backend Developer",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
    {
      name: "Pankaj Sapkal",
      desc: "Chief Strategist",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
    {
      name: "Vidya Mankeekar",
      desc: "Account and HR",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },

    {
      name: "Viraj Kabbur",
      desc: "Product Manager",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },

    {
      name: "Adarsh Vishwakarma",
      desc: "Frontend Developer",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },

    {
      name: "Janhavi Desai",
      desc: "Translation Intern",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },

    {
      name: "Sakshi Kulkarni",
      desc: "Translation Intern",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },

    {
      name: "Bhoomi Luniya",
      desc: "AI Intern",
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1776234167/user_image_y4pcl1.jpg",
    },
  ];

  const { about } = useSiteContent();
  const [activeTab, setActiveTab] = useState(0);

  if (!about) {
    return null;
  }

  const tabs = about.tabs ?? [];
  const history = about.history;
  const team = about.team;
  const globalSupport = about.globalSupport;
  const Inventor = about.Inventor;

  const firstMilestoneImages = history?.milestones?.[0]?.images;

  return (
    <section className={styles.about} aria-labelledby="school-about-heading">
      <h1 id="school-about-heading" className={styles.heading}>
        {about.heading}
      </h1>

      <div
        className={`${styles.tabBar} ${Styles1.align_center}`}
        role="tablist"
        aria-label={about.heading}
      >
        {tabs.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`about-tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`about-panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={clsx(
              styles.tab,
              activeTab === index && styles.tabActive,
            )}
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
          {/* {firstMilestoneImages?.length ? (
            <div className={styles.gallery}>
              {firstMilestoneImages.map((src) => (
                <img key={src} src={src} alt="" className={styles.galleryImg} />
              ))}
            </div>
          ) : null} */}

          {/* <div className={styles.timeline}>
            {history?.milestones?.map((m) => (
              <article key={m.version} className={styles.milestone}>
                <div className={styles.milestoneHeader}>
                  <h2 className={styles.version}>{m.version}</h2>
                  {m.badge ? <span className={styles.badge}>{m.badge}</span> : null}
                </div>
                {m.description ? <p className={styles.milestoneBody}>{m.description}</p> : null}
              </article>
            ))}
          </div> */}

          <div className={Styles1.container_history_tab}>
            <div className={Styles1.history_first_container}>
              {firstMilestoneImages?.slice(0, 5).map((src, index) => (
                <div
                  key={index}
                  className={`${Styles1.width_88} ${Styles1.image_card_reallives}`}
                >
                  <img
                    src={src}
                    alt={`img-${index}`}
                    className={Styles1.galleryImg}
                  />
                </div>
              ))}
            </div>

            <div className={Styles1.line_arrow_box}>
              <div className={Styles1.line_inner_box}>
                <div className={Styles1.arrow_box}>
                  <div className={Styles1.line_arrow_2}></div>
                </div>

                <div className={Styles1.arrow_box}>
                  <div className={Styles1.line_arrow_2}></div>
                </div>

                <div className={Styles1.arrow_box}>
                  <div className={Styles1.line_arrow_2}></div>
                </div>

                <div className={Styles1.arrow_box}>
                  <div className={Styles1.line_arrow_2}></div>
                </div>

                <div className={Styles1.arrow_box}>
                  <div className={Styles1.line_arrow_2}></div>
                </div>
              </div>
            </div>

            <div className={Styles1.history_second_container}>
              <div className={Styles1.card_realives_version}>
                <p className={Styles1.reallives_text_version}>RealLives 2004</p>

                <p className={Styles1.reallives_description_text}>
                  The first widely adopted version of RealLives that introduced
                  players to a simulation of life across the globe. With a basic
                  UI and limited data, this version laid the foundation for what
                  would become a powerful learning tool on global diversity.
                </p>
              </div>

              <div className={Styles1.card_realives_version}>
                <p className={Styles1.reallives_text_version}>RealLives 2007</p>

                <p className={Styles1.reallives_description_text}>
                  An improved interface and broader country database made this
                  edition more immersive. RealLives 2007 added more life events,
                  cultural depth, and socio-economic details, bringing users
                  closer to the everyday realities of people worldwide.
                </p>
              </div>

              <div className={Styles1.card_realives_version}>
                <p className={Styles1.reallives_text_version}>RealLives 2014</p>

                <p className={Styles1.reallives_description_text}>
                  With enhanced graphics and better event logic, this version
                  offered a more detailed life simulation experience. It allowed
                  users to make impactful life decisions and see the
                  consequences unfold over time. This version continued as a
                  standalone desktop application.
                </p>
              </div>

              <div className={Styles1.card_realives_version}>
                <p className={Styles1.reallives_text_version}>RealLives 2017</p>

                <p className={Styles1.reallives_description_text}>
                  This cloud-based version of RealLives, released in October
                  2017, brought the experience online. With a revamped interface
                  and updated global data, it works seamlessly on all modern
                  browsers and operating systems.
                </p>
              </div>

              <div className={Styles1.card_realives_version}>
                <p className={Styles1.reallives_text_version}>RealLives 2025</p>

                <p className={Styles1.reallives_description_text}>
                  This cloud-based version of RealLives, released in October
                  2017, brought the experience online. With a revamped interface
                  and updated global data, it works seamlessly on all modern
                  browsers and operating systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div
          id="about-panel-4"
          role="tabpanel"
          aria-labelledby="about-tab-4"
          className={`${styles.pane} ${Styles1.inventor_class_style}`}
        >
          <div className={`${Styles1.container_founder_reallives}`}>
            <div className={Styles1.image_title_fouder}>
              <span className={Styles1.inventor_container}>
                <h1>Inventor</h1>
                <p>Kathy and Bob Runyan</p>
              </span>
              <div class={Styles1.inventor_image_box}>
                <img
                  class={Styles1.width_image}
                  src="https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/bob-image.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className={Styles1.descritpion_container_founder}>
              <p>
                Bob Runyan grew up in California's emerging Silicon Valley,
                where early exposure to technology sparked his lifelong
                curiosity. His travels through Mexico and Europe as a young
                soccer player deepened his passion for understanding diverse
                cultures and perspectives.
              </p>

              <p>
                After serving with the Peace Corps in the Seychelles
                Islands—where he taught math and computer science—Bob
                transitioned into computer programming in 1989. In 1996,
                inspired by technology's potential to build empathy, he
                conceived software that could simulate life experiences
                worldwide using real statistical data. This vision led him to
                found Educational Simulations Inc. and launch RealLives in 2001.
              </p>

              <p>
                The partnership that would transform RealLives began when Bob
                met Dr. Parag Mankeeker through the Ashoka Foundation,
                recognizing his exceptional vision for the platform's global
                potential.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 2 && (
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
                  {team.leader.name ? (
                    <h2 className={styles.bioName}>{team.leader.name}</h2>
                  ) : null}
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
            ) : null}
          </div>

          <div className={Styles1.team_reallives_container}>
            <h1 className={Styles1.working_team_h1}>Working Team</h1>

            <div className={Styles1.team_container}>
              {teamData.map((item, index) => (
                <div key={index} className={Styles1.team_card}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={Styles1.team_img}
                  />
                  <div className={Styles1.team_content}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={Styles1.interant_team_member_container}>
            <div className={Styles1.inerant_description_container}>

              <h1 class={Styles1.text_title_inerant}>Itinerant Team Members</h1>

              <div className={Styles1.descritpion_container_founder_2}>
                <p>
                  Bob Runyan grew up in California's emerging Silicon Valley,
                  where early exposure to technology sparked his lifelong
                  curiosity. His travels through Mexico and Europe as a young
                  soccer player deepened his passion for understanding diverse
                  cultures and perspectives.
                </p>

                <p>
                  After serving with the Peace Corps in the Seychelles
                  Islands—where he taught math and computer science—Bob
                  transitioned into computer programming in 1989. In 1996,
                  inspired by technology's potential to build empathy, he
                  conceived software that could simulate life experiences
                  worldwide using real statistical data. This vision led him to
                  found Educational Simulations Inc. and launch RealLives in
                  2001.
                </p>

                <p>
                  The partnership that would transform RealLives began when Bob
                  met Dr. Parag Mankeeker through the Ashoka Foundation,
                  recognizing his exceptional vision for the platform's global
                  potential.
                </p>
              </div>
            </div>

            <div className={Styles1.name_change_animation_box}>

              <div className={Styles1.name_change_animation_box}>
                  <div className={Styles1.name_box}>
                  
                    <div className={`${Styles1.slot} ${Styles1.slot_1}`}>
                      <p>Manisha Sathe</p>
                      <p>Vivek Rishi</p>
                      <p>Paresh Deshpande</p>
                      <p>Nikhil Jain</p>
                      <p>Purva Deshpande</p>
                      <p>Sateesh Khomne</p>
                      <p>Namita Pandya</p>
                      <p>Abhijit Kuljkarni</p>
                      <p>Aniruddha Bhide</p>
                      <p>Chaitanya Joshi</p>
                      <p>Tejas Chitale</p>
                      <p>Pinaki Dixit</p>
                      <p>Bob Runyan</p>
                    </div>

                   
                    <div className={`${Styles1.slot} ${Styles1.slot_2}`}>
                      <p>Omkar Chandrachud</p>
                      <p>Makarand Vagaskar</p>
                      <p>Dilip Kalantri</p>
                      <p>Dr. Manasi Abhyankar</p>
                      <p>Lukesh Bundele</p>
                      <p>Yogini Barde</p>
                      <p>Aditi Thombre</p>
                      <p>Ramesh Garudkar</p>
                      <p>Sarita Karde</p>
                      <p>Anjani Pathak</p>
                      <p>Jaganntah Shelar</p>
                      <p>Sharvari Kulkarni</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      )}

      {/* {activeTab === 2 && (
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
      )} */}

      {activeTab === 3 && (
        <div
          id="about-panel-3"
          role="tabpanel"
          aria-labelledby="about-tab-3"
          className={styles.panel}
        >
          {globalSupport?.specialThanksHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>
                {globalSupport.specialThanksHeading}
              </h2>
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
                    {item.body ? (
                      <p className={styles.thanksBody}>{item.body}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {globalSupport?.alwaysGratefulHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>
                {globalSupport.alwaysGratefulHeading}
              </h2>
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
                      {member.name ? (
                        <h3 className={styles.gratefulName}>{member.name}</h3>
                      ) : null}
                      {member.location ? (
                        <p className={styles.gratefulLocation}>
                          {member.location}
                        </p>
                      ) : null}
                      {member.description ? (
                        <p className={styles.gratefulDesc}>
                          {member.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {globalSupport?.thanksHeading ? (
            <div className={styles.supportSection}>
              <h2 className={styles.supportHeading}>
                {globalSupport.thanksHeading}
              </h2>
              <div className={styles.thanksListGrid}>
                {globalSupport.thanksEntries?.map((entry) => (
                  <div
                    key={`${entry.name}-${entry.location}`}
                    className={styles.thanksEntry}
                  >
                    {entry.name ? (
                      <h3 className={styles.thanksEntryName}>{entry.name}</h3>
                    ) : null}
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
