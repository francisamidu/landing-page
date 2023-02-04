import React from 'react';
import shared from "../shared.json"
import {CheckCircleIcon} from "lucide-react"
import {MainButton} from '.';

const Pricing = () => {
  const pricing = shared.pricing
  return (
    <section className="py-5">
    <h1 className="font-bold text-2xl text-center">Simple, transparent pricing</h1>
    <h2 className="text-center">Create stunning works of art without paying $100 for a graphic designer</h2>

<div className="mt-4">
  {
    pricing.map((p,i) => (
    <div className='p-5 rounded-md' key={i}>
      <span className='p-3 rounded-3xl bg-slate-300 text-slate-800 my-3'>{p.cost}</span>
      <span className='text-white mb-4'>{p.type}</span>
      {
        p.benefits.map(b => (
          <ul className='flex flex-col p-0' key={JSON.stringify(b)}>
            <li>
              <CheckCircleIcon className='mr-3 text-purplish-500' size={22}/>
              <span className='text-slate-500'>{b}</span>
            </li>
          </ul>
        ))
      }
      <MainButton text={p.cost === 'Free' ? "Get Started" : "Pre-order (80%)"}/>
    </div>
    ))
  }
</div>
  </section>
  )
};

export default Pricing;
