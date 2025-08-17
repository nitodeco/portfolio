import React from 'react';

import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Portfolio: React.FC = () => {
  const t = useTranslations('portfolio');

  return (
    <main className='flex flex-col items-center p-16 pt-24'>
      <h1 className='text-4xl mb-16'>{t('hero')}</h1>
      <Tabs defaultValue='experience' className='w-64 mb-4'>
        <TabsList className='w-full flex gap-2'>
          <TabsTrigger value='experience' className='cursor-pointer'>
            {t('experience.title')}
          </TabsTrigger>
          <TabsTrigger value='skills' className='cursor-pointer'>
            {t('skills.title')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value='experience'></TabsContent>
      </Tabs>
      <div className='flex flex-row gap-8 justify-between'>
        <Card className='w-64'>
          <CardHeader>
            <CardTitle className='text-xl'>{t('experience.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-row justify-between'>
              <div>
                <span>2025</span>
              </div>
              <div>test</div>
            </div>
          </CardContent>
        </Card>
        <Card className='w-64'>
          <CardHeader>
            <CardTitle className='text-xl'>{t('skills.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-row justify-between'>
              <div>
                <span>2025</span>
              </div>
              <div>test</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
