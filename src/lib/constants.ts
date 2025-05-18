
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
 * Defines the structure for a music video item.
 */
export interface MusicVideo {
  id: string;
  youtubeVideoId: string;
  title: string;
  description: string;
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
  titles: ["AI Enthusiast", "Musician", "Photographer"], // Array for animated titles
  bio: "Works in the Data Science industry, with hands deep into artistic pursuit of music and photography.",
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
    description: "An avid musician specializing in Carnatic Guitar and vocals. I also have experience in teaching music.",
    youtubeChannels: [
      { name: "Music Videos", url: "https://www.youtube.com/@NareshMadhur", exampleVideo: "https://www.youtube.com/watch?v=R_K21W0J_2s" },
      { name: "Guitar musings & lessons", url: "https://www.youtube.com/@nareshmadhurcovers", exampleVideo: "https://www.youtube.com/watch?v=C5zJd56G4o4" },
    ],
  },
  photography: {
    description: "Dedicated photographer capturing visual narratives. I primarily use Fujifilm cameras and process my RAW files with Rawtherapee.",
    flickrProfileUrl: "https://www.flickr.com/photos/nareshmadhur",
    examplePhotos: [
      { title: "Example Photo 1", url: "https://placehold.co/600x400.png", flickrUrl: "https://www.flickr.com/photos/nareshmadhur/example_id_1" },
    ]
  }
};

/**
 * @description Array of YouTube channel URLs for the music section.
 */
export const YOUTUBE_CHANNEL_URLS = userProfile.music.youtubeChannels.map(channel => ({
  name: channel.name,
  url: channel.url,
}));



// --- Site Content (UI Text Strings & Image URLs) ---

/**
 * @description Object containing all user-facing text and key image URLs for the website.
 * Organized by section for easy management.
 */
export const siteContent = {
  global: {
    appName: "Naresh Madhur", // Updated App Name
    footer: {
      copyright: `© ${new Date().getFullYear()} ${userProfile.name}. All rights reserved.`,
      tagline: "Designed with passion.",
    }
  },
  nav: {
    home: "Home",
    biAiProjects: "Tech. Pursuits",
    music: "Music & Teaching",
    photography: "Photography",
    contact: "Contact",
  },
  heroSection: {
    getInTouchButton: "Get in Touch",
    backgroundImageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1608-50OIV9jSs2cnP23gL5PPC6mbqkICF3.jpg",
    backgroundImageAlt: "Hero background image depicting a landscape or abstract design.",
    backgroundImageAiHint: "nature landscape",
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
      biAi: {
        title: "Data Science Explorations",
        description: "More about Naresh's tech use cases and explorations.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSC09308%20%281%29-UdBMIYLlILXq18JM2yBKnYyLlZ5SXK.jpeg",
        imageAiHint: "AI data",
        linkUrl: "/bi-ai",
      },
      music: {
        title: "Musical Pusuits",
        description: "Listen and Watch musical performances with guitar and vocals.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/guitar-65Wzc1cVPra94zU6ikj0S731rWZqh4.jpg",
        imageAiHint: "music studio",
        linkUrl: "/music",
      },
      photography: {
        title: "Photography",
        description: "See pictures captured during his visits across the world.",
        imageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/DSCF1726-8UZLZmtCQTAMWVScGAWwSGjZcJBMvG.jpeg",
        imageAiHint: "camera lens",
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
    title: "BI & AI Projects",
    description: "A showcase of my work in Business Intelligence, Data Analytics, and Artificial Intelligence. Each project highlights different skills and technologies I've utilized to solve complex problems and deliver actionable insights.",
  },
  musicPage: {
    title: "Music Showcase",
    description: "Dive into my musical world. Here you'll find a collection of my original tracks, covers, and live performances.",
    visitYouTubeButton: "Visit my YouTube Channel",
    sections: {
      videos: {
        title: "Music Videos and Covers",
        description: "Explore my music videos and covers on YouTube.",
      },
      course: {
        title: "My Online Guitar Course",
        description: "Learn to play guitar with my comprehensive online course.",
        enrollButton: "Enroll in Course",
      },
    },
    onlineCourseUrl: "https://naresh-madhur-onlinecourses.thinkific.com/courses/carnatic-guitar-beginners",
    musicVideosChannelId: "UCwwHtswu_PJFCDzB7eZk_iA",
    guitarTeachingChannelId: "UC7AXqJQpf8DFPrEFi16Az1Q",
  },
  photographyPage: {
    title: "Photography Gallery",
    description: "Welcome to my visual journal. Here, I share moments captured through my lens, from cityscapes to natural wonders. Each photo tells a story.",
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
    defaultDescription: `Portfolio of Naresh Madhur, a BI/AI Engineer, Musician, and Photographer.`,
    biAiTitle: "BI & AI Projects | Naresh Madhur",
    biAiDescription: "Explore a collection of Business Intelligence and Artificial Intelligence projects by Naresh Madhur.",
    musicTitle: "Music Showcase | Naresh Madhur",
    musicDescription: "Listen to original compositions, covers, and live performances by Naresh Madhur.",
    photographyTitle: "Photography Gallery | Naresh Madhur",
    photographyDescription: "Browse a collection of photographs by Naresh Madhur capturing moments, landscapes, and stories.",
    contactTitle: "Contact Me | Naresh Madhur",
    contactDescription: "Get in touch with Naresh Madhur for inquiries related to engineering, music, or photography.",
  }
};

export const MUSIC_COURSE_URL = siteContent.musicPage.onlineCourseUrl;


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

// --- Music Video Data ---
/**
 * Array of music videos to be showcased.
 * Each object conforms to the `MusicVideo` interface.
 */
export const musicVideos: MusicVideo[] = [
  {
    id: 'music-1',
    youtubeVideoId: 'dQw4w9WgXcQ', // Example Video ID
    title: 'Original Composition - "Synthwave Dreams"',
    description: 'An original synthwave track accompanied by a retro-futuristic music video.',
  },
  {
    id: 'music-2',
    youtubeVideoId: '3JZ_D3ELwOQ', // Example Video ID
    title: 'Acoustic Cover - "Chill Vibes"',
    description: 'A relaxing acoustic guitar cover of a popular lofi hip hop beat.',
  },
  {
    id: 'music-3',
    youtubeVideoId: '5qap5aO4i9A', // Example Video ID
    title: 'Live Performance - "Jazz Night"',
    description: 'Live recording of a jazz piano performance at a local venue.',
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
