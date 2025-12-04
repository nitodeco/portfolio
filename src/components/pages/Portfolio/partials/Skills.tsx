import { useTranslations } from 'next-intl';
import type React from 'react';

import { Icon } from '@/components/molecules/Icon/Icon';
import { BentoCard } from '@/components/organisms/BentoCard';

export const Skills: React.FC = () => {
  const t = useTranslations('portfolio.skills');

  return (
    <div className='mx-auto w-full'>
      <h2 className='text-center text-3xl font-semibold tracking-tight mb-8'>{t('title')}</h2>
      <BentoCard title={t('languages.title')} className='mb-4'>
        <div className='flex flex-row gap-4 flex-wrap'>
          <Icon imagePath='/typescript.webp' alt={t('languages.typescript')} tooltip={t('languages.typescript')} />
          <Icon imagePath='/python.webp' alt={t('languages.python')} tooltip={t('languages.python')} />
          <Icon imagePath='/sql.webp' alt={t('languages.sql')} tooltip={t('languages.sql')} />
          <Icon imagePath='/cs.webp' alt={t('languages.csharp')} tooltip={t('languages.csharp')} />
          <Icon imagePath='/go.webp' alt={t('languages.go')} tooltip={t('languages.go')} />
          <Icon imagePath='/cpp.webp' alt={t('languages.cpp')} tooltip={t('languages.cpp')} />
          <Icon imagePath='/c.webp' alt={t('languages.c')} tooltip={t('languages.c')} />
          <Icon imagePath='/java.webp' alt={t('languages.java')} tooltip={t('languages.java')} />
        </div>
      </BentoCard>
      <div className='grid gap-4 sm:mt-4 lg:grid-cols-3 lg:grid-rows-2'>
        <BentoCard title={t('frontend.title')} className='lg:col-span-2 lg:col-start-1 lg:row-start-1'>
          <div className='flex flex-row gap-4 flex-wrap'>
            <Icon imagePath='/react.webp' alt='React' tooltip={t('frontend.react')} />
            <Icon imagePath='/next.webp' alt='Next.js' tooltip={t('frontend.next')} />
            <Icon imagePath='/solid.webp' alt='Solid.js' tooltip={t('frontend.solid')} />
            <Icon imagePath='/astro.webp' alt='Astro' tooltip={t('frontend.astro')} />
            <Icon imagePath='/tailwind.webp' alt='TailwindCSS' tooltip={t('frontend.tailwind')} />
            <Icon imagePath='/sass.webp' alt='Sass' tooltip={t('frontend.sass')} />
            <Icon imagePath='/storybook.webp' alt='Storybook' tooltip={t('frontend.storybook')} />
            <Icon imagePath='/shadcn.webp' alt='ShadCn/ui' tooltip={t('frontend.shadcn')} />
            <Icon imagePath='/zustand.webp' alt='Zustand' tooltip={t('frontend.zustand')} />
            <Icon imagePath='/vite.webp' alt='Vite' tooltip={t('frontend.vite')} />
            <Icon imagePath='/tanstack.webp' alt='TanStack Query/Table' tooltip={t('frontend.tanstack')} />
          </div>
        </BentoCard>
        <BentoCard title={t('devOps.title')} className='max-lg:row-start-1 lg:col-start-3 lg:row-start-1'>
          <div className='flex flex-row gap-4 flex-wrap'>
            <Icon imagePath='/docker.webp' alt='Docker' tooltip={t('devOps.docker')} />
            <Icon imagePath='/aws.webp' alt='AWS' tooltip={t('devOps.aws')} />
            <Icon imagePath='/azure.webp' alt='Azure' tooltip={t('devOps.azure')} />
            <Icon imagePath='/git.webp' alt='Git' tooltip={t('devOps.git')} />
            <Icon imagePath='/actions.webp' alt='GitHub Actions' tooltip={t('devOps.ghActions')} />
            <Icon imagePath='/posthog.webp' alt='PostHog' tooltip={t('devOps.posthog')} />
          </div>
        </BentoCard>
        <BentoCard title={t('ai.title')} className='max-lg:row-start-3 lg:col-start-1 lg:row-start-2'>
          <div className='flex flex-row gap-4 flex-wrap'>
            <Icon imagePath='/pytorch.webp' alt='PyTorch' tooltip={t('ai.pytorch')} />
            <Icon imagePath='/sklearn.webp' alt='scikit-learn' tooltip={t('ai.sklearn')} />
            <Icon imagePath='/langchain.webp' alt='LangChain' tooltip={t('ai.langchain')} />
            <Icon imagePath='/aifoundry.webp' alt='Azure AI Foundry' tooltip={t('ai.foundry')} />
            <Icon imagePath='/openai.webp' alt='OpenAI' tooltip={t('ai.openai')} />
            <Icon imagePath='/cohere.webp' alt='Cohere' tooltip={t('ai.cohere')} />
          </div>
        </BentoCard>
        <BentoCard title={t('backend.title')} className='lg:col-span-2 lg:col-start-2 lg:row-start-2'>
          <div className='flex flex-row gap-4 flex-wrap'>
            <Icon imagePath='/effect.webp' alt='Effect.ts' tooltip={t('backend.effect')} />
            <Icon imagePath='/fastify.webp' alt='Fastify' tooltip={t('backend.fastify')} />
            <Icon imagePath='/express.webp' alt='Express.js' tooltip={t('backend.express')} />
            <Icon imagePath='/fastapi.webp' alt='FastAPI' tooltip={t('backend.fastapi')} />
            <Icon imagePath='/vitest.webp' alt='Vitest' tooltip={t('backend.vitest')} />
            <Icon imagePath='/drizzle.webp' alt='Drizzle ORM' tooltip={t('backend.drizzle')} />
            <Icon imagePath='/prisma.webp' alt='Prisma ORM' tooltip={t('backend.prisma')} />
            <Icon imagePath='/postgresql.webp' alt='PostgreSQL' tooltip={t('backend.postgres')} />
            <Icon imagePath='/mysql.webp' alt='MySQL' tooltip={t('backend.mysql')} />
            <Icon imagePath='/mongodb.webp' alt='MongoDB' tooltip={t('backend.mongodb')} />
            <Icon imagePath='/redis.webp' alt='Redis' tooltip={t('backend.redis')} />
            <Icon imagePath='/rabbitmq.webp' alt='RabbitMQ' tooltip={t('backend.rabbitmq')} />
          </div>
        </BentoCard>
      </div>
    </div>
  );
};
