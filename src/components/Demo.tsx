import React from 'react';
import { Stat } from '.';
import { Play } from 'lucide-react';
import image from '../assets/images/dashboard.jpg';

const Demo = () => {
  return (
    <section className="py-10">
      <div className="flex-col items-center justify-center md:mx-auto">
        <div
          className="h-[450px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="demo flex  flex-col items-center justify-center">
            <button
              className="flex flex-row items-center justify-center rounded-3xl bg-gray-50 py-3.5 px-5 shadow"
              type="button"
            >
              <Play color="#574bc5" size={22} />
              <span className="text-md ml-2 text-slate-800">
                Watch quick demo
              </span>
            </button>
          </div>
        </div>
        <Stat />
      </div>
    </section>
  );
};

export default Demo;
