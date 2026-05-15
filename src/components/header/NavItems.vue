<template>
  <nav :class="{ 'd-flex flex-column': smAndDown }" :aria-label="t('header.mainNav')">
    <VBtn v-for="item in navItems" :key="item.to" class="ma-2" variant="text" :to="item.to">
      {{ t(`nav.${item.key}`) }}
    </VBtn>
  </nav>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { useI18n } from "vue-i18n"
import { navItems } from "@/data/navItems"

const { smAndDown } = useDisplay()
const { t } = useI18n()
</script>
