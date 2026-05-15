<template>
  <VBtnToggle
    :model-value="locale"
    mandatory
    density="comfortable"
    color="primary"
    divided
    class="locale-switcher"
    :aria-label="t('header.localeSwitcher')"
    @update:model-value="onChange"
  >
    <VBtn
      v-for="code in SUPPORTED_LOCALES"
      :key="code"
      :value="code"
      :lang="code"
      size="small"
      :variant="locale === code ? 'flat' : 'outlined'"
      :class="{ 'font-weight-bold': locale === code }"
      :aria-pressed="locale === code"
      selected-class="text-on-primary"
    >
      {{ code.toUpperCase() }}
    </VBtn>
  </VBtnToggle>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { SUPPORTED_LOCALES, setLocale, type AppLocale } from "@/i18n"

const { t, locale: i18nLocale } = useI18n()
const locale = computed(() => i18nLocale.value as AppLocale)

function onChange(value: AppLocale | null): void {
  if (value && value !== locale.value) setLocale(value)
}
</script>
