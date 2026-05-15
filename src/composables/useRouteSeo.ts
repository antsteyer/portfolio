import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useSeoMeta, useHead } from "@unhead/vue"
import { SITE_URL } from "@/config/site"

type RouteSeoOptions = {
  titleKey: string
  descriptionKey: string
  path: string
}

export function useRouteSeo({ titleKey, descriptionKey, path }: RouteSeoOptions): void {
  const { t } = useI18n()
  const siteName = computed(() => t("common.siteName"))
  const pageTitle = computed(() => t(titleKey))
  const fullTitle = computed(() => `${pageTitle.value} — ${siteName.value}`)
  const description = computed(() => t(descriptionKey))
  const url = `${SITE_URL}${path === "/" ? "" : path}`

  useHead({
    link: [{ rel: "canonical", href: url }]
  })

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: url,
    twitterTitle: fullTitle,
    twitterDescription: description
  })
}
