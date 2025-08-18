import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

type Props = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export const BentoCard: React.FC<Props> = ({ title, className, children }) => {
  return (
    <Card className={cn(className, 'relative transition-all duration-200 hover:-translate-y-0.5')}>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
