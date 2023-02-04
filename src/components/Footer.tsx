import React from 'react';
import shared from '../shared.json';

const Footer = () => {
  const columns = shared.columns;
  console.log(columns[columns.length - 1]);

  return (
    <footer className="grid grid-cols-4 p-5">
      <div className="mr-3">
        <h1 className="text-3xl font-bold text-white">{shared.name}</h1>
        <p className="mt-5 text-slate-400">{shared.description}</p>
      </div>
      {columns.slice(0, 3).map((c) => (
        <div className="place-self-center" key={JSON.stringify(c)}>
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
      <div className="col-start-1 col-end-3 flex flex-row items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} {shared.name}
        </p>
        <span className="dot"></span>
        {columns[3].links.map((c, i) => (
          <div key={i}>
            <span className="text-slate-400">{c}</span>
            <span className="dot"></span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
