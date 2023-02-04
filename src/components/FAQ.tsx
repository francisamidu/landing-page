import React, { useState } from 'react';
import shared from '../shared.json';
import { FileQuestion as Question, ChevronUp, ChevronDown } from 'lucide-react';

type TFaq = typeof shared.faqs[0];
const FAQ = () => {
  const [showAnswer, setShownAnswer] = useState<TFaq | null>(null);
  const handleClick = (faq: TFaq) => {
    if (showAnswer?.a) {
      setShownAnswer(null);
      return;
    }
    setShownAnswer(faq);
  };
  return (
    <section className="p-5 md:px-0">
      <div className="flex min-h-[50vh] flex-col items-center">
        <h1 className="my-4 text-3xl font-bold capitalize">
          {shared.name} AI art generator FAQs
        </h1>
        <div className="grid grid-cols-1 rounded-md border-[1px] border-slate-900 md:grid-cols-2">
          {shared.faqs.map((faq) => (
            <div className="my-2 py-2 px-4" key={JSON.stringify(faq)}>
              <p className="font-bold text-slate-500">{faq.q}</p>
              <p className="mt-3 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
