export interface QuoteItem {
  id: string
  client: string
  amount: number
  status: 'Brouillon' | 'Envoyé' | 'Accepté' | 'Refusé'
  date: string
}

export interface JobSiteItem {
  id: string
  name: string
  client: string
  progress: number
  status: 'Planifié' | 'En cours' | 'Livraison' | 'Terminé'
  nextAction: string
}

export interface PaymentItem {
  id: string
  label: string
  amount: number
  type: 'Entrée' | 'Sortie'
  status: 'Payé' | 'En attente' | 'En retard'
  date: string
}

export interface AlertItem {
  id: string
  title: string
  message: string
  severity: 'info' | 'success' | 'warning' | 'danger'
  createdAt: string
}

export const quoteData: QuoteItem[] = [
  { id: 'q-001', client: 'Hotel A', amount: 2400000, status: 'Envoyé', date: '2026-09-18' },
  { id: 'q-002', client: 'Restaurant B', amount: 1850000, status: 'Accepté', date: '2026-09-20' },
  { id: 'q-003', client: 'Villa C', amount: 3200000, status: 'Brouillon', date: '2026-09-22' }
]

export const jobSiteData: JobSiteItem[] = [
  { id: 'j-001', name: 'Rénovation hôtel', client: 'Hotel A', progress: 72, status: 'En cours', nextAction: 'Contrôle du second niveau' },
  { id: 'j-002', name: 'Cuisine restaurant', client: 'Restaurant B', progress: 51, status: 'Planifié', nextAction: 'Livraison des matériaux' },
  { id: 'j-003', name: 'Villa clientèle', client: 'Villa C', progress: 89, status: 'Livraison', nextAction: 'Vérification finale' }
]

export const paymentData: PaymentItem[] = [
  { id: 'p-001', label: 'Acompte hotel A', amount: 680000, type: 'Entrée', status: 'Payé', date: '2026-09-18' },
  { id: 'p-002', label: 'Matériaux chantier B', amount: 420000, type: 'Sortie', status: 'En attente', date: '2026-09-21' },
  { id: 'p-003', label: 'Paiement final villa C', amount: 920000, type: 'Entrée', status: 'En retard', date: '2026-09-25' }
]

export const alertData: AlertItem[] = [
  { id: 'a-001', title: 'Paiement en retard', message: 'Le paiement final de Villa C n’a pas été reçu dans les délais.', severity: 'warning', createdAt: 'Il y a 2h' },
  { id: 'a-002', title: 'Rapport validé', message: 'Le rapport de terrain du chantier Hotel A a été accepté.', severity: 'success', createdAt: 'Il y a 5h' },
  { id: 'a-003', title: 'Livraison à surveiller', message: 'Les matériaux pour le restaurant B doivent être livrés avant vendredi.', severity: 'info', createdAt: 'Il y a 1j' },
  { id: 'a-004', title: 'Risque de retard', message: 'La livraison de la villa C est en retard de 3 jours.', severity: 'danger', createdAt: 'Il y a 1j' }
]

export function useBusinessData() {
  return {
    quoteData,
    jobSiteData,
    paymentData,
    alertData
  }
}
