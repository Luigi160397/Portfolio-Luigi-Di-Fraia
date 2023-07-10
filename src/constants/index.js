import {
  frontend,
  backend,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  git,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  java,
  springBoot,
  sass,
  epicode,
  capstone,
  skyview,
  linkedin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "UI/UX Design",
    icon: ux
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },

  {
    name: "postgresql",
    icon: postgresql
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "java",
    icon: java
  },
  {
    name: "Spring Boot",
    icon: springBoot
  },
  {
    name: "Sass",
    icon: sass
  }
];

const experiences = [
  {
    title: "Master Full Stack development",
    company_name: "EPICODE",
    icon: epicode,
    iconBg: "#333333",
    date: "Gen 2023 - Lug 2023"
  }
];

const projects = [
  {
    id: "project-1",
    name: "FilmVerse",
    description: "Il Portale per gli amanti del cinema",

    image: capstone,
    repo: "https://github.com/Luigi160397/CAPSTONE-FRONTEND"
  },
  {
    id: "project-2",
    name: "Linkedin-Clone",
    description: "Un semplice clone di Linkedin",

    image: linkedin,
    repo: "https://github.com/Luigi160397/FS0123A-BW-3"
  },
  {
    id: "project-3",
    name: "SkyView",
    description: "Una meteo app completamente creata in reactJS",

    image: skyview,
    repo: "https://github.com/Luigi160397/U3-S2-G5-Progetto-Settimanale-fs0123-Luigi-Di-Fraia"
  }
];

export { services, technologies, experiences, projects };
