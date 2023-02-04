import React, { useState } from 'react';
import { SlidesProps } from '@/interfaces';
import image1 from '../assets/images/dashboard-1.jpg';
import { Slide } from '.';

const Slides = () => {
  const [slides, _] = useState<SlidesProps[]>([
    {
      buttonText: 'Generate',
      content:
        "AI Image Generation is the future. Generate amazing artworks by leveraging Tornic. Turn your imagination into reality in a matter of seconds. It does'nt get better than this!!",
      heading: 'AI Image Generation is the future',
      image: image1,
      order: 'normal',
      preHeading: 'Create',
      onClick: () => {},
    },
  ]);
  return (
    <section className="py-5">
      <div className="flex max-w-screen-lg flex-col md:mx-auto">
        {slides.map((slide) => (
          <Slide {...slide} key={JSON.stringify(slide)} />
        ))}
      </div>
    </section>
  );
};

export default Slides;
