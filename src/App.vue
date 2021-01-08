<template>
  <v-app app id="app">
    <v-app-bar app elevate-on-scroll>
      <v-btn text id="app-title" color="primary" to="/">ANT</v-btn>
      <v-spacer></v-spacer>

      <NavItems v-if="$vuetify.breakpoint.mdAndUp"></NavItems>
      <v-icon
        aria-label="Changer le thème"
        title="Changer le thème"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >mdi-theme-light-dark</v-icon
      >
      <v-app-bar-nav-icon
        aria-label="Ouvrir le menu de navigation"
        title="Ouvrir le menu de navigation"
        v-if="!$vuetify.breakpoint.mdAndUp"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
      floating
    >
      <NavItems></NavItems>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="max-width: 1300px" class="pa-8 mb-16">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless absolute color="primary">
      <v-col class="text-center" cols="12" md="6">
        © {{ new Date().getFullYear() }} — <strong>Antoine Steyer</strong>
      </v-col>
      <v-col class="text-center" cols="12" md="6">
        Made with <a href="https://github.com/vuejs/vue">Vue</a> and
        <a href="https://github.com/vuetifyjs/vuetify">Vuetify</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavItems from "@/components/header/NavItems.vue";

export default Vue.extend({
  name: "App",
  metaInfo: {
    title: "Antoine Steyer"
  },

  components: {
    NavItems
  },

  data: () => ({
    drawer: false
  })
});
</script>
