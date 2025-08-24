import React from 'react';

import { LocaleSelect } from '@/components/molecules/LocaleSelect';

export const Header: React.FC = () => {
  return (
    <>
      <header className='h-16 w-screen flex flex-row items-center justify-between p-8 fixed z-50'>
        <div></div>
        <LocaleSelect />
      </header>
    </>
  );
};
