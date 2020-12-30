<template>
  <v-app app id="app">
    <v-app-bar app elevate-on-scroll color="white">
      <v-btn text id="app-title" to="/">ANT</v-btn>
      <v-spacer></v-spacer>
      <NavItems v-if="$vuetify.breakpoint.mdAndUp"></NavItems>
      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute right temporary>
      <NavItems></NavItems>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="max-width: 1300px" class="pa-8 mb-10">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless absolute>
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

<style lang="scss">
#app {
  a {
    text-decoration: none;
  }

  #app-title {
    font-size: large;

    &::before {
      opacity: 1;
      background: aquamarine;
      clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
    }
  }

  footer.v-footer.theme--light {
    background: aquamarine;
  }

  .v-card__title {
    word-break: break-word;
  }

  #formation,
  #experience {
    .v-timeline:before {
      left: calc(50% - 5px);
    }
  }

  .v-timeline:before {
    width: 10px;
  }

  .theme--light.v-timeline:before {
    background: aquamarine;
  }
}

footer.v-footer.theme--light {
  background: aquamarine;
}
</style>
