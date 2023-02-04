import React from 'react';
import shared from '../shared.json';

const Footer = () => {
  const columns = shared.columns;
  const lastColumn = columns[columns.length - 1];
  return (
    <footer className="grid grid-cols-4 py-10">
      <div className="mr-3">
        <h1 className="text-3xl font-bold text-white">{shared.name}</h1>
        <p className="mt-10 text-slate-400">{shared.description}</p>
      </div>
      {columns.slice(0, 3).map((c) => (
        <div className="mb-8 place-self-center" key={JSON.stringify(c)}>
          <h2 className="text-xs font-bold uppercase text-slate-400">
            {c.name}
          </h2>
          <ul className="mt-8">
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
      <div className="col-start-1 col-end-5 mt-7 flex flex-row items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} {shared.name}
        </p>
        <span className="dot"></span>
        {lastColumn.links.map((c, i) => (
          <div className="flex flex-row items-center justify-center" key={i}>
            <a href="#" className="text-slate-400 hover:text-purplish-500">
              {c}
            </a>
            {lastColumn.links.length - i != 1 ? (
              <span className="dot"></span>
            ) : null}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
