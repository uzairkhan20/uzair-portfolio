// Copyright Uzair Iqbal 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaUzair/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Uzair Iqbal",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://UzairIqbal.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I live in Dubai",
  "I love fashion",
];

export const EMAIL = "uzairkhan2084@gmail.com";
export const PHONE = "https://wa.me/971565930813?text=Hi%20Uzair";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/uzair-iqbal-307847129/",
  instagram: "https://www.instagram.com/uzair.styles/",
  facebook: "https://www.facebook.com/uzairstyles20/",
  
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "PIF - Public Investment Fund",
    image: "/projects/pif-main.jpg",
    blurImage: "/projects/pif-main.jpg",
    description: "Led frontend for enterprise Sitecore build using HTML, Sass, JavaScript with SXA",
    gradient: ["#000", "#005c4d"],
    url: "https://pif.gov.sa/",
    tech: ["html", "sass", "javascript", "tailwind"],
  },
  {
    name: "Samsung",
    image: "/projects/samsung.jpg",
    blurImage: "/projects/samsung.jpg",
    description: "Led UI/UX for major CRM campaigns, developing EDMs and managing design handoffs.",
    gradient: ["#000000", "#2189ff"],
    url: "",
    tech: ["html", "css", "javascript", "figma",],
  },
  {
    name: "HSBC",
    image: "/projects/hsbc.jpg",
    blurImage: "/projects/hsbc.jpg",
    description: "Built multiple SPAs with Tailwind and Sass, ensuring responsive, performance-driven frontend.",
    gradient: ["#000000", "#db0011"],
    url: "https://www.hsbc.ae/",
    tech: ["html", "sass", "javascript", "tailwind"],
  },
  {
    name: "Jotun",
    image: "/projects/jotunmea.jpg",
    blurImage: "/projects/jotunmea.jpg",
    description: "Engineered microsite on Next.js with responsive UI and custom theming.",
    gradient: ["#000", "#fdaf19"],
    url: "https://www.jotunmeia.com/",
    tech: ["next", "html", "npm", "sass"],
  },
  {
    name: "New Murabba",
    image: "/projects/new-murabba.jpg",
    blurImage: "/projects/new-murabba.jpg",
    description: "Delivered full frontend architecture using Next.js, Sass, and animations.",
    gradient: ["#000000", "#b28b31"],
    url: "https://newmurabba.com/en/",
    tech: ["next", "javascript", "npm", "sass"],
  },
  {
    name: "First Abu Dhabi Bank - FAB",
    image: "/projects/fab.jpg",
    blurImage: "/projects/fab.jpg",
    description: "Engineered and managed Microsoft Dynamics EDMs for flagship marketing campaigns.",
    gradient: ["#000000", "#003da6"],
    url: "",
    tech: ["html", "css", "javascript", "figma",],
  },
  {
    name: "Khalid Bin Sultan City - Beeah Group",
    image: "/projects/beeah.jpg",
    blurImage: "/projects/beeah.jpg",
    description: "Crafted interactive frontend with GSAP animations on Next.js and Tailwind.",
    gradient: ["#000000", "#04e88e"],
    url: "https://khalidbinsultancity.com/",
    tech: ["next", "tailwind", "gsap", "sass"],
  },
  {
    name: "Saudi Omani Investment Company (SOIC)",
    image: "/projects/soic.jpg",
    blurImage: "/projects/soic.jpg",
    description: "Built full responsive site using Tailwind, Next.js, and scalable component systems.",
    gradient: ["#000000", "#005c4d"],
    url: "https://soic.sa/en/",
    tech: ["next", "tailwind", "npm", "sass"],
  },
  {
    name: "ORA - UAE",
    image: "/projects/ora.jpg",
    blurImage: "/projects/ora.jpg",
    description: "Developed Drupal-based site with dynamic frontend using Tailwind and GSAP.",
    gradient: ["#000000", "#01a7c7"],
    url: "https://ora-uae.com/",
    tech: ["next", "tailwind", "gsap", "html"],
  },
  {
    name: "Majid Al Futtaim",
    image: "/projects/maf.jpg",
    blurImage: "/projects/maf.jpg",
    description: "Designed and developed EDMs and landing experiences for high-visibility campaigns",
    gradient: ["#000000", "#8A1538"],
    url: "",
    tech: ["html", "css", "javascript", "figma",],
  },
  {
    name: "Heinz - Unstainable Thobe",
    image: "/projects/heinz.jpg",
    blurImage: "/projects/heinz.jpg",
    description: "Developed a microsite for the award-winning campaign",
    gradient: ["#000000", "#9e2426"],
    url: "",
    tech: ["javascript", "html", "css", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022 - Present",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Joined an award winning agency (VML) in 2022 and build some amazing and cool experiences for global brands like PIF, Samsung, HSBC, JOTUN etc",
    image: "/timeline/vml.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Moved to Dubai and contributed in various projects using latest UI/UX practices",
    image: "/timeline/wisoft.webp",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from University 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Design knowledge!",
    image: "/timeline/iqra.png",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    
    type: NodeTypes.CHECKPOINT,
    title: "Junior Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Started as an Internee at HZTECH which then converted into a full time Job where I mastered the skills in WordPress development.",
    image: "/timeline/hztech.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,

  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    
    type: NodeTypes.CHECKPOINT,
    title: "Bachelors of Science Computer Science (BSCS)",
    size: ItemSize.SMALL,
    subtitle:
      "started BSCS journey at Iqra University in Pakistan, Karachi",
    image: "/timeline/iqra.png",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,

  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Bachelors of Science Computer Science (BSCS)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in Computer Sciences, where I learnt the fundamentals of Computersciences focusing on Frontend Engineering, UI/UX, Graphic design and more...",
  //   image: "/timeline/iqra.png",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2020",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Built solutions for employee engagement, productivity and performance 🎯",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-freelance.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Motion Graphics (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle: "Motion Graphics content for Product Launch 🚀",
  //   image: "/timeline/octanner.svg",
  //   slideImage: "/timeline/aftereffects.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2019",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from University 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Design knowledge!",
  //   image: "/timeline/iqra.png",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Started as an Internee at HZTECH which then converted into a full time Job where I mastered the skills in PSD to HTML and then WordPress theme development, all this while keeping the studies in parallel, perfect opportunity to balance theory and practical knowledge.",
  //   image: "/timeline/hztech.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from University 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Design knowledge!",
  //   image: "/timeline/iqra.png",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Bachelors of Science Computer Science (BSCS)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in Computer Sciences, where I learnt the fundamentals of Computersciences focusing on Frontend Engineering, UI/UX, Graphic design and more...",
  //   image: "/timeline/iqra.png",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
