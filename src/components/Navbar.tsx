import React, { useState } from 'react';
import shared from '../shared.json';
import { Menu } from 'lucide-react';

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
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full px-2 py-2 sm:px-8">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between md:max-w-[1100px]">
        <a
          href="#"
          className="self-center whitespace-nowrap text-sm font-bold uppercase"
        >
          {shared.name}
        </a>
        <Menu
          color="#fff"
          className="hover:cursor-pointer md:hidden"
          size={23}
          onClick={() => setShowMenu(!showMenu)}
        />

        <div
          className={`${
            showMenu ? '' : 'hidden'
          } w-full items-center justify-between md:order-1 md:flex md:w-auto `}
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {links.map(({ active, link, text }, index) => {
              return (
                <li key={index}>
                  <a
                    href={link}
                    className={`block py-2 pl-3 pr-4 ${
                      active ? 'text-purplish-700' : 'text-slate-100'
                    } w-fit rounded capitalize transition-colors duration-200 hover:text-purplish-500 md:p-0`}
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
