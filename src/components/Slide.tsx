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
    <div className="my-5 flex flex-col items-center justify-between md:flex-row">
      <img
        src={image}
        alt={heading}
        className={`${
          order === 'normal' ? 'order-1 md:mr-3' : 'order-2 md:ml-3'
        } my-3 h-auto rounded md:my-0 md:w-1/2`}
      />
      <div className={`md:ml-3 ${order === 'normal' ? 'order-2' : 'order-1'}`}>
        <h1 className="text-xs font-bold uppercase">{preHeading}</h1>
        <h2 className="py-4 text-3xl font-bold capitalize">{heading}</h2>
        <p className="mb-4 text-slate-500">{content}</p>
        <MainButton text={buttonText} onClick={onClick} />
      </div>
    </div>
  );
};

export default Slide;
