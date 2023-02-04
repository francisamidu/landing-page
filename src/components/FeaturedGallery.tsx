import React from 'react';
import { Slide } from 'react-slideshow-image';
import dashboard1 from '../assets/images/dashboard-1.jpg';
import dashboard2 from '../assets/images/dashboard-2.jpg';
import dashboard3 from '../assets/images/dashboard-3.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedGallery = () => {
  const indicators = () => <li className="indicator mr-1"></li>;
  const properties = {
    prevArrow: (
      <ChevronLeft
        size={25}
        className="ml-2 rounded-full bg-[#00000033] p-1 text-white"
      />
    ),
    nextArrow: (
      <ChevronRight
        size={25}
        className="mr-2 rounded-full bg-[#00000033] p-1 text-white"
      />
    ),
  };

  const images = [dashboard1, dashboard2, dashboard3];
  return (
    <section className="my-5">
      <h1 className="my-6 text-center font-bold">Featured Gallery</h1>
      <div className="max-w-screen-lg md:mx-auto">
        <Slide indicators={false} {...properties}>
          {images.map((image, index) => (
            <div className="each-slide-effect" key={index}>
              <img src={image}></img>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default FeaturedGallery;
