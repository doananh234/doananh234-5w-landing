import FlickeringGrid from '@/components/ui/flickering-grid';
import React from 'react';

export default function Container({ children }) {
  return (
    <div className="relative min-h-[100vh] flex w-full items-center justify-center rounded-lg border bg-background md:shadow-xl">
      <FlickeringGrid
        squareSize={4}
        gridGap={6}
        color="#d1d1d1"
        maxOpacity={0.5}
        flickerChance={0.1}
        className={'z-0 absolute inset-0 size-full'}
      />
      {children}
    </div>
  );
}
