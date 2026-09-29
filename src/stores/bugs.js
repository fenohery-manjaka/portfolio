import { reactive } from 'vue'

// Compteur partagé des bugs écrasés (voir BugHunt.vue).
export const bugs = reactive({ squashed: 0 })
