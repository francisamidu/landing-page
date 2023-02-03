import React, { useState } from 'react';
import { Hero, TopHeader } from './components';

const App = () => {
  return (
    <>
      <main className="min-h-[95vh] bg-[#02000e]">
        <TopHeader />
        <Hero />
      </main>
    </>
  );
};

export default App;
