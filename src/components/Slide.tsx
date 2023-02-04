import React from 'react';
import { SlidesProps } from '@/interfaces';
import { MainButton } from '.';

const Slide = ({
  buttonText,
  content,
  heading,
  image,
  onClick,
  order,
  preHeading,
}: SlidesProps) => {
  return (
    <div className="flex flex-row items-center justify-around">
      <img
        src={image}
        alt={heading}
        className={`${order === 'reversed' ? 'order-2' : 'order-1'}`}
      />
      <div className={`${order === 'reversed' ? 'order-2' : 'order-1'}`}>
        <h1 className="text-sm font-bold">{preHeading}</h1>
        <h2 className="py-4 text-3xl font-bold capitalize">{heading}</h2>
        <p className="mb-4 text-slate-500">{content}</p>
        <MainButton text={buttonText} onClick={onClick} />
      </div>
    </div>
  );
};

export default Slide;
