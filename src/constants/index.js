import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  figma,
  html,
  css,
  mongodb,
  prisma,
  nextjs,
  react,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  photoshop,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  figmaLogo,
  htmlLogo,
  reactLogo,
  koreanLogo,
  englishLogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Education",
    url: "#education",
  },
  {
    id: "2",
    title: "Experiences",
    url: "#experience",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: "4",
    title: "portfolioDetail",
    url: "#portfolioDetail",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  figmaLogo,
  htmlLogo,
  reactLogo,
  koreanLogo,
  englishLogo,
];

export const brainwaveServices = [
  "Based in Seoul, Korea (WFH)",
  "Managing Online sales platform",
  "Assisting to prepare financial documents",
];

export const sticksServices = [
  "Based in Seoul, Korea (WFH)",
  "Digital Optimized Contents for Social Media (For Samsung electronics, February 2017 – December 2018)",
  "Samsung RMS 2.0 UX/UI Design (For Samsung electronics USA, October 2017 – December 2018)",
  "Samsung RMS 2.0 Guide Video (For Samsung electronics, February 2018 – May 2018)",
];

export const internServices = [
  "Property management internships",
  "Responding to enquiries from customers, mainly tenants",
  "Managing regular inspections",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Ecommerce App with Admin Panel",
    text: "Simple Ecommerce web application with Admin dashboard, whicn enable user to add/delete category as well as items. Fully mobile/desktop responsive",
    sort: "Full stack",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    demoUrl: "https://ecom-store-liart.vercel.app/",
  },
  {
    id: "1",
    title: "Expense Tracker",
    text: "This fancy application allows you to track your incomes ans expenses efficiently. It is a full stack app using React, React-Query, Prisma, Tailwind. Its intuitive design allows users to modify their settings, such as currency and categories, easily.",
    sort: "Full stack",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
    demoUrl: "https://expense-tracker-steel-three.vercel.app/",
  },
  {
    id: "2",
    title: "Resume page with animation",
    text: "Another version of resume web. Animated with Framer. WIP for some parts.",
    sort: "Front end",
    status: "progress",
    imageUrl: roadmap3,
    demoUrl: "https://github.com/Kwangsu-CHOI/animated-resume",
  },
  {
    id: "3",
    title: "TheBlog App",
    text: "Blog web application. It has full CRUD functions as well as categorising and personalising contents. Still WIP",
    sort: "Front end",
    status: "progress",
    imageUrl: roadmap4,
    demoUrl: "https://github.com/Kwangsu-CHOI/next-blog",
  },
];

export const collabText =
  "Full stack web application, mainly using Next.js, React, Prisma, MongoDB.";
export const collabText2 = "Front end Web Apps built using React, CSS/Tailwind";
export const collabText3 = "Design focused simple apps built using HTML/CSS";

export const collabContent = [
  {
    id: "0",
    title: "FULL STACK WEB APP",
    text: collabText,
  },
  {
    id: "1",
    title: "FRONT END WEB APP",
    text: collabText2,
  },
  {
    id: "2",
    title: "HTML project",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "HTML",
    icon: html,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "react",
    icon: react,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "CSS",
    icon: css,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "prisma",
    icon: prisma,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "nextjs",
    icon: nextjs,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Master",
    description: "Monash University",
    price: "IT (with Research)",
    features: [
      "Distinction Avg ++",
      "Finished subjects related to Data Science: MongoDB & Cassandra, R, and Cypher Query Language for Neo4j",
      "Focusing on UX/UI as well as Project Management",
      "Published paper on ENASE 2022. Topic: Developing Accessible eHealth Portals: A Human-centred Approach",
      "Participated in the thesis; A Human-centric Accessible eHealth Booking Web Portal.",
    ],
    url: "https://www.scitepress.org/PublishedPapers/2022/109928/109928.pdf",
  },
  {
    id: "1",
    title: "Master",
    description: "Monash University",
    price: "Accounting (Prof.)",
    features: [
      "Focusing on Accounting Information System and Management Accounting subjects",
      "Finished project regarding Financial Reporting Issues",
      "And many other auditing projects...",
    ],
  },
  {
    id: "2",
    title: "Bachelor",
    description: "The University of Adelaide",
    price: "Int. Finance",
    features: [
      "Risk Analysis based on available information from the company's finanacial statements and other disclosures",
      "Accounting completion papers (financial statements) through the use of accounting software, MYOB",
      "Successfully finished assignments regarding risk and portfolio management.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Communication",
    text: "Confident use of both verbal and written mediums; actively participated in group projects and work discussions. For example, led weekly team meetings to discuss sales strategies and achieved a 5% ~ 10% increase in monthly sales during COVID.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Interpersonal Skills",
    text: "Efficiently liaises with clients and colleagues, addressing enquiries. Managed client relationships on Naver Market, resolving issues promptly and increasing customer satisfaction scores by 0.4 star point.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Language Skills",
    text: "Fluent in Korean and English; familiar with JavaScript (React), HTML/CSS, and data query languages (CQL and SQL). Communicated technical concepts effectively to Korean-speaking teammate during webpage deployment stage.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Attention To Detail",
    text: "Ensures high work quality and readability through frequent self-code review. Meticulously reviewed income statement to ensure accurate reporting and prepare for BAS.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Organisational Skills",
    text: "Successfully juggles multiple projects while pursuing full-time studies, excelling in both independent and collaborative settings. Skillfully coordinates schedules and deadlines for university assignments and part-time commitments, consistently surpassing project expectations by delivering ahead of schedule.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Time Management",
    text: "Prioritises tasks effectively, consistently meeting deadlines and achieving goals through strategic task allocation and continuous review. Managed simultaneous projects at Naver Market and Coupang, maintaining 20% more projects/events than market average.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
