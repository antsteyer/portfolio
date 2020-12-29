<template>
  <v-app app>
    <v-app-bar app elevate-on-scroll color="white">
      <v-toolbar-title>Antoine Steyer</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavItems></NavItems>
    </v-app-bar>

    <v-main>
      <v-container fluid style="max-width: 1300px">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        © {{ new Date().getFullYear() }} — <strong>Antoine Steyer</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavItems from "@/components/header/NavItems.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavItems
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
