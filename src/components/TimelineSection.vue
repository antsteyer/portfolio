<template>
  <v-timeline
    class="mt-10"
    :density="smAndDown ? 'compact' : 'default'"
    side="end"
  >
    <v-timeline-item
      v-for="entry in entries"
      :key="entry.label + entry.year"
      size="large"
    >
      <template v-if="entry.image" #icon>
        <v-avatar :image="entry.image" :alt="`Icône : ${entry.label}`" />
      </template>
      <template #opposite>
        <span class="font-weight-bold">{{ entry.year }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">{{ entry.label }}</v-card-title>
        <v-card-subtitle>
          <v-icon size="small" icon="mdi-map-marker" />
          {{ entry.side }}
        </v-card-subtitle>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <v-card-text v-html="entry.description" />
        <template v-if="entry.technos?.length">
          <v-divider />
          <v-card-actions>
            <v-chip-group>
              <v-chip v-for="tech in entry.technos" :key="tech">
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </v-card-actions>
        </template>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import type { TimelineEntry } from "@/types";

defineProps<{ entries: TimelineEntry[] }>();

const { smAndDown } = useDisplay();
</script>
