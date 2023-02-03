import React, { useState } from 'react';
import { Hero, Navbar, TopHeader } from './components';

const App = () => {
  return (
    <>
      <main className="min-h-[95vh] bg-[#02000e]">
        <TopHeader />
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
