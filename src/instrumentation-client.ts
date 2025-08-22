import posthog from 'posthog-js';

if (process.env.NEXT_PUBLIC_POSTHOG_KEY! && typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/relay-portfolio',
    ui_host: 'https://eu.posthog.com',
    defaults: '2025-05-24',
    capture_exceptions: true,
    persistence: 'memory',
    debug: process.env.NODE_ENV === 'development',
  });
}
