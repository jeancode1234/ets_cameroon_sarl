export type FeatureStatus = 'active' | 'beta' | 'planned'

export interface FeatureCatalogItem {
  id: string
  name: string
  category: string
  description: string
  status: FeatureStatus
  owner: string
  route: string
}

export const featureCatalog: FeatureCatalogItem[] = [
  {
    id: 'crm-pipeline',
    name: 'Pipeline commercial',
    category: 'Sales',
    description: 'Suivi des prospects, étapes, scores et conversion.',
    status: 'active',
    owner: 'Manager',
    route: '/app/manager/pipeline'
  },
  {
    id: 'project-tracker',
    name: 'Suivi de projets',
    category: 'Operations',
    description: 'Planning de chantier, livraisons et jalons critiques.',
    status: 'active',
    owner: 'Prospecteur',
    route: '/app/prospecteur/taches'
  },
  {
    id: 'access-control',
    name: 'Gestion des accès',
    category: 'Security',
    description: 'Matrice des rôles, permissions et contrôle d’accès.',
    status: 'active',
    owner: 'Admin',
    route: '/app/admin/features'
  },
  {
    id: 'billing-center',
    name: 'Centre de facturation',
    category: 'Finance',
    description: 'Suivi des devis, factures et paiements clients.',
    status: 'beta',
    owner: 'Client',
    route: '/app/client/factures'
  },
  {
    id: 'partner-portal',
    name: 'Portail partenaire',
    category: 'Partnership',
    description: 'Gestion des contrats, contacts et livraisons externes.',
    status: 'planned',
    owner: 'Partenaire',
    route: '/app/partenaire/contrats'
  }
]

export function useFeatureCatalog() {
  return {
    featureCatalog,
    getFeatureStatusTone(status: FeatureStatus) {
      return {
        active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
        beta: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        planned: 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
      }[status]
    }
  }
}
