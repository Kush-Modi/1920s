import React from 'react';
import Section from './Section';

export default function Hero() {
  return (
    <Section id="home">
      <div className="relative flex flex-col lg:flex-row items-center min-h-[70vh] gap-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start lg:w-7/12 space-y-8">
          <div className="space-y-4">
            <span className="btn-pill">Digital Excellence Defined</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[92px] leading-[0.9] tracking-tight">
              We Don’t Run <span className="font-light italic">Campaigns.</span> <br />
              We Build Systems That <br />
              <span className="font-outline">Compound.</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-dark max-w-2xl leading-relaxed font-general-sans">
            NineteenTwentys is a systems-first marketing agency helping brands move from scattered efforts to structured, scalable growth through strategy, storytelling, and engineered experiences.
          </p>
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group btn-primary py-5 px-10 text-xl flex items-center gap-3"
            >
              Start a Strategic Conversation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="btn-secondary py-5 px-10 text-xl">
              Explore Our Work
            </a>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="lg:w-5/12 relative group">
          <div className="absolute inset-0 bg-black/5 rounded-[60px] blur-3xl transition-colors group-hover:bg-black/10"></div>
          <div className="relative bg-white/40 backdrop-blur-sm border border-black/5 rounded-[60px] p-8 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="/images/hero.svg"
              alt="Digital marketing illustration"
              loading="eager"
              className="w-full h-auto grayscale brightness-90 transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
