
/**
 * @fileoverview Centralized store for application constants, including UI text,
 * project data, music video data, photography items, user profile, and image URLs.
 * This file is the primary repository for content that might change or need translation.
 */

// --- Data Interfaces ---

/**
 * Defines the structure for a project item in the portfolio.
 * @interface Project
 * @property {string} id - Unique identifier for the project.
 * @property {string} title - Title of the project.
 * @property {string} description - Description of the project.
 * @property {string[]} technologies - Array of technologies used.
 * @property {string} [githubUrl] - Optional URL to the GitHub repository.
 * @property {string} [liveDemoUrl] - Optional URL to the live demo.
 * @property {string} [imageUrl] - Optional URL for the project's image.
 * @property {string} [dataAiHint] - Optional AI hint for image generation.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  dataAiHint?: string;
}

/**
 * Defines the structure for an example video item for YouTube channel sections.
 * @interface ExampleVideo
 * @property {string} id - Unique identifier for the video.
 * @property {string} videoId - YouTube video ID.
 * @property {string} title - Title for the iframe (accessibility).
 * @property {string} [description] - Optional description.
 */
export interface ExampleVideo {
  id: string;
  videoId: string;
  title: string;
  description?: string;
}


/**
 * Defines the structure for a performance video item.
 * @interface PerformanceVideo
 * @property {string} id - Unique identifier for the video.
 * @property {string} videoId - YouTube video ID.
 * @property {string} title - Title for the iframe (accessibility).
 * @property {string} [description] - Optional description.
 */
export interface PerformanceVideo {
  id: string;
  videoId: string;
  title: string;
  description?: string;
}

/**
 * Defines the structure for a photography item in the gallery.
 * @interface Photo
 * @property {string} id - Unique identifier for the photo.
 * @property {string} title - Title of the photo.
 * @property {string} description - Description of the photo.
 * @property {string} imageUrl - URL of the photo image.
 * @property {string} flickrUrl - URL to the photo on Flickr.
 * @property {string} dataAiHint - AI hint for image generation.
 */
export interface Photo {
  id:string;
  title: string;
  description: string;
  imageUrl: string;
  flickrUrl: string;
  dataAiHint: string;
}

// --- User Profile Data ---

/**
 * @description Contains personal information about the user/owner of the portfolio.
 */
export const userProfile = {
  name: "Naresh Madhur",
  titles: ["Data Science & AI Professional", "Musician", "Photographer"],
  bio: "Born in 1998 in Kerala, Naresh Madhur is a Data Science & AI Professional with a B.Tech in Computer Science Engineering from Amrita University. His career spans impactful roles at METRO Global Solution Center and Makro Nederland, focusing on BI, Data Science, and AI solutions. Fluent in Tulu, English, and Malayalam, with working proficiency in Tamil, Kannada, Dutch, and Hindi, Naresh's diverse linguistic skills complement his technical expertise. His formative college years were pivotal, shaping his character and deepening his passion for music, particularly Carnatic vocals and guitar. An avid photographer, he finds inspiration in capturing unique moments, a passion nurtured by his uncle. Naresh's journey reflects a blend of technical acumen, artistic talent, and a constant pursuit of learning and growth.",
  shortBio: "Driven by a relentless pursuit of excellence, novelty, and quality, Naresh (born 1998, Kerala) actively engages with the latest advancements in Data Science, AI, Music, and Photography. His upbringing involved frequent moves, instilling adaptability. College was a transformative period, enhancing his musical talents and shaping his worldview through diverse experiences and influential thinkers. He is passionate about the impact of dedicated teaching, a realization from his own studies. Today, he applies this dedication to his tech career, music instruction, and photography.",
  contactEmail: "nareshmadhur@gmail.com",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nareshmadhur",
    github: "https://github.com/nareshmadhur",
    youtubeMusic: "https://www.youtube.com/@nareshmadhur",
    youtubeTeaching: "https://www.youtube.com/@nareshteaches",
    flickr: "https://www.flickr.com/photos/68265102@N05/",
  },
  languages: [
    { language: "Tulu", proficiency: "Native (spoken at home)" },
    { language: "English", proficiency: "Proficient" },
    { language: "Malayalam", proficiency: "Proficient" },
    { language: "Tamil", proficiency: "A2 Proficiency" },
    { language: "Kannada", proficiency: "A2 Proficiency" },
    { language: "Dutch", proficiency: "A2 Proficiency" },
    { language: "Hindi", proficiency: "A2 Proficiency" },
  ],
  music: {
    instruments: ["Carnatic Vocals", "Carnatic Guitar", "Keyboard"],
    description: "Primarily a Carnatic vocalist, Naresh significantly developed his skills in Western Music theory, keyboard, and Carnatic guitar during college. Since 2021, he has taught Carnatic guitar to over 25 students globally and offers an online course for beginners, alongside personalized lessons for advanced students.",
    youtubeChannels: [
      { name: "Music Videos & Singing", url: "https://www.youtube.com/@nareshmadhur" },
      { name: "Carnatic Guitar & Teaching", url: "https://www.youtube.com/@nareshteaches" },
    ],
  },
  photography: {
    description: "Inspired by his uncle, Naresh is a dedicated photographer who values capturing the perfect shot. He uses a Fujifilm X-T4 and RawTherapee for processing. His approach is more conventional, focusing on quality over quantity.",
    flickrProfileUrl: "https://www.flickr.com/photos/68265102@N05/",
    gear: "Fujifilm X-T4, RawTherapee",
  }
};

