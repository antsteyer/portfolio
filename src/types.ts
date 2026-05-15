export interface TimelineEntry {
  year: string
  label: string
  description: string
  /** Side information: location for a formation, company for an experience. */
  side: string
  image?: string
  technos?: string[]
}

export interface Skill {
  label: string
  icon: string
  percent: number
  type: SkillType
}

export const SKILL_TYPES = ["Front", "Back"] as const
export type SkillType = (typeof SKILL_TYPES)[number]

export interface ContactLink {
  label: string
  icon: string
  color: string
  darkModeColor?: string
  href: string
  funnyCatchPhrase: string
  /** When true, open in a new tab with safe rel attributes. */
  external?: boolean
}

export interface NavItem {
  label: string
  to: string
}

export interface Highlight {
  icon: string
  title: string
  description: string
}
