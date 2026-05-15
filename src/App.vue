<template>
  <VApp id="app">
    <a href="#main-content" class="skip-link">{{ t("header.skipToContent") }}</a>

    <VAppBar elevate-on-scroll>
      <VAppBarNavIcon
        v-if="!mdAndUp"
        :aria-label="t('header.openMenu')"
        :title="t('header.openMenu')"
        @click.stop="drawer = !drawer"
      />

      <VBtn id="app-title" variant="text" color="primary" to="/" :aria-label="t('header.homeAria')">
        ANT
      </VBtn>

      <VSpacer />

      <NavItems v-if="mdAndUp" />

      <LocaleSwitcher class="mx-2" />

      <VBtn
        :icon="mdiThemeLightDark"
        variant="text"
        :aria-label="isDark ? t('header.themeToLight') : t('header.themeToDark')"
        :title="isDark ? t('header.themeToLight') : t('header.themeToDark')"
        @click="toggle"
      />
    </VAppBar>

    <VNavigationDrawer v-if="!mdAndUp" v-model="drawer" floating>
      <NavItems />
    </VNavigationDrawer>

    <VMain id="main-content" tabindex="-1">
      <VContainer fluid style="max-width: 1300px" class="pa-8">
        <RouterView />
      </VContainer>
    </VMain>

    <VFooter app color="primary" class="d-flex flex-wrap justify-space-around ga-4 py-6">
      <div class="text-center">
        © {{ new Date().getFullYear() }} — <strong>Antoine Steyer</strong>
      </div>

      <I18nT keypath="footer.madeWith" tag="div" class="text-center" scope="global">
        <template #vue>
          <a href="https://github.com/vuejs/core" rel="noopener noreferrer">Vue</a>
        </template>

        <template #vuetify>
          <a href="https://github.com/vuetifyjs/vuetify" rel="noopener noreferrer">Vuetify</a>
        </template>
      </I18nT>
    </VFooter>
  </VApp>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useDisplay } from "vuetify"
import { useHead, useSeoMeta } from "@unhead/vue"
import { useI18n, I18nT } from "vue-i18n"
import { mdiThemeLightDark } from "@mdi/js"
import NavItems from "@/components/header/NavItems.vue"
import LocaleSwitcher from "@/components/header/LocaleSwitcher.vue"
import { useAppTheme } from "@/composables/useAppTheme"
import { SITE_URL } from "@/config/site"

const { mdAndUp } = useDisplay()
const { isDark, toggle } = useAppTheme()
const { t, locale } = useI18n()
const drawer = ref(false)

useHead({
  htmlAttrs: { lang: locale }
})

useSeoMeta({
  ogSiteName: computed(() => t("common.siteName")),
  ogType: "website",
  ogLocale: computed(() => (locale.value === "fr" ? "fr_FR" : "en_US")),
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: computed(() => t("common.siteName")),
  twitterCard: "summary_large_image",
  twitterImage: `${SITE_URL}/og-image.png`
})
</script>
