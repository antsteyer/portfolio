<template>
  <section id="home">
    <h1>Salut, moi c'est Antoine 👦🏻</h1>

    <div class="my-10 text-body-1">
      <p>
        J'ai {{ age }} ans, je réside actuellement dans la magnifique ville de
        Lyon, mais je suis originaire de Savoie.
      </p>
      <p>
        De formation Ingénieur en Interfaces Homme-Machine, je travaille
        principalement en développement Front-End. J'accorde toute son
        importance à l'expérience utilisateur, pour qu'elle soit intuitive,
        dynamique et efficace.
      </p>

      <v-row class="mt-4" align="start">
        <v-col
          v-for="highlight in highlights"
          :key="highlight.title"
          cols="12"
          md="4"
        >
          <HighlightCard
            :icon="highlight.icon"
            :title="highlight.title"
            :description="highlight.description"
          />
        </v-col>
      </v-row>
    </div>

    <section>
      <h2>Mes savoir-faire 📚</h2>
      <SkillList />
    </section>
  </section>
</template>

<script setup lang="ts">
import SkillList from "@/components/SkillList.vue";
import HighlightCard from "@/components/home/HighlightCard.vue";
import { highlights } from "@/data/highlights";
import { useAge } from "@/composables/useAge";

const age = useAge(new Date("1995-03-05"));
</script>
