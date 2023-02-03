import React from 'react';
import { Slide } from 'react-slideshow-image';
import logo from '../assets/images/logo.svg';
import powered from '../assets/images/powered-by-vitawind-bright.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedGallery = () => {
  const indicators = () => <li className="indicator mr-1"></li>;
  const properties = {
    prevArrow: <ChevronLeft size={15} className="text-white" />,
    nextArrow: <ChevronRight size={15} className="text-white" />,
  };

  const images = [logo, powered, logo, powered];
  return (
    <section className="my-5">
      <h1 className="my-6 text-center font-bold">Featured Gallery</h1>
      <div className="max-w-screen-lg md:mx-auto">
        <Slide indicators={indicators} {...properties} slidesToShow={3}>
          {images.map((image, index) => (
            <div className="each-slide-effect" key={index}>
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default FeaturedGallery;
