import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Section from './Section';

const cards = [
  {
    title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "https://google.com",
  },
  {
    title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "https://google.com",
  },
  {
    title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "https://google.com",
  },
];

export default function Cases() {
  return (
    <Section id="cases">
      <SectionTitle
        sectionTitle="Case Studies"
        description="Explore real-life examples of our proven digital marketing success through our case studies."
      />

      <div className="relative bg-black text-white rounded-[60px] p-8 md:p-16 lg:p-24 overflow-hidden">
        {/* subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 flex flex-col justify-between space-y-8 transition-all duration-500 hover:bg-white/5 
              ${index === 0 ? "md:pl-0" : ""}
              ${index === cards.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="text-xl font-general-sans leading-relaxed text-gray-medium">
                {card.title}
              </p>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-white font-boska text-2xl hover:underline underline-offset-8 transition-all"
              >
                <span className="opacity-80 group-hover:opacity-100 italic">
                  Explore Case
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
