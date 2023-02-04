import React, { useState } from 'react';
import {
  Demo,
  FAQ,
  FeaturedGallery,
  Hero,
  HowItWorks,
  Navbar,
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
        <Demo />
        <FeaturedGallery />
        <Slides />
        <HowItWorks />
        <FAQ />
      </main>
    </>
  );
};

export default App;
