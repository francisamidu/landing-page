import React from 'react';
import { MainButton } from '.';

const TopHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center border-b border-gray-800 py-2 px-4">
      <p className="mr-4">
        We have recently released a Beta version of our next-gen ML model. Test
        it out!
      </p>
      <div className="ml-4 flex flex-row items-center">
        <MainButton text="Save my spot" classNames="mr-1" />
      </div>
    </div>
  );
};

export default TopHeader;
