import { computed, type ComputedRef } from "vue"

/**
 * Computes a person's age in completed years from their birthday.
 * Computed so the value updates if `birthday` is reactive.
 */
export function useAge(birthday: Date): ComputedRef<number> {
  return computed(() => {
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const monthDiff = today.getMonth() - birthday.getMonth()
    const dayDiff = today.getDate() - birthday.getDate()
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }
    return age
  })
}
