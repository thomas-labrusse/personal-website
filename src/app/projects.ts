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
  longDescription: {
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
    images: [
      "/images/projects/flamingmo-1.png",
      "/images/projects/flamingmo-2.png",
      "/images/projects/flamingmo-3.png",
      "/images/projects/flamingmo-4.png",
      "/images/projects/flamingmo-5.png",
      "/images/projects/flamingmo-6.png",
      "/images/projects/flamingmo-7.png",
      "/images/projects/flamingmo-8.png",
    ],
    description: {
      en: "Educational game (tablet & smartphone) to start learning to read.",
      fr: "Jeu éducatif (tablette & mobile) pour amorcer l'apprentissage de la lecture.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["flutter"], tech["rive"]],
  },
  {
    name: "Adaptorz",
    slug: "adaptorz",
    link: "/projects/adaptorz",
    featureImage: "/images/projects/adaptorz-feature.png",
    images: [
      "/images/projects/adaptorz-1.png",
      "/images/projects/adaptorz-2.png",
      "/images/projects/adaptorz-3.png",
    ],
    description: {
      en: "A NextJS website to help travelers find the right travel adaptor for their next trip.",
      fr: "Un site Web NextJS pour aider les voyageurs à trouver le bon adaptateur de voyage pour leur prochain voyage.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["react"], tech["nextjs"], tech["mui"], tech["vercel"]],
    externalLink: "https://adaptorz.com",
  },
  {
    name: "Iskus - web app",
    slug: "iskus-web",
    link: "/projects/iskus-web",
    featureImage: "/images/projects/iskus-web-feature.png",
    images: [
      "/images/projects/iskus-web-1.png",
      "/images/projects/iskus-web-2.png",
      "/images/projects/iskus-web-3.png",
    ],
    description: {
      en: "An app for retirement homes.",
      fr: "Une application pour les maisons de retraites.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["react"], tech["firebase"]],
  },
  {
    name: "Iskus - tablet app",
    slug: "iskus-tablet",
    link: "/projects/iskus-tablet",
    featureImage: "/images/projects/iskus-tablet-feature.png",
    images: [
      "/images/projects/iskus-tablet-1.jpg",
      "/images/projects/iskus-tablet-2.jpg",
      "/images/projects/iskus-tablet-3.jpg",
      "/images/projects/iskus-tablet-4.jpg",
      "/images/projects/iskus-tablet-5.jpg",
      "/images/projects/iskus-tablet-6.jpg",
    ],
    description: {
      en: "A tablet app to use in the residents' rooms in a retirement home.",
      fr: "Une application tablette à utiliser dans les chambres des résidents en maison de retraite.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["reactNative"], tech["firebase"]],
  },
  {
    name: "Edilians - boite à boutons",
    slug: "edilians",
    link: "/projects/edilians",
    featureImage: "/images/projects/edilians-feature.png",
    images: [
      "/images/projects/edilians-1.png",
      "/images/projects/edilians-2.png",
      "/images/projects/edilians-3.png",
    ],
    description: {
      en: "Tablet application for Edilians.",
      fr: "Application tablette pour Edilians.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["react"], tech["reactQuery"]],
  },
  {
    name: "React hooks",
    slug: "react-hooks",
    link: "/projects/hooks",
    featureImage: "/images/projects/hooks-feature.png",
    images: [
      "/images/projects/hooks-1.png",
      "/images/projects/hooks-2.png",
      "/images/projects/hooks-3.png",
      "/images/projects/hooks-4.png",
      "/images/projects/hooks-5.png",
    ],
    description: {
      en: "Small project to learn React hooks.",
      fr: "Petit projet pour apprendre les hooks React.",
    },
    longDescription: {
      en: "Flamingmo is an educational game for children to start learning to read. The game is designed to be played on a tablet or a smartphone. The game is available in English and French. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children aged 3 to 6. The game is designed to be played by children",
      fr: "Flamingmo est un jeu éducatif pour les enfants pour amorcer l'apprentissage de la lecture. Le jeu est conçu pour être joué sur une tablette ou un smartphone. Le jeu est disponible en anglais et en français. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants de 3 à 6 ans. Le jeu est conçu pour être joué par des enfants",
    },
    stack: [tech["nextjs"], tech["react"]],
    externalLink: "https://react-fishing-rod.vercel.app/",
  },
];
