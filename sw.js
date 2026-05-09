importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCFom_SD6rklJ3hTJHC5_VF34TiDYKn-ak",
  authDomain: "relatorio-guias.firebaseapp.com",
  projectId: "relatorio-guias",
  storageBucket: "relatorio-guias.firebasestorage.app",
  messagingSenderId: "1078535122546",
  appId: "1:1078535122546:web:fb1669ddaa66a4e5a1dceb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/relatorio-guias/icon.png',
    badge: '/relatorio-guias/icon.png',
    data: payload.data
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/relatorio-guias/'));
});
