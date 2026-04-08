import type { TimelineEntry } from "@/types";

export const experiences: TimelineEntry[] = [
  {
    label: "Ingénieur Full Stack",
    year: "Octobre 2019 à Aujourd'hui",
    side: "KLEE Group, Lyon",
    description:
      "Au sein d'une équipe d'une quinzaine de personnes, dans une méthodologie Agile (Scrum), " +
      "j'interviens sur les développements Full Stack (J2EE avec framework maison puis Spring + Angular) sur une application web pour un client du secteur public.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F923517225281245187%2Fy6HL6w6L.jpg&f=1&nofb=1",
    technos: ["J2EE", "Spring", "Angular"]
  },
  {
    label: "Apprentissage",
    year: "Septembre 2018 à Septembre 2019",
    side: "Radioactiv'IT, Sophia Antipolis",
    description:
      "Concevoir et implémenter l'interface utilisateur d'un outil de Business Intelligence.",
    image: "https://avatars1.githubusercontent.com/u/34623894?s=200&v=4",
    technos: ["VueJS", "Vuetify", "Typescript", "GraphQL", "NestJS"]
  },
  {
    label: "Stage",
    year: "Juin et Juillet 2017",
    side: "OPAC Savoie, Chambéry",
    description:
      "Développer des scripts d'automatisation de tâches métiers en Java et Python.",
    image: "http://www.aigueblanche.fr/img/2013/07/OPAC-Savoie2.jpg",
    technos: ["Java", "Python"]
  }
];
