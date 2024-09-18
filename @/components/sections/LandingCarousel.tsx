import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Iphone15Pro from '../magicui/iphone-15-pro';
import { Button } from '../ui/button';
import HyperText from '../magicui/hyper-text';
import GradualSpacing from '../magicui/gradual-spacing';
import BlurIn from '../magicui/blur-in';
import BoxReveal from '../magicui/box-reveal';

const ONBOARDING_DATA = [
  {
    title: 'Co-Op Storytelling',
    description:
      '5W is a creative co-op game where players work together to write a story. Each player takes turns adding to the narrative by answering prompts such as "what," "where," "when," and "who." This collaborative approach encourages creativity and teamwork, making it a fun and engaging experience for all participants. The game can be played in real-time, with each player contributing their part within a set time limit, ensuring the story progresses smoothly and dynamically.',
    image: '/how-to-play-1.png',
  },
  {
    title: 'Easy to play',
    description:
      '5W is an easy-to-play co-op game where players collaboratively create a story. Each player takes turns writing a sentence that answers one of the prompts: "what," "where," "when," or "who." The goal is to build a fun and imaginative story together. This game encourages creativity and teamwork, making it perfect for friends and family to enjoy together.',
    image: '/how-to-play-2.png',
  },
  {
    title: 'Make it Fun',
    description: `5W is a lively and imaginative co-op game where players team up to create a wild and wacky story. Each player takes turns writing a sentence that answers one of the prompts: "what," "where," "when," or "who." With just five words per turn, the story can take hilarious and unexpected twists and turns. It's a fantastic way to spark creativity, laughter, and teamwork as you build a unique tale together. Perfect for parties, family gatherings, or just a fun night in with friends!`,
    image: '/how-to-play-3.png',
  },
];

const DOWN_LOAD_BUTTONS = [
  {
    name: 'App Store',
    image: '/appstore.png',
    href: 'https://apps.apple.com/us/app/id6472695886',
  },
  {
    name: 'Google Play',
    image: '/chplay.png',
    href: 'https://play.google.com/store/apps/details?id=com.kodegenix.game.wordle',
  },
];

export function LandingCarousel() {
  return (
    <Carousel className="w-full h-[60vh] bg-transparent">
      <CarouselContent className="bg-transparent">
        {ONBOARDING_DATA.map((onboardingData, index) => (
          <CarouselItem key={index} className="">
            <div className="w-[80vw] flex justify-center items-center">
              <div className="flex-1 px-5 flex flex-col gap-5">
                <div className="relative w-[50vw] m-auto justify-center items-center md:hidden flex ">
                  <Iphone15Pro height={200} src={onboardingData.image} />
                </div>
                <div className="">
                  <HyperText
                    className="font-bold text-md md:text-xl lg:text-2xl"
                    text={onboardingData.title}
                  ></HyperText>
                </div>
                <BoxReveal boxColor={'#fff'} duration={0.5}>
                  <div className="opacity-50 w-[80%] md:text-xs text-[8px]">
                    {onboardingData.description}
                  </div>
                </BoxReveal>
                <div className="flex mt-5 gap-3 items-center">
                  {DOWN_LOAD_BUTTONS.map((button, index) => (
                    <a key={index} href={button.href}>
                      <Button
                        variant="secondary"
                        className="gap-2 md:text-xs text-[8px]  rounded-full dark:hover:bg-white dark:bg-white dark:text-black p-5"
                      >
                        <img
                          width={30}
                          height={30}
                          src={button.image}
                          alt={button.name}
                        />
                        {button.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Iphone15Pro
                  height={700}
                  width={280}
                  src={onboardingData.image}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
