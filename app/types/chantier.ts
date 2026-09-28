export type SiteStatus = 'PLANNED' | 'IN_PROGRESS' | 'ON_HOLD' | 'COMPLETED'

export interface Chantier {
  id: string
  name: string
  location: string
  client: string
  status: SiteStatus
  need: string
  date: string
  latitude?: number
  longitude?: number
}
