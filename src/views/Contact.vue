<template>
  <div class="about">
    <h1>Ne nous perdons pas de vue ! 📫</h1>

    <p class="mt-10">
      Si tu veux simplement me dire bonjour ou si tu as envie de travailler avec
      moi, n'hésite pas à me laisser un petit mot par email ou sur l'un de mes
      réseaux ci-dessous. Je serai ravi d'échanger avec toi !
    </p>
    <v-card class="mt-10" width="fit-content">
      <v-card-text
        class="d-flex flex-column flex-md-row flex-sm-column justify-center align-center"
      >
        <a v-for="link in links" :key="link.label" :href="link.link">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                :color="link.color"
                :aria-label="'Accéder à ' + link.label"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left>{{ link.icon }}</v-icon>
                {{ link.label }}
              </v-btn>
            </template>
            <span>{{ link.funnyCatchPhrase }}</span>
          </v-tooltip>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface ContactLink {
  label: string;
  icon: string;
  color: string;
  link: string;
  funnyCatchPhrase: string;
}

export default Vue.extend({
  name: "Contact",
  components: {},
  data: () => ({
    links: [
      {
        label: "Email",
        icon: "mdi-email",
        color: "rgb(85, 34, 250)",
        link: "mailto:antoine.steyer@hey.com",
        funnyCatchPhrase: "Je lis mes mails quotidiennement"
      },
      {
        label: "Twitter",
        icon: "mdi-twitter",
        color: "#1DA1F2",
        link: "https://twitter.com/ant_steyer",
        funnyCatchPhrase: "Je 'tweet' plus vite que mon ombre !"
      },
      {
        label: "LinkedIn",
        icon: "mdi-linkedin",
        color: "#2867B2",
        link: "https://www.linkedin.com/in/antsteyer/",
        funnyCatchPhrase:
          "Merci de ne pas m'envoyer de message préconçu sans âme ni personalisation"
      },
      {
        label: "Github",
        icon: "mdi-github",
        color: "#24292e",
        link: "https://github.com/antsteyer",
        funnyCatchPhrase: "Pas très rempli, mais appétissant !"
      }
    ] as ContactLink[]
  })
});
</script>
