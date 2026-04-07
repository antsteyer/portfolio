<template>
  <div :class="{ 'd-flex flex-column': display.smAndDown.value }">
    <v-btn
      v-for="item in items"
      :key="item.label"
      class="ma-2"
      :to="item.routerLink"
      variant="text"
      >{{ item.label }}</v-btn
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";

export default defineComponent({
  name: "NavItems",
  setup() {
    return { display: useDisplay() };
  },
  data: () => ({
    items: [
      { label: "Formation", routerLink: "/formation" },
      { label: "Expériences", routerLink: "/experiences" },
      { label: "Contact", routerLink: "/contact" }
    ]
  })
});
</script>
