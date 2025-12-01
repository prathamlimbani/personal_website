export interface Project {
  id: string | number;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export interface BioVariants {
  short: string;
  medium: string;
  long: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Anti-spam
}