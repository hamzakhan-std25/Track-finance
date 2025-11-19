// A client component or file with "use client"; at the top
 "use client"
import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('Service worker registered scope:', registration.scope))
        .catch((error) => console.warn('Service worker registration failed:', error.message));
    }
  }, []);
  return null; // This component doesn't render anything
}
