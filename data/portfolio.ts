import {
  BadgeCheck,
  Braces,
  Brush,
  Code2,
  Database,
  Megaphone,
  Smartphone
} from "lucide-react";
import type { Certification, Experience, Project, SkillCategory } from "@/types/portfolio";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com/", icon: "Github" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "Instagram" },
  { label: "Email", href: "mailto:ronit@example.com", icon: "Mail" }
] as const;

export const experiences: Experience[] = [
  {
    role: "Mobile App Developer Intern",
    organization: "Corpax India Pvt. Ltd.",
    points: [
      "Built Android E-Commerce app using Kotlin and Jetpack Compose",
      "Implemented Firebase Authentication, Firestore, and Realtime Database",
      "Designed responsive UI components",
      "Learned scalable app architecture"
    ],
    accent: "from-teal-400 to-sky-500"
  },
  {
    role: "Android App Developer",
    organization: "Freelance",
    client: "Hariesh Sitlanii",
    points: [
      "Developed 3 Android applications based on numerology concepts",
      "Implemented 50+ numerology rules",
      "Integrated Firebase backend",
      "Worked directly with client requirements"
    ],
    accent: "from-violet-400 to-fuchsia-500"
  },
  {
    role: "Organizing Team Member",
    organization: "Ecell FOS",
    points: [
      "Designed posters, banners, flyers, and social media creatives",
      "Assisted in entrepreneurship events and marketing",
      "Worked on public engagement and team coordination"
    ],
    accent: "from-amber-300 to-rose-400"
  },
  {
    role: "Android App Developer Intern",
    organization: "MSU Baroda",
    points: [
      "Built Calculator App, Paint App, and Contacts App",
      "Learned Android Studio, Java, and Kotlin",
      "Worked with ROOM Database and CRUD operations",
      "Learned Android architecture and UI/UX concepts"
    ],
    accent: "from-cyan-400 to-blue-500"
  },
  {
    role: "Technical Support Assistant",
    organization: "Pro-Tech Computer Education",
    points: [
      "Improved client social media visibility",
      "Designed 20+ social media posts",
      "Edited 30+ course videos",
      "Worked on branding and online engagement"
    ],
    accent: "from-lime-300 to-emerald-500"
  }
];

export const projects: Project[] = [
  {
    title: "Numerology Applications",
    tech: ["Java", "XML", "Firebase Firestore"],
    description: "A trio of Android apps with numerology logic, Firebase storage, and automated report generation.",
    features: [
      "Developed 3 Android apps",
      "Implemented 50+ numerology rules",
      "Firebase integration",
      "Automated report generation"
    ],
    gradient: "from-violet-500 via-fuchsia-500 to-cyan-400",
    previewImage: "https://i.ibb.co/4gfp74vL/Numerology.png",
    github: "https://github.com/",
    demo: "#",
    showGithub: false,
    showDemo: false
  },
  {
    title: "E-Commerce Application",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    description: "A responsive commerce app with authentication, product flows, and Firebase-backed data.",
    features: [
      "Firebase Authentication",
      "Firestore and Realtime Database",
      "Modern responsive UI",
      "Product management system"
    ],
    gradient: "from-teal-400 via-sky-500 to-indigo-500",
    previewImage: "https://i.ibb.co/Xkvhm13H/ECommerce-App.png",
    github: "https://github.com/RoniDholwani",
    demo: "#",
    showGithub: true,
    showDemo: false
  },
  {
    title: "Contacts Application",
    tech: ["Kotlin", "Jetpack Compose", "ROOM Database"],
    description: "Offline-first contact management with clean CRUD flows and local persistence.",
    features: ["CRUD operations", "Offline local storage", "Contact management system"],
    gradient: "from-emerald-400 via-cyan-500 to-blue-500",
    previewImage: "https://i.ibb.co/6cdM8Rc8/Contacts.png",
    github: "https://github.com/RoniDholwani/The_Contacts_App",
    demo: "#",
    showGithub: true,
    showDemo: false
  },
  {
    title: "Scientific Calculator Application",
    tech: ["Kotlin", "Jetpack Compose"],
    description: "Interactive calculator experience for scientific operations and responsive layouts.",
    features: ["Scientific calculations", "Interactive UI", "Responsive layout"],
    gradient: "from-amber-300 via-orange-400 to-rose-500",
    previewImage: "https://i.ibb.co/KcSwrryN/Scientific-Calculator.png",
    github: "https://github.com/RoniDholwani/Scientific_Calculator_App",
    demo: "#",
    showGithub: true,
    showDemo: false
  },
  {
    title: "Simple Paint Application",
    tech: ["Java", "XML"],
    description: "A touch-friendly drawing canvas with brush controls and Android view interactions.",
    features: ["Drawing canvas", "Brush functionality", "Touch interaction"],
    gradient: "from-pink-400 via-rose-400 to-orange-300",
    previewImage: "https://i.ibb.co/Hfsv2Z20/Paint-app.png",
    github: "https://github.com/RoniDholwani/ThePaintApp",
    demo: "#",
    showGithub: true,
    showDemo: false
  },
  {
    title: "Java Desktop Applications",
    tech: ["Java", "JDBC", "JPA", "Hibernate", "Spring GUI", "MySQL"],
    description: "Banking and desktop contacts systems with authentication, persistence, and ORM workflows.",
    features: [
      "CRUD operations",
      "Authentication systems",
      "Database integration",
      "Object relational mapping"
    ],
    gradient: "from-slate-500 via-teal-500 to-lime-300",
    previewImage: "https://i.ibb.co/tWLBSJs/Banking-Managment-System.png",
    github: "https://github.com/RoniDholwani/Banking_Management_System",
    demo: "#",
    showGithub: true,
    showDemo: false
  }
];

