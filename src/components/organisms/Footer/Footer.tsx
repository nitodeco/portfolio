import React from 'react';

import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center min-h-32'>
      <a href={t('linkedin')} target='_blank' referrerPolicy='no-referrer' rel='noopener'>
        <LinkedinIcon />
      </a>
      <a href={t('github')} target='_blank' referrerPolicy='no-referrer' rel='noopener'>
        <GithubIcon />
      </a>
    </footer>
  );
};
