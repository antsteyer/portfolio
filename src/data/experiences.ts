import type { TimelineEntry } from "@/types"

export const experiences: TimelineEntry[] = [
  {
    label: "Développeur Front-End",
    year: "Février 2023 à Aujourd'hui",
    side: "Agorize, Paris",
    description:
      "<ul>" +
      "<li>Développer de nouvelles fonctionnalités sur l'application Vue SPA et SSR</li>" +
      "<li>Migrer de Vue 2 à Vue 3 (et passage de Webpack à Vite)</li>" +
      "<li>Rendre l'application accessible en respectant le WCAG AA</li>" +
      "</ul>",
    image: "/img/logos/agorize.webp",
    technos: ["Vue 2 et 3", "Accessibilité", "SSR", "Node.js", "Express", "AWS", "Docker"]
  },
  {
    label: "Développeur Front-End",
    year: "Juillet 2022 à Janvier 2023",
    side: "Myre, Lyon",
    description:
      "<ul>" +
      "<li>Développer de nouvelles fonctionnalités</li>" +
      "<li>Concevoir, créer et intégrer de nouveaux modules cross-app Angular</li>" +
      "<li>Optimiser les performances des modules Angular</li>" +
      "</ul>",
    image: "/img/logos/myre.webp",
    technos: ["Angular", "Storybook", "Node.js", "AWS", "Docker"]
  },
  {
    label: "Développeur Full-Stack",
    year: "Octobre 2019 à Juin 2022",
    side: "Klee Group, Lyon",
    description:
      "<ul>" +
      "<li>Développer de nouvelles fonctionnalités full-stack pour différents clients du secteur public</li>" +
      "<li>Participer aux réflexions UX/UI et animer les cérémonies en tant que Scrum Master</li>" +
      "</ul>",
    image: "/img/logos/klee-group.webp",
    technos: ["Angular (8 à 12)", "Spring", "Scrum", "Figma"]
  },
  {
    label: "Apprentissage",
    year: "Septembre 2018 à Septembre 2019",
    side: "Radioactiv'IT, Sophia Antipolis",
    description:
      "<ul>" +
      "<li>Concevoir et implémenter l'interface utilisateur d'un outil de Business Intelligence</li>" +
      "<li>Développements ponctuels sur applications mobiles ou web de clients</li>" +
      "</ul>",
    image: "/img/logos/radioactivit.webp",
    technos: ["VueJS", "NestJS", "GraphQL", "Flutter", "React Native"]
  },
  {
    label: "Stage",
    year: "Juin et Juillet 2017",
    side: "OPAC Savoie, Chambéry",
    description: "Développer des scripts d'automatisation de tâches métiers en Java et Python.",
    image: "/img/logos/opac-savoie.webp",
    technos: ["Java", "Python"]
  }
]
