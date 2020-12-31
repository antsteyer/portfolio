<template>
  <v-app app id="app">
    <v-app-bar app elevate-on-scroll>
      <v-btn text id="app-title" to="/">ANT</v-btn>
      <v-spacer></v-spacer>

      <NavItems v-if="$vuetify.breakpoint.mdAndUp"></NavItems>
      <v-icon
        aria-label="Changer le thème"
        title="Changer le thème"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >mdi-theme-light-dark</v-icon
      >
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.mdAndUp"
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
        <span class="ml-10"
          >Made with <a href="https://github.com/vuejs/vue">Vue</a> and
          <a href="https://github.com/vuetifyjs/vuetify">Vuetify</a></span
        >
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
    &::before {
      transition: 0.4s cubic-bezier(1, -1, 0, 2);
      clip-path: polygon(25% 50%, 75% 50%, 75% 75%, 25% 75%);
    }
    &:hover::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  a {
    &::before {
      transition: 0.4s cubic-bezier(1, -1, 0, 2);
      clip-path: polygon(25% 50%, 75% 50%, 75% 75%, 25% 75%);
    }
    &:hover::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  #app-title {
    font-size: large;

    &.theme--light {
      &::before {
        opacity: 1;
        background: aquamarine;
        clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
      }

      &:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }

    &:hover::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    &.theme--dark {
      color: aquamarine;
      &::before {
        clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
      }

      &:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
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

  .v-timeline:before {
    background: aquamarine;
  }

  footer.v-footer {
    background: aquamarine;
    color: black;
  }
}
</style>
