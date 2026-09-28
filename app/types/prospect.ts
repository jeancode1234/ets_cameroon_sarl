export type ProspectStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'FOLLOW_UP' | 'CLOSED' | 'REJECTED'

export interface Prospect {
  id: string
  fullName: string
  phone: string
  project: string
  location: string
  status: ProspectStatus
  createdAt: string
}
