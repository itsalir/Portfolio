import {
  BaniBest_logo,
  coimex_inc_logo,
  zista_sadr_saba_logo,
  logo_blue,
  digikala_logo,
} from "../assets/images";

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Digikala",
    icon: digikala_logo,
    iconBg: "#ffffff",
    date: "Dec 2022 - Present",
    points: [
      "Designed an enterprise front-end application structure for a team of 20 engineers using a feature-sliced design approach.",
      "Established the Ganje Feature, a locker base feature that the user can choose on a map, like the Amazon Prime locker. It reduced 10% of the delivery cost for the company.",
      "Maintained and upgraded the codebase of the app for long-term development. The latest report indicates more crash-free users,from 92.8% to 99.3%.",
      " Implemented best practices for code quality, performance, and security, resulting in a more robust and user-friendly application",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Coimex Inc",
    icon: coimex_inc_logo,
    iconBg: "#ffffff",
    date: "Sep 2021 - Sep 2023",
    points: [
      "Created and developed the PWA app using React and Redux, resulting in up to 60% performance improvements over the legacy version.",
      "Transformed legacy code into the new codebase, reducing the JavaScript bundle by 40%, the CSS file by 80%, and improving performance by 90%.",
      "Introduced a groundbreaking feature enabling seamless integration of smart contracts and blockchain technology, resulting in a remarkable 80% increase in transaction efficiency and security for Coimex Inc.",
      "Led and collaborated with the team to unlock their full potential and mentored 2 junior developers.",
      "• Enhanced Product List Pages Lighthouse performance score average by 15 points by instrumenting a hook named ”useFilter”.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Vatandar",
    icon: zista_sadr_saba_logo,
    iconBg: "#ffffff",
    date: "Apr 2020 - Oct 2022",
    points: [
      "Increased the Lottie animations performance by 80% by developing a new wrapper.",
      "Implemented a live meeting service using React, Redux, and WebRTC with a response time of 16 seconds.",
      "Reduced project bootstrap time from 1 week to 15 minutes by upgrading CRA and using API proxy.",
      "Interpreted thousands of data to logical events and converted raw data to analytical information through pie charts, time series line charts, and bar charts with D3 to provide statistical insights.",
    ],
  },
  {
    title: "React & React Native Developer",
    company_name: "Urent",
    icon: logo_blue,
    iconBg: "#ffffff",
    date: "May 2019 - Jun 2020",
    points: [
      "Reduced bundle size by half due to tree shaking and rewrote of 3rd party libraries.",
      "Performed code reviews of other team members’ work and recommended changes to improve 60% of code quality.",
      "Mentored 4 entry-level new joiners to achieve high performance and climb the career ladder.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "BaniBEST",
    icon: BaniBest_logo,
    iconBg: "#ffffff",
    date: "Oct 2018 - Oct 2019",
    points: [
      "Developed and maintained a WordPress-based language learning website, increasing SEO ranking by 90",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Resolved critical bugs and improved business logic, resulting in enhanced website performance.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/itsalir",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/itsalir",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "",
    name: "",
    description: "",
    link: "",
  },
];
