import React, { useState } from 'react';

const Navbar = () => {
  const [links, setLinks] = useState([
    {
      active: false,
      text: 'product',
      link: '#',
    },
    {
      active: false,
      text: 'pricing',
      link: '#',
    },
    {
      active: false,
      text: 'templates',
      link: '#',
    },
    {
      active: false,
      text: 'careers',
      link: '#',
    },
    {
      active: false,
      text: 'support',
      link: '#',
    },
  ]);
  return (
    <nav className="w-full px-2 py-2 sm:px-4">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between md:max-w-screen-lg">
        <span className="self-center whitespace-nowrap text-sm font-bold uppercase">
          Nova-Art
        </span>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {links.map(({ active, link, text }, index) => {
              return (
                <li key={index}>
                  <a
                    href={link}
                    className={`block py-2 pl-3 pr-4 ${
                      active ? 'text-[#3d348b]' : 'text-slate-100'
                    } rounded capitalize md:p-0`}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
