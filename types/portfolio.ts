import type { LucideIcon } from "lucide-react";

export type Experience = {
  role: string;
  organization: string;
  client?: string;
  points: string[];
  accent: string;
};

export type Project = {
  title: string;
  tech: string[];
  description: string;
  features: string[];
  gradient: string;
  previewImage: string;
  github: string;
  demo: string;
  showGithub?: boolean;
  showDemo?: boolean;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  tone: string;
  image: string;
};
