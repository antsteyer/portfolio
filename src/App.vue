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
        v-if="!$vuetify.breakpoint.mdAndUp"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" bottom temporary>
      <NavItems></NavItems>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="max-width: 1300px" class="pa-8 mb-10">
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

  #app-title {
    font-size: large;

    &.theme--light {
      color: black !important;
      &::before {
        color: var(--v-primary-base) !important;
        opacity: 1;
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
      &::before {
        clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
      }

      &:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
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
    background: var(--v-primary-base);
  }

  footer.v-footer {
    color: black;

    a {
      color: #3366bb;
    }
  }
}
</style>
