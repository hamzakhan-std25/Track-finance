// src/sw.js (using ES Modules)
import { Serwist, NetworkFirst, CacheFirst } from "serwist";
// ... (TypeScript types as shown previously)

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST, // Injected by the plugin
  runtimeCaching: [
    // Your specific caching rules go here
    {
      matcher: ({ request }) => request.destination === "image",
      handler: new CacheFirst({ cacheName: "images" }),
    },
    // ... more rules
  ],
  skipWaiting: true,
  clientsClaim: true,
});

serwist.addEventListeners();
