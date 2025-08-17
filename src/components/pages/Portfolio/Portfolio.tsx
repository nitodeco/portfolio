'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

import { usePathname, useRouter } from 'next/navigation';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Experience } from './partials/Experience';
import { Hero } from './partials/Hero';
import { Skills } from './partials/Skills';

export const Portfolio: React.FC = () => {
  const t = useTranslations('portfolio');
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = React.useState<'experience' | 'skills'>('experience');

  React.useEffect(() => {
    const setFromHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
      if (hash === 'experience' || hash === 'skills') {
        setActiveTab(hash);
      } else {
        setActiveTab('experience');
      }
    };

    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  const handleTabChange = (value: string) => {
    const next = value === 'skills' ? 'skills' : 'experience';
    setActiveTab(next);
    router.replace(`${pathname}#${next}`);
  };

  return (
    <main className='flex flex-col items-center p-8 pt-24 w-full'>
      <div className='w-full sm:w-4/5 md:w-1/2 flex flex-col items-center'>
        <Hero />
        <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full mb-4 flex items-center'>
          <TabsList className='w-64 flex gap-2 mb-4'>
            <TabsTrigger value='experience' className='cursor-pointer hover:bg-secondary'>
              {t('experience.title')}
            </TabsTrigger>
            <TabsTrigger value='skills' className='cursor-pointer hover:bg-secondary'>
              {t('skills.title')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value='experience' className='flex flex-col w-full'>
            <Experience />
          </TabsContent>
          <TabsContent value='skills' className='flex flex-col w-full'>
            <Skills />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};
