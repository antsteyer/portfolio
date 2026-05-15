<template>
  <nav :class="{ 'd-flex flex-column': smAndDown }" aria-label="Navigation principale">
    <v-btn
      v-for="item in navItems"
      :key="item.to"
      class="ma-2"
      variant="text"
      :to="item.to"
    >
      {{ item.label }}
    </v-btn>
  </nav>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { navItems } from "@/data/navItems";

const { smAndDown } = useDisplay();
</script>
