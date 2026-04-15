/**
 * Home page tabs: 21st Century Skills, SDGs, Core Vision — shared copy;
 * links are scoped per sub-site via basePath.
 *
 * @param {string} basePath - '/reallives/school' | '/reallives/university' | '/reallives/homeschooler'
 */
export function homeAdditionalTabsForBasePath(basePath) {
  return [
    {
      introColumns: {
        left: {
          title: 'Empathy and Social-Emotional Learning Skills Through RealLives',
          paragraphs: [
            'RealLives transforms empathy education from abstract concepts into authentic emotional experiences. Instead of simply discussing different life circumstances, students actually live through diverse realities, experiencing the daily challenges, decisions, and emotions of characters from nearly 200 countries worldwide.',
          ],
        },
        right: {
          title: 'RealLives supports fundamentals of CASEL',
          paragraphs: [
            'Through immersive simulation experiences, students develop\u00a0self-awareness\u00a0by reflecting on their own reactions and biases when facing unfamiliar life circumstances. They build\u00a0self-management\u00a0skills as they navigate challenging decisions and emotional responses during gameplay.\u00a0Social awareness\u00a0grows naturally as students experience diverse cultural contexts and economic realities firsthand.',
            'The platform strengthens\u00a0relationship skills\u00a0through classroom discussions and collaborative reflection activities around shared simulation experiences. Finally,\u00a0responsible decision-making\u00a0is practiced continuously as students weigh complex choices within their simulated lives and connect these experiences to real-world ethical considerations.',
          ],
        },
      },
      experienceBlock: {
        title: 'Experience Authentic Life Stories',
        lead:
          "Each RealLives simulation presents students with a unique individual whose life unfolds through real-world data and circumstances. Students don't just read about poverty in rural Bangladesh or urban challenges in Brazil, they navigate these realities firsthand, making decisions and experiencing consequences that build genuine emotional understanding.",
        listHeading: 'Examples of Empathy-Building Experiences:',
        listItems: [
          'Making difficult choices between education and work when family finances are tight',
          'Navigating healthcare decisions with limited resources and access',
          'Experiencing the emotional impact of natural disasters, conflict, or economic instability',
          'Understanding how cultural expectations shape personal relationships and career opportunities',
          'Feeling the weight of responsibility as family circumstances change',
        ],
      },
      empathyCanvas: {
        title: 'The Empathy Canvas Tool',
        subtitle:
          'Our structured reflection framework helps students process their simulation experiences',
        steps: [
          {
            label: 'Before Playing:',
            body: 'Students set intentions and identify their own assumptions',
          },
          {
            label: 'During RealLives Simulation:',
            body: 'Guided reflection prompts help students notice emotional responses',
          },
          {
            label: 'After Playing:',
            body: 'Deep analysis of decisions, feelings, and newfound perspectives',
          },
          {
            label: 'Connecting to Reality:',
            body: 'Linking simulation experiences to real-world understanding',
          },
        ],
        learnMoreText: 'Learn more about it',
        learnMorePath: `${basePath}/products`,
      },
      closingCta: {
        title: 'Ready to Transform Your Classroom?',
        body:
          "Start building empathy in your students today with RealLives' comprehensive simulation and reflection tools. Our platform makes social-emotional learning engaging, authentic, and impactful for K-12 learners.",
        ctaText: 'Get Started',
        ctaPath: `${basePath}/pricing`,
      },
    },
    {
      sdgHeroOverlay: {
        title: 'From Empathy to Action Through Global Perspective',
        paragraphs: [
          "RealLives transforms abstract global challenges into personal experiences, helping K-12 students understand how the UN's 17 Sustainable Development Goals (SDGs) directly impact real lives around the world.",
          "In RealLives, you're likely born into a country different from your own. As you navigate this simulated life, you'll witness social disparities, both within your new nation and between it and your home country.",
          "These disparities aren't isolated problems—they're symptoms of unsustainable practices worldwide. That's why RealLives frames these experiences through the UN's 17 Sustainable Development Goals (SDGs), which tackle interconnected global challenges like climate change, poverty, and inequality.",
        ],
      },
      sdgMain: {
        title: 'From Empathy to Action Through Global Perspective',
        intro:
          "RealLives transforms abstract global challenges into personal experiences, helping K-12 students understand how the UN's 17 Sustainable Development Goals (SDGs) directly impact real lives around the world.\u00a0",
        paragraphs: [
          "In RealLives, you're likely born into a country different from your own. As you navigate this simulated life, you'll witness social disparities, both within your new nation and between it and your home country.",
          "These disparities aren't isolated problems—they're symptoms of unsustainable practices worldwide. That's why RealLives frames these experiences through the UN's 17 Sustainable Development Goals (SDGs), which tackle interconnected global challenges like climate change, poverty, and inequality.",
          "Countries can be ranked against these SDGs to show how well they're Addresssing specific disparities. RealLives uses this framework to help you understand not just what's wrong, but what can be done about it.",
        ],
        actionTagline: "The goal isn't just awareness, it's action",
      },
      sdgImpact: {
        title: "SDG's Impact in RealLives",
        relevanceGroups: [
          {
            label: 'High Relevance in RealLives',
            goalImagePaths: [
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-01.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-02.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-03.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-04.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-05.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-06.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-10.svg',
            ],
          },
          {
            label: 'Medium Relevance in RealLives',
            goalImagePaths: [
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-07.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-08.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-09.svg',
            ],
          },
          {
            label: 'Low Relevance in RealLives',
            goalImagePaths: [
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-11.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-12.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-13.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-14.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-15.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-16.svg',
              'https://d2jn82ki4w4ftn.cloudfront.net/reallives-website/common-products-page/sdg-icons/E-WEB-Goal-17.svg',
            ],
          },
        ],
      },
      awarenessToAction: {
        title: 'From Awareness to Action',
        lead: "The goal isn't just awareness, it's empowerment. \nRealLives helps students",
        listItems: [
          'Identify root causes\u00a0of global challenges rather than just symptoms',
          'Understand interconnections\u00a0between different SDGs and how they impact each other',
          'Develop solutions thinking\u00a0by exploring what works in different contexts',
          'Take meaningful action\u00a0through school and community-based projects',
        ],
      },
      beyondClassroom: {
        title: 'Beyond the Classroom',
        listItems: [
          'Vote and advocate based on global awareness',
          'Support organizations working on SDG implementation',
          'Raise the next generation with global perspective',
          'Lead community initiatives for positive change',
        ],
      },
      closingCta: {
        title: 'Ready to Transform Your Classroom?',
        body:
          "Start building empathy in your students today with RealLives' comprehensive simulation and reflection tools. Our platform makes social-emotional learning engaging, authentic, and impactful for K-12 learners.",
        ctaText: 'Get Started',
        ctaPath: `${basePath}/pricing`,
      },
    },
    {
      coreVisionHeading: 'Core Vision',
      coreVisionBody:
        'Discover the 15 foundational RealLives questions and definitions that explain empathy, global citizenship, systems thinking, SEL, equity, and changemaking.',
    },
  ];
}
