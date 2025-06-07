
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
  titles: ["AI Enthusiast", "Musician", "Photographer"],
  bio: "Leveraging expertise in the Data Science industry, Naresh Madhur drives impactful business solutions while passionately engaging in the artistic disciplines of music and photography.",
  shortBio: "Driven by a relentless pursuit of excellence, novelty, and quality, Naresh actively engages with the latest advancements in his fields of passion. His dedication extends from globally teaching music to immersive street photography, reflecting a commitment to high-caliber work in all endeavors. Discover more about his diverse projects below.",
  contactEmail: "nareshmadhur@gmail.com",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nareshmadhur",
    github: "https://github.com/nareshmadhur",
    youtube: "https://www.youtube.com/@NareshMadhur",
    flickr: "https://www.flickr.com/photos/nareshmadhur",
  },
  education: [
    "Amrita University Coimbatore - B.tech in Computer Science Engineering",
    "Several schools in Kerala, India.",
  ],
  career: [
    "Makro Nederland: BI & AI Engineer (2019 - Present)",
    "METRO Global Solution Center, India: Senior Analyst & Team Lead (2013 - 2019)",
    "METRO Global Solution Center, India: Analyst (2010 - 2013)",
  ],
  music: {
    instruments: ["Carnatic Guitar", "Vocals"],
    description: "An avid musician specializing in Carnatic Guitar and vocals, Naresh Madhur also possesses global experience in teaching music.",
    youtubeChannels: [
      { name: "Music Videos", url: "https://www.youtube.com/@NareshMadhur" },
      { name: "Guitar musings & lessons", url: "https://www.youtube.com/@nareshteaches" },
    ],
  },
  photography: {
    description: "Dedicated photographer capturing visual narratives. He primarily uses Fujifilm cameras and processes his RAW files with RawTherapee.",
    flickrProfileUrl: "https://www.flickr.com/photos/nareshmadhur",
    examplePhotos: [
      { title: "Example Photo 1", url: "https://placehold.co/600x400.png", flickrUrl: "https://www.flickr.com/photos/nareshmadhur/example_id_1" },
    ]
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
        imageAiHint: "guitar stage lights", // Specific hint
        linkUrl: "/music",
      },
      biAi: {
        title: "Data Science Explorations",
        description: "Discover use cases in BI, Data Analytics, and Artificial Intelligence.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSC09308%20%281%29-UdBMIYLlILXq18JM2yBKnYyLlZ5SXK.jpeg",
        imageAiHint: "data network nodes", // Specific hint
        linkUrl: "/bi-ai",
      },
      photography: {
        title: "Photography",
        description: "View diverse photographs captured during travels and street explorations.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1726-8UZLZmtCQTAMWVScGAWwSGjZcJBMvG.jpeg",
        imageAiHint: "vintage camera travel", // Specific hint
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
    title: "Tech. Pursuits: BI & AI",
    description: "A showcase of my work in Business Intelligence, Data Analytics, and Artificial Intelligence, alongside interactive AI tools to explore practical AI applications and considerations.",
    interactiveToolsTitle: "Interactive AI Explorers",
    ethicalScenarioAnalyzer: {
      title: "Ethical AI Scenario Analyzer",
      description: "Explore potential ethical dilemmas in AI. Enter a topic or let the AI suggest one.",
      inputLabel: "Optional: Topic for ethical scenario (e.g., 'AI in healthcare', 'facial recognition')",
      inputPlaceholder: "Leave blank for a general scenario or type a topic...",
      buttonText: "Analyze Scenario",
      buttonLoadingText: "Analyzing...",
      scenarioTitleLabel: "Generated Scenario:",
      ethicalConsiderationsLabel: "Ethical Considerations:",
      reflectionQuestionsLabel: "Questions for Reflection:",
      errorMessages: {
        errorTitle: "Analysis Error",
        generalError: "Failed to analyze scenario at this time. Please try again.",
      }
    },
    historicalPlaceSummarizer: {
      title: "Historical Place Summarizer",
      description: "Enter the name of a place and get a concise historical summary, key events, interesting facts, and more.",
      inputLabel: "Name of the historical place (e.g., 'Rome', 'Machu Picchu', 'Kyoto')",
      inputPlaceholder: "Enter place name...",
      buttonText: "Get Summary",
      buttonLoadingText: "Summarizing...",
      summaryTitleLabel: "Historical Snapshot:",
      keyEventsLabel: "Key Historical Events:",
      interestingFactsLabel: "Did You Know?",
      learnMoreButton: "Learn More",
      visualPlaceholderAlt: "Visual representation of",
      errorMessages: {
        errorTitle: "Summarization Error",
        emptyInput: "Please enter a place name.",
        generalError: "Failed to retrieve historical summary at this time. Please try again.",
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
          channelName: "@NareshMadhur",
          channelUrl: "https://www.youtube.com/@NareshMadhur",
          featuredVideoId: "mWC9ra1V0zw",
          featuredVideoTitle: "Kadhal Sadugudu - Alaipayuthey | Cover by Naresh Madhur",
          otherExampleVideos: [
            { id: 'mv2', videoId: 'xcOTmEt9K_U', title: 'Tere Jeya Hor Disda | Cover by Naresh Madhur' },
            { id: 'mv3', videoId: 'Yt74NHxlU3o', title: 'Nee Kavithaigala | Cover by Naresh Madhur' },
          ] as ExampleVideo[],
        },
        guitarTeaching: {
          title: "Guitar & Music Lessons",
          description: "In-depth guitar lessons, Carnatic music insights, and tips for aspiring musicians.",
          channelName: "@nareshteaches",
          channelUrl: "https://www.youtube.com/@nareshteaches",
          featuredVideoId: "SASDA2AkFFk",
          featuredVideoTitle: "Carnatic Guitar lessons for beginners - Demo",
          otherExampleVideos: [
            { id: 'gt2', videoId: 'iIOJGpQaONM', title: 'Carnatic Guitar - Geetham Lesson 1' },
            { id: 'gt3', videoId: 'YNMIxGcvzzQ', title: 'Carnatic Guitar - Geetham Lesson 2' },
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
        description: "With over three years of experience teaching Carnatic Guitar to more than 20 students globally, Naresh Madhur offers instruction for both beginner and intermediate levels. His passion for sharing musical knowledge led to the creation of a comprehensive online course, meticulously designed to guide aspiring guitarists. Explore his flagship course on Thinkific for structured lessons and personalized guidance.",
        courseUrl: "https://naresh-madhur-onlinecourses.thinkific.com/courses/carnatic-guitar-beginners",
        enrollButton: "Enroll in Course",
      },
    },
  },
  photographyPage: {
    title: "Photography Gallery",
    description: "Welcome to a visual journal by Naresh Madhur. Here, moments captured through his lens are shared, from cityscapes to natural wonders. Each photo tells a story.",
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
    defaultTitle: `Naresh Madhur | Portfolio`,
    defaultDescription: `Portfolio of Naresh Madhur, showcasing expertise in Data Science & AI, music, and photography.`,
    biAiTitle: `Tech. Pursuits & AI Tools | Naresh Madhur`,
    biAiDescription: `Explore BI & AI projects by Naresh Madhur and interact with AI-powered tools.`,
    musicTitle: `Music & Teaching | Naresh Madhur`,
    musicDescription: `Listen to original compositions, covers, live performances, and explore music teaching by Naresh Madhur.`,
    photographyTitle: `Photography Gallery | Naresh Madhur`,
    photographyDescription: `Browse a collection of photographs by Naresh Madhur capturing moments, landscapes, and stories.`,
    contactTitle: `Contact Me | Naresh Madhur`,
    contactDescription: `Get in touch with Naresh Madhur for inquiries related to data science, music, or photography.`,
  }
};


