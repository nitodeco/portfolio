import React from 'react';

import { useTranslations } from 'next-intl';

export const Skills: React.FC = () => {
  const t = useTranslations('portfolio.skills');

  return (
    <div>
      <h2 className='text-center text-xl'>{t('title')}</h2>
    </div>
  );
};
