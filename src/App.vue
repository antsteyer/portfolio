<template>
  <VApp id="app">
    <VAppBar elevate-on-scroll>
      <VBtn id="app-title" variant="text" color="primary" to="/">ANT</VBtn>

      <VSpacer />

      <NavItems v-if="mdAndUp" />

      <VBtn
        icon="mdi-theme-light-dark"
        variant="text"
        :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
        :title="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
        @click="toggle"
      />

      <VAppBarNavIcon
        v-if="!mdAndUp"
        aria-label="Ouvrir le menu de navigation"
        title="Ouvrir le menu de navigation"
        @click.stop="drawer = !drawer"
      />
    </VAppBar>

    <VNavigationDrawer v-if="!mdAndUp" v-model="drawer" floating>
      <NavItems />
    </VNavigationDrawer>

    <VMain>
      <VContainer fluid style="max-width: 1300px" class="pa-8">
        <RouterView />
      </VContainer>
    </VMain>

    <VFooter app color="primary" class="d-flex flex-wrap justify-space-around ga-4 py-6">
      <div class="text-center">
        © {{ new Date().getFullYear() }} — <strong>Antoine Steyer</strong>
      </div>

      <div class="text-center">
        Made with
        <a href="https://github.com/vuejs/vue" rel="noopener noreferrer">Vue</a>
        and
        <a href="https://github.com/vuetifyjs/vuetify" rel="noopener noreferrer">Vuetify</a>
      </div>
    </VFooter>
  </VApp>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useDisplay } from "vuetify"
import NavItems from "@/components/header/NavItems.vue"
import { useAppTheme } from "@/composables/useAppTheme"

const { mdAndUp } = useDisplay()
const { isDark, toggle } = useAppTheme()
const drawer = ref(false)
</script>
