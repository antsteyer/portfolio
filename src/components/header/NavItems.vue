<template>
  <div :class="{ 'd-flex flex-column': $vuetify.breakpoint.smAndDown }">
    <v-btn
      v-for="item in items"
      :key="item.label"
      class="ma-2"
      :to="item.routerLink"
      text
      >{{ item.label }}</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavItems",
  components: {},
  data: () => ({
    items: [
      {
        label: "Formation",
        routerLink: "/formation"
      },
      {
        label: "Expériences",
        routerLink: "/experiences"
      },
      {
        label: "Contact",
        routerLink: "/contact"
      }
    ]
  })
});
</script>