// --- AI Knowledge Base ---
export const aiKnowledgeBase = {
  personalSummary: {
    name: "Naresh Madhur",
    birthYear: 1998,
    birthPlace: "Kerala, India",
    languages: userProfile.languages, // Reuse from userProfile
    formativeExperiences: "Frequent school changes due to father's judicial transfers (6 schools by class 12) fostered adaptability. College years at Amrita University were highly formative, focusing on spiritual growth, character development, and love, alongside academic learning. Influential experiences included navigating social dynamics, a shift from leftist ideologies towards thinkers like Sam Harris and Jordan Peterson, and significant growth in music (Carnatic vocals and guitar) through peer interactions. An internship at Reliance, Mumbai (2019) provided corporate exposure. The impact of passionate teachers in subjects like Physics, Chemistry, and Mathematics during tuition at Excel, Thalassery, was profound.",
    schoolingDetails: [
      "Kasaragod - Kindergarten",
      "Vadakara, Gokulam Public School (1st)",
      "Kanhangad, Chinmaya Vidyalaya (2-4th)",
      "Kozhikode, Bharatiya Vidhya Bhavan (5-7th)",
      "Guruvayur, Amrita Vidyalayam (8th std)",
      "Thrissur, Kulapathi Bhavans Vidhya Mandir, Pottore (9th & 10th) - Still in touch with friends",
      "Thalassery, Sanjos Metropolitan School (11th & 12th) - Still in touch with friends"
    ]
  },
  resume: {
    summary: "A Data Science and AI professional with a B.Tech in Computer Science Engineering from Amrita University. Experienced in BI & Data Science roles at METRO Global Solution Center and Makro Nederland, focusing on delivering data-driven solutions, leading BI transformations, and developing machine learning models. Proven ability in project management, team leadership, and cross-country collaboration. Passionate about leveraging data strategies and LLMs to enhance business operations and democratize data access.",
    keySkills: [
      "Business Intelligence (BI)", "Data Science", "Machine Learning (ML)", "Data Strategies",
      "Large Language Models (LLM)", "Semantic Layers / Data Mesh", "Data Engineering (SQL, Google BigQuery)",
      "Data Visualization (MicroStrategy, Looker Studio)", "Python (for Data Science, Automation)",
      "Customer Segmentation", "RFM Analytics", "Project Management (Resource & Cost)",
      "Team Leadership", "Consulting", "Agile Methodologies", "Data Governance",
      "Cloud Platforms (Google Cloud Platform - GCP)",
    ],
    experienceHighlights: [
      {
        role: "Business Intelligence Expert", company: "Makro Nederland", location: "Amsterdam, North Holland, Netherlands (Hybrid)",
        period: "Mar 2024 – Present",
        details: "Leading Makro NL’s transition to a data-proficient organization. Streamlined internal reporting activities for efficiency. Established a shared data space using Semantic Layers to democratize data access and implemented data governance. Enhanced transparency between business domains to foster win-win collaborations."
      },
      {
        role: "Assistant Group Manager, Data Science", company: "METRO Global Solution Center IN", location: "Bengaluru, Karnataka, India (Hybrid)",
        period: "Oct 2023 – Mar 2024 (6 mos)",
        details: "Delivered BI & Data Science solutions with a team of 6 for local and international clients. Supported an international BI transformation program, handling project management (resource & cost management) and development (Semantic Layer/Materialized View in Google BigQuery, front-end in MicroStrategy) as both developer and team leader. Led a cross-country community: organized on-site events and trained Supply Chain counterparts in Google Cloud and Semantic Layer/Data Mesh usage."
      },
      {
        role: "Sr. Data Scientist", company: "METRO Global Solution Center IN", location: "Pune, Maharashtra, India",
        period: "Oct 2021 – Sep 2023 (2 yrs)",
        details: "Developed country-specific solutions to drive local innovations. Built an MVP for Customer Segmentation (Slovakia, Italy) integrating RFM analytics with price/brand affinity insights (Python, MicroStrategy). Developed an end-to-end BI solution for global productivity and fulfillment monitoring (Looker Studio, security layers, efficient data modeling)."
      },
      {
        role: "Machine Learning Engineer", company: "METRO Global Solution Center IN", location: "Pune Area, India",
        period: "Jan 2020 – Sep 2021 (1 yr 9 mos)",
        details: "Hired as Jr. Machine Learning Engineer. Supported internal initiatives with data-driven insights. Developed and tested supplier lead time prediction models. Automated PPT workflows using Python. Created Python-based daily productivity reports for operational teams."
      },
    ],
    educationHighlights: [
      {
        degree: "B.Tech in Computer Science Engineering", institution: "Amrita University, Coimbatore",
        period: "2016 - 2020", // Please confirm/update this period
        details: "Key learnings included spirituality, strength of character, and love, alongside academics. College experiences included making friends, navigating social dynamics, a shift in ideological perspectives influenced by thinkers like Sam Harris and Jordan Peterson, and significant growth in music. Internship at Reliance, Mumbai (2 months, 2019) focusing on [User to specify internship domain/project if desired]."
      },
    ],
  },
  githubProfile: { // User should fill this section with their actual GitHub details
    username: userProfile.socialLinks.github.split('/').pop() || "nareshmadhur",
    publicRepoHighlights: [ // User to replace/add relevant public repos
      {
        name: "Tri-Folio (This Portfolio)",
        description: "The Next.js and Genkit powered portfolio website showcasing web development skills and AI integration.",
        keyTechnologies: ["Next.js", "React", "TypeScript", "Genkit", "Tailwind CSS", "ShadCN UI"],
        repoUrl: "https://github.com/nareshmadhur/tri-folio" // Example, replace with actual if public
      },
      // {
      //   name: "Another Public Project",
      //   description: "Description of another significant public project.",
      //   keyTechnologies: ["Tech1", "Tech2"],
      //   repoUrl: "https://github.com/nareshmadhur/another-project"
      // },
    ],
    privateProjectSummaries: [ // USER: CRITICAL TO FILL THIS SECTION
      {
        name: "Example: Internal Sales Analytics Dashboard (Confidential)",
        purpose: "To provide real-time sales insights and forecasting for internal business units.",
        myRole: "Lead Developer & Data Analyst",
        keyFeatures: [
          "Interactive visualizations of sales trends and KPIs.",
          "Predictive model for short-term sales forecasting.",
          "User authentication and role-based access control."
        ],
        technologiesUsed: ["Python (Flask/Django)", "Pandas", "Scikit-learn", "Tableau/PowerBI for frontend", "PostgreSQL"],
        learningsAndImpact: "Gained significant experience in end-to-end BI solution development for a sensitive business domain. The solution led to a X% improvement in forecast accuracy."
      },
      // {
      //   name: "Your Private Project Name (Confidential)",
      //   purpose: "Purpose of this project.",
      //   myRole: "Your role in this project.",
      //   keyFeatures: ["Feature A", "Feature B", "Feature C"],
      //   technologiesUsed: ["Tech X", "Tech Y", "Tech Z"],
      //   learningsAndImpact: "Key learnings and the impact this project had."
      // }
    ]
  },
  musicAndPhotography: {
    musicSummary: `Primarily a Carnatic vocalist, Naresh also significantly developed skills in Western Music theory, keyboard, and Carnatic guitar during college through interactions with talented peers. Started teaching Carnatic guitar in 2021 due to scarce resources for enthusiasts, having taught over 25 students in 4 years. Currently redirects beginners to an online course, while offering 1-1 or group lessons for intermediate/advanced students.
    YouTube Channels:
    - Carnatic Guitar & Teaching: ${userProfile.socialLinks.youtubeTeaching} (e.g., videos SASDA2AkFFk, iIOJGpQaONM)
    - Music Videos & Singing: ${userProfile.socialLinks.youtubeMusic} (e.g., videos dMxUJIKYplE, mWC9ra1V0zw)`,
    photographySummary: `Inspired by his uncle, photography is a significant passion. Naresh values capturing one perfect shot over many, adopting a quality-focused approach. Uses a Fujifilm X-T4 mirrorless camera and RawTherapee for processing.
    Flickr Profile: ${userProfile.socialLinks.flickr}
    Example Photos:
    - ${userProfile.socialLinks.flickr}p/2q3ki8V
    - ${userProfile.socialLinks.flickr}p/2q3epgT
    - ${userProfile.socialLinks.flickr}p/2q3ki9X`
  }
};


