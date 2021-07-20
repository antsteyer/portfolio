<template>
  <div id="formation">
    <h1>C'est une longue histoire ‍🎓</h1>

    <v-timeline class="mt-10" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(formationItem, index) in formations"
        :key="index + formationItem.label"
        large
      >
        <template v-slot:icon v-if="formationItem.image">
          <v-avatar>
            <img :src="formationItem.image" alt="Icône de la formation" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span class="font-weight-bold">{{ formationItem.year }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{ formationItem.label }}
          </v-card-title>
          <v-card-subtitle>
            <v-icon small>mdi-map-marker</v-icon>
            {{ formationItem.location }}
          </v-card-subtitle>
          <v-card-text v-html="formationItem.description"></v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface FormationItem {
  image?: string;
  year: string;
  label: string;
  description: string;
  location: string;
}

export default Vue.extend({
  name: "Formation",
  data: () => ({
    formations: [
      {
        year: "2015-2019",
        location: "Polytech' Nice Sophia",
        label: "Diplômes Ingénieur et Master Informatique",
        description:
          "Double diplôme : <ul><li>Ingénieur en Sciences Informatiques, spécialité Interfaces Homme-Machine</li><li>Master Informatique et Ingénierie (IFI) en apprentissage</li></ul>",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAN66SAwGLGtyguZTlbiaMqRaWB38rDfR-OUrb_rNDA%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
      },
      {
        year: "2013-2015",
        location: "Polytech' Annecy Chambéry",
        label: "PeiP - Option Informatique",
        description: "Parcours des écoles d'ingénieurs Polytech.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAN66SAwGLGtyguZTlbiaMqRaWB38rDfR-OUrb_rNDA%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
      },
      {
        year: "2013",
        location: "Lycée Vaugelas - Chambéry",
        label: "BAC S - SVT",
        description: "Mention Bien.",
        image: "img/vaugelas.jpg"
      }
    ] as FormationItem[]
  })
});
</script>
