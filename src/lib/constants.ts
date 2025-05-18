
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
 * Contains personal information about the user/owner of the portfolio.
 */
export const userProfile = {

  name: "Naresh Madhur",
  title: "BI & AI Engineer | Musician | Photographer",
  bio: "A passionate and results-driven professional with expertise in Business Intelligence and Artificial Intelligence, complemented by a creative spirit expressed through music and photography. Born in Kerala, India, I am proficient in English and Malayalam, with working knowledge of Tulu, Tamil, Kannada, Dutch, and Hindi. My career has spanned roles at METRO Global Solution Center in India and Makro Nederland, focusing on data strategies, team leadership, and delivering impactful BI and Data Science solutions. I am also an avid musician, specializing in Carnatic Guitar and vocals, and a dedicated photographer capturing visual narratives.",
  shortBio: "BI/AI Engineer, Musician, and Photographer exploring the synergy between technology and creativity, with a background in data strategy and a passion for the arts.",
  contactEmail: "naresh.madhur@example.com", // Placeholder email
  socialLinks: {
    linkedin: "https://linkedin.com/in/nareshmadhur", // Placeholder LinkedIn
    github: "https://github.com/example",
    youtube: "https://www.youtube.com/@NareshMadhurOriginals", // Using one of the provided YouTube links
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
      { name: "Naresh Madhur Originals", url: "https://www.youtube.com/@NareshMadhurOriginals", exampleVideo: "https://www.youtube.com/watch?v=R_K21W0J_2s" },
      { name: "Naresh Madhur Covers", url: "https://www.youtube.com/@nareshmadhurcovers", exampleVideo: "https://www.youtube.com/watch?v=C5zJd56G4o4" },
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

// --- Site Content (UI Text Strings & Image URLs) ---

/**
 * Object containing all user-facing text and key image URLs for the website.
 * Organized by section for easy management.
 */
export const siteContent = {
  global: {
    appName: "Naresh Madhur",
    footer: {
      copyright: `© ${new Date().getFullYear()} ${userProfile.name}. All rights reserved.`,
      tagline: "Designed with passion.",
    }
  },
  nav: {
    home: "Home",
    biAiProjects: "BI/AI Projects",
    music: "Music",
    photography: "Photography",
    contact: "Contact",
  },
  heroSection: {
    getInTouchButton: "Get in Touch",
    backgroundImageUrl: "https://ufpehsjmkipou2zt.public.blob.vercel-storage.com/images/Hero_Title-4D7dPwou1649f4i8sZarTkDZk2iWrM.heic", // Centralized image URL
    backgroundImageAiHint: "abstract technology",
  },
  homePage: {
    about: {
      title: "About Me",
      backgroundImageUrl: undefined, // No background image for this section
      backgroundImageAiHint: undefined,
    },
    portfolioTitle: "Portfolio Highlights", // Title for the section containing cards
    portfolioHighlightsWrapper: { // For the SectionWrapper around the portfolio cards
      backgroundImageUrl: undefined, // No background image for this wrapper
      backgroundImageAiHint: undefined,
    },
    sections: { // These are for the HomePageSectionCard components themselves
      biAi: {
        title: "BI & AI Ventures",
        description: "Innovative projects at the intersection of Business Intelligence and AI.",
        imageUrl: "https://placehold.co/800x600.png",
        imageAiHint: "AI data",
        linkUrl: "/bi-ai",
      },
      music: {
        title: "Sonic Explorations",
        description: "Original compositions, from synthwave to acoustic melodies.",
        imageUrl: "https://placehold.co/800x600.png",
        imageAiHint: "music studio",
        linkUrl: "/music",
      },
      photography: {
        title: "Visual Narratives",
        description: "Captivating visual stories, from urban scenes to landscapes.",
        imageUrl: "https://placehold.co/800x600.png",
        imageAiHint: "camera lens",
        linkUrl: "/photography",
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Interested in collaborating or have a question? I'd love to hear from you.",
      buttonText: "Contact Me",
      backgroundImageUrl: undefined, // No background image for this section
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
  metadata: { // Text used for page metadata (titles, descriptions for SEO)
    defaultTitle: `Tri-Folio | ${userProfile.title}`,
    defaultDescription: `Portfolio of an engineer, musician, and photographer specializing in BI/AI, YouTube music, and Flickr photography.`,
    biAiTitle: "BI & AI Projects | Tri-Folio",
    biAiDescription: "Explore a collection of Business Intelligence and Artificial Intelligence projects.",
    musicTitle: "Music Showcase | Tri-Folio",
    musicDescription: "Listen to original compositions, covers, and live performances.",
    photographyTitle: "Photography Gallery | Tri-Folio",
    photographyDescription: "Browse a collection of photographs capturing moments, landscapes, and stories.",
    contactTitle: "Contact Me | Tri-Folio",
    contactDescription: "Get in touch for inquiries related to engineering, music, or photography.",
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
    liveDemoUrl: '#', // Use '#' or actual URL if available
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'AI analytics',
  },
  {
    id: 'project-2',
    title: 'BI Dashboard for Retail Analytics',
    description: 'An interactive business intelligence dashboard providing real-time insights into retail performance, customer behavior, and product trends.',
    technologies: ['Tableau', 'SQL', 'Python', 'ETL'],
    liveDemoUrl: '#', // Example: No GitHub for this, only live demo
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard chart',
  },
  {
    id: 'project-3',
    title: 'Natural Language Query Interface for Databases',
    description: 'Developed an NLP system allowing users to query databases using plain English, significantly improving data accessibility for non-technical users.',
    technologies: ['Python', 'NLTK', 'spaCy', 'SQLAlchemy'],
    githubUrl: 'https://github.com/example/nlq-database',
    imageUrl: 'https://placehold.co/600x400.png',
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
    youtubeVideoId: 'dQw4w9WgXcQ', // Example: Rick Astley - Never Gonna Give You Up
    title: 'Original Composition - "Synthwave Dreams"',
    description: 'An original synthwave track accompanied by a retro-futuristic music video.',
  },
  {
    id: 'music-2',
    youtubeVideoId: '3JZ_D3ELwOQ', // Example: Lofi Girl - beats to relax/study to (placeholder)
    title: 'Acoustic Cover - "Chill Vibes"',
    description: 'A relaxing acoustic guitar cover of a popular lofi hip hop beat.',
  },
  {
    id: 'music-3',
    youtubeVideoId: '5qap5aO4i9A', // Example: A jazz performance (placeholder)
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
    flickrUrl: 'https://www.flickr.com/photos/68265102@N05/53846502717/',
    dataAiHint: 'forest path',
  },
  {
    id: 'photo-3',
    title: 'Mountain Peaks',
    description: 'Majestic snow-capped mountain peaks under a clear blue sky.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://flic.kr/p/2q3ki9X',
    dataAiHint: 'mountain landscape',
  },
  {
    id: 'photo-4',
    title: 'Coastal Waves',
    description: 'Powerful waves crashing against a rocky coastline during a storm.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/example/photoid4',
    dataAiHint: 'ocean waves',
  },
];
