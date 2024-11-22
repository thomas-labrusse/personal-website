export type Project = {
  name: string;
  slug: string;
  link: string;
  projectType: ProjectType;
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

type ProjectType = {
  type: "hobby" | "contract";
  en: string;
  fr: string;
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

const ProjectTypes: Record<string, ProjectType> = {
  hobby: {
    type: "hobby",
    en: "Hobby",
    fr: "Hobby",
  },
  contract: {
    type: "contract",
    en: "Contract",
    fr: "Contrat",
  },
};

export const PROJECTS: Project[] = [
  {
    name: "Flamingmo",
    slug: "flamingmo",
    link: "/projects/flamingmo",
    projectType: ProjectTypes.hobby,
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
    projectType: ProjectTypes.hobby,
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
    projectType: ProjectTypes.contract,
    featureImage: "/images/projects/iskus-web-feature.png",
    images: [
      "/images/projects/iskus-web-1.png",
      "/images/projects/iskus-web-2.png",
      "/images/projects/iskus-web-3.png",
    ],
    description: {
      en: "Web app for retirement homes.",
      fr: "Application web pour les maisons de retraites.",
    },
    longDescription: {
      en: "A web application designed for nursing homes, developed for Iskus (early stage start-up). The app centralizes “transmissions” created via tablets installed in residents' rooms. It also allows: managing user records, administrative and medical files of residents (dietary restrictions, allergies, pathologies, drugs prescriptions, etc.), care plans, and an agenda. A 'kitchen' module displays all residents' dietary restrictions on a single screen.",
      fr: "Application web destiné au EPHAD, développée pour Iskus (start-up early stage). L’app centralise les transmissions créées via des tablettes installées dans les chambres des résidents. Elle permet également de : gérer les dossiers des utilisateurs, les dossiers administratifs et médicaux des résidents (contraintes alimentaires, allergies, pathologies, posologies des médicaments, etc.) ainsi que leur plan de soins, et un planning. Un module “cuisine” permet d’afficher sur un seul écran l’ensemble des contraintes alimentaires des résidents.",
    },
    techDescription: {
      en: "The web app was developed using React, React Router for navigation, and Firebase for authentication management and database (Firestore).",
      fr: "L’application web a été développée avec React, React Router pour la navigation, Firebase pour la gestion de l’authentification et la base de donnée (Firestore).",
    },
    stack: [tech["react"], tech["firebase"]],
  },
  {
    name: "Iskus - tablet app",
    slug: "iskus-tablet",
    link: "/projects/iskus-tablet",
    projectType: ProjectTypes.contract,
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
      en: "A tablet app used in the residents' rooms in retirement homes.",
      fr: "Application tablette utilisée dans les chambres des résidents en maison de retraite.",
    },
    longDescription: {
      en: "A tablet application installed in the rooms of nursing home (EPHAD) residents. Authentication is performed either by entering a password or scanning a QR code generated via the web app. The tablet app works in tandem with the web app, allowing the recording of 'transmissions' to monitor the resident's daily life and medical variables. It also displays the care plan that must be completed and validated daily by nurses and caregivers. A dedicated page provides access to standard protocols (hygiene, care), making them readily available in the field.",
      fr: "Application tablette installée dans les chambres des résidents en EPHAD. L’authentification se fait par saisie de mot de passe, ou en scannant un QR code généré via l’application web. L’app tablette fonctionne de concert avec l’application web, elle permet d’enregistrer des “transmissions” afin de monitorer le quotidien et les variables médicales du résident. Elle affiche aussi le plan de soins qui doit être effectué et validé quotidiennement par les infirmières et aides soignantes. Une page donne accès aux protocoles standards (hygiène, soins), pour les rendre disponibles sur le terrain.",
    },
    techDescription: {
      en: "The app was developed with React Native to be used on Android tablets. Data is stored in a Firestore database, authentication is managed via Firebase, and Google Functions handle backend tasks.",
      fr: "Application développée avec React Native pour être utilisée sur des tablettes Android. Les données sont stockées sur une base de donnée Firestore, l’authentification se fait via Firebase et des Google Functions.",
    },
    stack: [tech["reactNative"], tech["firebase"]],
  },
  {
    name: "Edilians - boite à boutons",
    slug: "edilians",
    link: "/projects/edilians",
    projectType: ProjectTypes.contract,
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
      en: "A tablet application designed to record and tack industrial waste identified on production lines. The app can be customized by selecting the most common defect types, button colors, and the number of buttons displayed. Operators can quickly log defects identified on their production line. The app includes a 'statistics' module that displays charts on daily waste statistics (by defect type, by wagon).",
      fr: "Application tablette permettant l’enregistrement des rebus industriels identifiés sur les chaines de productions. L’app permet de personnaliser son écran de travail en choisissant les types de défauts les plus courants, la couleur et la quantité des boutons affichés. L’opérateur peut ensuite rapidement saisir les défauts identifiés sur sa ligne de production. L’app inclut un module ‘statistique’ affichant des graphiques sur les statistiques des rebus du jour (par type de défaut, par wagon).",
    },
    techDescription: {
      en: "The app (frontend) was developed with React Native, using React Query to synchronize data with the database. In the absence of an internet connection, the app stores data locally and synchronizes it in batches when the connection becomes available again.",
      fr: "L’app (frontend) a été développée avec React Native, et React Query pour synchroniser les données avec la base de données. En l’absence de connexion internet l’app stock les données en local, puis synchronise les données en batch lorsque la connexion est à nouveau disponible.",
    },
    stack: [tech["react"], tech["reactQuery"]],
  },
  {
    name: "React hooks",
    slug: "react-hooks",
    link: "/projects/hooks",
    projectType: ProjectTypes.hobby,
    featureImage: "/images/projects/hooks-feature.png",
    images: [
      "/images/projects/hooks-1.png",
      "/images/projects/hooks-2.png",
      "/images/projects/hooks-3.png",
      "/images/projects/hooks-4.png",
      "/images/projects/hooks-5.png",
    ],
    description: {
      en: "Small learning project around React hooks.",
      fr: "Petit projet autour des hooks de React.",
    },
    longDescription: {
      en: "A website designed to learn about React hooks: useContext, useReducer, useRef, and custom hooks. Each example features an interactive mini-application with accompanying code snippets and explanations about how the hook works.",
      fr: "Site pour renforcer l’apprentissage des ‘hooks’ de React: useContext, useReducer, useRef et custom hooks. Chaque exemple propose une mini application interactive accompagnée de code snippets, et des explications sur le fonctionnement du ‘hook’.",
    },
    techDescription: {
      en: "The site was developed using Next.js (Page Router) and React.",
      fr: "Site développé avec NextJS (Page Router) et React.",
    },
    stack: [tech["nextjs"], tech["react"]],
    externalLink: "https://react-fishing-rod.vercel.app/",
  },
];
