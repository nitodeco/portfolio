import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/relay-portfolio/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/relay-portfolio/:path*',
        destination: 'https://eu.posthog.com/:path*',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);
