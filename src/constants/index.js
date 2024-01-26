import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designers",
    icon: web,
  },
  {
    title: "Cross Platform Engineers",
    icon: mobile,
  },
  {
    title: "Backend Architects",
    icon: backend,
  },
  {
    title: " Performance Engineers",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  /*
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  */
];

const experiences = [
  {
    title: "American Eagle",

    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained an innovative mobile application for American Eagle.",
      "Enhanced user engagement with personalized shopping experiences and real-time fashion updates.",
      "Implemented cutting-edge features for an optimized and seamless mobile shopping journey.",
    ],
  },
  {
    title: "Domino's Pizza",

    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Contributed significantly to the development of a robust mobile application for Zara.",
      "Revitalized the brand's digital footprint with dynamic features and personalized recommendations.",
      "Streamlined the checkout process, resulting in an immersive and innovative mobile shopping experience.",
    ],
  },
  {
    title: "Zara",

    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Played a pivotal role in crafting a mobile application for [Domino's Pizza].",
      "Engineered an intuitive interface for seamless pizza customization and order tracking.",
      "Contributed to Domino's digital transformation, providing customers with a convenient and enjoyable mobile ordering experience.",
    ],
  },
  {
    title: "Dunkin' Donuts",

    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Led the development of a comprehensive mobile application for Dunkin' Donuts.",
      "Elevated the brand's digital presence with features like mobile ordering and personalized rewards.",
      "The app became a cornerstone of Dunkin' Donuts' digital strategy, enhancing customer loyalty and overall brand experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Turning our vision into a sleek mobile app felt challenging, but appVerse made it a seamless digital reality. Their dedication and skills played a crucial role.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "appVerse goes beyond development; they're committed partners understanding client success. Exceptional user experiences testify to appVerse's dedication.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "With appVerse's app optimization, user engagement soared by 50%. Grateful for their efforts, our app is now a powerful tool resonating with our audience.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce App",
    description:
      "Revamp your online shopping with our user-friendly e-commerce app. Enjoy secure browsing, easy navigation, and hassle-free purchases across a wide product range. Our app ensures a safe and delightful shopping journey from start to finish.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Sushi Restaurant App",
    description:
      "Embark on a culinary journey with our Sushi Restaurant app. Tailored for food enthusiasts, it boasts a stunning menu, effortless reservations, and a seamless ordering system. Elevate your dining experience by bringing the art of sushi to your fingertips. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Fitness App",
    description:
      "Achieve fitness goals with our dynamic app. Whether a beginner or expert, enjoy personalized workout plans, real-time tracking, and insightful analytics. Our app, your all-in-one solution for a healthy and active lifestyle.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
