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
  techDescription: {
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
      en: "Mobile and tablet application designed to introduce young children (ages 3-5) to reading. The app offers a series of mini-games: tracing a letter, identifying a phoneme at the beginning of a word, associating a grapheme with a phoneme, constructing a syllable, and building a word. Each level focuses on a specific grapheme to work on, using the phonics method.",
      fr: "Application mobile et tablette destinée à introduire les jeunes enfants (3-5 ans) à la lecture. L’application propose une série de petits jeux: tracer une lettre, identifier un phonème au début d’un mot, associer un graphème à un phonème, construire une syllabe, un mot. Chaque niveau se concentre sur un graphème à travailler, en utilisant la méthode syllabique.",
    },
    techDescription: {
      en: "The app was created with Flutter (a framework in Dart). Animations and interactions were developed using Rive, a tool that includes an API for controlling animations via Flutter. The illustrations were entirely hand-drawn in Illustrator.",
      fr: "L’application a été créée avec Flutter (framework en Dart). Les animations et interactions développées avec Rive, un outil qui inclut une API permettant de contrôler les animations via Flutter. Les illustrations ont été conçues entièrement à la main, sur Illustrator.",
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
      en: "Adaptorz helps users check the compatibility of power outlets and electrical devices worldwide. The site allows users to specifically select the plugs for their devices and choose multiple destination countries at once. The tool then suggests travel adapters that perfectly match their needs.",
      fr: "Adaptorz permet de vérifier la compatibilité des prises de courants et des appareils électriques dans le monde. Le site permet de sélectionner spécifiquement les prises de ses appareils, et de choisir plusieurs pays de destinations à la fois. L’outil suggère ensuite des adaptateurs de voyage qui correspondent exactement au besoin.",
    },
    techDescription: {
      en: "Multilingual site built with NextJS (App Router). The pages are static (generated with generateStaticParams()) to optimize SEO. One month after launch, the site averages 2,000 impressions per day.",
      fr: "Site multilingue fait avec NextJS (App Router). Les pages sont statiques (générées avec generateStaticParams()) pour optimiser le SEO. Un mois après son lancement, le site génère une moyenne de 2 000 impressions / jour.",
    },
    stack: [tech["react"], tech["nextjs"], tech["mui"]],
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
      en: "Adaptorz helps users check the compatibility of power outlets and electrical devices worldwide. The site allows users to specifically select the plugs for their devices and choose multiple destination countries at once. The tool then suggests travel adapters that perfectly match their needs.",
      fr: "Adaptorz permet de vérifier la compatibilité des prises de courants et des appareils électriques dans le monde. Le site permet de sélectionner spécifiquement les prises de ses appareils, et de choisir plusieurs pays de destinations à la fois. L’outil suggère ensuite des adaptateurs de voyage qui correspondent exactement au besoin.",
    },
    techDescription: {
      en: "Multilingual site built with NextJS (App Router). The pages are static (generated with generateStaticParams()) to optimize SEO. One month after launch, the site averages 2,000 impressions per day.",
      fr: "Site multilingue fait avec NextJS (App Router). Les pages sont statiques (générées avec generateStaticParams()) pour optimiser le SEO. Un mois après son lancement, le site génère une moyenne de 2 000 impressions / jour.",
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
      en: "Adaptorz helps users check the compatibility of power outlets and electrical devices worldwide. The site allows users to specifically select the plugs for their devices and choose multiple destination countries at once. The tool then suggests travel adapters that perfectly match their needs.",
      fr: "Adaptorz permet de vérifier la compatibilité des prises de courants et des appareils électriques dans le monde. Le site permet de sélectionner spécifiquement les prises de ses appareils, et de choisir plusieurs pays de destinations à la fois. L’outil suggère ensuite des adaptateurs de voyage qui correspondent exactement au besoin.",
    },
    techDescription: {
      en: "Multilingual site built with NextJS (App Router). The pages are static (generated with generateStaticParams()) to optimize SEO. One month after launch, the site averages 2,000 impressions per day.",
      fr: "Site multilingue fait avec NextJS (App Router). Les pages sont statiques (générées avec generateStaticParams()) pour optimiser le SEO. Un mois après son lancement, le site génère une moyenne de 2 000 impressions / jour.",
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
      en: "Adaptorz helps users check the compatibility of power outlets and electrical devices worldwide. The site allows users to specifically select the plugs for their devices and choose multiple destination countries at once. The tool then suggests travel adapters that perfectly match their needs.",
      fr: "Adaptorz permet de vérifier la compatibilité des prises de courants et des appareils électriques dans le monde. Le site permet de sélectionner spécifiquement les prises de ses appareils, et de choisir plusieurs pays de destinations à la fois. L’outil suggère ensuite des adaptateurs de voyage qui correspondent exactement au besoin.",
    },
    techDescription: {
      en: "Multilingual site built with NextJS (App Router). The pages are static (generated with generateStaticParams()) to optimize SEO. One month after launch, the site averages 2,000 impressions per day.",
      fr: "Site multilingue fait avec NextJS (App Router). Les pages sont statiques (générées avec generateStaticParams()) pour optimiser le SEO. Un mois après son lancement, le site génère une moyenne de 2 000 impressions / jour.",
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
      en: "Adaptorz helps users check the compatibility of power outlets and electrical devices worldwide. The site allows users to specifically select the plugs for their devices and choose multiple destination countries at once. The tool then suggests travel adapters that perfectly match their needs.",
      fr: "Adaptorz permet de vérifier la compatibilité des prises de courants et des appareils électriques dans le monde. Le site permet de sélectionner spécifiquement les prises de ses appareils, et de choisir plusieurs pays de destinations à la fois. L’outil suggère ensuite des adaptateurs de voyage qui correspondent exactement au besoin.",
    },
    techDescription: {
      en: "Multilingual site built with NextJS (App Router). The pages are static (generated with generateStaticParams()) to optimize SEO. One month after launch, the site averages 2,000 impressions per day.",
      fr: "Site multilingue fait avec NextJS (App Router). Les pages sont statiques (générées avec generateStaticParams()) pour optimiser le SEO. Un mois après son lancement, le site génère une moyenne de 2 000 impressions / jour.",
    },
    stack: [tech["nextjs"], tech["react"]],
    externalLink: "https://react-fishing-rod.vercel.app/",
  },
];
