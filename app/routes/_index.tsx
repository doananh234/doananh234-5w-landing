import type { MetaFunction } from '@remix-run/node';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { LandingCarousel } from '@/components/sections/LandingCarousel';
import HyperText from '@/components/magicui/hyper-text';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="h-[90vh] w-[80vw] flex flex-col justify-center items-center m-auto">
        <HyperText
          className="md:text-3xl text-xl lg:text-4xl font-bold text-black dark:text-white"
          text="Welcome to 5W Game"
        />
        <div className="flex-1 w-full">
          <LandingCarousel />
        </div>
        <div className="flex xs:text-[8px] text-[8px] lg:text-xs opacity-70 justify-center gap-2 items-center">
          <a className="cursor-pointer" href="/privacy-policy">
            Privacy & Policy
          </a>
          <span>|</span>
          <a className="cursor-pointer " href="/terms-of-use">
            Terms of Use
          </a>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />
    </div>
  );
}
