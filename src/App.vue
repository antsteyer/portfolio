<template>
  <v-app id="app">
    <v-app-bar elevate-on-scroll>
      <v-btn id="app-title" variant="text" color="primary" to="/">ANT</v-btn>
      <v-spacer />

      <NavItems v-if="mdAndUp" />

      <v-btn
        icon="mdi-theme-light-dark"
        variant="text"
        :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
        :title="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
        @click="toggle"
      />

      <v-app-bar-nav-icon
        v-if="!mdAndUp"
        aria-label="Ouvrir le menu de navigation"
        title="Ouvrir le menu de navigation"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer v-if="!mdAndUp" v-model="drawer" floating>
      <NavItems />
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="max-width: 1300px" class="pa-8">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app color="primary" class="d-flex flex-wrap justify-space-around ga-4 py-6">
      <div class="text-center">
        © {{ new Date().getFullYear() }} — <strong>Antoine Steyer</strong>
      </div>
      <div class="text-center">
        Made with
        <a href="https://github.com/vuejs/vue" rel="noopener noreferrer">Vue</a>
        and
        <a href="https://github.com/vuetifyjs/vuetify" rel="noopener noreferrer">Vuetify</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import NavItems from "@/components/header/NavItems.vue";
import { useAppTheme } from "@/composables/useAppTheme";

const { mdAndUp } = useDisplay();
const { isDark, toggle } = useAppTheme();
const drawer = ref(false);
</script>
