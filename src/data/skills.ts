import {
  mdiLanguageTypescript,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiVuejs,
  mdiAngular,
  mdiReact,
  mdiCellphone,
  mdiLanguageJava,
  mdiLeaf,
  mdiLanguagePython,
  mdiGraphql
} from "@mdi/js"
import type { Skill } from "@/types"

export const skills: Skill[] = [
  { label: "Typescript", icon: mdiLanguageTypescript, percent: 90, type: "Front" },
  { label: "CSS", icon: mdiLanguageCss3, percent: 80, type: "Front" },
  { label: "HTML", icon: mdiLanguageHtml5, percent: 90, type: "Front" },
  { label: "VueJS", icon: mdiVuejs, percent: 90, type: "Front" },
  { label: "Angular", icon: mdiAngular, percent: 80, type: "Front" },
  { label: "React", icon: mdiReact, percent: 40, type: "Front" },
  { label: "React Native", icon: mdiCellphone, percent: 50, type: "Front" },
  { label: "Flutter", icon: mdiCellphone, percent: 30, type: "Front" },
  { label: "Java", icon: mdiLanguageJava, percent: 30, type: "Back" },
  { label: "Spring", icon: mdiLeaf, percent: 30, type: "Back" },
  { label: "Python", icon: mdiLanguagePython, percent: 20, type: "Back" },
  { label: "GraphQL", icon: mdiGraphql, percent: 40, type: "Back" }
]
