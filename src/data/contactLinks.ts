import { mdiEmail, mdiLinkedin, mdiGithub } from "@mdi/js"
import type { ContactLink } from "@/types"

export const contactLinks: ContactLink[] = [
  {
    key: "email",
    icon: mdiEmail,
    color: "rgb(85, 34, 250)",
    darkModeColor: "#a78bfa",
    href: "mailto:antoine.steyer@hey.com"
  },
  {
    key: "linkedin",
    icon: mdiLinkedin,
    color: "#2867B2",
    darkModeColor: "#70B5F9",
    href: "https://www.linkedin.com/in/antsteyer/",
    external: true
  },
  {
    key: "github",
    icon: mdiGithub,
    color: "#24292e",
    darkModeColor: "white",
    href: "https://github.com/antsteyer",
    external: true
  }
]
