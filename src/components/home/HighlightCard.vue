<template>
  <div class="d-flex flex-column align-center pa-8 text-center">
    <VAvatar color="primary" size="56">
      <VIcon size="large" color="black" :icon="icon" />
    </VAvatar>

    <span class="my-4 font-weight-bold">{{ title }}</span>

    <p>
      <slot>{{ description }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description?: string
}>()
</script>
