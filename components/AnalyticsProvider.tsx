'use client';

import { useEffect } from 'react';

export function usePageViewTracking() {
  useEffect(() => {
    // Track page view on mount
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'page_view',
        event_data: {
          url: window.location.href,
          referrer: document.referrer || 'direct',
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          userAgent: navigator.userAgent,
        },
      }),
    }).catch(() => {
      // Silently fail - analytics shouldn't break the page
    });
  }, []);
}

export function trackCTAClick(section: string, action: string = 'cta_click') {
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_type: action,
      event_data: { section, timestamp: Date.now() },
    }),
  }).catch(() => {
    // Silently fail
  });
}
