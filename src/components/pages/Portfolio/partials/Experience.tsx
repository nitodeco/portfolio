import React from 'react';

import { useMessages, useTranslations } from 'next-intl';

import { SkillBadge } from '@/components/molecules/SkillBadge';

type Skill = {
  name: string;
  description: string;
};

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: Skill[];
  startYear: number;
};

export const Experience: React.FC = () => {
  const t = useTranslations('portfolio.experience');
  const messages = useMessages() as unknown as Record<string, unknown>;
  const items = ((messages as any)?.portfolio?.experience?.items ?? []) as ExperienceItem[];

  return (
    <section className='w-full'>
      <h2 className='text-center text-2xl font-semibold mb-8'>{t('title')}</h2>
      <div className='relative pl-16'>
        {items.map((item: ExperienceItem) => (
          <article key={item.id} className='relative mb-10 last:mb-0'>
            <div className='pointer-events-none absolute left-3 -top-6 -bottom-6 w-px bg-gradient-to-b from-transparent via-border to-transparent' />
            <div className='absolute left-3 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--color-primary)/0.18)] ring-4 ring-primary/20 transition-transform duration-200 will-change-transform' />
            <span className='absolute left-3 -translate-x-full top-1 pr-2 text-xs text-muted-foreground tabular-nums'>
              {item.startYear}
            </span>
            <div className='group ml-8 rounded-xl border bg-card/60 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/50 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex min-w-0 flex-col'>
                  <h3 className='text-lg font-semibold leading-tight'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground truncate'>{item.company}</p>
                </div>
                <span className='shrink-0 rounded-full border px-2 py-0.5 text-xs text-muted-foreground bg-muted/50'>
                  {item.period}
                </span>
              </div>
              <ul className='mt-3 list-disc list-inside space-y-1 text-sm leading-relaxed'>
                {item.description.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
              <div className='mt-4 flex flex-wrap gap-2'>
                {item.skills.map((skill: Skill) => (
                  <SkillBadge skill={skill.name} description={skill.description} key={crypto.randomUUID()} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
