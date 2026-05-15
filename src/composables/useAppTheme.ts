import { computed, watch } from "vue"
import { useTheme } from "vuetify"

const STORAGE_KEY = "portfolio:theme"
type ThemeName = "light" | "dark"

let initialized = false

function getPreferredTheme(): ThemeName {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

/**
 * Wraps Vuetify's theme with a toggle that persists the user's choice in
 * localStorage and honors the system preference on first load. Safe to call
 * from multiple components — initialization only happens once.
 */
export function useAppTheme() {
  const theme = useTheme()

  if (!initialized) {
    theme.change(getPreferredTheme())
    watch(
      () => theme.name.value,
      name => {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, name)
        }
      }
    )
    initialized = true
  }

  const isDark = computed(() => theme.current.value.dark)

  function toggle() {
    theme.change(isDark.value ? "light" : "dark")
  }

  return { isDark, toggle }
}
