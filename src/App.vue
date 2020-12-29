<template>
  <v-app app>
    <v-app-bar app elevate-on-scroll color="white">
      <v-toolbar-title>Antoine Steyer</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavItems></NavItems>
    </v-app-bar>

    <v-main>
      <v-container fluid style="max-width: 1300px" class="pa-8">
        <transition name="fade">
          <router-view></router-view>
        </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
