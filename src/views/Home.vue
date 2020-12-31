<template>
  <div class="home">
    <h1>Salut, moi c'est Antoine 👦🏻</h1>

    <div class="my-10 text-body-1">
      <p>
        J'ai {{ age }} ans, je réside actuellement dans la magnifique ville de
        Lyon, mais je suis originaire de Savoie.
      </p>
      <p>
        De formation Ingénieur en Interfaces Homme-Machine, je travaille
        principalement en développement Front-End. J'accorde toute son
        importance à l'expérience utilisateur, pour quelle soit intuitive,
        dynamique et efficace.
      </p>

      <div
        class="d-md-flex justify-space-around flex-column flex-md-row  align-start"
      >
        <v-col cols="12" md="4">
          <div class="d-flex flex-column align-center pa-8 text-center">
            <v-avatar color="primary" size="56">
              <v-icon large color="black">mdi-binoculars</v-icon>
            </v-avatar>
            <span class="my-4 font-weight-bold">Curieux</span>
            <p>
              des nouvelles technologies et des évolutions des principaux
              framework Web, je suis aussi sensible à l'ergonomie et à
              l'accessibilité des applications et sites web.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex flex-column align-center pa-8 text-center">
            <v-avatar color="primary" size="56">
              <v-icon large color="black">mdi-file-tree</v-icon>
            </v-avatar>
            <span class="my-4 font-weight-bold">Rigoureux</span>
            <p>
              dans mon code et mon organisation, je me documente régulièrement
              pour apprendre les bonnes pratiques de développement. Do Less,
              Better !
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex flex-column align-center pa-8 text-center">
            <v-avatar color="primary" size="56">
              <v-icon large color="black">mdi-flask</v-icon>
            </v-avatar>
            <span class="my-4 font-weight-bold">Persévérant</span>
            <p>
              dans la résolution de problèmes, je résiste à toutes les pressions
              (sauf celle que l'on boit).
            </p>
          </div>
        </v-col>
      </div>
    </div>
    <div>
      <h2>Mes savoir-faire 📚</h2>
      <SkillList></SkillList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillList from "@/components/SkillList.vue";

const BIRTHDAY = new Date("1995-03-05");

export default Vue.extend({
  name: "Home",
  components: { SkillList },
  computed: {
    age: function() {
      const today = new Date();
      const birthDate = BIRTHDAY;
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    }
  }
});
</script>
