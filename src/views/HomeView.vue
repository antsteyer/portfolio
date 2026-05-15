<template>
  <section id="home">
    <h1>{{ t("home.title") }}</h1>

    <div class="my-10 text-body-1">
      <p>{{ t("home.intro1", { age }) }}</p>

      <p>{{ t("home.intro2") }}</p>

      <VRow class="mt-4" align="start">
        <VCol v-for="highlight in highlights" :key="highlight.key" cols="12" md="4">
          <HighlightCard
            :icon="highlight.icon"
            :title="t(`highlights.${highlight.key}.title`)"
            :description="t(`highlights.${highlight.key}.description`)"
          />
        </VCol>
      </VRow>
    </div>

    <section>
      <h2>{{ t("home.skillsTitle") }}</h2>

      <SkillList />
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import SkillList from "@/components/SkillList.vue"
import HighlightCard from "@/components/home/HighlightCard.vue"
import { highlights } from "@/data/highlights"
import { useAge } from "@/composables/useAge"

const { t } = useI18n()
const age = useAge(new Date("1995-03-05"))
</script>
