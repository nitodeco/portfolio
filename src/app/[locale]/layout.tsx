import type { Metadata } from 'next';
import { Alata } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

import '../globals.css';

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
      <body className={`${alata.variable} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
