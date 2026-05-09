self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '🗺️ Luck Receptivo';
  const options = {
    body: data.body || 'Você tem uma notificação.',
    icon: '/relatorio-guias/icon.png',
    badge: '/relatorio-guias/icon.png',
    data: data.url || '/relatorio-guias/'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data || '/relatorio-guias/'));
});
