import { empathyCanvasTabShared, realBoardTabShared } from './productsEmpathyRealBoardShared';
import { schoolContent } from './school';

export const gamerContent = {
  navLinks: [
    { label: 'Home', path: '/reallives/gamer' },
    { label: 'Products', path: '/reallives/gamer/products' },
    { label: 'About Us', path: '/reallives/gamer/about' },
    { label: 'Pricing', path: '/reallives/gamer/pricing' },
    { label: 'Contact', path: '/reallives/gamer/contact' },
  ],

  liveALifeCta: {
    label: 'Live a life',
    href: 'https://sls.reallivesworld.com/login',
    external: true,
  },

  /** Gamer landing: hero visual, gameplay embed, and reviews (matches original gamer home). */
  hero: {
    // backgroundImagePath: '/assets/images/gamer/image/background-gamer-image.jpg',
    bracketDecorationPath: '/assets/images/gamer/image/top-bracetes.png',
    headline: {
      life: 'LIFE',
      midLine: 'is the biggest',
      gameWord: 'GAME',
      closing: 'of all',
    },
    welcomeParagraph:
      'RealLives Simulation is revolutionizing gaming by bringing back the power of imagination through immersive text based simulations',
    bottomTagline:
      'The Largest Gamified Simulation Engine of Human Experience on the Planet',
    gameplay: {
      titleImagePath: '/assets/images/gamer/image-add/GAMEPLAY.svg',
      arcadeEmbedUrl:
        'https://demo.arcade.software/T3kOXgmqRKrPgCzTcKQF?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true',
      timelineImagePath: '/assets/images/gamer/image/gamer-timeline.svg',
    },
    whatGamersSay: {
      titleImagePath: '/assets/images/gamer/image-add/WHAT GAMERS SAY.svg',
      reviews: {
        leftColumn: [
          {
            quote:
              'I just played my first character to the end, and the experience is incredible. I was in tears at the end...',
            author: 'David Laborie',
            role: 'Musician from paris',
          },
          {
            quote:
              'I just played my first character to the end, and the experience is incredible. I was in tears at the end...',
            author: 'Lukas andersen',
            role: 'Gaming Influencer',
          },
        ],
        centerColumn: [
          {
            quote:
              '“When i played RealLives for the first time back in 2011, i honestly thought it was different from the other simulators i played. The depth of the experience, the problems that happen around your character or with your character, his family and their problems, it was all very real and touching, especially after playing with characters from different economical and political situations, while one has the possibility of going to college and becoming a CEO, the other is fighting hard to make it past his 30s. It was something that hit me hard, in the sense that my life wasn’t as bad as i previously thought it was. I don’t think many people think about this, that’s why RealLives really left an impression on me”',
            author: 'pedro marques',
            role: null,
          },
        ],
        rightColumn: [
          {
            quote:
              'What i like about RealLives is how it ‘throws’ you into a country and makes you face all the issues, like either health problems or tensions from government, poverty and so on, and it’s like “deal with it',
            author: 'sergiu ovidiu',
            role: 'Romania',
          },
        ],
      },
    },
  },

  about: schoolContent.about,

  aboutLegacy: {
    heading: 'About Us',
    tabs: ['History', 'The Team', 'Global Support', 'Inventor'],
    history: {
      milestoneImages: [
        '/assets/images/gamer/gamer-image/reallives-start-1.svg',
        '/assets/images/gamer/gamer-image/reallives-start-2.svg',
        '/assets/images/gamer/gamer-image/reallives-start-3.svg',
        '/assets/images/gamer/image/reallives-logo 1.svg',
        '/assets/images/gamer/image/rl-ai-logo.svg',
      ],
      milestones: [
        {
          version: 'RealLives 2004',
          description:
            'The first widely adopted version of RealLives that introduced players to a simulation of life across the globe. With a basic UI and limited data, this version laid the foundation for what would become a powerful learning tool on global diversity.',
        },
        {
          version: 'RealLives 2007',
          description:
            'An improved interface and broader country database made this edition more immersive. RealLives 2007 added more life events, cultural depth, and socio-economic details, bringing users closer to the everyday realities of people worldwide.',
        },
        {
          version: 'RealLives 2014',
          description:
            'With enhanced graphics and better event logic, this version offered a more detailed life simulation experience. It allowed users to make impactful life decisions and see the consequences unfold over time. This version continued as a standalone desktop application.',
        },
        {
          version: 'RealLives 2017',
          description:
            'This cloud-based version of RealLives, released in October 2017, brought the experience online. With a revamped interface and updated global data, it works seamlessly on all modern browsers and operating systems.',
        },
        {
          version: 'RealLives 2025',
          description:
            'Powered by AI, this edition delivers personalized life paths, smarter event logic, and real-time global data. A modern interface, dynamic cultural scenarios, and adaptive learning tools make this the most immersive and insightful RealLives experience yet.',
          badge: 'Current Version',
        },
      ],
    },
    team: {
      leader: {
        role: 'Leader',
        name: 'Dr. Parag Mankeekar',
        imagePath: '/assets/images/gamer/image-add/ceo-image.jpg',
        bioParagraphs: [
          'Dr. Parag Mankeeker is a social technology entrepreneur whose journey spans medicine, public health, and anthropology. His multidisciplinary expertise has driven him to tackle complex social challenges, from developing innovative hospitals to managing disaster response systems.',
          "Parag's work has taken him to the frontlines of understanding global conflicts, including terrorism research in India and Afghanistan. His commitment to positive change has earned him recognition as both an Ashoka Fellow and Salzburg Seminar Fellow.",
          "Now leading RealLives' global expansion, Parag is transforming the platform into a powerful tool for building empathy and socio-emotional learning, advancing the shared dream of creating a more empathetic world.",
        ],
      },
      academicResearchCoordinator: {
        role: 'Academic  Research Coordinator',
        name: 'Dr. Yogesh Deshpande',
        imagePath: '/assets/images/gamer/image/YDD-2.png',
        bioParagraphs: [
          'Prof. (Dr.) Yogesh Deshpande is an accomplished and student-focused Professor of Information Technology with three decades of teaching, research, and leadership experience. Creates challenging and engaging learning experiences through appropriate use of educational technology tools and applications, inspiring students to pursue academic and personal excellence for becoming life-long learners. ',
          'Holds a Ph.D. in Human–Computer Interaction Design from IIT Guwahati. Expertise in curriculum development, evaluation methodologies, academic audits, and human-centred design, with proven leadership roles as Dean and Director in reputed institutions. ',
          'Taught a diverse portfolio of courses including Human–Computer Interaction (HCI), Augmented and Virtual Reality (AR/VR), Data Mining, and Applied Statistics, and successfully supervised six Ph.D. scholars in emerging technology domains.',
        ],
      },
      advisorsHeading: 'Our Advisors',
      advisorsTeam: [
        { name: 'Pankaj Sapkal', role: 'Chief Strategist' },
        { name: 'Ajit Ghanekar', role: 'Chief Stasitician' },
      ],
      workingTeamHeading: 'Working Team',
      workingTeam: [
        { name: 'Parag Mankeekar', role: 'Team Leader' },
        { name: 'Ravi Gulhane', role: 'CTO' },
        { name: 'Atharva Nijampurkar', role: 'Senior Backend Developer' },
        { name: 'Vidya Mankeekar', role: 'Human Resources' },
        { name: 'Adarsh Vishwakarma', role: 'Frontend Developer' },
        { name: 'Viraj Kabbur', role: 'Product Manager' },
      ],
      internsHeading: 'Our Interns',
      internsTeam: [
        { name: 'Bhoomi Luniya', role: 'AI Intern' },
        { name: 'Janhavi Desai', role: 'Translation Intern' },
        { name: 'Sakshi Kulkarni', role: 'Translation Intern' },
      ],
      itinerantHeading: 'Itinerant Team Members',
      itinerantIntroParagraphs: [
        "We extend our deepest gratitude to the many talented professionals from the Neeti team whose significant contributions helped bring this ambitious project to life. Their expertise and dedication laid crucial groundwork for RealLives' continued evolution.",
        'Over the past three years, more than 200 passionate interns from diverse backgrounds and disciplines have poured their energy into this labor of love. These remarkable individuals—spanning fields from technology and education to social sciences and design—have each left their mark on RealLives, contributing fresh perspectives, innovative solutions, and countless hours of dedicated work.',
        "We are profoundly grateful to the following organizations for their generous support in connecting us with exceptional talent. By providing outstanding interns who shared our vision for building empathy through technology, these institutions have become integral partners in our mission to create a more understanding world. Their commitment to fostering meaningful educational and professional experiences has directly contributed to RealLives' growth and impact.",
        'To every intern, mentor, and supporting organization—your contributions have not only advanced our platform but have also embodied the very spirit of global collaboration and cultural exchange that RealLives seeks to promote.',
      ],
      itinerantNameSlots: [
        [
          'Manisha Sathe',
          'Vivek Rishi',
          'Paresh Deshpande',
          'Nikhil Jain',
          'Purva Deshpande',
          'Sateesh Khomne',
          'Namita Pandya',
          'Abhijit Kuljkarni',
          'Aniruddha Bhide',
          'Chaitanya Joshi',
          'Tejas Chitale',
          'Pinaki Dixit',
          'Bob Runyan',
        ],
        [
          'Omkar Chandrachud',
          'Makarand Vagaskar',
          'Dilip Kalantri',
          'Dr. Manasi Abhyankar',
          'Lukesh Bundele',
          'Yogini Barde',
          'Aditi Thombre',
          'Ramesh Garudkar',
          'Sarita Karde',
          'Anjani Pathak',
          'Jaganntah Shelar',
          'Sharvari Kulkarni',
        ],
      ],
    },
    globalSupport: {
      specialThanksHeading: 'Special Thanks',
      specialThanks: [
        {
          imagePath: '/assets/images/gamer/global-support-image/thanks-ashoka-img.jpg',
          body:
            'We thank Ashoka for fostering empathy and social innovation worldwide. Their recognition of Dr. Parag Mankeeker as an Ashoka Fellow validated our mission and connected us with a global network of changemakers who share our vision of building cross-cultural understanding through transformative education.',
        },
        {
          imagePath: '/assets/images/gamer/global-support-image/bmgi-img.jpg',
          body:
            'We thank BMGI Global for their strategic partnership and management consulting expertise across India and the Asia Pacific region. Their professional guidance has helped us navigate complex markets while staying true to our mission of creating meaningful educational impact through technology.',
        },
        {
          imagePath: '/assets/images/gamer/global-support-image/impact-world-img.png',
          body:
            'We are grateful to Ashoka Globalizer for accelerating our worldwide impact. Their specialized support in scaling social innovations has been instrumental in helping RealLives reach new communities globally, amplifying our ability to foster empathy and understanding in classrooms around the world.',
        },
      ],
      alwaysGratefulHeading: 'Always Grateful',
      gratefulMembers: [
        {
          name: 'Lee Hartwell',
          location: 'Arizona, USA',
          imagePath: '/assets/images/gamer/global-support-image/Lee Hartwell-img.jpg',
          description:
            'Nobel Laureate (2001), Nobel Prize in Physiology or Medicine',
        },
        {
          name: 'David Gibson',
          location: 'Perth, Australia',
          imagePath: '/assets/images/gamer/global-support-image/David Gibson-img.jpg',
          description:
            'Director | Learning Futures | Curtin Learning and Teaching, Australia.',
        },
        {
          name: 'Laura Giadorou-Koch',
          location: 'NY, USA',
          imagePath: '/assets/images/gamer/global-support-image/Laura Giadorou-Koch-img.jpg',
          description:
            'Practiced corporate law on Wall Street. System-level social entrepreneur and innovative educator & CEO',
        },
        {
          name: 'Naresh Shahani',
          location: 'Mumbai, India',
          imagePath: '/assets/images/gamer/global-support-image/Naresh Shahani-img.jpg',
          description:
            'MD and Founder, BMGI India\u00a0Business Coach Innovation and Organic Growth with Consulting Experience',
        },
        {
          name: 'Abhay Nalawade',
          location: 'Pune, India',
          imagePath: '/assets/images/gamer/global-support-image/Abhay Nalawade-img.jpg',
          description:
            'Advisor for start-ups, technology companies, social organizations, Entrepreneur & Ex-MD/CEO of Thermax',
        },
        {
          name: 'Milind Desai',
          location: 'Mumbai, India',
          imagePath: '/assets/images/gamer/global-support-image/Milind Desai-img.jpg',
          description: 'Advisor, Trackball Consultancy Services Private Limited',
        },
      ],
      thanksSectionHeading: 'Thanks',
      thanksNames: [
        { name: 'Natya Tatineni', location: 'Bangalore, India' },
        { name: 'Bob Runyan', location: 'Chico, CA, USA' },
        { name: 'Neelesh Kulkarni', location: 'Pune, India' },
        { name: 'Anil Paranjape', location: 'Pune, India' },
        { name: 'Hemant Karandikar', location: 'Pune, India' },
        { name: 'Milind Desai', location: 'Mumbai, India' },
        { name: 'Vibhas Chandrachood', location: 'Lexington, KY, USA' },
        { name: 'Hiren Bhat', location: 'Detroit, MI, USA' },
        { name: 'Parimal Tathawadekar', location: 'Detroit, MI, USA' },
        { name: 'Daniel Truran', location: 'Madrid, Spain' },
      ],
    },
    inventor: {
      title: 'Inventor',
      names: 'Kathy and Bob Runyan',
      imagePath: '/assets/images/gamer/image-add/bob-image.jpg',
      bioParagraphs: [
        "Bob Runyan grew up in California's emerging Silicon Valley, where early exposure to technology sparked his lifelong curiosity. His travels through Mexico and Europe as a young soccer player deepened his passion for understanding diverse cultures and perspectives.",
        'After serving with the Peace Corps in the Seychelles Islands—where he taught math and computer science—Bob transitioned into computer programming in 1989. In 1996, inspired by technology\'s potential to build empathy, he conceived software that could simulate life experiences worldwide using real statistical data. This vision led him to found Educational Simulations Inc. and launch RealLives in 2001.',
        "The partnership that would transform RealLives began when Bob met Dr. Parag Mankeeker through the Ashoka Foundation, recognizing his exceptional vision for the platform's global potential.",
      ],
    },
  },

  pricing: {
    eyebrow: 'Gamer Pricing',
    sectionHeading: 'Start exploring lives around the world',
    sectionSubheading:
      'Unlock RealLives and begin your journey with 3 included life credits.',
    heroBadges: [
      '3 Credits Included',
      '1 Credit = 1 Life',
      'Valid for 3 Years',
    ],
    countryNote: {
      detectedPrefix: 'Showing prices for',
      fallback: 'Showing default international pricing',
    },
    howItWorks: {
      heading: 'How RealLives Gamer licensing works',
      steps: [
        {
          number: '01',
          title: 'Get your World Pass',
          description:
            'Your World Pass unlocks the full RealLives experience for three years and includes starter life credits so you can begin exploring immediately.',
        },
        {
          number: '02',
          title: 'Add Credits anytime',
          description:
            '1 credit = 1 simulated life. Need more lives? Pick up a Credit Pack whenever you want. Credits stay on your account, and you can stack as many as you like over time.',
        },
        {
          number: '03',
          title: 'Keep unused credits with renewal',
          description:
            'Unused credits never disappear. As long as your World Pass remains active, your remaining credits carry forward automatically.',
        },
      ],
    },
    baseLicense: {
      title: 'World Pass',
      tagline: 'Required to play',
      includedCredits: 3,
      includedLine:
        'Unlock the RealLives experience and start with 3 life credits.',
      bullets: [
        'Includes 3 life credits',
        'Credits never expire while your pass is active',
        'Purchase additional credits anytime',
        'Keep credits on your account',
        'Explore lives from every country',
      ],
      ctaText: 'Buy License',
      onlyProductLabel: 'World Pass only',
      policyHeading: 'Good to know',
      policyNotes: [
        'The World Pass works on its own — start with your included credits and add Credit Packs whenever you want more lives.',
        'No credit is charged when your simulated character dies before the age of 10.',
        'Credits never expire while your World Pass is active — unused credits stay on your account.',
        'Stack multiple Credit Packs anytime as you need more lives.',
      ],
    },
    creditPacks: {
      heading: 'Credit pack pricing',
      subheading:
        'Add more lives anytime. Larger packs offer better value per credit.',
      bestValueLabel: 'Best Value',
      perCreditLabel: 'per credit',
      ctaText: 'Buy License',
      bundledHint: 'Includes World Pass + Credits',
      packLabelsByCredits: {
        5: { subtitle: 'Great for getting started' },
        10: { badge: 'Best Value' },
        25: { badge: 'Most Popular' },
        50: { subtitle: 'Ultimate Explorer' },
      },
    },
    additionalCredits: {
      heading: 'Credit pack pricing',
      subheading:
        'Add more lives anytime. Larger packs offer better value per credit — pick one to add to your order.',
      tileCtaText: 'Get Credit Pack',
    },
    rolloverPolicy: {
      heading: 'Credit rollover, in plain English',
      points: [
        'Credits unused while your pass is active do not expire.',
        'Unused credits stay on your account as long as your World Pass remains active.',
        'If your World Pass lapses, credits are held safely until you renew — they unlock again the moment you come back.',
      ],
    },
    faqs: [
      {
        question: 'Do I really need the World Pass?',
        answer:
          'Yes — the World Pass is what unlocks the RealLives experience. It comes with starter life credits so you can begin playing right away. Credit Packs are optional add-ons for more lives whenever you need them.',
      },
      {
        question: 'How long is one credit good for?',
        answer:
          'One credit equals one simulated life — from birth to end. There’s no time limit on a single life; play it across as many sessions as you like. If a life ends before age 10, no credit is used. A credit is only deducted once your character has lived past their tenth birthday.',
      },
      {
        question: 'What happens to leftover credits when my pass ends?',
        answer:
          'They’re held safely on your account. Renew your World Pass and they unlock again. Let it lapse and they stay frozen until you come back — they’re never deleted.',
      },
    ],
    whatsIncluded: {
      heading: 'What’s Included?',
      description:
        'All plans include the same core features. No hidden costs. Complete transparency.',
    },
    includedProductCards: [
      {
        title: 'RealLives Simulation',
        description:
          'Experience life from birth to death in different countries and circumstances. Make decisions that shape your virtual life while learning about global inequalities and cultural differences.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
        featureTags: ['Life Simulation', 'Cultural Awareness'],
        learnMoreLinkText: 'Learn More',
        productTabId: 'tab1',
      },
      {
        title: 'Empathy Canvas',
        description:
          'A structured reflection framework that helps students process their RealLives experiences and develop deeper empathy through guided self-reflection and peer discussion.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/empathy-logo.svg',
        featureTags: ['Reflection Tool', 'Empathy Building'],
        learnMoreLinkText: 'Learn More',
        productTabId: 'tab3',
      },
      {
        title: 'RealBoard',
        description:
          'A safe, private social platform where students can share their RealLives experiences, engage in meaningful discussions, and learn from diverse perspectives in a moderated environment.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/realboard-logo.svg',
        featureTags: ['Social Platform', 'Peer Learning'],
        learnMoreLinkText: 'Learn More',
        productTabId: 'tab4',
      },
      {
        title: 'ChangeMaker Index',
        description:
          'Revolutionary assessment tool that measures 18 global competencies through gameplay decisions rather than self-reporting, providing authentic insights into student development.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/changemaker-logo.svg',
        featureTags: ['Assessment Tool', '18 Competencies'],
        learnMoreLinkText: 'Learn More',
        productTabId: 'tab2',
      },
    ],
    toolInfoNote:
      'Based on your requirements, we recommend the most suitable license plan, plus show an alternative option for comparison. All features remain the same across plans - only student capacity and life credits differ',
    purchaseModal: {
      heading: 'Continue to registration',
      body:
        'You will leave this site and open the gamer registration page to complete your World Pass or credit pack purchase.',
      confirmText: 'Continue',
    },
  },

  products: {
    heading: 'Our Educational Products',
    subheading:
      'Comprehensive tools designed to build empathy, global awareness, and changemaker skills through immersive educational experiences.',
    productTabs: [
      { id: 'tab1', label: 'RealLives Sim' },
      { id: 'tab2', label: 'RL ChangeMaker Index' },
      { id: 'tab3', label: 'Empathy Canvas' },
      { id: 'tab4', label: 'RealBoard' },
      { id: 'tab5', label: 'Real AI' },
    ],
    realLivesSim: {
      whyHeading: 'Why RealLives matters?',
      whyParagraphs: [
        'Using real-world demographic and economic data, the simulation places students in authentic scenarios where they make decisions about school, work, family, health, and more. Every choice leads to realistic consequences, shaped by global inequality, access, and opportunity.',
        "RealLives isn’t just a game—it’s a window into the lived experience of people across the globe. Whether you’re born into a wealthy family in Sweden or a struggling household in rural India, the simulation challenges you to navigate life based on real-world constraints and possibilities.",
      ],
      worldImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/reallives-world-img.svg',
      fosterHeading: 'Foster Empathy Through Experience',
      fosterDescription:
        'By making choices and living consequences, students organically develop empathy. They begin to ask: What would I do in this situation? What opportunities would I miss or gain just by being born elsewhere?',
      experienceHeading: 'Experience RealLives',
      demoIframeSrc:
        'https://demo.arcade.software/T3kOXgmqRKrPgCzTcKQF?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true',
      drivenByDataText: 'RealLives is driven by real world data',
      dataLogos: [
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/united-nations.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/world-bank-group.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/lonely-planet.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/birds-logo.svg',
      ],
      learningOutcomesHeading: 'Learning Outcomes',
      learningOutcomes: [
        {
          number: '1',
          title: 'Understand how identity and context shape lives',
          description:
            'Examine the influence of geography, gender, and socio-economic status on opportunities, challenges, and life paths.',
        },
        {
          number: '2',
          title: 'Experience global development through simulation',
          description:
            'Connect real-world indicators of health, education, and income to personal life journeys.',
        },
        {
          number: '3',
          title: 'Develop critical skills for navigating complexity',
          description:
            'Strengthen decision-making, reflection, and systems thinking in response to real-world challenges.',
        },
        {
          number: '4',
          title: 'Engage with global challenges and the SDGs',
          description:
            'Explore how everyday choices relate to issues such as poverty, inequality, climate, and health.',
        },
        {
          number: '5',
          title: 'Foster empathy, resilience, and global citizenship',
          description:
            'Build awareness of diverse perspectives, reflect on equity and resilience, and embrace interdependence.',
        },
      ],
      learningOutcomesImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/learning-outcome-image.svg',
      heroVideoPaths: [
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/gamer/videos/RL-STEM-DARK.mp4',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/gamer/videos/RL-21ST-CENTURY-SKILLS-DARK.mp4',
      ],
      videoTrackLabels: ['1', '2'],
    },
    changeMakerIndexTab: {
      title: 'RCMI',
      description:
        'The RealLives ChangeMaker Index (RCMI) measures how you respond to real-life challenges in the simulation—revealing your strengths in 18 key skills like empathy, leadership, and problem-solving.',
      highlights: [
        'No quizzes, just your actions',
        'Personalized profile of your changemaker strengths',
        'Future-ready skills for real-world impact',
      ],
      statsLine: '18 competencies · 4 skill clusters · 5 growth stages',
      heroSecondary:
        'Your choices map to competencies across four clusters—personal, interpersonal, contextual awareness, and strategic thinking—so you see depth and balance in your changemaker profile.',
      learnMoreUrl: 'https://changemakerindex.com/how-rcmi-works',
      learnMoreLabel: 'Explore the RCMI framework',
      illustrationAlt:
        'RealLives ChangeMaker Index diagram with competency labels around a central framework.',
      illustrationPath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/real-change-maker.svg',
      clustersHeading: 'RCMI Clusters',
      clustersDescription:
        'RCMI is built on the foundation that effective changemakers excel across four interconnected domains. The assessment system recognizes that true changemaking ability emerges from the balance and integration of these four essential clusters:',
      clusters: [
        {
          title: 'Internal/Personal Qualities',
          description:
            'Internal/Personal Qualities form the foundation—you must first master yourself before leading change in society, with others, or in the world.',
          competencies: [
            'Self-Awareness',
            'Resilience',
            'Adaptability',
            'Persistence',
            'Emotional Intelligence',
          ],
        },
        {
          title: 'Interpersonal Competencies',
          description:
            'Interpersonal Competencies build upon this foundation—enabling you to connect with, influence, and mobilize others toward shared goals.',
          competencies: [
            'Empathy',
            'Communication Skills',
            'Collaboration',
            'Leadership',
            'Social Awareness',
          ],
        },
        {
          title: 'Strategic Thinking',
          description:
            'Strategic Thinking provides the intellectual framework—giving you the tools to analyze complex problems and develop innovative solutions.',
          competencies: [
            'Visionary Thinking',
            'Creativity & Innovation',
            'Problem-Solving Skills',
            'Initiative',
            'Risk-Taking',
            'Critical Thinking',
          ],
        },
        {
          title: 'Contextual Awareness',
          description:
            'Contextual Awareness ensures responsible impact—grounding your efforts in ethical responsibility and global understanding.',
          competencies: ['Global Awareness', 'Ethical Responsibility'],
        },
      ],
      howItWorksHeading: 'How does it work?',
      howItWorksImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/reallives-changemaker-image.svg',
      experienceEmbedHeading: 'Experience RCMI',
      demoIframeSrc:
        'https://demo.arcade.software/i527E8HZo4YlXdSC8arb?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true',
    },
    empathyCanvasTabLegacy: {
      bannerImagePath: '/assets/images/gamer/image/empathy_canvas.svg',
      tailoredHeading: 'Our Empathy Canvas has been tailored for RealLives',
      tailoredImagePath: '/assets/images/gamer/image/emapthy_canvas_1.svg',
      personalisedHeading: 'Get a personalised Empathy Score using Real AI',
      personalisedImagePath: '/assets/images/gamer/image/emapthy_canvas_2.svg',
    },
    realBoardTabLegacy: {
      bannerImagePath: '/assets/images/gamer/image/RealBoard_Banner.svg',
      sidebarPrimaryHeadingLines: ['What you can do ', 'on RealBoard?'],
      sidebarSecondaryHeadingLines: ['One Platform ', 'Multiple Use Cases'],
      initialSlideTitle: 'Create Boards',
      slides: [
        { imagePath: '/assets/images/gamer/image/slider-2-dark.svg', alt: '1' },
        { imagePath: '/assets/images/gamer/image/slider-1-dark.svg', alt: '2' },
        { imagePath: '/assets/images/gamer/image/create-cards-svg 1-dark.svg', alt: '3' },
      ],
      educatorLoveHeadingLines: ['Why Educators Love ', 'RealBoard?'],
      educatorPoints: [
        {
          title: '1) Safe School-Only Network',
          body: 'Understand the impact of geography, gender, and socio-economic status on life paths',
        },
        {
          title: '2) Decision Events Shape the Journey',
          body: 'Throughout their life journey, students encounter events that require them to make important decisions about education, work, health, relationships, and society.',
        },
        {
          title: '3) Choices Reveal Who You Are',
          body: 'Every choice a student makes reflects their values, problem-solving style, empathy, and leadership tendencies.',
        },
        {
          title: '4) Competencies Get Captured',
          body: 'These decisions map to\u00a018 ChangeMaking Competencies, like critical thinking, resilience, collaboration, and social awareness.',
        },
        {
          title: '5) ChangeMaker Index Shows Your Impact Potential',
          body: 'Finally, students receive a\u00a0ChangeMaker Index score, a powerful reflection of their changemaking potential, based on real behaviors instead of just self-reported answers.',
        },
      ],
    },
    realAiTab: {
      brandLine: 'Real AI',
      tagline: 'Turning life stories into insights',
      videoPath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/videos/real-ai-video-30secs.mp4',
      logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
      gridImages: [
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/first-reflection.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/key-life-value.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-challenge.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/birth-story.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/life-analysis.svg',
      ],
      empathyCanvasAnalysisHeading: 'Empathy Canvas analysis \nusing Real AI',
      empathyCanvasAnalysisParagraphs: [
        "The Empathy Canvas, powered by Real AI, is a unique tool that analyzes a user's emotional intelligence based on their responses to 9 carefully designed questions. Each response is processed using our Real AI engine to generate personalized AI reflections, providing deeper insights into the user’s emotional awareness and interpersonal understanding.",
        'Based on this analysis, users receive an overall Empathy Score out of 100, along with actionable feedback. This process helps individuals explore their capacity for empathy — a vital trait in changemaking. Real AI also powers the RealLives ChangeMaker Index and other interactive reports, making complex human values like empathy, resilience, and social connection measurable and meaningful.',
      ],
      empathyCanvasImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/empathy_canvas_2.svg',
      rcmiAnalysisHeading: 'RCMI analysis using Real AI',
      rcmiAnalysisParagraphs: [
        "The RealLives ChangeMaker Index (RCMI), powered by Real AI, measures a user's changemaking potential through their in-game decisions and responses. Based on their score, users are placed in one of five growth stages, Seed, Sprout, Sapling, Plant, or Fruit, reflecting their changemaker journey.",
        'The report also includes a Severity Index, which maps the complexity and risks associated with different changemaking domains. Ranging from 1 (low risk) to 10 (extreme risk), this index helps users understand the potential challenges in areas like Peace & Conflict, Human Rights, or Environmental Protection. By aligning RCMI scores with domain severity, Real AI offers personalized insights on where users can contribute meaningfully while preparing for the realities of changemaking work.',
      ],
      rcmiReportPdfUrl:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/bilime5710-changemaker-report.pdf',
      rcmiReportPdfPreviewLabel: 'Sample Changemaker report',
      rcmiReportPdfOpenLabel: 'Open full PDF',
    },
    empathyCanvasTab: empathyCanvasTabShared,
    realBoardTab: realBoardTabShared,
  },

  contact: {
    heading: 'Get in Touch',
    contactInformationHeading: 'Contact Information',
    emailLabel: 'Email',
    email: 'Support@reallivesworld.com',
    addressLabel: 'Address',
    address: 'Pune, India',
    formLabels: {
      name: 'Name',
      email: 'Email Address',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      submit: 'Send',
    },
  },

  footer: {
    tagline:
      "The Largest Gamified Simulation Engine of Human Experience on the Planet. We're revolutionizing gaming by bringing back the power of imagination through immersive text-based simulations.",
    logo: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
    logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
    socialLinks: [
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@reallivessimulation-empathy',
        icon: 'youtube',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/reallives-foundation/',
        icon: 'linkedin',
      },
    ],
    copyright: '© 2026 RealLives Foundation. All rights reserved.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About Us', path: '/reallives/gamer/about' },
          { label: 'Contact Us', path: '/reallives/gamer/contact' },
          {
            label: 'Terms & Conditions',
            href: 'https://support.reallivesworld.com/',
            external: true,
          },
        ],
      },
      {
        title: 'Product',
        links: [
          { label: 'Products', path: '/reallives/gamer/products' },
          { label: 'Pricing', path: '/reallives/gamer/pricing' },
        ],
      },
    ],
  },
};
