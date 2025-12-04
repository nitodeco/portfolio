import posthog from 'posthog-js';

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (posthogKey && typeof window !== 'undefined') {
  posthog.init(posthogKey, {
    api_host: '/relay-portfolio',
    ui_host: 'https://eu.posthog.com',
    defaults: '2025-05-24',
    capture_exceptions: true,
    persistence: 'localStorage',
    debug: process.env.NODE_ENV === 'development',
  });
}
