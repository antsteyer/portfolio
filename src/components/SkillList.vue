<template>
  <div class="skill-list my-5">
    <div
      class="d-flex align-center justify-start"
      role="group"
      aria-labelledby="skill-filter-label"
    >
      <span id="skill-filter-label">Filtrer par :</span>

      <VChipGroup v-model="skillType" color="primary" selected-class="text-on-primary">
        <VChip
          v-for="type in SKILL_TYPES"
          :key="type"
          filter
          class="mx-2"
          :value="type"
          :variant="skillType === type ? 'flat' : 'tonal'"
        >
          {{ type }}
        </VChip>
      </VChipGroup>
    </div>

    <ul class="mt-5 d-flex flex-wrap skill-items">
      <li v-for="skill in filteredSkills" :key="skill.label">
        <VHover>
          <template #default="{ isHovering, props: hoverProps }">
            <VProgressCircular
              v-bind="hoverProps"
              :size="120"
              :width="8"
              :model-value="skill.percent"
              color="primary"
              class="ma-6"
              :aria-label="`${skill.label}, niveau de maîtrise ${skill.percent}%`"
            >
              <div
                v-if="!isHovering"
                class="d-flex flex-column align-center text-center"
                :class="isDark ? 'skill-label-dark' : 'skill-label-light'"
                aria-hidden="true"
              >
                <VIcon :icon="skill.icon" />

                <span>{{ skill.label }}</span>
              </div>

              <span
                v-else
                class="font-weight-bold"
                :class="isDark ? 'skill-label-dark' : 'skill-label-light'"
                aria-hidden="true"
              >
                {{ skill.percent }}%
              </span>
            </VProgressCircular>
          </template>
        </VHover>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { skills } from "@/data/skills"
import { SKILL_TYPES, type SkillType } from "@/types"
import { useAppTheme } from "@/composables/useAppTheme"

const { isDark } = useAppTheme()
const skillType = ref<SkillType | null>(null)

const filteredSkills = computed(() =>
  skillType.value ? skills.filter(s => s.type === skillType.value) : skills
)
</script>

<style scoped>
.skill-items {
  list-style: none;
  padding-inline-start: 0;
}

.skill-label-dark {
  color: white;
}

.skill-label-light {
  color: black;
}
</style>
