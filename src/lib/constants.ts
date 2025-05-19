
/**
 * @fileoverview Centralized store for application constants, including UI text,
 * project data, music video data, photography items, user profile, and image URLs.
 * This file is the primary repository for content that might change or need translation.
 */

// --- Data Interfaces ---

/**
 * Defines the structure for a project item in the portfolio.
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
 */
export interface ExampleVideo {
  id: string;
  videoId: string;
  title: string;
  description?: string;
}


/**
 * Defines the structure for a performance video item.
 */
export interface PerformanceVideo {
  id: string;
  videoId: string;
  title: string;
  description?: string;
}

/**
 * Defines the structure for a photography item in the gallery.
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
  bio: "Leveraging expertise in Data Science, Naresh Madhur drives impactful business solutions while passionately engaging in the artistic disciplines of music and photography. His work exemplifies a unique synergy of analytical precision and creative expression.",
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
    description: "An avid musician specializing in Carnatic Guitar and vocals, Naresh also possesses global experience in teaching music.",
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
    appName: `${userProfile.name} | Portfolio`,
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
      backgroundImageUrl: undefined, // No background for this section wrapper
      backgroundImageAiHint: undefined,
    },
    portfolioTitle: "Portfolio Highlights",
    portfolioHighlightsWrapper: {
        backgroundImageUrl: undefined, // No background for this section wrapper
        backgroundImageAiHint: undefined,
    },
    sections: {
      music: {
        title: "Musical Pursuits",
        description: "Explore musical performances, original arrangements, and educational content.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/guitar-65Wzc1cVPra94zU6ikj0S731rWZqh4.jpg",
        imageAiHint: "music studio",
        linkUrl: "/music",
      },
      biAi: {
        title: "Data Science Explorations",
        description: "Discover use cases in BI, Data Analytics, and Artificial Intelligence.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSC09308%20%281%29-UdBMIYLlILXq18JM2yBKnYyLlZ5SXK.jpeg",
        imageAiHint: "AI data",
        linkUrl: "/bi-ai",
      },
      photography: {
        title: "Photography",
        description: "View diverse photographs captured during travels and street explorations.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1726-8UZLZmtCQTAMWVScGAWwSGjZcJBMvG.jpeg",
        imageAiHint: "camera lens",
        linkUrl: "/photography",
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Interested in collaborating or have a question? I'd love to hear from you.",
      buttonText: "Contact Me",
      backgroundImageUrl: undefined, // No background for this section wrapper
      backgroundImageAiHint: undefined,
    },
  },
  biAiPage: {
    title: "BI & AI Projects",
    description: "A showcase of my work in Business Intelligence, Data Analytics, and Artificial Intelligence. Each project highlights different skills and technologies I've utilized to solve complex problems and deliver actionable insights.",
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
          featuredVideoTitle: "Carnatic Guitar Lesson - Varnam Basics",
          otherExampleVideos: [
            { id: 'gt2', videoId: 'iIOJGpQaONM', title: 'Carnatic Guitar - Geetham Lesson 1' },
            { id: 'gt3', videoId: 'YNMIxGcvzzQ', title: 'Carnatic Guitar - Geetham Lesson 2' },
          ] as ExampleVideo[],
        },
        performances: {
          title: "Live Performances & Collaborations",
          description: "A collection of live performances and collaborations.",
          videos: [
            { id: 'perf1', videoId: 'rK4F0-Cu0bU', title: 'Live Performance Clip 1', description: 'A captivating live moment.' },
            { id: 'perf2', videoId: 'J6k-TBU_0GM', title: 'Live Performance Clip 2', description: 'Showcasing musical synergy.' },
            { id: 'perf3', videoId: 'Sy61QG2wGco', title: 'Live Performance Clip 3', description: 'An energetic performance.' },
          ] as PerformanceVideo[],
        }
      },
      teachingJourney: {
        title: "My Teaching Journey & Online Course",
        description: "With over three years of experience teaching Carnatic Guitar to more than 20 students globally, Naresh Madhur offers instruction for both beginner and intermediate levels. His passion for sharing musical knowledge led to the creation of a comprehensive online course, meticulously designed to guide aspiring guitarists. Explore his flagship course on Thinkific for structured lessons and personalized guidance.",
        courseUrl: "https://naresh-madhur-onlinecourses.thinkific.com/courses/carnatic-guitar-beginners",
        enrollButton: "Enroll in Course",
        images: [
          {src: 'https://course-assets.thinkific.com/courses/170993/dO1Q4t8XQ3eHjH2fC177_Carnatic_Guitar_Course_Thumbnail_High_Quality.jpg', alt: 'Carnatic Guitar Course Thumbnail', dataAiHint: 'online course guitar'},
          {src: 'https://course-assets.thinkific.com/users/523449/avatar-52a51c0eb37aa21f46303e109993cb5f.jpg', alt: 'Naresh Madhur, Music Instructor', dataAiHint: 'musician portrait teaching'}
        ]
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
    defaultTitle: `${userProfile.name} | Data Scientist, Musician, Photographer`,
    defaultDescription: `Portfolio of ${userProfile.name}, a Data Scientist, Musician, and Photographer. Explore BI/AI projects, music, and photography.`,
    biAiTitle: `Tech. Pursuits | ${userProfile.name}`,
    biAiDescription: `Explore a collection of Business Intelligence and Artificial Intelligence projects by ${userProfile.name}.`,
    musicTitle: `Music & Teaching | ${userProfile.name}`,
    musicDescription: `Listen to original compositions, covers, live performances, and explore music teaching by ${userProfile.name}.`,
    photographyTitle: `Photography Gallery | ${userProfile.name}`,
    photographyDescription: `Browse a collection of photographs by ${userProfile.name} capturing moments, landscapes, and stories.`,
    contactTitle: `Contact Me | ${userProfile.name}`,
    contactDescription: `Get in touch with ${userProfile.name} for inquiries related to data science, music, or photography.`,
  }
};

/** @deprecated Use siteContent.musicPage.sections.teachingJourney.courseUrl instead */
export const MUSIC_COURSE_URL = siteContent.musicPage.sections.teachingJourney.courseUrl;


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

// Deprecated musicVideos - content is now under siteContent.musicPage
/** @deprecated Use siteContent.musicPage.sections.youtube.musicVideos and .performances instead */
export const musicVideos: ExampleVideo[] = [];
