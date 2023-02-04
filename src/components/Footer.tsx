import React from 'react';
import shared from '../shared.json';

const Footer = () => {
  const columns = shared.columns;
  return (
    <footer className="grid grid-cols-4 p-5">
      <div>
        <h1 className="text-3xl font-bold text-white">{shared.name}</h1>
        <p className="mt-3 text-slate-400">{shared.description}</p>
      </div>
      {columns.slice(0, 3).map((c) => (
        <div key={JSON.stringify(c)}>
          <h2 className="text-xs font-bold uppercase text-slate-400">
            {c.name}
          </h2>
          <ul className="mt-3">
            {c.links.map((l) => (
              <li
                key={l}
                className="mb-1 w-fit text-slate-300 hover:text-purplish-500"
              >
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
