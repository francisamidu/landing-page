import React from 'react';
import video from '../assets/videos/Floating Tasks by Mik Skuza on Dribbble.mp4';

const HowItWorks = () => {
  return (
    <section className="py-5">
      <div className="max-w-screen-lg md:mx-auto">
        <div className="my-3 text-center">
          <h1 className="mb-3 text-xs font-bold uppercase">
            How to generate Ai images
          </h1>
          <h2 className="text-3xl font-bold">How it all works</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <video
            src={video}
            autoPlay={false}
            controls
            className="my-5 h-auto w-3/5"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
