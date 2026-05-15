<template>
  <section class="contact">
    <h1>Ne nous perdons pas de vue ! 📫</h1>

    <p class="mt-10">
      Si tu veux simplement me dire bonjour ou si tu as envie de travailler avec moi, n'hésite pas à
      me laisser un petit mot par email ou sur l'un de mes réseaux ci-dessous. Je serai ravi
      d'échanger avec toi !
    </p>

    <VCard class="mt-10" width="fit-content">
      <VCardText class="d-flex flex-column flex-md-row justify-center align-center">
        <VTooltip
          v-for="link in contactLinks"
          :key="link.label"
          location="bottom"
          :text="link.funnyCatchPhrase"
          :aria-label="link.funnyCatchPhrase"
        >
          <template #activator="{ props: activatorProps }">
            <VBtn
              v-bind="activatorProps"
              variant="text"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :color="colorFor(link)"
              :aria-label="`Accéder à ${link.label}`"
            >
              <VIcon start :icon="link.icon" />
              {{ link.label }}
            </VBtn>
          </template>
        </VTooltip>
      </VCardText>
    </VCard>
  </section>
</template>

<script setup lang="ts">
import { useAppTheme } from "@/composables/useAppTheme"
import { contactLinks } from "@/data/contactLinks"
import type { ContactLink } from "@/types"

const { isDark } = useAppTheme()

function colorFor(link: ContactLink): string {
  return isDark.value && link.darkModeColor ? link.darkModeColor : link.color
}
</script>
