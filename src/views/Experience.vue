<template>
  <section id="experience">
    <h1>J'ai apporté ma pierre à ces édifices 💼</h1>
    <TimelineSection :entries="experiences" />
  </section>
</template>

<script setup lang="ts">
import TimelineSection from "@/components/TimelineSection.vue";
import { experiences } from "@/data/experiences";
</script>
