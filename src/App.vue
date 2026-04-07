<template>
  <v-app id="app">
    <v-app-bar elevate-on-scroll>
      <v-btn variant="text" id="app-title" color="primary" to="/">ANT</v-btn>
      <v-spacer></v-spacer>

      <NavItems v-if="display.mdAndUp.value"></NavItems>
      <v-icon
        aria-label="Changer le thème"
        title="Changer le thème"
        @click="toggleTheme"
        icon="mdi-theme-light-dark"
      ></v-icon>
      <v-app-bar-nav-icon
        aria-label="Ouvrir le menu de navigation"
        title="Ouvrir le menu de navigation"
        v-if="!display.mdAndUp.value"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="!display.mdAndUp.value"
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

    <v-footer absolute color="primary">
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
import { defineComponent, ref } from "vue";
import { useDisplay, useTheme } from "vuetify";
import NavItems from "@/components/header/NavItems.vue";

export default defineComponent({
  name: "App",
  components: { NavItems },
  setup() {
    const display = useDisplay();
    const theme = useTheme();
    const drawer = ref(false);
    const toggleTheme = () => {
      theme.global.name.value =
        theme.global.current.value.dark ? "light" : "dark";
    };
    return { display, drawer, toggleTheme };
  },
  mounted() {
    document.title = "Antoine Steyer";
  }
});
</script>
