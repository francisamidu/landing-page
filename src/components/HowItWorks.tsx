import React from 'react';
import video from '../assets/videos/Floating Tasks by Mik Skuza on Dribbble.mp4';
import shared from '../shared.json';
import Step from './Step';

const HowItWorks = () => {
  return (
    <section className="py-5">
      <div className="flex max-w-screen-xl flex-col md:mx-auto">
        <div className="my-3 text-center">
          <h1 className="mb-3 text-xs font-bold uppercase">
            How to generate Ai images
          </h1>
          <h2 className="text-3xl font-bold">How it all works</h2>
        </div>
        <div className="flex flex-row justify-center">
          <div className="mr-3 flex w-[55%] flex-col items-center justify-center">
            <video
              src={video}
              autoPlay={false}
              controls
              className="h-auto w-full"
            ></video>
          </div>
          <div className="ml-3 w-[45%]  flex-col items-center">
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
