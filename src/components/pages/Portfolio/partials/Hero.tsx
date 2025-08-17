import React from 'react';

import { useTranslations } from 'next-intl';

import Image from 'next/image';

export const Hero: React.FC = () => {
  const t = useTranslations('portfolio.hero');

  return (
    <div className='flex flex-row justify-between items-center gap-16 mb-16'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-4xl w-full text-center'>{t('title')}</h1>
        <h2 className='text-2xl w-full text-center'>{t('subheading')}</h2>
      </div>
      <div className='relative group border-4 border-muted bg-secondary shadow rounded-lg hover:scale-102 hover:rotate-3 transition-transform ease-in-out duration-150'>
        <div className='pointer-events-none absolute -top-6 -right-6 rounded-md border border-muted bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition duration-150 ease-in-out shadow'>
          {t('hoverText')}
          <span className='absolute -bottom-1 right-4 h-2 w-2 rotate-45 border border-muted bg-secondary'></span>
        </div>
        <Image
          src='/nico.webp'
          objectFit='cover'
          width={200}
          height={150}
          alt='Picture of me :)'
          priority={true}
          className='rounded-md'
        />
      </div>
    </div>
  );
};
