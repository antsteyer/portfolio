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
          <v-tooltip location="bottom" :text="link.funnyCatchPhrase">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                :color="
                  theme.global.current.value.dark && link.darkModeColor
                    ? link.darkModeColor
                    : link.color
                "
                :aria-label="'Accéder à ' + link.label"
                v-bind="props"
              >
                <v-icon start :icon="link.icon"></v-icon>
                {{ link.label }}
              </v-btn>
            </template>
          </v-tooltip>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

interface ContactLink {
  label: string;
  icon: string;
  color: string;
  darkModeColor?: string;
  link: string;
  funnyCatchPhrase: string;
}

export default defineComponent({
  name: "Contact",
  setup() {
    return { theme: useTheme() };
  },
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
        darkModeColor: "white",
        link: "https://github.com/antsteyer",
        funnyCatchPhrase: "Mon humble contribution à l'open-source"
      }
    ] as ContactLink[]
  })
});
</script>
