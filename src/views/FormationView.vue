<template>
  <section id="formation">
    <h1>C'est une longue histoire 🎓</h1>

    <TimelineSection :entries="formations" />
  </section>
</template>

<script setup lang="ts">
import TimelineSection from "@/components/TimelineSection.vue"
import { formations } from "@/data/formations"
</script>
