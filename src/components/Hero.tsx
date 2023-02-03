import React from 'react';
import { MainButton } from '.';

const Hero = () => {
  return (
    <div className="my-28 flex flex-col items-center justify-center text-center">
      <h1 className="w-3/5 text-6xl font-bold capitalize leading-[4rem]">
        The Future of Creative Art reimagined AI Image generation
      </h1>
      <p className="my-8 text-gray-400">
        Create Fine graphics with our AI Image Generator in{' '}
        <span className="text-purplish-500">2 steps.</span>
      </p>
      <MainButton text="Save Generating Art" classNames="px-6 py-3" />
    </div>
  );
};

export default Hero;
