export interface Report {
  id: string
  date: string
  activity: string
  prospectsCount: number
  visitedSites: number
  results: string
  observations: string
  status: 'DRAFT' | 'PENDING' | 'VALIDATED'
}
