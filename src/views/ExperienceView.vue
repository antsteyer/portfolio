<template>
  <section id="experience">
    <h1>{{ t("experience.title") }}</h1>

    <TimelineSection :entries="experiences" namespace="experiences" />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import TimelineSection from "@/components/TimelineSection.vue"
import { experiences } from "@/data/experiences"
import { useRouteSeo } from "@/composables/useRouteSeo"

const { t } = useI18n()

useRouteSeo({
  titleKey: "meta.experience",
  descriptionKey: "meta.descriptions.experience",
  path: "/experiences"
})
</script>
