<template>
  <div v-if="smAndDown" class="d-flex flex-column ga-4 mt-10">
    <VCard v-for="entry in entries" :key="entry.label + entry.year" class="elevation-2">
      <div class="px-4 pt-4">
        <VChip size="small" variant="tonal">
          {{ entry.year }}
        </VChip>
      </div>

      <VCardItem>
        <template v-if="entry.image" #prepend>
          <VAvatar
            :image="entry.image"
            :alt="`Icône : ${entry.label}`"
            size="40"
            class="timeline-avatar"
          />
        </template>

        <VCardTitle tag="h2" class="text-h6 text-wrap">
          {{ entry.label }}
        </VCardTitle>

        <VCardSubtitle>
          <VIcon size="small" :icon="mdiMapMarker" />
          {{ entry.side }}
        </VCardSubtitle>
      </VCardItem>
      <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-text-v-html-on-component -->
      <VCardText v-html="entry.description" />

      <template v-if="entry.technos?.length">
        <VDivider />

        <VCardActions>
          <div class="d-flex flex-wrap ga-2">
            <VChip v-for="tech in entry.technos" :key="tech" tag="span">
              {{ tech }}
            </VChip>
          </div>
        </VCardActions>
      </template>
    </VCard>
  </div>

  <VTimeline v-else class="mt-10" side="end">
    <VTimelineItem v-for="entry in entries" :key="entry.label + entry.year" size="large">
      <template v-if="entry.image" #icon>
        <VAvatar :image="entry.image" :alt="`Icône : ${entry.label}`" class="timeline-avatar" />
      </template>

      <template #opposite>
        <span class="font-weight-bold">{{ entry.year }}</span>
      </template>

      <VCard class="elevation-2">
        <VCardTitle tag="h2" class="text-h5">{{ entry.label }}</VCardTitle>

        <VCardSubtitle>
          <VIcon size="small" :icon="mdiMapMarker" />
          {{ entry.side }}
        </VCardSubtitle>
        <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-text-v-html-on-component -->
        <VCardText v-html="entry.description" />

        <template v-if="entry.technos?.length">
          <VDivider />

          <VCardActions>
            <div class="d-flex flex-wrap ga-2">
              <VChip v-for="tech in entry.technos" :key="tech" tag="span">
                {{ tech }}
              </VChip>
            </div>
          </VCardActions>
        </template>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { mdiMapMarker } from "@mdi/js"
import type { TimelineEntry } from "@/types"

defineProps<{ entries: TimelineEntry[] }>()

const { smAndDown } = useDisplay()
</script>

<style scoped>
.timeline-avatar {
  background-color: white;
}
</style>
