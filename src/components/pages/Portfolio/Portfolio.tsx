import React from 'react';

import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Experience } from './partials/Experience';
import { Hero } from './partials/Hero';
import { Skills } from './partials/Skills';

export const Portfolio: React.FC = () => {
  const t = useTranslations('portfolio');

  return (
    <main className='flex flex-col items-center p-8 pt-24 w-full'>
      <div className='w-1/2 flex flex-col items-center'>
        <Hero />
        <Tabs defaultValue='experience' className='w-full mb-4 flex items-center'>
          <TabsList className='w-64 flex gap-2 mb-4'>
            <TabsTrigger value='experience' className='cursor-pointer'>
              {t('experience.title')}
            </TabsTrigger>
            <TabsTrigger value='skills' className='cursor-pointer'>
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
