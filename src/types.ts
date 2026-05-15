export interface TimelineEntry {
  key: string
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
  key: string
  icon: string
  color: string
  darkModeColor?: string
  href: string
  /** When true, open in a new tab with safe rel attributes. */
  external?: boolean
}

export interface NavItem {
  key: string
  to: string
}

export interface Highlight {
  key: string
  icon: string
}
