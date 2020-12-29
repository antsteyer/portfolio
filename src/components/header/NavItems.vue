<template>
  <div v-if="$vuetify.breakpoint.mdAndUp">
    <v-btn
      v-for="item in items"
      :key="item.label"
      class="ma-2"
      :to="item.routerLink"
      text
      >{{ item.label }}</v-btn
    >
  </div>
  <v-menu offset-y v-else>
    <template v-slot:activator="{ on, attrs }">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        v-bind="attrs"
        v-on="on"
      ></v-app-bar-nav-icon>
    </template>
    <div class="d-flex flex-column">
      <v-btn
        v-for="item in items"
        :key="item.label"
        class="ma-2"
        :to="item.routerLink"
        text
        >{{ item.label }}</v-btn
      >
    </div>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavItems",
  components: {},
  data: () => ({
    items: [
      {
        label: "Home",
        routerLink: "/home"
      },
      {
        label: "Contact",
        routerLink: "/Contact"
      }
    ]
  })
});
</script>
