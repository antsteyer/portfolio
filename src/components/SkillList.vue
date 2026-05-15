<template>
  <div class="skill-list my-5">
    <div class="d-flex align-center justify-start">
      <span>Filtrer par :</span>
      <v-chip-group v-model="skillType" color="primary">
        <v-chip
          v-for="type in SKILL_TYPES"
          :key="type"
          filter
          class="mx-2"
          :value="type"
        >
          {{ type }}
        </v-chip>
      </v-chip-group>
    </div>

    <div class="mt-5 d-flex flex-wrap">
      <v-hover v-for="skill in filteredSkills" :key="skill.label">
        <template #default="{ isHovering, props: hoverProps }">
          <v-progress-circular
            v-bind="hoverProps"
            :size="120"
            :width="8"
            :model-value="skill.percent"
            color="primary"
            class="ma-6"
          >
            <div
              v-if="!isHovering"
              class="d-flex flex-column align-center text-center"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              <v-icon :icon="skill.icon" />
              <span>{{ skill.label }}</span>
            </div>
            <span
              v-else
              class="font-weight-bold"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              {{ skill.percent }}%
            </span>
          </v-progress-circular>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { skills } from "@/data/skills";
import { SKILL_TYPES, type SkillType } from "@/types";
import { useAppTheme } from "@/composables/useAppTheme";

const { isDark } = useAppTheme();
const skillType = ref<SkillType | null>(null);

const filteredSkills = computed(() =>
  skillType.value
    ? skills.filter(s => s.type === skillType.value)
    : skills
);
</script>
