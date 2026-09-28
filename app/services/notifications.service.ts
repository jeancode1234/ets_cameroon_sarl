import type { ApiResponse } from '~/types/api'
import type { NotificationItem } from '~/types/notification'

export const notificationsService = {
  list: () => useApi().get<ApiResponse<NotificationItem[]>>('/notifications'),
  markRead: (id: string) => useApi().patch<ApiResponse<NotificationItem>>(`/notifications/${id}/read`, {})
}
