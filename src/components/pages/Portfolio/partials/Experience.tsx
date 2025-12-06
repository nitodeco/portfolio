import { useMessages, useTranslations } from 'next-intl';
import { type FC, useMemo } from 'react';

import { SkillBadge } from '@/components/molecules/SkillBadge';
import { cn } from '@/lib/utils';

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

type ExperienceGroup = {
  company: string;
  items: ExperienceItem[];
  startYear: number;
};

type Messages = {
  portfolio?: {
    experience?: {
      items?: ExperienceItem[];
    };
  };
};

export const Experience: FC = () => {
  const t = useTranslations('portfolio.experience');
  const messages = useMessages() as unknown as Messages;
  const items = messages?.portfolio?.experience?.items ?? [];

  const groups = useMemo(() => {
    const grouped: { [key: string]: ExperienceItem[] } = {};
    const result: ExperienceGroup[] = [];

    items.forEach((item) => {
      if (!grouped[item.company]) {
        grouped[item.company] = [];
        result.push({
          company: item.company,
          items: grouped[item.company],
          startYear: item.startYear,
        });
      }
      grouped[item.company].push(item);
    });

    return result;
  }, [items]);

  return (
    <section className='w-full'>
      <h2 className='text-center text-3xl font-semibold mb-8'>{t('title')}</h2>
      <div className='relative pl-4 w-full'>
        {groups.map((group) => (
          <article key={group.company} className='relative mb-10 last:mb-0'>
            <div className='pointer-events-none absolute left-3 -top-6 -bottom-6 w-px bg-primary' />
            <div className='absolute left-3 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--color-primary)/0.18)] ring-4 ring-primary/20 transition-transform duration-200 will-change-transform' />
            <span className='absolute left-3 -translate-x-full top-1 pr-2 text-xs text-muted-foreground tabular-nums'>
              {group.startYear}
            </span>
            <div className='group ml-8 rounded-xl border bg-card/60 p-4 shadow-sm backdrop-blur supports-backdrop-filter:bg-card/50 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5'>
              <h3 className='text-xl font-bold mb-4'>{group.company}</h3>
              <div className='flex flex-col'>
                {group.items.map((item, index) => (
                  <div key={item.id} className={cn(index > 0 && 'mt-6 pt-6 border-t border-border/40')}>
                    <div className='flex flex-col gap-1 mb-2'>
                      <h4 className='text-lg font-semibold leading-tight'>{item.title}</h4>
                      <span className='text-xs text-muted-foreground'>{item.period}</span>
                    </div>
                    <ul className='mt-3 list-disc list-inside space-y-1 text-sm leading-relaxed'>
                      {item.description.map((line: string) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {item.skills.map((skill: Skill) => (
                        <SkillBadge key={skill.name} skill={skill.name} description={skill.description} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
