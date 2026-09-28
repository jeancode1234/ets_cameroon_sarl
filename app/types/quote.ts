export type QuoteProjectType = 'Construction' | 'Rénovation' | 'Hôtel' | 'Restaurant' | 'Décoration' | 'Matériaux' | 'Artisan' | 'Autre'

export interface QuoteRequest {
  firstName: string
  lastName: string
  phone: string
  email: string
  city: string
  projectType: QuoteProjectType
  service: string
  description: string
  attachments?: File[]
}
