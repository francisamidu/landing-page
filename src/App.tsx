import React, { useState } from 'react';
import {
  Cta,
  Demo,
  FAQ,
  FeaturedGallery,
  Footer,
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
          <Cta />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
