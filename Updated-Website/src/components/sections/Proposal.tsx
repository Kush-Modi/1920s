import React from 'react';
import Section from './Section';

export default function Proposal() {
  return (
    <Section>
      <div className="relative bg-gray-light rounded-[60px] p-12 md:p-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h2 className="font-boska text-5xl md:text-6xl leading-[1.1]">
              Let's make <br />
              <span className="italic font-light">things happen</span>
            </h2>
            <p className="font-general-sans text-xl text-gray-dark leading-relaxed max-w-md mx-auto md:mx-0">
              Contact us today to learn how our digital marketing solutions can scale your business and dominate your niche.
            </p>
            <div className="pt-4">
              <button className="btn-primary py-5 px-10 text-xl group/btn">
                Get Your Free Proposal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform group-hover/btn:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-3xl scale-125"></div>
            <img
              src="/images/proposal-pic.png"
              alt="Illustration"
              className="relative w-full h-auto grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
