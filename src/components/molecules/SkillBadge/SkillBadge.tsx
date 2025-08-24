import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type Props = {
  skill: string;
  description: string;
};

export const SkillBadge: React.FC<Props> = ({ skill, description }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Badge className='border-foreground bg-background text-foreground hover:bg-secondary hover:scale-102 hover:rotate-3 transition-transform ease-in-out duration-100 cursor-pointer'>
          {skill}
        </Badge>
      </PopoverTrigger>
      <PopoverContent className='bg-secondary text-secondary-foreground shadow w-fit h-fit text-center text-xs'>
        {description}
      </PopoverContent>
    </Popover>
  );
};
