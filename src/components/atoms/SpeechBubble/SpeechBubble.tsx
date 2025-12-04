import type React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  text: string;
  offsetX?: number;
  offsetY?: number;
};

export const SpeechBubble: React.FC<Props> = ({ text, offsetX = 0, offsetY = 0 }) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition duration-150 ease-in-out shadow',
        `-top-${offsetY} -right-${offsetX}`,
      )}
    >
      {text}
      <span className='absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-secondary'></span>
    </div>
  );
};
