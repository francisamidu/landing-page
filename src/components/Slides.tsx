import React, { useState } from 'react';
import { SlidesProps } from '@/interfaces';
import image1 from '../assets/images/dashboard-1.jpg';
import image2 from '../assets/images/dashboard-2.jpg';
import image3 from '../assets/images/dashboard-3.jpg';
import { Slide } from '.';
import shared from '../shared.json';

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
    {
      buttonText: 'Generate',
      content: `${shared.name} doesn't just transform text to image but also Image to Image generation. Use the image of your choice to create a new image with ${shared.name} AI image generator. Use it to create wonderful AI illustrations, paintings and different kinds of artwork`,
      heading: "It's not just Text to Image but Image to Image too",
      image: image2,
      order: 'reversed',
      preHeading: 'Images',
      onClick: () => {},
    },
  ]);

  return (
    <section className="p-5 md:py-5">
      <div className="flex flex-col">
        {slides.map((slide) => (
          <Slide slide={slide} key={JSON.stringify(slide)} />
        ))}
      </div>
    </section>
  );
};

export default Slides;
