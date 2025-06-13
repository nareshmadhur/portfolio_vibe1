
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
  titles: ["Data Science & AI Professional", "Musician", "Photographer"], // Updated titles
  bio: "Born in 1998 in Kerala, Naresh Madhur is a Data Science & AI Professional with a B.Tech in Computer Science Engineering from Amrita University. His career spans impactful roles at METRO Global Solution Center and Makro Nederland, focusing on BI, Data Science, and AI solutions. Fluent in Tulu, English, and Malayalam, with working proficiency in Tamil, Kannada, Dutch, and Hindi, Naresh's diverse linguistic skills complement his technical expertise. His formative college years were pivotal, shaping his character and deepening his passion for music, particularly Carnatic vocals and guitar. An avid photographer, he finds inspiration in capturing unique moments, a passion nurtured by his uncle. Naresh's journey reflects a blend of technical acumen, artistic talent, and a constant pursuit of learning and growth.",
  shortBio: "Driven by a relentless pursuit of excellence, novelty, and quality, Naresh (born 1998, Kerala) actively engages with the latest advancements in Data Science, AI, Music, and Photography. His upbringing involved frequent moves, instilling adaptability. College was a transformative period, enhancing his musical talents and shaping his worldview through diverse experiences and influential thinkers. He is passionate about the impact of dedicated teaching, a realization from his own studies. Today, he applies this dedication to his tech career, music instruction, and photography.",
  contactEmail: "nareshmadhur@gmail.com",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nareshmadhur",
    github: "https://github.com/nareshmadhur", // Assuming this is the correct GitHub username
    youtubeMusic: "https://www.youtube.com/@nareshmadhur", // Specific channel for music videos
    youtubeTeaching: "https://www.youtube.com/@nareshteaches", // Specific channel for teaching
    flickr: "https://www.flickr.com/photos/68265102@N05/",
  },
  languages: [
    { language: "Tulu", proficiency: "Native" },
    { language: "English", proficiency: "Proficient" },
    { language: "Malayalam", proficiency: "Proficient" },
    { language: "Tamil", proficiency: "A2 Proficiency" },
    { language: "Kannada", proficiency: "A2 Proficiency" },
    { language: "Dutch", proficiency: "A2 Proficiency" },
    { language: "Hindi", proficiency: "A2 Proficiency" },
  ],
  music: { // This section is for general display; aiKnowledgeBase will have specifics for AI
    instruments: ["Carnatic Vocals", "Carnatic Guitar", "Keyboard"],
    description: "Primarily a Carnatic vocalist, Naresh significantly developed his skills in Western Music theory, keyboard, and Carnatic guitar during college. Since 2021, he has taught Carnatic guitar to over 25 students globally and offers an online course for beginners, alongside personalized lessons for advanced students.",
    youtubeChannels: [
      { name: "Music Videos & Singing", url: "https://www.youtube.com/@nareshmadhur" },
      { name: "Carnatic Guitar & Teaching", url: "https://www.youtube.com/@nareshteaches" },
    ],
  },
  photography: { // This for general display; aiKnowledgeBase will have specifics for AI
    description: "Inspired by his uncle, Naresh is a dedicated photographer who values capturing the perfect shot. He uses a Fujifilm X-T4 and RawTherapee for processing. His approach is more conventional, focusing on quality over quantity.",
    flickrProfileUrl: "https://www.flickr.com/photos/68265102@N05/",
    gear: "Fujifilm X-T4, RawTherapee",
  }
};

// --- AI Knowledge Base (To be filled/refined by the user, especially private GitHub projects) ---
/**
 * @description Contains summarized information from Naresh Madhur's resume and GitHub profile
 * to be used as context for the "Ask Me Anything" AI feature.
 * The user (Naresh Madhur) should populate/refine these fields with their specific details.
 */