// --- Project Data ---
/**
 * Array of Business Intelligence and AI projects.
 * Each object conforms to the `Project` interface.
 */
export const biAiProjects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Sales Forecaster',
    description: 'A machine learning model that predicts sales trends with high accuracy, helping businesses optimize inventory and marketing strategies.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'React'],
    githubUrl: 'https://github.com/example/sales-forecaster',
    liveDemoUrl: '#',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'AI analytics',
  },
  {
    id: 'project-2',
    title: 'BI Dashboard for Retail Analytics',
    description: 'An interactive business intelligence dashboard providing real-time insights into retail performance, customer behavior, and product trends.',
    technologies: ['Tableau', 'SQL', 'Python', 'ETL'],
    liveDemoUrl: '#',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'dashboard chart',
  },
  {
    id: 'project-3',
    title: 'Natural Language Query Interface for Databases',
    description: 'Developed an NLP system allowing users to query databases using plain English, significantly improving data accessibility for non-technical users.',
    technologies: ['Python', 'NLTK', 'spaCy', 'SQLAlchemy'],
    githubUrl: 'https://github.com/example/nlq-database',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'NLP code',
  },
];


// --- Photography Data ---
/**
 * Array of photography items for the gallery.
 * Each object conforms to the `Photo` interface.
 */
export const photographyItems: Photo[] = [
  {
    id: 'photo-1',
    title: 'City Sunset',
    description: 'A breathtaking sunset over the city skyline, captured from a rooftop.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://flic.kr/p/2q3ki8V', // Example Flickr URL
    dataAiHint: 'city sunset',
  },
  {
    id: 'photo-2',
    title: 'Forest Path',
    description: 'A serene forest path in autumn, with golden leaves covering the ground.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/68265102@N05/53846502717/', // Example Flickr URL
    dataAiHint: 'forest path',
  },
  {
    id: 'photo-3',
    title: 'Mountain Peaks',
    description: 'Majestic snow-capped mountain peaks under a clear blue sky.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://flic.kr/p/2q3ki9X', // Example Flickr URL
    dataAiHint: 'mountain landscape',
  },
  {
    id: 'photo-4',
    title: 'Coastal Waves',
    description: 'Powerful waves crashing against a rocky coastline during a storm.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/example/photoid4', // Example Flickr URL
    dataAiHint: 'ocean waves',
  },
];
    