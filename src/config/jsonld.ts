import { SITE_URL } from "@/config/site"
import fr from "@/i18n/locales/fr.json"

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antoine Steyer",
  url: SITE_URL,
  jobTitle: fr.seo.jobTitle,
  description: fr.seo.personDescription,
  address: { "@type": "PostalAddress", addressLocality: "Valence", addressCountry: "FR" },
  sameAs: ["https://www.linkedin.com/in/antsteyer/", "https://github.com/antsteyer"]
} as const
