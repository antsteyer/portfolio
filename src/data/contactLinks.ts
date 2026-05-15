import { mdiEmail, mdiLinkedin, mdiGithub } from "@mdi/js"
import type { ContactLink } from "@/types"

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    icon: mdiEmail,
    color: "rgb(85, 34, 250)",
    darkModeColor: "#a78bfa",
    href: "mailto:antoine.steyer@hey.com",
    funnyCatchPhrase: "Je lis mes mails quotidiennement"
  },
  {
    label: "LinkedIn",
    icon: mdiLinkedin,
    color: "#2867B2",
    darkModeColor: "#70B5F9",
    href: "https://www.linkedin.com/in/antsteyer/",
    funnyCatchPhrase: "Merci de ne pas m'envoyer de message préconçu sans âme ni personnalisation",
    external: true
  },
  {
    label: "Github",
    icon: mdiGithub,
    color: "#24292e",
    darkModeColor: "white",
    href: "https://github.com/antsteyer",
    funnyCatchPhrase: "Mon humble contribution à l'open-source",
    external: true
  }
]
