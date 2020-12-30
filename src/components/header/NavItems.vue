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

<style lang="scss" scoped>
a {
  &::before {
    transition: 0.4s cubic-bezier(1, -1, 0, 2);
    clip-path: polygon(25% 50%, 75% 50%, 75% 75%, 25% 75%);
  }
  &:hover::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
