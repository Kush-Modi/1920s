import React, { useRef, useEffect } from 'react';

interface AccordionItemProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export default function AccordionItem({ index, title, description, isActive, onClick }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`accordion__item group overflow-hidden w-full transition-all duration-500 mb-6 rounded-[32px] border border-black/5 bg-gray-light hover:bg-white hover:shadow-xl active:bg-black active:text-white ${isActive ? 'active' : ''}`}
    >
      <button
        className="accordion__toggle w-full flex items-center justify-between p-8 md:p-12 cursor-pointer text-left"
        id={`${title} accordion__item menu button`}
        aria-expanded={isActive}
        aria-controls={`${title} accordion__item menu content`}
        onClick={onClick}
      >
        <div className="flex items-center gap-8">
          <span className={`text-4xl md:text-6xl font-boska transition-opacity ${isActive ? 'opacity-100' : 'opacity-30'}`}>
            0{index}
          </span>
          <span className="text-2xl md:text-4xl font-boska font-medium">{title}</span>
        </div>
        <div
          className={`w-14 h-14 flex justify-center items-center rounded-full border border-black/10 transition-colors ${isActive ? 'bg-black' : 'bg-white'}`}
        >
          <div
            className={`accordion__icon h-6 w-6 transition-transform duration-500 flex justify-center items-center relative ${isActive ? 'text-white' : ''}`}
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full transition-transform ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      <div
        id={`${title} accordion__item menu content`}
        aria-labelledby={`${title} accordion__item menu button `}
        ref={contentRef}
        className={`accordion__content px-8 md:px-12 transition-all duration-500`}
        style={{
          maxHeight: isActive ? contentRef.current?.scrollHeight || 500 : 0,
          opacity: isActive ? 1 : 0,
          paddingBottom: isActive ? '3rem' : '0'
        }}
      >
        <div className="w-full h-px bg-black/10 mb-8"></div>
        <p className="text-lg md:text-xl text-gray-dark font-general-sans leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>
    </div>
  );
}
