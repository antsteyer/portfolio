<template>
  <p v-if="intro">{{ intro }}</p>

  <ul v-if="bullets.length">
    <li v-for="(bullet, index) in bullets" :key="index">{{ bullet }}</li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const props = defineProps<{
  namespace: string
  entryKey: string
}>()

const { tm, locale } = useI18n({ useScope: "global" })

const intro = computed<string | null>(() => {
  void locale.value
  const raw = tm(`${props.namespace}.${props.entryKey}.intro`) as unknown
  return typeof raw === "string" ? raw : null
})

const bullets = computed<string[]>(() => {
  void locale.value
  const raw = tm(`${props.namespace}.${props.entryKey}.bullets`) as unknown
  return Array.isArray(raw) ? (raw as string[]) : []
})
</script>
