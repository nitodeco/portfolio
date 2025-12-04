import Image from 'next/image';
import type React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type Props = {
  imagePath: string;
  alt: string;
  tooltip?: string;
};

export const Icon: React.FC<Props> = ({ imagePath, alt, tooltip }) => {
  return (
    <div className='relative group'>
      <Popover>
        <PopoverTrigger asChild>
          <Image
            src={imagePath}
            alt={alt}
            width={48}
            height={48}
            objectFit='contain'
            className='hover:scale-105 hover:rotate-5 transition-transform ease-in-out duration-100'
          />
        </PopoverTrigger>
        {tooltip && (
          <PopoverContent className='bg-secondary text-secondary-foreground shadow w-fit h-fit text-center text-xs'>
            {tooltip}
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};
