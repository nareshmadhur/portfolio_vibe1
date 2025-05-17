import type { Github, Youtube, Image as LucideImage, Linkedin, Mail } from 'lucide-react';

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

export const musicVideos: MusicVideo[] = [
  {
    id: 'music-1',
    youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder: Rick Astley - Never Gonna Give You Up
    title: 'Original Composition - "Synthwave Dreams"',
    description: 'An original synthwave track accompanied by a retro-futuristic music video.',
  },
  {
    id: 'music-2',
    youtubeVideoId: '3JZ_D3ELwOQ', // Placeholder: Lofi Girl
    title: 'Acoustic Cover - "Chill Vibes"',
    description: 'A relaxing acoustic guitar cover of a popular lofi hip hop beat.',
  },
  {
    id: 'music-3',
    youtubeVideoId: '5qap5aO4i9A', // Placeholder: Relaxing Jazz
    title: 'Live Performance - "Jazz Night"',
    description: 'Live recording of a jazz piano performance at a local venue.',
  },
];

export const photographyItems: Photo[] = [
  {
    id: 'photo-1',
    title: 'City Sunset',
    description: 'A breathtaking sunset over the city skyline, captured from a rooftop.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid',
    dataAiHint: 'city sunset',
  },
  {
    id: 'photo-2',
    title: 'Forest Path',
    description: 'A serene forest path in autumn, with golden leaves covering the ground.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid',
    dataAiHint: 'forest path',
  },
  {
    id: 'photo-3',
    title: 'Mountain Peaks',
    description: 'Majestic snow-capped mountain peaks under a clear blue sky.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid',
    dataAiHint: 'mountain landscape',
  },
  {
    id: 'photo-4',
    title: 'Coastal Waves',
    description: 'Powerful waves crashing against a rocky coastline during a storm.',
    imageUrl: 'https://placehold.co/600x400.png',
    flickrUrl: 'https://www.flickr.com/photos/username/photoid',
    dataAiHint: 'ocean waves',
  },
];

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
