<template>
  <div v-if="smAndDown" class="d-flex flex-column ga-4 mt-10">
    <v-card
      v-for="entry in entries"
      :key="entry.label + entry.year"
      class="elevation-2"
    >
      <div class="px-4 pt-4">
        <v-chip size="small" variant="tonal">
          {{ entry.year }}
        </v-chip>
      </div>
      <v-card-item>
        <template v-if="entry.image" #prepend>
          <v-avatar
            :image="entry.image"
            :alt="`Icône : ${entry.label}`"
            size="40"
          />
        </template>
        <v-card-title class="text-h6 text-wrap">
          {{ entry.label }}
        </v-card-title>
        <v-card-subtitle>
          <v-icon size="small" icon="mdi-map-marker" />
          {{ entry.side }}
        </v-card-subtitle>
      </v-card-item>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="entry.description" />
      <template v-if="entry.technos?.length">
        <v-divider />
        <v-card-actions>
          <v-chip-group column>
            <v-chip v-for="tech in entry.technos" :key="tech">
              {{ tech }}
            </v-chip>
          </v-chip-group>
        </v-card-actions>
      </template>
    </v-card>
  </div>

  <v-timeline v-else class="mt-10" side="end">
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
            <v-chip-group column>
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
