import type { ContactLink } from "@/types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    icon: "mdi-email",
    color: "rgb(85, 34, 250)",
    href: "mailto:antoine.steyer@hey.com",
    funnyCatchPhrase: "Je lis mes mails quotidiennement"
  },
  {
    label: "Twitter",
    icon: "mdi-twitter",
    color: "#1DA1F2",
    href: "https://twitter.com/ant_steyer",
    funnyCatchPhrase: "Je 'tweet' plus vite que mon ombre !",
    external: true
  },
  {
    label: "LinkedIn",
    icon: "mdi-linkedin",
    color: "#2867B2",
    href: "https://www.linkedin.com/in/antsteyer/",
    funnyCatchPhrase:
      "Merci de ne pas m'envoyer de message préconçu sans âme ni personnalisation",
    external: true
  },
  {
    label: "Github",
    icon: "mdi-github",
    color: "#24292e",
    darkModeColor: "white",
    href: "https://github.com/antsteyer",
    funnyCatchPhrase: "Mon humble contribution à l'open-source",
    external: true
  }
];
