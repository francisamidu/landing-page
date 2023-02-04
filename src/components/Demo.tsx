import React from 'react';
import { Stat } from '.';
import { Play, PlayIcon } from 'lucide-react';

const Demo = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-lg flex-col items-center justify-center md:mx-auto">
        <div className="demo flex flex-col items-center justify-center">
          <button className="flex flex-row items-center justify-center rounded-3xl bg-gray-50 py-3.5 px-5">
            <Play className="text-purplish-500" size={18} />
            <span className="text-md text-slate-800">Watch quick demo</span>
          </button>
        </div>
        <Stat />
      </div>
    </section>
  );
};

export default Demo;
