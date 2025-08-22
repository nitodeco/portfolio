import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/relay-portfolio/static/(.*)',
        destination: 'https://eu-assets.i.posthog.com/static/$1',
      },
      {
        source: '/relay-portfolio/(.*)',
        destination: 'https://eu.i.posthog.com/$1',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);
