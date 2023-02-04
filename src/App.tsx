import React, { useState } from 'react';
import {
  Demo,
  FAQ,
  FeaturedGallery,
  Hero,
  HowItWorks,
  Navbar,
  Pricing,
  Slides,
  TopHeader,
} from './components';

const App = () => {
  return (
    <>
      <main className="min-h-[95vh] bg-[#02000e]">
        <TopHeader />
        <Navbar />
        <Hero />
        <div className="max-w-screen-lg md:mx-auto">
          <Demo />
          <FeaturedGallery />
          <Slides />
          <HowItWorks />
          <FAQ />
          <Pricing />
        </div>
      </main>
    </>
  );
};

export default App;
