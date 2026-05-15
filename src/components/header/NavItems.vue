<template>
  <nav :class="{ 'd-flex flex-column': smAndDown }" aria-label="Navigation principale">
    <VBtn v-for="item in navItems" :key="item.to" class="ma-2" variant="text" :to="item.to">
      {{ item.label }}
    </VBtn>
  </nav>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { navItems } from "@/data/navItems"

const { smAndDown } = useDisplay()
</script>
