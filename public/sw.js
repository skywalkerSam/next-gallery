// @ts-nocheck it's a JavaScript file

// Install SW
self.addEventListener("install", function (event) {
  console.log("Service worker installing...");
  // Perform installation steps, such as pre-caching critical assets
  self.skipWaiting();
});

// Activate SW
self.addEventListener("activate", function (event) {
  console.log("Service worker activating...");
  // Clean up old caches and take control of clients
  event.waitUntil(clients.claim());
});

// Push Notification
self.addEventListener("push", function (event) {
  if (event.data) {
    // const data = event.data.json();
    // const options = {
    //   body: data.body,
    //   icon: data.icon ?? "/icon.svg",
    //   badge: "/pwa-badge.svg",
    //   vibrate: [100, 50, 100],
    //   data: {
    //     dateOfArrival: Date.now(),
    //     primaryKey: "2",
    //   },
    // };
    // event.waitUntil(self.registration.showNotification(data.title, options));
    try {
      const data = event.data.json();
      const options = {
        body: data.body,
        icon: data.icon ?? "/icon.svg",
        badge: "/pwa-badge.svg",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: "2",
        },
      };
      event.waitUntil(self.registration.showNotification(data.title, options));
    } catch (error) {
      console.error("Error processing push notification:", error);
    }
  }
});

// Notification Click
self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close();
  event.waitUntil(
    // clients.openWindow("https://next-gallery-blues.vercel.app"),
    // clients.openWindow(self.location.origin),
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        // If a matching client is found, focus it
        // for (let i = 0; i < clientList.length; i++) {
        //   const client = clientList[i];
        for (const client of clientList) {
          if (
            client.url.startsWith(self.location.origin) &&
            "focus" in client
          ) {
            return client.focus();
          }
        }
        // If no matching client is found, open a new window
        if (clients.openWindow) {
          return clients.openWindow(self.location.origin);
        }
      })
      .catch((e) => console.error(e)),
  );
});
