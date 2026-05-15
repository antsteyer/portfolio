import { mdiBinoculars, mdiFileTree, mdiAccountGroup } from "@mdi/js"
import type { Highlight } from "@/types"

export const highlights: Highlight[] = [
  {
    icon: mdiBinoculars,
    title: "Curieux",
    description:
      "des nouvelles technologies et des évolutions des principaux frameworks Web, je suis aussi sensible à l'ergonomie et à l'accessibilité des applications et sites web."
  },
  {
    icon: mdiFileTree,
    title: "Rigoureux",
    description:
      "dans mon code et mon organisation, je me documente régulièrement pour apprendre les bonnes pratiques de développement. Do Less, Better !"
  },
  {
    icon: mdiAccountGroup,
    title: "Collaboratif",
    description:
      "à l'aise dans le travail en équipe, j'aime partager mes connaissances et apprendre des autres lors des revues de code et du pair programming."
  }
]
