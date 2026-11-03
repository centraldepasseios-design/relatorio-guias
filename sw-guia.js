// Service worker do App do Guia: só deixa o app instalável. Não guarda nada em cache
// (a escala e o pagamento sempre vêm atualizados da internet).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
