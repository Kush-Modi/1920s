import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Sponsors from '../components/sections/Sponsors';
import Services from '../components/sections/Services';

export default function About() {
  return (
    <MainLayout>
      <main className="space-y-32 mb-32 pt-32">
        <div className="px-6 md:px-32">
          <div className="relative flex flex-col items-center text-center space-y-12" id="hero">
            <span className="btn-pill">Our Mission</span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tighter max-w-4xl mx-auto">
              We Navigate the <br/>
              <span className="font-light italic">Digital</span> landscape <br/>
              for <span className="font-outline">Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-dark max-w-3xl leading-relaxed font-general-sans">
              Our digital marketing agency helps businesses grow and succeed online through strategic SEO, social media, and content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary py-5 px-10 text-xl group">
                Book a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <Sponsors />
        <Services />
      </main>
    </MainLayout>
  );
}
