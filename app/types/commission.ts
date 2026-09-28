export interface Commission {
  id: string
  client: string
  project: string
  amount: number
  status: 'VALIDATED' | 'PENDING' | 'WAITING'
  commission: number
  createdAt: string
}
