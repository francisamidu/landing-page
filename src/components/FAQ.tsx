import React, { useState } from 'react';
import shared from '../shared.json';
import { FileQuestion as Question, ChevronUp, ChevronDown } from 'lucide-react';

type TFaq = typeof shared.faqs[0];
const FAQ = () => {
  const [showAnswer, setShownAnswer] = useState<TFaq | null>(null);
  const handleClick = (faq: TFaq) => {
    setShownAnswer(faq);
  };
  return (
    <section>
      <div className="max-w-screen-lg md:mx-auto">
        <h1 className="my-4 text-3xl font-bold capitalize">
          {shared.name} AI art generator FAQs
        </h1>
        <div className="border-[1px] border-gray-50">
          {shared.faqs.map((faq) => (
            <div
              className="my-2"
              key={JSON.stringify(faq)}
              onClick={() => handleClick(faq)}
            >
              <div className="flex flex-row items-center">
                <p className="font-bold text-slate-800">{faq.q}</p>
                {showAnswer?.a ? (
                  <ChevronUp className="text-slate-800" size={20} />
                ) : (
                  <ChevronDown className="text-slate-800" size={20} />
                )}
              </div>
              <div
                className={`h-0 ${
                  showAnswer?.a === faq.a ? 'h-full' : ''
                } transition-all duration-200`}
              >
                <p className="text-slate-800">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
