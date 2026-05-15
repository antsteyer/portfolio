<template>
  <div v-if="smAndDown" class="d-flex flex-column ga-4 mt-10">
    <VCard v-for="entry in entries" :key="entry.key" class="elevation-2">
      <div class="px-4 pt-4">
        <VChip size="small" variant="tonal">
          {{ t(`${namespace}.${entry.key}.year`) }}
        </VChip>
      </div>

      <VCardItem>
        <template v-if="entry.image" #prepend>
          <VAvatar
            :image="entry.image"
            :alt="t('timeline.iconAlt', { label: t(`${namespace}.${entry.key}.label`) })"
            size="40"
            class="timeline-avatar"
          />
        </template>

        <VCardTitle tag="h2" class="text-h6 text-wrap">
          {{ t(`${namespace}.${entry.key}.label`) }}
        </VCardTitle>

        <VCardSubtitle>
          <VIcon size="small" :icon="mdiMapMarker" />
          {{ t(`${namespace}.${entry.key}.side`) }}
        </VCardSubtitle>
      </VCardItem>

      <VCardText>
        <TimelineEntryBody :namespace="namespace" :entry-key="entry.key" />
      </VCardText>

      <template v-if="entry.technos?.length">
        <VDivider />

        <VCardActions>
          <ul class="d-flex flex-wrap ga-2 technos">
            <VChip v-for="tech in entry.technos" :key="tech" tag="li">
              {{ tech }}
            </VChip>
          </ul>
        </VCardActions>
      </template>
    </VCard>
  </div>

  <VTimeline v-else class="mt-10" side="end">
    <VTimelineItem v-for="entry in entries" :key="entry.key" size="large">
      <template v-if="entry.image" #icon>
        <VAvatar
          :image="entry.image"
          :alt="t('timeline.iconAlt', { label: t(`${namespace}.${entry.key}.label`) })"
          class="timeline-avatar"
        />
      </template>

      <template #opposite>
        <span class="font-weight-bold">{{ t(`${namespace}.${entry.key}.year`) }}</span>
      </template>

      <VCard class="elevation-2">
        <VCardTitle tag="h2" class="text-h5">{{ t(`${namespace}.${entry.key}.label`) }}</VCardTitle>

        <VCardSubtitle>
          <VIcon size="small" :icon="mdiMapMarker" />
          {{ t(`${namespace}.${entry.key}.side`) }}
        </VCardSubtitle>

        <VCardText>
          <TimelineEntryBody :namespace="namespace" :entry-key="entry.key" />
        </VCardText>

        <template v-if="entry.technos?.length">
          <VDivider />

          <VCardActions>
            <ul class="d-flex flex-wrap ga-2 technos">
              <VChip v-for="tech in entry.technos" :key="tech" tag="li">
                {{ tech }}
              </VChip>
            </ul>
          </VCardActions>
        </template>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { useI18n } from "vue-i18n"
import { mdiMapMarker } from "@mdi/js"
import type { TimelineEntry } from "@/types"
import TimelineEntryBody from "@/components/TimelineEntryBody.vue"

defineProps<{
  entries: TimelineEntry[]
  namespace: string
}>()

const { smAndDown } = useDisplay()
const { t } = useI18n()
</script>

<style scoped>
.timeline-avatar {
  background-color: white;
}

.technos {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
}
</style>
