<template>
  <div class="skill-list my-5">
    <div class="d-flex align-center justify-start">
      <span>Filtrer par : </span>
      <v-chip-group v-model="skillType" color="primary">
        <v-chip filter class="mx-5" value="Front">
          Front
        </v-chip>
        <v-chip filter value="Back">
          Back
        </v-chip>
      </v-chip-group>
    </div>
    <div class="mt-5 d-flex flex-wrap">
      <v-hover v-for="skill in filteredSkills" :key="skill.label">
        <template v-slot:default="{ isHovering, props }">
          <v-progress-circular
            v-bind="props"
            :size="120"
            :width="8"
            :model-value="skill.percent"
            color="primary"
            class="ma-6"
          >
            <div v-if="!isHovering" class="d-flex flex-column text-center">
              <v-icon v-if="skill.icon" :icon="skill.icon"></v-icon>
              <div
                :class="{
                  'text-black': !theme.global.current.value.dark,
                  'text-white': theme.global.current.value.dark
                }"
              >
                {{ skill.label }}
              </div>
            </div>
            <span v-else class="text-black">{{ skill.percent }}%</span>
          </v-progress-circular>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

interface Skill {
  label: string;
  icon?: string;
  percent: number;
  type: "Front" | "Back";
}

export default defineComponent({
  name: "SkillList",
  setup() {
    return { theme: useTheme() };
  },
  data: () => ({
    skillType: null as string | null,
    skills: [
      {
        label: "Typescript",
        icon: "mdi-language-typescript",
        percent: 90,
        type: "Front"
      },
      {
        label: "CSS",
        icon: "mdi-language-css3",
        percent: 80,
        type: "Front"
      },
      {
        label: "HTML",
        icon: "mdi-language-html5",
        percent: 90,
        type: "Front"
      },
      {
        label: "VueJS",
        icon: "mdi-vuejs",
        percent: 90,
        type: "Front"
      },
      {
        label: "Angular",
        icon: "mdi-angular",
        percent: 90,
        type: "Front"
      },
      {
        label: "React",
        icon: "mdi-react",
        percent: 40,
        type: "Front"
      },
      {
        label: "React Native",
        icon: "mdi-cellphone",
        percent: 50,
        type: "Front"
      },
      {
        label: "Java",
        icon: "mdi-language-java",
        percent: 60,
        type: "Back"
      },
      {
        label: "Spring",
        icon: "mdi-leaf",
        percent: 50,
        type: "Back"
      },
      {
        label: "Python",
        icon: "mdi-language-python",
        percent: 20,
        type: "Back"
      }
    ] as Skill[]
  }),
  computed: {
    filteredSkills: function() {
      return this.skills.filter(
        skill => skill.type === this.skillType || !this.skillType
      );
    }
  }
});
</script>
