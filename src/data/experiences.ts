import type { TimelineEntry } from "@/types"

export const experiences: TimelineEntry[] = [
  {
    label: "Ingénieur Full Stack",
    year: "Octobre 2019 à Aujourd'hui",
    side: "KLEE Group, Lyon",
    description:
      "Au sein d'une équipe d'une quinzaine de personnes, dans une méthodologie Agile (Scrum), " +
      "j'interviens sur les développements Full Stack (J2EE avec framework maison puis Spring + Angular) sur une application web pour un client du secteur public.",
    image: "/img/logos/klee-group.webp",
    technos: ["J2EE", "Spring", "Angular"]
  },
  {
    label: "Apprentissage",
    year: "Septembre 2018 à Septembre 2019",
    side: "Radioactiv'IT, Sophia Antipolis",
    description:
      "Concevoir et implémenter l'interface utilisateur d'un outil de Business Intelligence.",
    image: "/img/logos/radioactivit.webp",
    technos: ["VueJS", "Vuetify", "Typescript", "GraphQL", "NestJS"]
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
