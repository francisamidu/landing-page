import React from 'react';
import { SlidesProps } from '@/interfaces';
import { MainButton } from '.';

type TSlide = {
  slide: SlidesProps;
};
const Slide = (slide: TSlide) => {
  const {
    slide: { buttonText, content, heading, image, onClick, order, preHeading },
  } = slide;

  return (
    <div className="my-5 flex flex-row items-center justify-between">
      <img
        src={image}
        alt={heading}
        className={`${
          order === 'normal' ? 'order-1 mr-3' : 'order-2 ml-3'
        } h-auto w-1/2 rounded`}
      />
      <div className={`ml-3 ${order === 'normal' ? 'order-2' : 'order-1'}`}>
        <h1 className="text-xs font-bold uppercase">{preHeading}</h1>
        <h2 className="py-4 text-3xl font-bold capitalize">{heading}</h2>
        <p className="mb-4 text-slate-500">{content}</p>
        <MainButton text={buttonText} onClick={onClick} />
      </div>
    </div>
  );
};

export default Slide;