export const aiKnowledgeBase = {
  personalSummary: {
    birthYear: 1998,
    birthPlace: "Kerala, India",
    languages: [
      { language: "Tulu", proficiency: "Native (spoken at home)" },
      { language: "English", proficiency: "Proficient" },
      { language: "Malayalam", proficiency: "Proficient" },
      { language: "Tamil", proficiency: "A2 Proficiency" },
      { language: "Kannada", proficiency: "A2 Proficiency" },
      { language: "Dutch", proficiency: "A2 Proficiency" },
      { language: "Hindi", proficiency: "A2 Proficiency" },
    ],
    formativeExperiences: "Frequent school changes due to father's judicial transfers (6 schools by class 12) fostered adaptability. College years at Amrita University were highly formative, focusing on spiritual growth, character development, and love, alongside academic learning. Influential experiences included navigating social dynamics, a shift from leftist ideologies towards thinkers like Sam Harris and Jordan Peterson, and significant growth in music (Carnatic vocals and guitar) through peer interactions. An internship at Reliance, Mumbai (2019) provided corporate exposure.",
  },
  resume: {
    summary: "A Data Science and AI professional with a B.Tech in Computer Science Engineering from Amrita University. Experienced in BI & Data Science roles at METRO Global Solution Center and Makro Nederland, focusing on delivering data-driven solutions, leading BI transformations, and developing machine learning models. Proven ability in project management, team leadership, and cross-country collaboration. Passionate about leveraging data strategies and LLMs to enhance business operations and democratize data access.",
    keySkills: [
      "Business Intelligence (BI)",
      "Data Science",
      "Machine Learning (ML)",
      "Data Strategies",
      "Large Language Models (LLM)",
      "Semantic Layers / Data Mesh",
      "Data Engineering (SQL, Google BigQuery)",
      "Data Visualization (MicroStrategy, Looker Studio)",
      "Python (for Data Science, Automation)",
      "Customer Segmentation",
      "RFM Analytics",
      "Project Management (Resource & Cost)",
      "Team Leadership",
      "Consulting",
      "Agile Methodologies",
      "Data Governance",
      "Cloud Platforms (Google Cloud Platform - GCP)",
      // Add more specific software/tools if desired e.g., specific Python libraries
    ],
    experienceHighlights: [
      {
        role: "Business Intelligence Expert",
        company: "Makro Nederland",
        location: "Amsterdam, North Holland, Netherlands (Hybrid)",
        period: "Mar 2024 – Present",
        details: "Leading Makro NL’s transition to a data-proficient organization. Streamlined internal reporting activities for efficiency. Established a shared data space using Semantic Layers to democratize data access and implemented data governance. Enhanced transparency between business domains to foster win-win collaborations. Skills: Large Language Models (LLM), Data Strategies."
      },
      {
        role: "Assistant Group Manager, Data Science",
        company: "METRO Global Solution Center IN",
        location: "Bengaluru, Karnataka, India (Hybrid)",
        period: "Oct 2023 – Mar 2024 (6 mos)",
        details: "Delivered BI & Data Science solutions with a team of 6 for local and international clients. Supported an international BI transformation program, handling project management (resource & cost management) and development (Semantic Layer/Materialized View in Google BigQuery, front-end in MicroStrategy) as both developer and team leader. Led a cross-country community: organized on-site events and trained Supply Chain counterparts in Google Cloud and Semantic Layer/Data Mesh usage. Skills: Team Leadership, Consulting."
      },
      {
        role: "Sr. Data Scientist",
        company: "METRO Global Solution Center IN",
        location: "Pune, Maharashtra, India",
        period: "Oct 2021 – Sep 2023 (2 yrs)",
        details: "Developed country-specific solutions to drive local innovations. Built an MVP for Customer Segmentation (Slovakia, Italy) integrating RFM analytics with price/brand affinity insights (Python, MicroStrategy). Developed an end-to-end BI solution for global productivity and fulfillment monitoring (Looker Studio, security layers, efficient data modeling). Skills: Data Science, Marketing Analytics."
      },
      {
        role: "Machine Learning Engineer",
        company: "METRO Global Solution Center IN",
        location: "Pune Area, India",
        period: "Jan 2020 – Sep 2021 (1 yr 9 mos)",
        details: "Hired as Jr. Machine Learning Engineer. Supported internal initiatives with data-driven insights. Developed and tested supplier lead time prediction models. Automated PPT workflows using Python. Created Python-based daily productivity reports for operational teams. Skills: Data Science, Marketing Analytics."
      },
    ],
    educationHighlights: [
      {
        degree: "B.Tech in Computer Science Engineering",
        institution: "Amrita University, Coimbatore",
        period: "YYYY - YYYY", // User to fill in graduation year
        details: "Key learnings included spirituality, strength of character, and love, alongside academics. Internship at Reliance, Mumbai (2 months, 2019) focusing on [User to specify internship domain/project if desired]."
      },
    ],
  },
  githubProfile: {
    username: "nareshmadhur", // Confirm if this is the primary GitHub profile for professional projects
    publicRepoHighlights: [
      {
        name: "Tri-Folio (This Portfolio)",
        description: "The Next.js and Genkit powered portfolio website showcasing my skills in web development and AI integration.",
        keyTechnologies: ["Next.js", "React", "TypeScript", "Genkit", "Tailwind CSS", "ShadCN UI"],
        repoUrl: "https://github.com/nareshmadhur/tri-folio" // Replace with actual if public and different
      },
      // User should add 1-2 more public repositories that are significant for professional context.
      // Example:
      // {
      //   name: "Public Project Name",
      //   description: "Brief description of what this project does and its purpose in a professional context.",
      //   keyTechnologies: ["Python", "Specific Library", "API Used"],
      //   repoUrl: "https://github.com/nareshmadhur/your-project-name"
      // },
    ],
    privateProjectSummaries: [ // USER: CRITICAL TO FILL THIS SECTION for AI to answer about private work
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
      // User should add 1-2 more summaries of key private GitHub projects.
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
  musicAndPhotography: { // For the AI to have context about these pursuits
    musicSummary: "Primarily a Carnatic vocalist, also skilled in Western Music theory, keyboard, and Carnatic guitar. Began teaching Carnatic guitar in 2021, instructing over 25 students in 4 years. Manages an online course for beginners and provides 1-1/group lessons for intermediate/advanced students. Maintains two YouTube channels: one for Carnatic Guitar/teaching (@nareshteaches - e.g., video SASDA2AkFFk) and another for singing/music videos (@nareshmadhur - e.g., video dMxUJIKYplE).",
    photographySummary: "Inspired by his uncle, photography is a significant passion. Prefers taking one perfect shot over many, adopting a more conventional, quality-focused approach. Uses a Fujifilm X-T4 mirrorless camera and RawTherapee for processing. Shares work on Flickr (profile: 68265102@N05, example photos: flic.kr/p/2q3ki8V, flic.kr/p/2q3epgT)."
  }
};


// --- Site Content (UI Text Strings & Image URLs) ---

/**
 * @description Object containing all user-facing text and key image URLs for the website.
 * Organized by section for easy management.
 */
export const siteContent = {
  global: {
    appName: `Naresh Madhur | Portfolio`,
    footer: {
      copyright: `© ${new Date().getFullYear()} ${userProfile.name}. All rights reserved.`,
      tagline: "Designed with passion.",
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
      backgroundImageUrl: undefined,
      backgroundImageAiHint: undefined,
    },
    portfolioTitle: "Portfolio Highlights",
    portfolioHighlightsWrapper: {
        backgroundImageUrl: undefined,
        backgroundImageAiHint: undefined,
    },
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
      backgroundImageUrl: undefined,
      backgroundImageAiHint: undefined,
    },
  },
  biAiPage: {
    title: "Tech. Pursuits: AI Q&A",
    description: "A showcase of my work in Business Intelligence and Data Analytics, featuring an interactive AI assistant that can answer questions about my professional profile and projects based on the summarized information I've provided from my resume and GitHub.",
    interactiveToolsTitle: "AI Assistant", // This title can be reused or made more specific
    askMeAnything: { // New section for the "Ask Me Anything" feature
      title: "Ask My AI Assistant",
      description: `Curious about my skills, projects, or experience? Ask a question below. My AI assistant has been provided with summarized information from my resume and GitHub profile (including public and private project overviews) to answer your questions.`,
      inputLabel: "Your question about Naresh Madhur:",
      inputPlaceholder: "e.g., What are your key skills in AI? Tell me about your experience with BI tools. Describe a challenging private project you worked on.",
      buttonText: "Ask Question",
      buttonLoadingText: "Thinking...",
      answerTitleLabel: "AI's Answer:",
      errorMessages: {
        errorTitle: "Assistant Error",
        generalError: "Sorry, I couldn't process your question at this time. Please try again.",
        noModelOutput: "The AI assistant didn't provide a response. This could be due to the nature of the question or a temporary issue.",
        emptyInput: "Please type a question.",
        // Add any other specific error messages if needed
      }
    },
    projectsTitle: "Portfolio Projects", // This section remains for static projects
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
          featuredVideoId: "mWC9ra1V0zw", // From original constants, user can update
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
/**
 * Array of Business Intelligence and AI projects.
 * Each object conforms to the `Project` interface.
 * These are examples and should be replaced by Naresh's actual projects or removed if AI Q&A covers projects.
 */
export const biAiProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Customer Segmentation MVP',
    description: 'Developed an MVP for Customer Segmentation for clients in Slovakia and Italy, integrating RFM analytics with price/brand affinity insights and branch-level adjustments. Utilized Python for development, with analytics presented in MicroStrategy.',
    technologies: ['Python', 'RFM Analytics', 'MicroStrategy', 'Data Science', 'Marketing Analytics'],
    // githubUrl: 'https://github.com/nareshmadhur/customer-segmentation', // Example, if public
    // liveDemoUrl: '#', // Example
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'customer analytics chart',
  },
  {
    id: 'project-2',
    title: 'Global Productivity & Fulfillment BI Solution',
    description: 'Developed an end-to-end BI solution for global productivity and fulfillment monitoring. Incorporated BI best practices such as security layers and efficient data modeling. Implemented in Looker Studio.',
    technologies: ['Looker Studio', 'BI Best Practices', 'Data Modeling', 'Security Implementation'],
    // liveDemoUrl: '#', // Example
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'BI dashboard logistics',
  },
  {
    id: 'project-3',
    title: 'Supplier Lead Time Prediction Model',
    description: 'Developed and tested supplier lead time prediction models to support internal initiatives with data-driven insights for METRO Global Solution Center.',
    technologies: ['Machine Learning', 'Python', 'Predictive Modeling', 'Data Analysis'],
    // githubUrl: 'https://github.com/nareshmadhur/lead-time-prediction', // Example
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'supply chain graph',
  },
];


// --- Photography Data ---
/**
 * Array of photography items for the gallery.
 * Each object conforms to the `Photo` interface.
 */
export const photographyItems: Photo[] = [
  {
    id: 'photo-nm-1',
    title: 'Flickr Photo 1', // User can provide actual titles
    description: 'Description for photo 1.', // User can provide actual descriptions
    imageUrl: 'https://placehold.co/600x400.png', // Placeholder, use actual image URL if available or keep for consistency
    flickrUrl: 'https://flic.kr/p/2q3ki8V',
    dataAiHint: 'urban architecture', // Example hint
  },
  {
    id: 'photo-nm-2',
    title: 'Flickr Photo 2',
    description: 'Description for photo 2.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://flic.kr/p/2q3epgT',
    dataAiHint: 'nature detail', // Example hint
  },
  {
    id: 'photo-nm-3',
    title: 'Flickr Photo 3',
    description: 'Description for photo 3.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://flic.kr/p/2q3ki9X',
    dataAiHint: 'landscape mountains', // Example hint
  },
  // Add more photos from user's Flickr if desired
  // {
  //   id: 'photo-4',
  //   title: 'Coastal Waves',
  //   description: 'Powerful waves crashing against a rocky coastline during a storm.',
  //   imageUrl: 'https://placehold.co/600x400.png',
  //   flickrUrl: 'https://www.flickr.com/photos/example/photoid4', // Example Flickr URL
  //   dataAiHint: 'ocean waves',
  // },
];
