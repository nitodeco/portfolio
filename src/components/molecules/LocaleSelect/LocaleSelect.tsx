'use client';

import * as React from 'react';

import { hasLocale, useLocale, useTranslations } from 'next-intl';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export const LocaleSelect: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('localeSelect');

  const [open, setOpen] = React.useState(false);

  return (
    <Select
      value={locale}
      onValueChange={(nextLocale) => {
        if (hasLocale(routing.locales, nextLocale)) {
          router.replace(pathname, { locale: nextLocale });
          setOpen(false);
        }
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectTrigger className='cursor-pointer bg-background' aria-label={t('ariaLabel')} name={t('ariaLabel')}>
        <SelectValue placeholder={t('placeholder')} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((opt) => (
          <SelectItem key={opt} value={opt} className='cursor-pointer'>
            {t(`locales.${opt}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
