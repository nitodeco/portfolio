import { readdirSync } from 'node:fs';
import { join } from 'node:path';

import type { Metadata } from 'next';
import { Alata } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

import '../globals.css';

const getWebpIconPaths = () => {
  const publicDir = join(process.cwd(), 'public');
  const files = readdirSync(publicDir);

  return files.filter((file) => file.endsWith('.webp')).map((file) => `/${file}`);
};

const WEBP_IMAGE_PATHS = getWebpIconPaths();

const alata = Alata({
  weight: '400',
  preload: true,
  variable: '--font-alata',
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t('title'),
    description: `${t('portfolio.hero.title')} - ${t('portfolio.hero.subheading')}`,
    authors: [{ name: 'Nico Möhn', url: 'https://nicomoehn.codes' }],
    creator: 'Nico Möhn',
    publisher: 'Nico Möhn',
    openGraph: {
      title: t('title'),
      description: `${t('portfolio.hero.title')} - ${t('portfolio.hero.subheading')}`,
    },
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {WEBP_IMAGE_PATHS.map((path) => (
          <link key={path} rel='preload' href={path} as='image' type='image/webp' />
        ))}
      </head>
      <body className={`${alata.variable} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
