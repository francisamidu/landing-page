import React from 'react';
import { MainButton } from '.';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="my-28 flex flex-col items-center justify-center text-center">
      <h1 className="w-3/5 text-6xl font-bold capitalize leading-[4rem]">
        The Future of <span className="text-purplish-500">Creative Art</span>{' '}
        reimagined with AI Image generation
      </h1>
      <p className="my-8 text-gray-400">
        Create Fine graphics with our AI Image Generator in{' '}
        <span className="font-bold ">2 steps.</span>
      </p>
      <MainButton
        text="Generate"
        classNames="px-7 py-4 !rounded-3xl"
        icon={<ArrowRight color="#fff" size={20} />}
      />
    </section>
  );
};

export default Hero;
