import React from 'react';

import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
      
      <a href={t('linkedin')}>
        <LinkedinIcon />
      </a>
      <a href={t('github')}>
        <GithubIcon />
      </a>
    </footer>
  );
};
