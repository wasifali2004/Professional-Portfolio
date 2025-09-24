import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Developer",
    company: "Fiverr",
    startDate: "Dec 2023",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Open Source Community",
    startDate: "June 2024",
    endDate: "August 2025",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Developed over 3 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Web Developer",
    company: "Mirasol",
    startDate: "April 2025",
    endDate: "June 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Provided the company with best solution.",
    ],
  },
];

export default experiences;
