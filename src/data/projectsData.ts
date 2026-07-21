export interface ProjectItem {
  id: string;
  title: string;
  project: string;
  type: string;
  date: string;
  link?: string;
  points: string[];
  tags?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "frizerski-salon-stevan",
    title: "Frontend & Web Developer",
    project: "Frizerski Salon Stevan",
    type: "Barbershop Landing Page",
    date: "2026",
    link: "https://frizerski-salon-stevan.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "SEO"],
    points: [
      "Designed and developed a modern, fully responsive web landing page with React & Vite.",
      "Created custom interactive service sections, price lists, work schedules, and location maps.",
      "Optimised UI transitions, mobile UX, and performance for seamless user engagement."
    ]
  },
  {
    id: "ada-studio",
    title: "Full-Stack Developer",
    project: "Ada Studio",
    type: "Web Agency Platform",
    date: "2026",
    link: "https://adastudio.rs/",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    points: [
      "Engineered a modern, responsive user interface.",
      "Implemented comprehensive backend functionality.",
      "Optimised SEO metadata and page performance."
    ]
  },
  {
    id: "altara-inmo",
    title: "Full-Stack Developer",
    project: "Altara Inmo",
    type: "Real Estate Platform",
    date: "2025",
    link: "https://www.altarainmo.com/",
    tags: ["Full-Stack", "REST API", "SEO", "Database"],
    points: [
      "Built responsive, user-friendly UI.",
      "Implemented backend property CRUD operations.",
      "Integrated third-party REST APIs smoothly.",
      "Optimised platform for SEO."
    ]
  },
  {
    id: "taxi-pro-gps",
    title: "Backend Developer",
    project: "Taxi Pro GPS",
    type: "GPS Tracking App",
    date: "2025",
    link: "https://www.taxiprogps.com/",
    tags: ["Backend", "GPS Data", "MySQL", "PHP / REST API"],
    points: [
      "Developed robust backend for GPS data processing.",
      "Integrated responsive frontend tracking features.",
      "Optimised database queries for real-time updates."
    ]
  }
];
