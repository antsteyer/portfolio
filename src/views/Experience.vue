<template>
  <div id="experience">
    <h1>J'ai apporté ma pierre à ces édifices 💼</h1>

    <v-timeline class="mt-10" :density="display.smAndDown.value ? 'compact' : 'default'" side="end">
      <v-timeline-item
        v-for="(experienceItem, index) in experiences"
        :key="index + experienceItem.label"
        size="large"
        dot-color="white"
      >
        <template v-slot:icon v-if="experienceItem.image">
          <v-avatar>
            <img :src="experienceItem.image" alt="Icône de la formation" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span class="font-weight-bold">{{ experienceItem.year }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ experienceItem.label }}
          </v-card-title>
          <v-card-subtitle>
            <v-icon size="small" icon="mdi-map-marker"></v-icon>
            {{ experienceItem.company }}
          </v-card-subtitle>
          <v-card-text v-html="experienceItem.description"></v-card-text>
          <v-divider></v-divider>
          <v-card-actions v-if="experienceItem.technos">
            <v-chip-group>
              <v-chip
                v-for="(tech, iTech) in experienceItem.technos"
                :key="iTech + tech"
                >{{ tech }}</v-chip
              >
            </v-chip-group>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";

interface ExperienceItem {
  image?: string;
  year: string;
  label: string;
  description: string;
  company: string;
  technos?: string[];
}

export default defineComponent({
  name: "Experience",
  setup() {
    return { display: useDisplay() };
  },
  data: () => ({
    experiences: [
      {
        label: "Ingénieur Full Stack",
        year: "Octobre 2019 à Aujourd'hui",
        company: "KLEE Group, Lyon",
        description:
          "Au sein d'un équipe d'une quinzaine de personne, dans une méthodologie Agile (Scrum), " +
          "j'interviens sur les développements Full Stack (J2EE avec framework maison puis Spring + Angular) sur une application web pour un client du secteur publique.\n" +
          "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F923517225281245187%2Fy6HL6w6L.jpg&f=1&nofb=1",
        technos: ["J2EE", "Spring", "Angular"]
      },
      {
        label: "Apprentissage",
        year: "Septembre 2018 à Septembre 2019",
        company: "Radioactiv'IT, Sophia Antipolis",
        description:
          "Concevoir et implémenter l'interface utilisateur d'un outil de Business Intelligence.",
        image: "https://avatars1.githubusercontent.com/u/34623894?s=200&v=4",
        technos: ["VueJS", "Vuetify", "Typescript", "Graphql", "NestJs"]
      },
      {
        label: "Stage",
        year: "Juin et Juillet 2017",
        company: "OPAC Savoie, Chambéry",
        description:
          "Développer des scripts d’automatisation de taches métiers en Java et Python.",
        image: "http://www.aigueblanche.fr/img/2013/07/OPAC-Savoie2.jpg",
        technos: ["Java", "Python"]
      }
    ] as ExperienceItem[]
  })
});
</script>
