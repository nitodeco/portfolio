import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import type { Metadata } from 'next';
import { Alata } from 'next/font/google';
import { notFound } from 'next/navigation';

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
