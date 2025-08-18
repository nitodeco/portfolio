import React from 'react';

import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { SpeechBubble } from '@/components/atoms/SpeechBubble';

type Props = {
  imagePath: string;
  alt: string;
  tooltip?: string;
};

export const Icon: React.FC<Props> = ({ imagePath, alt, tooltip }) => {
  return (
    <div className='relative group'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={imagePath}
            alt={alt}
            width={48}
            height={48}
            objectFit='contain'
            className='hover:scale-105 hover:rotate-5 transition-transform ease-in-out duration-100'
          />
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent className='bg-secondary text-secondary-foreground shadow'>{tooltip}</TooltipContent>
        )}
      </Tooltip>
    </div>
  );
};
