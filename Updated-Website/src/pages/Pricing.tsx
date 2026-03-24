import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import priceData from '../data/priceDats.json';

export default function Pricing() {
  return (
    <MainLayout>
      <main className="space-y-32 mb-32 pt-32">
        <div className="px-6 md:px-32">
          <div className="text-center mb-20 space-y-6">
            <span className="btn-pill">Pricing Plans</span>
            <h1 className="font-boska text-6xl md:text-7xl leading-tight">Designed for <br/><span className="italic font-light">teams like yours</span></h1>
            <p className="text-xl text-gray-dark max-w-2xl mx-auto font-general-sans">
              We focus on markets where innovation and creative strategy can unlock long-term value and drive exponential growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {priceData.map((item: any, idx: number) => (
              <div key={idx} className="group relative bg-white border border-black/5 rounded-[40px] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-boska text-3xl mb-2">{item.title}</h3>
                  <p className="font-general-sans text-gray-dark leading-relaxed">{item.description}</p>
                </div>
                
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="font-boska text-6xl font-medium">${item.price}</span>
                  <span className="font-general-sans text-gray-dark uppercase tracking-widest text-sm">/ month</span>
                </div>
                
                <div className="w-full h-px bg-black/5 mb-10"></div>
                
                <ul className="space-y-6 mb-12 flex-grow">
                  {[
                    "Individual configuration",
                    "No setup, or hidden fees",
                    `Team size: ${item.devCount}`,
                    `Premium support: ${item.support}`,
                    `Free updates: ${item.update}`
                  ].map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-black/20 group-hover/item:bg-black transition-colors"></div>
                      <span className="font-general-sans text-lg text-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={item.link} className="btn-primary w-full flex justify-center py-5 text-xl group/btn">
                  {item.action}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
