import React from 'react';
import shared from '../shared.json';
import { MainButton, SecondaryButton } from '.';
import { Check } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-5">
      <div className="rounded-lg bg-blue-900 p-10 text-center">
        <h1 className="mb-1 text-sm font-bold capitalize text-slate-300">
          Try today
        </h1>
        <h2 className="text-4xl font-bold">
          Get Started with {shared.name} for free
        </h2>
        <p className="my-5 mx-auto w-3/5 text-slate-200">
          Unleash your creative potential with {shared.name}. Save money and
          time while creating stunning works of art.
        </p>
        <div className="my-5 flex flex-row items-center justify-center">
          <MainButton
            classNames="mr-3 bg-black hover:bg-white hover:text-black"
            text="Get started for free"
          />
          <MainButton
            classNames="ml-3 bg-white text-blue-900 hover:bg-black hover:text-white"
            text="Get a live demo"
          />
        </div>
        <div className="my-3 flex flex-row items-center justify-center">
          <div className="mr-2 flex flex-row items-center">
            <Check color="#fff" size={18} />
            <span className="ml-2 text-white">No credit card required</span>
          </div>
          <div className="ml-2 flex flex-row items-center">
            <Check color="#fff" size={18} />
            <span className="ml-2 text-white">No software to install</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
