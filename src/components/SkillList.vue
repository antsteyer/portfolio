<template>
  <div class="my-5">
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
    <div class="mt-5">
      <v-hover v-for="skill in skills" :key="skill.label">
        <template v-slot:default="{ hover }">
          <v-progress-circular
            :size="120"
            :width="8"
            :value="skill.percent"
            color="#7FFFD4"
            class="ma-6"
            v-show="skill.type === skillType || !skillType"
          >
            <div v-if="!hover" class="d-flex flex-column text-center">
              <v-icon v-if="skill.icon" color="black">{{ skill.icon }}</v-icon>
              <span class="black--text">{{ skill.label }}</span>
            </div>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#7FFFD4"
                style="border-radius: 50%"
              >
                <span class="black--text">{{ skill.percent }}%</span>
              </v-overlay>
            </v-fade-transition>
          </v-progress-circular>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Skill {
  label: string;
  icon?: string;
  percent: number;
  type: "Front" | "Back";
}

export default Vue.extend({
  name: "SkillList",
  data: () => ({
    skillType: null,
    skills: [
      {
        label: "VueJS",
        icon: "mdi-vuejs",
        percent: 90,
        type: "Front"
      },
      {
        label: "Angular",
        icon: "mdi-angular",
        percent: 80,
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
      }
    ] as Skill[]
  })
});
</script>

<style scoped lang="scss">
.v-chip-group .v-chip--active {
  background-color: aquamarine;
  color: black;
  &::before {
    opacity: 0;
  }
}
</style>
