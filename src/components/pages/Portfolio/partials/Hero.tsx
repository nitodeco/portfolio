import React from 'react';

import { MapPinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

import { SpeechBubble } from '@/components/atoms/SpeechBubble';

export const Hero: React.FC = () => {
  const t = useTranslations('portfolio.hero');

  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 mb-16'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-4xl w-full text-center'>{t('title')}</h1>
        <h2 className='text-2xl w-full text-center'>{t('subheading')}</h2>
        <div className='flex flex-row gap-1 text-primary'>
          <MapPinIcon />
          <span className='text-foreground'>{t('location')}</span>
        </div>
      </div>
      <div className='relative group border-4 border-muted bg-secondary shadow rounded-lg hover:scale-102 hover:rotate-3 transition-transform ease-in-out duration-150'>
        <SpeechBubble text={t('hoverText')} offsetX={6} offsetY={6} />
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
