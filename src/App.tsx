import React, { useState } from 'react';
import {
  Demo,
  FeaturedGallery,
  Hero,
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
      </main>
    </>
  );
};

export default App;