// --- Site Content (UI Text Strings & Image URLs) ---

export const siteContent = {
  global: {
    appName: `Naresh Madhur | Portfolio`,
    footer: {
      copyright: `© ${new Date().getFullYear()} ${userProfile.name}. All rights reserved.`,
      tagline: "Co-created with AI: A Vibe coding experiment",
    }
  },
  nav: {
    home: "Home",
    music: "Music & Teaching",
    biAiProjects: "Tech. Pursuits",
    photography: "Photography",
    contact: "Contact",
  },
  heroSection: {
    getInTouchButton: "Get in Touch",
    backgroundImageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1608-50OIV9jSs2cnP23gL5PPC6mbqkICF3.jpg",
    backgroundImageAlt: "Hero background image depicting Naresh Madhur with a guitar.",
    backgroundImageAiHint: "musician guitar portrait",
  },
  homePage: {
    about: {
      title: "About Me",
    },
    portfolioTitle: "Portfolio Highlights",
    sections: {
      music: {
        title: "Musical Pursuits",
        description: "Explore musical performances, original arrangements, and educational content.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/guitar-65Wzc1cVPra94zU6ikj0S731rWZqh4.jpg",
        imageAiHint: "guitar stage lights",
        linkUrl: "/music",
      },
      biAi: {
        title: "Data Science Explorations",
        description: "Discover use cases in BI, Data Analytics, and Artificial Intelligence, and ask my AI assistant questions about my work.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSC09308%20%281%29-UdBMIYLlILXq18JM2yBKnYyLlZ5SXK.jpeg",
        imageAiHint: "data network nodes",
        linkUrl: "/bi-ai",
      },
      photography: {
        title: "Photography",
        description: "View diverse photographs captured during travels and street explorations.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1726-8UZLZmtCQTAMWVScGAWwSGjZcJBMvG.jpeg",
        imageAiHint: "vintage camera travel",
        linkUrl: "/photography",
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Interested in collaborating or have a question? I'd love to hear from you.",
      buttonText: "Contact Me",
    },
  },
  biAiPage: {
    title: "Tech. Pursuits: AI Q&A",
    description: "A showcase of my work in Business Intelligence and Data Analytics, featuring an interactive AI assistant that can answer questions about my professional profile and projects based on the summarized information I've provided from my resume and GitHub.",
    interactiveToolsTitle: "AI Assistant",
    askMeAnything: {
      title: "Ask My AI Assistant",
      description: `Curious about my skills, projects, or experience? Ask a question below. My AI assistant has been provided with summarized information from my resume and GitHub profile (including public and private project overviews) to answer your questions.`,
      inputLabel: "Your question about Naresh Madhur:",
      inputPlaceholder: "e.g., What are your key skills in AI? Tell me about your experience with BI tools. Describe a challenging private project you worked on.",
      buttonText: "Ask Question",
      buttonLoadingText: "Thinking...",
      answerTitleLabel: "My AI Assistant's Insights:", // Updated title
      errorMessages: {
        errorTitle: "Assistant Error",
        generalError: "Sorry, I couldn't process your question at this time. Please try again.",
        noModelOutput: "The AI assistant didn't provide a response. This could be due to the nature of the question or a temporary issue.",
        emptyInput: "Please type a question.",
      }
    },
    projectsTitle: "Portfolio Projects",
  },
  musicPage: {
    title: "Music & Teaching",
    description: "Dive into Naresh Madhur's musical world and teaching endeavors. Explore original tracks, covers, live performances, and educational content.",
    visitYouTubeButton: "Visit Channel",
    viewPerformanceButton: "Watch Performance",
    sections: {
      youtube: {
        title: "My YouTube Presence",
        description: "Explore musical expressions, covers, and guitar lessons across Naresh's YouTube channels.",
        musicVideos: {
          title: "Music Videos & Arrangements",
          description: "Original songs, covers, and full song arrangements where Naresh performs vocals and music.",
          channelName: "@nareshmadhur",
          channelUrl: userProfile.socialLinks.youtubeMusic,
          featuredVideoId: "mWC9ra1V0zw",
          featuredVideoTitle: "Kadhal Sadugudu - Alaipayuthey | Cover by Naresh Madhur",
          otherExampleVideos: [
            { id: 'mv_nm_1', videoId: 'dMxUJIKYplE', title: 'Chaiyya Chaiyya | Cover by Naresh Madhur' },
            { id: 'mv_nm_2', videoId: 'xcOTmEt9K_U', title: 'Tere Jeya Hor Disda | Cover by Naresh Madhur' },
          ] as ExampleVideo[],
        },
        guitarTeaching: {
          title: "Guitar & Music Lessons",
          description: "In-depth guitar lessons, Carnatic music insights, and tips for aspiring musicians.",
          channelName: "@nareshteaches",
          channelUrl: userProfile.socialLinks.youtubeTeaching,
          featuredVideoId: "SASDA2AkFFk",
          featuredVideoTitle: "Carnatic Guitar lessons for beginners - Demo",
          otherExampleVideos: [
            { id: 'gt_nt_1', videoId: 'iIOJGpQaONM', title: 'Carnatic Guitar - Geetham Lesson 1' },
            { id: 'gt_nt_2', videoId: 'YNMIxGcvzzQ', title: 'Carnatic Guitar - Geetham Lesson 2' },
          ] as ExampleVideo[],
        },
        performances: {
          title: "Live Performances & Collaborations",
          description: "Naresh actively involves himself with local initiatives to foster good music and is always open to collaborations. With a diverse interest in music, he is keen on sharing his learnings, learning from fellow musicians, and exploring new musical territories. He believes in the power of musical synergy and the vibrant energy of live shows.",
          collaborationPromptTitle: "Interested in Collaborating or Connecting?",
          collaborationPromptText: "If you have ideas for musical projects, performances, or just want to talk about music, I'd love to hear from you. Click the button below to send me a message.",
          videos: [
            { id: 'perf1', videoId: 'rK4F0-Cu0bU', title: 'Live Performance: Kadhal Cricket | Masala Coffee' },
            { id: 'perf2', videoId: 'J6k-TBU_0GM', title: 'Live Performance: Aaluma Doluma | Anirudh Ravichander' },
            { id: 'perf3', videoId: 'Sy61QG2wGco', title: 'Live Performance: September | Earth, Wind & Fire' },
          ] as PerformanceVideo[],
        }
      },
      teachingJourney: {
        title: "My Teaching Journey & Online Course",
        description: "With over three years of experience teaching Carnatic Guitar to more than 25 students globally (since 2021), Naresh Madhur offers instruction for both beginner and intermediate levels. His passion for sharing musical knowledge led to the creation of a comprehensive online course, meticulously designed to guide aspiring guitarists. Explore his flagship course on Thinkific for structured lessons and personalized guidance.",
        courseUrl: "https://naresh-madhur-onlinecourses.thinkific.com/courses/carnatic-guitar-beginners",
        enrollButton: "Enroll in Course",
        courseImageUrl: "https://import.cdn.thinkific.com/971196/yJVkf7DvQ6aCNOUgleYd_Thumbnail_1.jpg", // Added course image URL
        courseImageAiHint: "guitar course thumbnail",
      },
    },
  },
  photographyPage: {
    title: "Photography Gallery",
    description: `Welcome to a visual journal by ${userProfile.name}. Here, moments captured through his lens are shared, from cityscapes to natural wonders. Each photo tells a story. He uses a ${userProfile.photography.gear}.`,
    viewOnFlickrButton: "View More on Flickr",
  },
  contactPage: {
    form: {
      title: "Contact Me",
      description: "Have a question or want to work together? Fill out the form below.",
      nameLabel: "Full Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Regarding your project...",
      messageLabel: "Message",
      messagePlaceholder: "Your message here...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessageTitle: "Success!",
      errorMessageTitle: "Error",
      genericSuccessMessage: "Thank you for your message! I'll get back to you soon.",
      genericFormError: "Form submission failed. Please check the errors.",
    }
  },
  projectCard: {
    technologiesUsedLabel: "Technologies Used:",
    githubButton: "GitHub",
    liveDemoButton: "Live Demo",
  },
  photoItem: {
    viewOnFlickrLink: "View on Flickr",
  },
  metadata: {
    defaultTitle: `${userProfile.name} | Portfolio`,
    defaultDescription: `Portfolio of ${userProfile.name}, showcasing expertise in Data Science & AI, music, and photography.`,
    biAiTitle: `AI Q&A with ${userProfile.name}`,
    biAiDescription: `Ask questions about ${userProfile.name}'s professional profile, skills, and projects using an AI-powered assistant informed by his summarized resume and GitHub information.`,
    musicTitle: `Music & Teaching | ${userProfile.name}`,
    musicDescription: `Listen to original compositions, covers, live performances, and explore music teaching by ${userProfile.name}.`,
    photographyTitle: `Photography Gallery | ${userProfile.name}`,
    photographyDescription: `Browse a collection of photographs by ${userProfile.name} capturing moments, landscapes, and stories.`,
    contactTitle: `Contact Me | ${userProfile.name}`,
    contactDescription: `Get in touch with ${userProfile.name} for inquiries related to data science, music, or photography.`,
  }
};


// --- Project Data ---
export const biAiProjects: Project[] = [
  {
    id: 'project-metro-cs',
    title: 'Customer Segmentation MVP (METRO)',
    description: 'Developed an MVP for Customer Segmentation for METRO clients in Slovakia and Italy, integrating RFM analytics with price/brand affinity insights. Utilized Python for development, with analytics presented in MicroStrategy.',
    technologies: ['Python', 'RFM Analytics', 'MicroStrategy', 'Data Science', 'Marketing Analytics'],
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'customer analytics chart',
  },
  {
    id: 'project-metro-bi',
    title: 'Global Fulfillment BI Solution (METRO)',
    description: 'Developed an end-to-end BI solution for global productivity and fulfillment monitoring at METRO. Incorporated BI best practices such as security layers and efficient data modeling. Implemented in Looker Studio.',
    technologies: ['Looker Studio', 'BI Best Practices', 'Data Modeling', 'Security Implementation', 'Google BigQuery'],
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'BI dashboard logistics',
  },
  {
    id: 'project-makro-bi',
    title: 'BI Transformation & Data Democratization (Makro NL)',
    description: 'Leading Makro Nederland’s transition to a data-proficient organization. Streamlined reporting, established a shared data space using Semantic Layers on Google BigQuery, and implemented data governance.',
    technologies: ['Data Strategy', 'Semantic Layer', 'Google BigQuery', 'Data Governance', 'LLM (conceptual)'],
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'data strategy network',
  },
];


// --- Photography Data ---
export const photographyItems: Photo[] = [
  {
    id: 'photo-nm-1',
    title: 'Varanasi Ghats', // Example title, user should update
    description: 'A moment captured at the vibrant ghats of Varanasi.', // Example description
    imageUrl: 'https://live.staticflickr.com/65535/53787419851_ba208556ec_c.jpg', // Actual URL for 2q3ki8V (example, user should verify this is the intended image)
    flickrUrl: 'https://www.flickr.com/photos/68265102@N05/53787419851/', // Link to the photo page for 2q3ki8V
    dataAiHint: 'India spiritual river',
  },
  {
    id: 'photo-nm-2',
    title: 'Serene Landscape', // Example title
    description: 'Peaceful landscape under a dramatic sky.', // Example description
    imageUrl: 'https://live.staticflickr.com/65535/53787681883_9c3965f68e_c.jpg', // Actual URL for 2q3epgT
    flickrUrl: 'https://www.flickr.com/photos/68265102@N05/53787681883/', // Link to the photo page for 2q3epgT
    dataAiHint: 'landscape sky clouds',
  },
  {
    id: 'photo-nm-3',
    title: 'Architectural Detail', // Example title
    description: 'Close-up of intricate architectural details.', // Example description
    imageUrl: 'https://live.staticflickr.com/65535/53787420056_f7907bdf42_c.jpg', // Actual URL for 2q3ki9X
    flickrUrl: 'https://www.flickr.com/photos/68265102@N05/53787420056/', // Link to the photo page for 2q3ki9X
    dataAiHint: 'architecture pattern texture',
  },
];

// Deprecated musicVideos constant - content moved into siteContent.musicPage
export const musicVideos: PerformanceVideo[] = [];

    
