import React from 'react';
import video from '../assets/videos/Floating Tasks by Mik Skuza on Dribbble.mp4';
import shared from '../shared.json';
import Step from './Step';

const HowItWorks = () => {
  return (
    <section className="py-5">
      <div className="flex flex-col">
        <div className="my-3 text-center">
          <h1 className="mb-3 text-xs font-bold uppercase">
            How to generate Ai images
          </h1>
          <h2 className="text-3xl font-bold">How it all works</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 px-5 md:grid-cols-2 md:place-content-center md:px-0">
          <div className="flex w-full flex-col items-center justify-center md:mr-3 md:w-[90%]">
            <video
              src={video}
              autoPlay={false}
              controls
              className="h-auto w-full"
            ></video>
          </div>
          <div className="ml-3 w-full flex-col items-center md:w-auto">
            {shared.steps.map((step, index) => (
              <Step key={JSON.stringify(step)} index={index} text={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
