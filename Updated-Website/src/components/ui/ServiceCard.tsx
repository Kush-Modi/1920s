import React from 'react';

const gob = "/icons/icon6.svg";
const wob = "/icons/icon7.svg";

interface ServiceCardProps {
  index: number;
  titleTop: string;
  titleBottom: string;
  img: string;
  alt: string;
  link: string;
  description?: string;
}

export default function ServiceCard({ index, titleTop, titleBottom, img, alt, link, description }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`group relative overflow-hidden rounded-[40px] border border-black/5 transition-all duration-500 hover:shadow-2xl ${isEven ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative p-8 md:p-12 h-full flex flex-col justify-between z-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <h3 className="font-boska text-4xl md:text-5xl leading-tight">
              {titleTop} <br/>
              <span className="italic font-light">{titleBottom}</span>
            </h3>
            <div className={`p-4 rounded-2xl ${isEven ? 'bg-white/10' : 'bg-black/5'}`}>
               <img src={isEven ? wob : gob} alt="Icon" className="w-8 h-8" />
            </div>
          </div>
          
          <p className={`text-lg opacity-70 font-general-sans max-w-[280px] ${isEven ? 'text-gray-medium' : 'text-gray-dark'}`}>
            {description ? description : 'Strategic solutions tailored to elevate your digital presence and drive measurable results.'}
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
            <a href={link} className="group/link flex items-center gap-4 font-general-sans font-medium text-lg">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-2 ${isEven ? 'border-white/20 group-hover/link:bg-white group-hover/link:text-black' : 'border-black/20 group-hover/link:bg-black group-hover/link:text-white'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
                <span>Learn More</span>
            </a>

            <div className="relative w-48 h-32 md:w-56 md:h-40 overflow-hidden rounded-2xl transform transition-transform duration-700 group-hover:scale-110">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
