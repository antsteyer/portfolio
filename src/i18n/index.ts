import { createI18n } from "vue-i18n"
import fr from "./locales/fr.json"
import en from "./locales/en.json"

export const SUPPORTED_LOCALES = ["fr", "en"] as const
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = "portfolio:locale"
const DEFAULT_LOCALE: AppLocale = "fr"

function isSupported(value: string | null | undefined): value is AppLocale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

function detectLocale(): AppLocale {
  if (typeof window === "undefined") return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isSupported(stored)) return stored
  const navLang = window.navigator.language?.split("-")[0]
  if (isSupported(navLang)) return navLang
  return DEFAULT_LOCALE
}

export const i18n = createI18n<false>({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { fr, en }
})

export function setLocale(locale: AppLocale): void {
  i18n.global.locale.value = locale
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }
}

export function initLocale(): void {
  i18n.global.locale.value = detectLocale()
}
