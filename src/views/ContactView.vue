<template>
  <section class="contact">
    <h1>{{ t("contact.title") }}</h1>

    <p class="mt-10">{{ t("contact.intro") }}</p>

    <VCard class="mt-10" width="fit-content">
      <VCardText>
        <ul class="d-flex flex-column flex-md-row justify-center align-center contact-links">
          <li v-for="link in contactLinks" :key="link.key">
            <VTooltip
              location="bottom"
              attach="#main-content"
              :text="t(`contactLinks.${link.key}.funnyCatchPhrase`)"
              :aria-label="t(`contactLinks.${link.key}.funnyCatchPhrase`)"
            >
              <template #activator="{ props: activatorProps }">
                <VBtn
                  v-bind="activatorProps"
                  variant="text"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                  :color="colorFor(link)"
                  :aria-label="
                    link.external
                      ? t('contact.linkAriaExternal', {
                          label: t(`contactLinks.${link.key}.label`)
                        })
                      : t('contact.linkAria', { label: t(`contactLinks.${link.key}.label`) })
                  "
                >
                  <VIcon start :icon="link.icon" />
                  {{ t(`contactLinks.${link.key}.label`) }}
                </VBtn>
              </template>
            </VTooltip>
          </li>
        </ul>
      </VCardText>
    </VCard>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useAppTheme } from "@/composables/useAppTheme"
import { contactLinks } from "@/data/contactLinks"
import { useRouteSeo } from "@/composables/useRouteSeo"
import type { ContactLink } from "@/types"

const { t } = useI18n()
const { isDark } = useAppTheme()

useRouteSeo({
  titleKey: "meta.contact",
  descriptionKey: "meta.descriptions.contact",
  path: "/contact"
})

function colorFor(link: ContactLink): string {
  return isDark.value && link.darkModeColor ? link.darkModeColor : link.color
}
</script>

<style scoped>
.contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
