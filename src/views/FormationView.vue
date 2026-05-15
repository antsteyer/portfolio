<template>
  <section id="formation">
    <h1>{{ t("formation.title") }}</h1>

    <TimelineSection :entries="formations" namespace="formations" />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import TimelineSection from "@/components/TimelineSection.vue"
import { formations } from "@/data/formations"

const { t } = useI18n()
</script>
