import React from 'react';

const Stat = () => {
  return (
    <div className="mt-7 flex flex-row items-center justify-center text-xl">
      <p className="mr-2">
        Won
        <a href="#" className="mx-1 text-purplish-500">
          Most Innovative Project
        </a>{' '}
        at <span className="text-slate-100">AIConf</span>
      </p>
      <p className="ml-2">
        <span className="font-bold">1,383</span> images generated
      </p>
    </div>
  );
};

export default Stat;
