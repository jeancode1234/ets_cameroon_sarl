export interface NotificationItem {
  id: string
  title: string
  body: string
  read: boolean
  createdAt: string
  type: 'info' | 'success' | 'warning' | 'alert'
}
