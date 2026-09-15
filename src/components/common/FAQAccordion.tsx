import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions - FAQ)',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 my-6 shadow-xs">
      <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-4 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <span>{title}</span>
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-3.5 sm:p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-slate-800 transition"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">Q{idx + 1}</span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-3.5 sm:p-4 bg-white text-slate-700 text-sm leading-relaxed border-t border-slate-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
