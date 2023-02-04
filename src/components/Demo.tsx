import React from 'react';
import { Stat } from '.';
import { Play, PlayIcon } from 'lucide-react';
import image from '../assets/images/powered-by-vitawind-bright.png';

const Demo = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-lg flex-col items-center justify-center md:mx-auto">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <button className="flex flex-row items-center justify-center rounded-3xl bg-gray-50 py-3.5 px-5">
            <PlayIcon className="text-purplish-500" size={18} />
            <span className="text-md text-slate-800">Watch quick demo</span>
          </button>
        </div>
        <Stat />
      </div>
    </section>
  );
};

export default Demo;
