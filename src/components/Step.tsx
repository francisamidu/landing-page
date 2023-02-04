import { StepProps } from '@/interfaces';
import React from 'react';

const Step = ({ index, text }: StepProps) => {
  return (
    <div className="my-3 flex w-fit flex-row rounded-3xl bg-transluscent-100 py-3 px-5 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
      <span className="mr-3 text-purplish-500">{index + 1}</span>
      <p>{text}</p>
    </div>
  );
};

export default Step;
