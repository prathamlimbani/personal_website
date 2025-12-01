import { BioVariants, Project, StatItem, Video } from './types';

// Updated with abstract/tech imagery - No humans as requested
export const HERO_IMAGES = {
  userPortrait: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', 
  nycSkyline: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=2070&auto=format&fit=crop',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/pratham_limbani/',
  facebook: 'https://www.facebook.com/pratham.patel.3551380',
  github: 'https://github.com/prathamlimbani',
  youtube: 'https://www.youtube.com/@prathamlimbani',
  email: 'mailto:patel9871pratham@gmail.com',
  whatsapp: 'https://wa.me/917625025686',
};

export const BIOS: BioVariants = {
  short: "Pratham Limbani is a friendly Game Designer, Engineer, and lovely YouTuber sharing solo travel adventures and code.",
  medium: "Pratham Limbani is a B.Tech Computer Science Engineer and Unity Game Developer with over 1 year of experience. A passionate solo traveler, he documents his journeys on YouTube while building immersive digital experiences.",
  long: "Pratham Limbani sits at the intersection of Engineering and Adventure. As a Computer Science Engineer and Unity Game Developer, he crafts interactive worlds and robust software. But beyond the code, he is a dedicated Solo Traveler and Content Creator. From debugging C# scripts to capturing cinematic travel vlogs, Pratham brings a unique creative energy to every project he touches."
};

export const STATS: StatItem[] = [
  { label: 'Projects', value: '15+' },
  { label: 'Experience', value: '1+ Year' },
  { label: 'Skills', value: 'Unity / C#' },
  { label: 'Travels', value: 'Solo' },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Unity 3D RPG',
    description: 'An immersive role-playing game environment built with Unity engine and C# scripting.',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800',
    tags: ['Unity', 'C#', 'Game Design'],
    githubUrl: 'https://github.com/prathamlimbani',
    liveUrl: '#',
    stars: 24
  },
  {
    id: 'p2',
    name: 'Space Shooter',
    description: 'A classic arcade-style space shooter game with modern physics and particle effects.',
    imageUrl: 'https://images.unsplash.com/photo-1614720183893-c027e8208e37?q=80&w=800',
    tags: ['C#', 'Physics', '3D Modeling'],
    githubUrl: 'https://github.com/prathamlimbani',
    liveUrl: '#',
    stars: 18
  },
  {
    id: 'p3',
    name: 'Lego Simulator',
    description: 'A creative sandbox simulation allowing users to build complex structures with virtual interlocking bricks using realistic physics.',
    imageUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=800',
    tags: ['Unity', 'Simulation', 'Physics'],
    githubUrl: 'https://github.com/prathamlimbani',
    stars: 35
  }
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'q5AfWVbPdFA',
    title: 'Solo Trip to Malaysia | Pratham Limbani',
    thumbnail: 'https://img.youtube.com/vi/q5AfWVbPdFA/maxresdefault.jpg',
    publishedAt: '2024-01-15'
  },
  {
    id: '6hWOZ1etMPI',
    title: 'Exploring Hidden Gems',
    thumbnail: 'https://img.youtube.com/vi/6hWOZ1etMPI/maxresdefault.jpg',
    publishedAt: '2023-12-20'
  },
  {
    id: 'ltC3foZzLnQ',
    title: 'Travel Vlog: The Journey Begins',
    thumbnail: 'https://img.youtube.com/vi/ltC3foZzLnQ/maxresdefault.jpg',
    publishedAt: '2023-11-05'
  }
];