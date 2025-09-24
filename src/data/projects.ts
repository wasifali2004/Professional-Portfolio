import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Quicker AI",
    title: "Quicker AI",
    description:
      "An AI-driven web application that streamlines automation and assistance tasks. It combines advanced AI models with a modern interface, secure authentication, and seamless payment integration.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/Quicker-Ai",
    url: "https://my-quicker-ai.vercel.app/",
    tags: ["Next.js", "TypeScript", "Clerk", "OpenAI","Google Generative A","LangChain","Neon"],
  },
  {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/Full-Stack-Ecommerce-MERN",
    url: "https://forever-ecom.netlify.app/",
    tags: ["React.js", "Redux", "Material UI", "Stripe", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "thumbs up",
    title: "Thumbs Up",
    description:
      "A web application that enables users to create and customize thumbnails with AI-powered background removal, authentication, and efficient image processing. Built for content creators to streamline design workflows.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/Generate-Thumbnails",
    url: "https://generatethumbsup.vercel.app/",
    tags: ["Next.js", "TypeScript", "Prisma", "NextAuth", "AWS SDK","Zod"],
  },
  {
    id: "temp mail",
    title: "Temp Mail",
    description:
      "A lightweight web application that provides users with disposable email addresses for secure and private communication. It helps protect privacy by preventing spam and unwanted emails.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/Temp-mail-website",
     url: "https://tempmailco.com/",
    tags: ["Node.js", "Express.js", "MongoDB", "Reactjs", "MailJS API"],
  },
  {
    id: "ems",
    title: "Frontend Employee Management System",
    description:
      "A responsive employee management system interface that provides an organized and user-friendly platform for managing employee data and operations. Designed with modern UI practices to ensure clarity and ease of use.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/EMS",
    tags: ["React", "Tailwind CSS", "Vite", "Font Awesome", "ESLint"],
  },
  {
    id: "auth",
    title: "MERN Authentication System",
    description:
      "A secure authentication system built with the MERN stack, featuring email verification, password reset via email, and user-friendly sign-up/login flows. It ensures account security with robust token-based authentication and modern best practices.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/wasifali2004/Mern-Auth",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Nodemailer","bcrypt"],
  },
  {
    id: "mirasol-real-estate-website",
    title: "Mirasol-Real Estate Website",
    description:
      "A modern real estate platform built with Next.js, designed to showcase property listings with a responsive and user-friendly interface. It provides fast navigation, optimized SEO, and a professional layout tailored for property businesses.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://property4life.com/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "real-estate website",
    title: "Real Estate Website",
    description:
      "A modern real estate platform built with Next.js, designed to showcase property listings with a responsive and user-friendly interface. ",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://www.propertyingcc.com/",
    tags: ["Next.js", "Sass", "Web Development"],
  },
];
export default projects;
