export type Project = {
  name: string;
  slug: string;
  link: string;
  featureImage: string; // path to image 4:3 aspect ratio
  images: string[]; // paths to images
  description: {
    en: string;
    fr: string;
  };
  stack: Stack[];
  externalLink?: string;
};

type Stack = {
  name: string;
  icon: string;
  externalLink: string;
};

const tech = {
  flutter: {
    name: "Flutter",
    icon: "/images/stack/flutter-icon.svg",
    externalLink: "https://flutter.dev",
  },
  rive: {
    name: "Rive",
    icon: "/images/stack/rive-icon.png",
    externalLink: "https://rive.app",
  },
  react: {
    name: "React",
    icon: "/images/stack/react-icon.svg",
    externalLink: "https://reactjs.org",
  },
  reactNative: {
    name: "React Native",
    icon: "/images/stack/react-native-icon.svg",
    externalLink: "https://reactnative.dev/",
  },
  reactQuery: {
    name: "React Query",
    icon: "/images/stack/react-query-icon.svg",
    externalLink: "https://react-query.tanstack.com",
  },
  nextjs: {
    name: "Next.js",
    icon: "/images/stack/nextjs-icon.svg",
    externalLink: "https://nextjs.org",
  },
  mui: {
    name: "MUI",
    icon: "/images/stack/mui-icon.svg",
    externalLink: "https://mui.com",
  },
  vercel: {
    name: "Vercel",
    icon: "/images/stack/vercel-icon.svg",
    externalLink: "https://vercel.com",
  },
  firebase: {
    name: "Firebase",
    icon: "/images/stack/firebase-icon.svg",
    externalLink: "https://firebase.google.com",
  },
};

export const PROJECTS: Project[] = [
  {
    name: "Flamingmo",
    slug: "flamingmo",
    link: "/projects/flamingmo",
    featureImage: "/images/projects/flamingmo-feature.png",
    images: [],
    description: {
      en: "Educational game (tablet & smartphone) to start learning to read.",
      fr: "Jeu éducatif (tablette & mobile) pour amorcer l'apprentissage de la lecture.",
    },
    stack: [tech["flutter"], tech["rive"]],
  },
  {
    name: "Adaptorz",
    slug: "adaptorz",
    link: "/projects/adaptorz",
    featureImage: "/images/projects/adaptorz-feature.png",
    images: [],
    description: {
      en: "A NextJS website to help travelers find the right travel adaptor for their next trip.",
      fr: "Un site Web NextJS pour aider les voyageurs à trouver le bon adaptateur de voyage pour leur prochain voyage.",
    },
    stack: [tech["react"], tech["nextjs"], tech["mui"], tech["vercel"]],
    externalLink: "https://adaptorz.com",
  },
  {
    name: "Iskus - web app",
    slug: "iskus-web",
    link: "/projects/iskus-web",
    featureImage: "/images/projects/iskus-web-feature.png",
    images: [],
    description: {
      en: "An app for retirement homes.",
      fr: "Une application pour les maisons de retraites.",
    },
    stack: [tech["react"], tech["firebase"]],
  },
  {
    name: "Iskus - tablet app",
    slug: "iskus-tablet",
    link: "/projects/iskus-tablet",
    featureImage: "/images/projects/iskus-tablet-feature.png",
    images: [],
    description: {
      en: "A tablet app to use in the residents' rooms in a retirement home.",
      fr: "Une application tablette à utiliser dans les chambres des résidents en maison de retraite.",
    },
    stack: [tech["reactNative"], tech["firebase"]],
  },
  {
    name: "Edilians - boite à boutons",
    slug: "edilians",
    link: "/projects/edilians",
    featureImage: "/images/projects/edilians-feature.png",
    images: [],
    description: {
      en: "Tablet application for Edilians.",
      fr: "Application tablette pour Edilians.",
    },
    stack: [tech["react"], tech["reactQuery"]],
  },
  {
    name: "React hooks",
    slug: "react-hooks",
    link: "/projects/hooks",
    featureImage: "/images/projects/hooks-feature.png",
    images: [],
    description: {
      en: "Small project to learn React hooks.",
      fr: "Petit projet pour apprendre les hooks React.",
    },
    stack: [tech["nextjs"], tech["react"]],
    externalLink: "https://react-fishing-rod.vercel.app/",
  },
];