export const skillCategories: SkillCategory[] = [
  { title: "Programming Languages", icon: Braces, skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL"] },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Android Studio", "Java Android Development", "Kotlin", "Jetpack Compose", "XML", "Firebase", "ROOM Database"]
  },
  { title: "Web Development", icon: Code2, skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"] },
  {
    title: "Database & Backend",
    icon: Database,
    skills: ["Firebase Firestore", "Firebase Realtime Database", "MySQL", "JDBC", "Hibernate", "JPA"]
  },
  { title: "Design & Creative", icon: Brush, skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "UI/UX Design"] },
  {
    title: "Marketing & SEO",
    icon: Megaphone,
    skills: ["SEO Optimization", "Google Business Profile Optimization", "Meta Ads", "Social Media Marketing"]
  }
];

export const certifications: Certification[] = [
  { title: "Mobile App Developer Internship Certificate", issuer: "Corpax India Pvt. Ltd.", tone: "from-teal-400 to-sky-500", image: "https://i.ibb.co/TBdWRZ26/Corpax-Internship.png" },
  { title: "FOSSIP Internship Certification", issuer: "MSU, Baroda", tone: "from-violet-400 to-fuchsia-500", image: "https://i.ibb.co/yBpLkrrf/FOSSIP-Internship-Certificate.png" },
  { title: "Experience Letter", issuer: "Pro-Tech Computer Education", tone: "from-emerald-400 to-lime-400", image: "https://i.ibb.co/VYyyrp3Q/Pro-Tech-Experience-Letter.png" },
  { title: "Graphical Design & Digital Marketing Certification", issuer: "Pro-Tech Computer Education", tone: "from-amber-300 to-rose-400", image: "https://i.ibb.co/m5hYZckG/Graphic.png" },
  { title: "1st Position", issuer: "State Level Tech Fest VYOM, SVIT", tone: "from-pink-400 to-purple-500", image: "https://i.ibb.co/8DpNy1BL/SVIT-Winner.png" },
  { title: "1st Position", issuer: "SustainIT Open House, MSU Baroda", tone: "from-cyan-400 to-blue-500", image: "https://i.ibb.co/kVTf6jjV/Illumin-arti.png" },
  { title: "IoT Workshop", issuer: "MSU Baroda", tone: "from-sky-400 to-indigo-500", image: "https://i.ibb.co/NdLgj2BC/IOT-Workshop.png" },
  { title: "Eureka Pitch Battle", issuer: "Participation Certificate", tone: "from-lime-300 to-emerald-500", image: "https://i.ibb.co/49n9CWK/Eureka.png" },
  { title: "Cyber Security Workshop", issuer: "MSU Baroda", tone: "from-rose-400 to-orange-400", image: "https://i.ibb.co/QF11WVKW/Cyber.png" }
];

export const certificationIcon = BadgeCheck;
