import { MetadataRoute } from 'next';

import { locales } from '@/constants/locales';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nicomoehn.codes';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/relay-portfolio/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
