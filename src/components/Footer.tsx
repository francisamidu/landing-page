import React from 'react';
import shared from '../shared.json';

const Footer = () => {
  const columns = shared.columns;
  return (
    <footer className="grid grid-cols-4 p-5">
      <div>
        <h1 className="text-3xl font-bold text-white">{shared.name}</h1>
        <p>{shared.description}</p>
      </div>
    </footer>
  );
};

export default Footer;
