
/**
 * @fileoverview Centralized store for application constants, including UI text,
 * project data, music video data, photography items, and image URLs.
 */

// --- Data Interfaces ---
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

export interface MusicVideo {
  id: string;
  youtubeVideoId: string;
  title: string;
  description: string;
}

export interface Photo {
  id:string;
  title: string;
  description: string;
  imageUrl: string;
  flickrUrl: string;
  dataAiHint: string;
}

// --- User Profile Data ---
export const userProfile = {
  name: "Alex Innovator",
  title: "BI & AI Engineer | Musician | Photographer",
  bio: "A passionate and results-driven professional with expertise in Business Intelligence and Artificial Intelligence, complemented by a creative spirit expressed through music and photography. Constantly exploring the intersection of technology and art.",
  shortBio: "BI/AI Engineer, Musician, and Photographer exploring the synergy between technology and creativity.",
  contactEmail: "alex.innovator@example.com",
  socialLinks: {
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    youtube: "https://youtube.com/c/examplechannel",
    flickr: "https://flickr.com/photos/example",
  }
};

// --- Site Content (UI Text Strings & Image URLs) ---
export const siteContent = {
  global: {
    appName: "Tri-Folio",
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
    backgroundImageUrl: "https://placehold.co/1920x1080.png",
    backgroundImageAiHint: "abstract technology",
  },
  homePage: {
    about: {
      title: "About Me",
      // No background image for this section as per user request
      backgroundImageUrl: undefined,
      backgroundImageAiHint: undefined,
    },
    portfolioTitle: "Portfolio Highlights", // Title for the section containing cards
    portfolioHighlightsWrapper: { // For the SectionWrapper around the portfolio cards
      // No background image for this wrapper as per user request
      backgroundImageUrl: undefined,
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
      // No background image for this section as per user request
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
export const biAiProjects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Sales Forecaster',
    description: 'A machine learning model that predicts sales trends with high accuracy, helping businesses optimize inventory and marketing strategies.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'React'],
    githubUrl: 'https://github.com/example/sales-forecaster',
    liveDemoUrl: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'AI analytics',
  },
  {
    id: 'project-2',
    title: 'BI Dashboard for Retail Analytics',
    description: 'An interactive business intelligence dashboard providing real-time insights into retail performance, customer behavior, and product trends.',
    technologies: ['Tableau', 'SQL', 'Python', 'ETL'],
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
export const photographyItems: Photo[] = [
  {
    id: 'photo-1',
    title: 'City Sunset',
    description: 'A breathtaking sunset over the city skyline, captured from a rooftop.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid', // Example Flickr URL
    dataAiHint: 'city sunset',
  },
  {
    id: 'photo-2',
    title: 'Forest Path',
    description: 'A serene forest path in autumn, with golden leaves covering the ground.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid', // Example Flickr URL
    dataAiHint: 'forest path',
  },
  {
    id: 'photo-3',
    title: 'Mountain Peaks',
    description: 'Majestic snow-capped mountain peaks under a clear blue sky.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid', // Example Flickr URL
    dataAiHint: 'mountain landscape',
  },
  {
    id: 'photo-4',
    title: 'Coastal Waves',
    description: 'Powerful waves crashing against a rocky coastline during a storm.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid', // Example Flickr URL
    dataAiHint: 'ocean waves',
  },
];

    
