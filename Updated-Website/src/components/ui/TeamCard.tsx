import React from 'react';

interface TeamCardProps {
  pic: string;
  name: string;
  role: string;
  description: string;
  link: string;
}

export default function TeamCard({ pic, name, role, description, link }: TeamCardProps) {
  return (
    <div className="group relative bg-white border border-black/5 rounded-[40px] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-[30px] border border-black/5">
                <img src={pic} alt={name} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-boska text-3xl md:text-4xl leading-tight">{name}</h3>
              <p className="font-general-sans text-gray-dark font-medium opacity-70">{role}</p>
            </div>
          </div>
          <a href={link} className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        
        <div className="w-full h-px bg-black/5"></div>
        
        <p className="font-general-sans text-lg text-gray-dark leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
