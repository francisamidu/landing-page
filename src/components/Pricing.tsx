import React from 'react';
import shared from '../shared.json';
import { CheckIcon } from 'lucide-react';
import { MainButton } from '.';

const Pricing = () => {
  const pricing = shared.pricing;
  return (
    <section className="py-5">
      <h1 className="text-center text-2xl font-bold capitalize">
        Simple, transparent pricing
      </h1>
      <h2 className="text-center">
        Create stunning works of art without paying $100 for a graphic designer
      </h2>

      <div className="mt-10 grid grid-cols-1 place-content-center gap-2 md:grid-cols-3">
        {pricing.map((p, i) => (
          <div
            className="flex flex-1 flex-col items-stretch justify-center rounded-md border-[1px] border-slate-800 p-5"
            key={i}
          >
            <div className="grid place-items-center">
              <span className="my-4 w-fit rounded-3xl bg-slate-500 p-1 px-3 text-xs font-bold uppercase text-slate-800">
                {p.type}
              </span>
            </div>
            <span className="mb-4 text-center text-2xl font-bold text-white">
              {`${Number(p.cost) ? `$${p.cost}` : p.cost}`}
            </span>
            {p.benefits.map((b) => (
              <ul className="flex flex-col p-0" key={JSON.stringify(b)}>
                <li className="mb-3 flex flex-row items-center">
                  <CheckIcon
                    color="#196436"
                    className="mr-3  rounded-full bg-[#2bbd63d8] p-1"
                    size={22}
                  />
                  <span className="text-slate-500">{b}</span>
                </li>
              </ul>
            ))}
            <MainButton
              classNames="!block my-3 rounded-3xl"
              text={p.cost === 'Free' ? 'Get Started' : 'Pre-order (80%)'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
