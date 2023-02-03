import React, { useState } from 'react';
import { FeaturedGallery, Hero, Navbar, Stat, TopHeader } from './components';

const App = () => {
  return (
    <>
      <main className="min-h-[95vh] bg-[#02000e]">
        <TopHeader />
        <Navbar />
        <Hero />
        <Stat />
        <FeaturedGallery />
      </main>
    </>
  );
};

export default App;
