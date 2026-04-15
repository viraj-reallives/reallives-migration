import { homeAdditionalTabsForBasePath } from './homeAdditionalTabsShared';
import { empathyCanvasTabShared, realBoardTabShared } from './productsEmpathyRealBoardShared';

export const homeschoolerContent = {
  navLinks: [
    { label: 'Home', path: '/reallives/homeschooler' },
    { label: 'Products', path: '/reallives/homeschooler/products' },
    { label: 'ChangeMaker Project', path: '/reallives/homeschooler/changemaker' },
    { label: 'Impact', path: '/reallives/homeschooler/impact' },
    { label: 'Research & Evidence', path: '/reallives/homeschooler/research' },
    { label: 'Newsletters', path: '/reallives/homeschooler/newsletters' },
    { label: 'Pricing', path: '/reallives/homeschooler/pricing' },
    { label: 'Foundation', path: '/reallives/homeschooler/foundation' },
    { label: 'About Us', path: '/reallives/homeschooler/about' },
    { label: 'Contact', path: '/reallives/homeschooler/contact' },
  ],

  hero: {
    heading: 'RealLives Academic for Families',
    subheading:
      'RealLives Academic empowers parents with sophisticated simulation tools and research-grade datasets that transform family learning time into meaningful global education experiences. This evidence-based platform enables children and teens to engage with complex world realities through immersive, age-appropriate experiences that bridge classroom learning and real-world understanding.',
    ctaText: 'Get Started',
    ctaPath: '/reallives/homeschooler/contact',
    supportingText: {
      whySchoolsHeading: 'Why Families Choose RealLives?',
      whySchoolsBullets: [
        {
          title: 'Multi-Age Learning Applications',
          body: 'RealLives supports learning across elementary through high school ages in social studies, geography, economics, world cultures, and current events. Parents can customize simulations to align with their child\'s interests and developmental stage.',
        },
        {
          title: 'Real-World Data Integration\u00a0',
          body: 'Built on comprehensive demographic, economic, and social datasets from 200+ countries, RealLives provides children with authentic exposure to global diversity, cultural differences, and life circumstances that shape experiences worldwide.',
        },
        {
          title: 'Flexible Family Framework\u00a0',
          body: 'Adaptable to various family learning styles from independent exploration to family discussion time, individual reflection projects to collaborative world comparison activities.',
        },
      ],
      howItWorksHeading: 'Family Learning Examples',
      howItWorksSubheading: 'Age-Appropriate Applications',
      howItWorksParagraphs: [
        {
          label: 'Middle School:',
          body: 'Examining how education access and economic opportunities vary globally',
        },
        {
          label: 'High School:',
          body: 'Understanding cultural adaptation and global migration patterns',
        },
      ],
      educationalBenefitsHeading: 'Family Benefits',
      educationalBenefits: [
        {
          title: 'Critical Thinking \u00a0',
          body: 'Children learn to see how choices and circumstances affect life outcomes, and think about cause and effect in society.',
        },
        {
          title: 'Exploring Data\u00a0\u00a0',
          body: 'Real-world statistics in the game help children notice patterns and compare life experiences across countries.',
        },
        {
          title: 'Global Awareness \u00a0',
          body: 'By living virtual lives in different cultures, children build empathy and a better understanding of the world.',
        },
      ],
      gettingStartedHeading: 'Proven Impact in Impact Education',
      gettingStartedSubheading: 'Integrate RealLives now!',
      gettingStartedParagraphs: [
        'Families worldwide report enhanced children\'s engagement, improved analytical thinking, and stronger preparation for global citizenship and cultural awareness. Parents consistently note increased family conversations about sophisticated global topics.',
        'Ready to enhance your family\'s learning with cutting-edge simulation technology?',
      ],
      gettingStartedCtaText: 'View pricing',
      gettingStartedCtaPath: '/reallives/homeschooler/pricing',
    },
    images: {
      heroVideoUrl: '/assets/images/homeschooler/image/parent-who-can-use-background.jpeg',
      illustration:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/everyone-change-maker.svg',
      classroomDiagram:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/work-in-classroom.svg',
      gettingStartedIllustration:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/getting-started-easy.svg',
      empathy21CenturyBanner:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/empathy-21century-skills.png',
      supportedByRealLives:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/supoorted-by-reallives-image.svg',
      experienceAuthentic:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/Experience-authentic-iamge.svg',
      empathyCanvasIllustration:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/Empathy-image-add.svg',
      readyToTransform:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/ready-to-transform.svg',
      sdgBackground:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/SDG-background-image.svg',
      sdgEarth:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/Earth-image-svg.svg',
      sdgImpactVideo:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/videos/sdg-background-video.mp4',
      sdgAnnouncement:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-home-page/announcment-image.svg',
      sdgGlobalAction:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/global-action-image.svg',
    },
    homeTabLabels: ['Who Can Use?', '21st Century Skills', 'SDGs', 'Core Vision'],
    homeAdditionalTabs: homeAdditionalTabsForBasePath('/reallives/homeschooler'),
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
    cards: [
      {
        title: 'RealLives Simulation',
        description:
          'Experience life from birth to death in different countries and circumstances. Make decisions that shape your virtual life while learning about global inequalities and cultural differences.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
        featureTags: ['Life Simulation', 'Cultural Awareness'],
        learnMoreLinkText: 'Learn More',
      },
      {
        title: 'Empathy Canvas',
        description:
          'A structured reflection framework that helps students process their RealLives experiences and develop deeper empathy through guided self-reflection and peer discussion.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/empathy-logo.svg',
        featureTags: ['Reflection Tool', 'Empathy Building'],
        learnMoreLinkText: 'Learn More',
      },
      {
        title: 'RealBoard',
        description:
          'A safe, private social platform where students can share their RealLives experiences, engage in meaningful discussions, and learn from diverse perspectives in a moderated environment.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/realboard-logo.svg',
        featureTags: ['Social Platform', 'Peer Learning'],
        learnMoreLinkText: 'Learn More',
      },
      {
        title: 'ChangeMaker Index',
        description:
          'Revolutionary assessment tool that measures 18 global competencies through gameplay decisions rather than self-reporting, providing authentic insights into student development.',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/changemaker-logo.svg',
        featureTags: ['Assessment Tool', '18 Competencies'],
        learnMoreLinkText: 'Learn More',
      },
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
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/videos/rl-stem.mp4',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/videos/rl-21st-century-skills.mp4',
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
      clustersHeading: 'RCMI Clusters',
      clustersDescription:
        'RCMI is built on the foundation that effective changemakers excel across four interconnected domains. The assessment system recognizes that true changemaking ability emerges from the balance and integration of these four essential clusters:',
      illustrationPath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/real-change-maker.svg',
      clusterLabels: [
        { lines: ['Personal'] },
        { lines: ['Inter', 'Personal'] },
        { lines: ['Contextual', 'Awareness'] },
        { lines: ['Strategic', 'Thinking'] },
      ],
      clusterDescriptions: [
        'Internal/Personal Qualities\u00a0form the foundation - you must first master yourself before leading change in society, others or even in the world.',
        'Interpersonal Competencies\u00a0 build upon this foundation - enabling you to connect with, influence, and mobilize others toward shared goals.',
        'Contextual Awareness\u00a0ensures responsible impact - grounding your efforts in ethical responsibility and global understanding.',
        'Strategic Thinking\u00a0provides the intellectual framework - giving you the tools to analyze complex problems and develop innovative solutions.',
      ],
      howItWorksHeading: 'How does it work?',
      howItWorksImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/reallives-changemaker-image.svg',
      experienceEmbedHeading: 'Experience RCMI',
      demoIframeSrc:
        'https://demo.arcade.software/i527E8HZo4YlXdSC8arb?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true',
    },
    empathyCanvasTab: empathyCanvasTabShared,
    realBoardTab: realBoardTabShared,
    realAiTab: {
      brandLine: 'Real AI',
      tagline: 'Turning life stories into insights',
      videoPath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/videos/real-ai-video.mp4',
      logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/logos/real-r-logo.svg',
      gridImages: [
        '/assets/images/homeschooler/image/first-reflection.svg',
        '/assets/images/homeschooler/image/key-life-value.svg',
        '/assets/images/homeschooler/image/sdg-challenge.svg',
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/birth-story.svg',
        '/assets/images/homeschooler/image/life-analysis.svg',
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
      rcmiReportImagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/RealLives_Changemaker_Report-images-0.svg',
    },
  },

  changemaker: {
    heroImageCaption: 'RealLives at ETH University, Zurich, Switzerland',
    heading: 'RealLives ChangeMaker Project',
    body:
      'The RealLives ChangeMaker Project is your journey from awareness to action. Experience life through different perspectives, assess your global competencies, and channel your insights into creating meaningful change through impactful business solutions',
    ctaSchoolHeading: 'Ready to Become a \nChangeMaker University?',
    ctaButtonText: 'Get Started',
    journeyHeading: 'Your ChangeMaker Journey',
    phases: [
      {
        title: 'Phase 1: Experience & Empathy',
        intro:
          'Play RealLives - Walk in Someone Else\'s Shoes Step into lives across the globe and experience the challenges, opportunities, and realities that shape different communities. Through RealLives simulation:',
        bullets: [
          'Gain Perspective: Live through diverse socioeconomic backgrounds, geographic locations, and cultural contexts',
          'Understand Complexity: Navigate real-world constraints like limited resources, educational barriers, and systemic challenges',
          'Build Empathy: Develop deep emotional understanding of global issues beyond statistics and headlines',
          'Identify Patterns: Recognize recurring themes and systemic problems that affect communities worldwide',
        ],
        imagePath:
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-changemaker-project-page/change-maker-1-img.svg',
      },
      {
        title: 'Phase 2: Assess & Reflect',
        intro:
          'Play RealLives - Walk in Someone Else\'s Shoes Step into lives across the globe and experience the challenges, opportunities, and realities that shape different communities. Through RealLives simulation:',
        bullets: [
          'Gain Perspective: Live through diverse socioeconomic backgrounds, geographic locations, and cultural contexts',
          'Understand Complexity: Navigate real-world constraints like limited resources, educational barriers, and systemic challenges',
          'Build Empathy: Develop deep emotional understanding of global issues beyond statistics and headlines',
          'Identify Patterns: Recognize recurring themes and systemic problems that affect communities worldwide',
        ],
        imagePath:
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-changemaker-project-page/change-maker-2-img.svg',
      },
      {
        title: 'Phase 3: Ideate & Act',
        intro:
          'Business with Purpose (BWP) - Turn Insights Into Impact Armed with empathy and self-awareness, enter the Business with Purpose platform to create solutions that matter:',
        sections: [
          {
            title: 'Ideation Stage -',
            bullets: [
              'Problem Identification: Use your RealLives insights to identify real challenges you witnessed',
              'Solution Brainstorming: Generate innovative approaches to Addresss these problems',
            ],
          },
          {
            title: 'Investment Phase - -',
            bullets: [
              'Invest in ideas you believe have maximum potential of creating impact',
              'Top ideas go through based on highest investments',
            ],
          },
          {
            title: 'Team Formation -',
            bullets: [
              'Partner Discovery: Connect with like-minded changemakers and complementary skill sets',
              'Role Definition: Structure your team for maximum effectiveness',
            ],
          },
          {
            title: 'Business Creation -',
            bullets: [
              'Business Model Development: Create sustainable models that prioritize purpose alongside profit',
              'Perform Key Value Articulation to gain quick insights into your Business Plan',
            ],
          },
        ],
        images: [
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-changemaker-project-page/change-maker-3-img.svg',
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-changemaker-project-page/change-maker-4-img.svg',
        ],
      },
    ],
    whyJourneyMattersHeading: 'Why This Journey Matters?',
    gaps: [
      {
        title: 'The Empathy Gap:',
        description:
          "Many well-intentioned solutions fail because they're created without truly understanding the communities they aim to serve. RealLives bridges this gap.",
      },
      {
        title: 'The Action Gap:',
        description:
          "Many people care about global issues but don't know how to create meaningful change. BWP provides the structure and tools to move from concern to action.",
      },
      {
        title: 'The Impact Gap:',
        description:
          'Traditional business education often treats social impact as secondary. Our approach puts purpose at the center of business creation.',
      },
    ],
    closingHeading: 'Ready to Become a ChangeMaker?',
    closingSubtext: 'Your journey from understanding to impact starts now',
    closingButtonText: 'Become a ChangeMaker',
    heroBackgroundImagePath:
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/Changemaker-univercity-background.svg',
    heroPrimaryCtaPath: '/reallives/homeschooler/pricing',
    closingCtaPath: '/reallives/homeschooler/pricing',
  },

  foundation: {
    hero: {
      heading: 'RealLives Foundation',
      tagline: 'Changing Education Through Lived Experience.',
      body:
        'We believe learning should not stop at memorizing facts, it should cultivate empathy, critical thinking, and real-world awareness. Through immersive simulations, students step into lives across different countries, cultures, and realities. They make decisions, face consequences, and reflect deeply.',
      skills: [
        'Empathy',
        'Adaptability',
        'Cultural awareness',
        'Ethical Reasoning',
        'Problem-solving skills',
        'Leadership',
      ],
      donateCtaText: 'Invest in future ChangeMakers',
      donateBtnText: 'Donate Now',
      donateUrl: 'https://www.reallivesfoundation.org/donate',
    },
    educationalApproach: {
      heading: 'Our Educational Approach',
      body:
        'We believe learning should not stop at memorizing facts, it should cultivate empathy, critical thinking, and real-world awareness.',
      cards: [
        {
          title: 'Learning Through Experience',
          description:
            "Students don't just learn about global challenges, they live them through interactive simulations. This builds understanding far deeper than traditional instruction.",
        },
        {
          title: 'Building Empathy',
          description:
            'By experiencing lives across socio-economic and cultural contexts, students develop compassion, perspective, and global awareness.',
        },
        {
          title: 'Strengthening Critical Thinking',
          description:
            'Every decision has consequences. Students analyze situations, evaluate options, and understand complex systems.',
        },
        {
          title: 'Empowering Students',
          description:
            'We help learners recognize that their choices matter in simulations and in real life. This fosters confidence, responsibility, and leadership.',
        },
      ],
    },
    globalImpact: {
      heading: 'Our Global Impact',
      subheading: 'RealLives has empowered students worldwide',
      learnMoreText: 'Learn More about Our Impact',
      learnMorePath: '/reallives/homeschooler/impact',
    },
    rcmi: {
      heading: 'RealLives Changemaker Index (RCMI)',
      subheading:
        'To deepen impact beyond the simulation, we developed the RealLives Changemaker Index (RCMI) — a framework that helps students understand their growth as changemakers.',
      competencies: [
        'Empathy',
        'Leadership',
        'Self Awareness',
        'Resilience',
        'Problem Solving Skills',
        'Critical Thinking',
        'Ethical Responsibility',
        'Adaptability',
        'Emotional Intelligence',
        'Initiative',
        'Communication',
        'Visionary Thinking',
        'Social Awareness',
        'Risk Taking',
        'Global Awareness',
        'Collaboration',
        'Persistence',
        'Creativity & Innovation',
      ],
      diagramImage: '/assets/images/common/rcmi-diagram.png',
      learnMoreText: 'Learn More about RCMI',
      learnMoreUrl: 'https://www.reallivesfoundation.org/rcmi',
    },
  },

  impact: {
    sectionTitle: 'Impact',
    globalStoryHeading: 'Our Global Impact Story',
    globalStoryBody:
      'RealLives has delivered six workshops across six countries, partnering with leading universities to bring global, experiential learning into classrooms. Students engage in real-world scenarios, make life-shaping decisions, explore global disparities, and build empathy for diverse human experiences. By integrating RealLives, institutions enrich courses in sociology, economics, and international relations while strengthening students’ critical thinking and problem-solving skills. Students report deeper understanding of global issues and a stronger connection to the world beyond their own borders.',
    worldMapImagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/world-map.svg',
    workshopSectionLabel: 'Impact home',
    ctaBannerHeading: 'Empower Your Students with Global Perspectives',
    ctaBannerButtonText: 'Bring RealLives to Your Campus',
    ctaBannerButtonPath: '/reallives/homeschooler/pricing',
    workshopLearnMorePath: '/reallives/homeschooler/contact',
    sliderImages: [
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/Final-Business-with-Purpose-1.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/school-1-image-slider.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/school-2-image-slider.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/school-3-image-slider.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/school-4-image-slider.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/second-workshop-2.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/second-workshop-3.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/second-workshop-4.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/3-rd-workshop-first-image.jpeg',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/3-rd-workshop-2.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/3-rd-workshop-3.png',
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/3-rd-workshop-4.png',
    ],
    cards: [
      {
        title: 'ETH Zurich Workshop',
        date: '27/06/2018',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/Final-Business-with-Purpose-1.png',
        university: 'ETH University Zurich, Switzerland',
        department: 'Department - Institute of Molecular Systems Biology',
        collaborationLabel: 'In collaboration with :',
        collaborationName: 'Prof. Dr. Ernst Hafen',
        participantsLabel: 'Participants :',
        participantsNumber: '120',
        usedToolLabel: 'Used tool :',
        usedTool: 'Empathy',
        skillsDevelopedLabel: 'Skills Developed',
        skills: ['Teamwork', 'Integrity and Work Ethics'],
        learnMoreText: 'Learn more',
      },
      {
        title: 'Navamindradhiraj University Workshop',
        date: '20/09/2025',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/second-workshop.png',
        university: 'Navamindradhiraj University , Bangkok',
        department: 'Department - General Education',
        collaborationLabel: 'In collaboration with :',
        collaborationName: 'Lecturer Krittanan Pensirisomboon',
        participantsLabel: 'Participants :',
        participantsNumber: '150',
        usedToolLabel: 'Used tool :',
        usedTool: 'Empathy',
        skillsDevelopedLabel: 'Skills Developed',
        skills: ['21\u2019st Century Skills', 'Business Acumen'],
        learnMoreText: 'Learn more',
      },
      {
        title: 'KyungHee University SDG Workshop',
        date: '29/09/2025',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/3-rd-workshop-first-image.jpeg',
        university: 'Kyunghee University, Korea',
        department: 'Department - Social Sciences',
        collaborationLabel: 'In collaboration with :',
        collaborationName: 'Prof. Dr. Utak Chang',
        participantsLabel: 'Participants :',
        participantsNumber: '30',
        usedToolLabel: 'Used tool :',
        usedTool: 'Empathy',
        skillsDevelopedLabel: 'Skills Developed',
        skills: ['SDG Awareness', 'ChangeMaking'],
        learnMoreText: 'Learn more',
      },
      {
        title: 'IIT Bombay Exploring SDG 1 through Empathy Workshop',
        date: '07/11/2024',
        imagePath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-impact-page/fourth_workshop-1-min.jpg',
        university: 'IIT Bombay, India',
        department: 'Department - IDC School of Design',
        collaborationLabel: 'In collaboration with :',
        collaborationName: 'India HCI 2024',
        participantsLabel: 'Participants :',
        participantsNumber: '30',
        usedToolLabel: 'Used tool :',
        usedTool: 'Empathy Canvas',
        skillsDevelopedLabel: 'Skills Developed',
        skills: ['SDG Awareness', 'Social Entrepreneurship'],
        learnMoreText: 'Learn more',
      },
      {
        title: 'Chulalongkorn University Workshop',
        date: '27/04/2024',
        imagePath: '/assets/images/homeschooler/background-css/images/fifth-work-shop.png',
        university: 'Chulalongkorn University, Bangkok, Thailand',
        department: 'Department - Faculty of Education / BAScii Program',
        collaborationLabel: 'In collaboration with :',
        collaborationName: 'Dr. Sawaros Thanapornsangsuth',
        participantsLabel: 'Participants :',
        participantsNumber: '200',
        skillsDevelopedLabel: 'Skills Developed',
        skills: ['Empathy', 'SDG Awareness', 'Critical Thinking'],
        learnMoreText: 'Learn more',
      },
    ],
  },

  research: {
    heading: 'Research-Backed Learning with RealLives',
    body:
      'RealLives Simulation has been independently studied by universities and educators worldwide.Peer-reviewed research demonstrates its impact on empathy, global citizenship, identity development, decision-making, and SDG-aligned learning outcomes across age groups.',
    heroImagePath:
      'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/banner-page.svg',
    browseIntro:
      'Browse peer-reviewed studies, theoretical analyses,\nand classroom research on RealLives.',
    exploreButtonText: 'Explore',
    items: [
      {
        id: 'research2-content-1',
        paperTitle: 'Effects of a Game-Based Empathy Education Program Linked to the SDGs',
        institution: 'Korea University (Republic of Korea)',
        whatWasStudied:
          'Evaluation of RealLives Simulation as a game-based empathy education tool for high school and university learners',
        logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/Korea-university.svg',
      },
      {
        id: 'research2-content-2',
        paperTitle: 'Real Lives 2004: The Devil You Know…',
        institution: 'University of the West of England, Bristol',
        whatWasStudied:
          'How probabilistic life modeling influences learning, empathy, and understanding of global inequality.',
        logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/uwe-bristol-img.svg',
      },
      {
        id: 'research2-content-3',
        paperTitle:
          'Simulating REAL LIVES: Promoting Global Empathy and Interest in Learning Through Simulation Games',
        institution: 'Korea University (Republic of Korea)',
        whatWasStudied:
          'How probabilistic life modeling influences learning, empathy, and understanding of global inequality.',
        logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/Santa-clara-university.svg',
        logoCaption: 'Santa Clara University',
      },
      {
        id: 'research2-content-4',
        paperTitle:
          'Real Lives and the Problem of Distributive Justice (Essay on video games, meritocracy, and justice)',
        institution: 'State University of New York (SUNY) at Albany',
        whatWasStudied:
          'How probabilistic life modeling influences learning, empathy, and understanding of global inequality.',
        logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/University-Albany.svg',
      },
      {
        id: 'research2-content-6',
        paperTitle:
          ' Gaining Tolerance of Immigrants through Simulating Migratory Experiences:',
        institution: 'Uppsala University, Department of Education, Sweden',
        whatWasStudied:
          'The study tested whether a migration simulation game (Real Lives) can improve students’ attitudes toward immigrants.',
        logoPath: 'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-research-page/Uppsala_University_logo.svg-2.svg',
        logoCaption: 'Uppsala University Sweden',
      },
      {
        id: 'research2-content-5',
        paperTitle:
          'Computer-Based Life Simulations and Young Adolescents: Identity Exploration, Information Learning, and Sense-Making',
        institution: 'State University of New York (SUNY) at Albany',
        whatWasStudied:
          'Evaluation of RealLives Simulation as a game-based empathy education tool for high school and university learners',
        heading: 'Individual Research by Kallen Tsikalas',
      },
    ],
    detailPanelLabels: {
      paperTitle: 'Paper Title',
      institution: 'Institution',
      whatWasStudied: 'What was studied\u00a0',
    },
    keyFindingsLabel: 'Key Findings\u00a0',
    methodsLabel: 'Methods\u00a0',
    goBackText: 'Go Back',
    readPaperText: 'Read the Paper',
    bringToSchoolText: 'Bring This to Your Family',
    bringToSchoolPath: '/reallives/homeschooler/contact',
    contactBannerHeading: 'Get in Touch',
    contactBannerSubheading:
      'Questions about our research or bringing RealLives to your family? We would love to hear from you.',
    contactBannerButtonPath: '/reallives/homeschooler/contact',
    contactPromptButtonText: 'Contact Us',
  },

  pricing: {
    heading: 'Pricing Licenses',
    includedHeading: 'What’s Included?',
    includedDescription:
      'All plans include the same core features No hidden costs. Complete transparency',
    toolInfoNote:
      'Based on your requirements, we recommend the most suitable license plan, plus show an alternative option for comparison. All features remain the same across plans - only student capacity and life credits differ',
    tiers: [
      {
        name: 'Family 1',
        price: '$50.00',
        period: '/1 Year',
        studentCount: '2 Parents + 1 Child (13+)',
        features: ['1 Year Validity', 'Max Lives : 50'],
        ctaText: 'Get Started',
      },
      {
        name: 'Family 2',
        price: '$75.00',
        period: '/1 Year',
        studentCount: '2 Parents + 2 Children (13+)',
        features: ['1 Year Validity', 'Max Lives : 75'],
        ctaText: 'Get Started',
      },
      {
        name: 'Family 3',
        price: '$100.00',
        period: '/1 Year',
        studentCount: '2 Parents + 3 Children (13+)',
        features: ['1 Year Validity', 'Max Lives : 100'],
        ctaText: 'Get Started',
      },
    ],
    purchaseModal: {
      heading: 'Continue to registration',
      body:
        'You will leave this site and open the family license registration page to complete your purchase.',
      confirmText: 'Continue',
    },
  },

  about: {
    heading: 'About Us',
    tabs: ['History', 'Our Team', 'Working Team', 'Global Support'],
    history: {
      milestones: [
        {
          version: 'RealLives 2004',
          description:
            'The first widely adopted version of RealLives that introduced players to a simulation of life across the globe. With a basic UI and limited data, this version laid the foundation for what would become a powerful learning tool on global diversity.',
          images: [
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/reallives-light-1.svg',
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/reallives-light-2.svg',
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/reallives-light-3.svg',
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/rl-logo-light.svg',
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/rl-logo-light-ai.svg',
          ],
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
            'The current RealLives release continues the cloud-first experience with refreshed flows, updated global datasets, and ongoing improvements to empathy-focused learning for families and homeschool settings worldwide.',
          badge: 'Current Version',
        },
      ],
    },
    team: {
      leader: {
        role: 'Leader',
        name: 'Dr. Parag Mankeekar',
        imagePath:
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/ceo-image.jpg',
        bioParagraphs: [
          'Dr. Parag Mankeeker is a social technology entrepreneur whose journey spans medicine, public health, and anthropology. His multidisciplinary expertise has driven him to tackle complex social challenges, from developing innovative hospitals to managing disaster response systems.',
          "Parag's work has taken him to the frontlines of understanding global conflicts, including terrorism research in India and Afghanistan. His commitment to positive change has earned him recognition as both an Ashoka Fellow and Salzburg Seminar Fellow.",
          "Now leading RealLives' global expansion, Parag is transforming the platform into a powerful tool for building empathy and socio-emotional learning, advancing the shared dream of creating a more empathetic world.",
        ],
      },
      academicResearchCoordinator: {
        role: 'Academic & Research Coordinator',
        name: 'Dr. Yogesh Deshpande',
        imagePath:
          'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/YDD-2.png',
        bioParagraphs: [
          'Prof. (Dr.) Yogesh Deshpande is an accomplished and student-focused Professor of Information Technology with three decades of teaching, research, and leadership experience. Creates challenging and engaging learning experiences through appropriate use of educational technology tools and applications, inspiring students to pursue academic and personal excellence for becoming life-long learners. ',
          'Holds a Ph.D. in Human–Computer Interaction Design from IIT Guwahati. Expertise in curriculum development, evaluation methodologies, academic audits, and human-centred design, with proven leadership roles as Dean and Director in reputed institutions. ',
          'Taught a diverse portfolio of courses including Human–Computer Interaction (HCI), Augmented and Virtual Reality (AR/VR), Data Mining, and Applied Statistics, and successfully supervised six Ph.D. scholars in emerging technology domains.',
        ],
      },
      workingTeamHeading: 'Working Team',
      workingTeam: [
        { name: 'Parag Mankeekar', role: 'Team Leader' },
        { name: 'Ravi Gulhane', role: 'CTO' },
        { name: 'Ajit Ghanekar', role: 'Chief Stasitician' },
        { name: 'Atharva Nijampurkar', role: 'Senior Backend Developer' },
        { name: 'Pankaj Sapkal', role: 'Chief Strategist' },
        { name: 'Vidya Mankeekar', role: 'Account and HR' },
        { name: 'Adarsh Vishwakarma', role: 'Frontend Developer' },
        { name: 'Viraj Kabbur', role: 'Product Manager' },
        { name: 'Janhavi Desai', role: 'Translation Intern' },
        { name: 'Sakshi Kulkarni', role: 'Translation Intern' },
        { name: 'Bhoomi Luniya', role: 'AI Intern' },
      ],
      itinerantHeading: 'Itinerant Team Members',
      itinerantIntroParagraphs: [
        'We extend our deepest gratitude to the many talented professionals from the Neeti team whose significant contributions helped bring this ambitious project to life. Their expertise and dedication laid crucial groundwork for RealLives\' continued evolution.',
        'Over the past three years, more than 200 passionate interns from diverse backgrounds and disciplines have poured their energy into this labor of love. These remarkable individuals—spanning fields from technology and education to social sciences and design—have each left their mark on RealLives, contributing fresh perspectives, innovative solutions, and countless hours of dedicated work.',
        'We are profoundly grateful to the following organizations for their generous support in connecting us with exceptional talent. By providing outstanding interns who shared our vision for building empathy through technology, these institutions have become integral partners in our mission to create a more understanding world. Their commitment to fostering meaningful educational and professional experiences has directly contributed to RealLives\' growth and impact.',
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
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/thanks-ashoka-img.jpg',
          body:
            'We thank Ashoka for fostering empathy and social innovation worldwide. Their recognition of Dr. Parag Mankeeker as an Ashoka Fellow validated our mission and connected us with a global network of changemakers who share our vision of building cross-cultural understanding through transformative education.',
        },
        {
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/bmgi-img.jpg',
          body:
            'We thank BMGI Global for their strategic partnership and management consulting expertise across India and the Asia Pacific region. Their professional guidance has helped us navigate complex markets while staying true to our mission of creating meaningful educational impact through technology.',
        },
        {
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/impact-world-img.png',
          body:
            'We are grateful to Ashoka Globalizer for accelerating our worldwide impact. Their specialized support in scaling social innovations has been instrumental in helping RealLives reach new communities globally, amplifying our ability to foster empathy and understanding in classrooms around the world.',
        },
      ],
      alwaysGratefulHeading: 'Always Grateful',
      alwaysGratefulMembers: [
        {
          name: 'Lee Hartwell',
          location: 'Arizona, USA',
          description:
            'Nobel Laureate (2001), Nobel Prize in Physiology or Medicine',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/Lee-Hartwell-img.jpg',
        },
        {
          name: 'David Gibson',
          location: 'Perth, Australia',
          description:
            'Director | Learning Futures | Curtin Learning and Teaching, Australia.',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/david-gibson-img.jpg',
        },
        {
          name: 'Laura Giadorou-Koch',
          location: 'NY, USA',
          description:
            'Practiced corporate law on Wall Street. System-level social entrepreneur and innovative educator & CEO',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/Laura-Giadorou-Koch-img.jpg',
        },
        {
          name: 'Naresh Shahani',
          location: 'Mumbai, India',
          description:
            'MD and Founder, BMGI India\u00a0Business Coach Innovation and Organic Growth with Consulting Experience',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/Naresh-Shahani-img.jpg',
        },
        {
          name: 'Abhay Nalawade',
          location: 'Pune, India',
          description:
            'Advisor for start-ups, technology companies, social organizations, Entrepreneur & Ex-MD/CEO of Thermax',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/abhay-nalawade-img.jpg',
        },
        {
          name: 'Milind Desai',
          location: 'Mumbai, India',
          description: 'Advisor, Trackball Consultancy Services Private Limited',
          imagePath:
            'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/Milind-Desai-img.jpg',
        },
      ],
      thanksHeading: 'Thanks',
      thanksEntries: [
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
      heading: 'Inventor',
      names: 'Kathy and Bob Runyan',
      imagePath:
        'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-about-us-page/bob-image.jpg',
      bioParagraphs: [
        "Bob Runyan grew up in California's emerging Silicon Valley, where early exposure to technology sparked his lifelong curiosity. His travels through Mexico and Europe as a young soccer player deepened his passion for understanding diverse cultures and perspectives.",
        'After serving with the Peace Corps in the Seychelles Islands—where he taught math and computer science—Bob transitioned into computer programming in 1989. In 1996, inspired by technology\'s potential to build empathy, he conceived software that could simulate life experiences worldwide using real statistical data. This vision led him to found Educational Simulations Inc. and launch RealLives in 2001.',
        'The partnership that would transform RealLives began when Bob met Dr. Parag Mankeeker through the Ashoka Foundation, recognizing his exceptional vision for the platform\'s global potential.',
      ],
    },
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
      'Empowering global citizens through immersive life simulation and educational experiences that build empathy, understanding, and changemaker skills.',
    organizationName: 'RealLives Foundation',
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
    copyright: '© 2025 RealLives Foundation. All rights reserved.',
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'RealLives Simulation', path: '/reallives/homeschooler/products' },
          { label: 'Empathy Canvas', path: '/reallives/homeschooler/products' },
          { label: 'RealBoard', path: '/reallives/homeschooler/products' },
          { label: 'ChangeMaker Index', path: '/reallives/homeschooler/products' },
          { label: 'Pricing', path: '/reallives/homeschooler/pricing' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', path: '/reallives/homeschooler/about' },
          { label: 'Contact', path: '/reallives/homeschooler/contact' },
        ],
      },
    ],
  },
};
