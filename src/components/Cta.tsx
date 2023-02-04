import React from 'react';
import shared from '../shared.json';
import { MainButton, SecondaryButton } from '.';
import { Check } from 'lucide-react';

const Cta = () => {
  return (
    <section className="p-5 md:py-5">
      <div className="rounded-lg bg-purplish-700 p-10 text-center">
        <h1 className="mb-1 text-sm font-bold capitalize text-slate-300">
          Try today
        </h1>
        <h2 className="text-4xl font-bold">
          Get Started with {shared.name} for free
        </h2>
        <p className="my-5 mx-auto text-slate-200 md:w-3/5">
          Unleash your creative potential with {shared.name}. Save money and
          time while creating stunning works of art.
        </p>
        <div className="my-5 flex flex-row items-center justify-center">
          <MainButton
            classNames="mr-3 bg-black hover:bg-white hover:text-black"
            text="Get started for free"
          />
          <MainButton
            classNames="ml-3 bg-white !text-purplish-700 hover:bg-black hover:text-white"
            text="Get a live demo"
          />
        </div>
        <div className="my-3 flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-row items-center md:mr-2">
            <Check color="#fff" size={18} />
            <span className="ml-2 text-white">No credit card required</span>
          </div>
          <div className="flex flex-row items-center md:ml-2">
            <Check color="#fff" size={18} />
            <span className="ml-2 text-white">No software to install</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
