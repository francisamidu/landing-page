import React from 'react';
import { MainButton, SecondaryButton } from '.';

const TopHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center border-b border-gray-50 py-2 px-4">
      <p></p>
      <div className="flex flex-row items-center">
        <MainButton onClick={() => {}} text="Save my spot" classNames="mr-1" />
        <SecondaryButton
          onClick={() => {}}
          text="Save my spot"
          classNames="ml-1"
        />
      </div>
    </div>
  );
};

export default TopHeader;
