import React from 'react';
import Section from './Section';

const sponsors = [
  { logo: "/images/RivesaLogo.svg", alt: "Rivesa AI" },
  { logo: "/images/NishkaamLogo.svg", alt: "Nishkaam Innovations" },
  { logo: "/images/ExcelBrandingLogo.svg", alt: "Excel Branding" },
  { logo: "/images/StudentHousingLogo.svg", alt: "Student Housing" },
  { logo: "/images/YoutubeCreatorsProgramLogo.svg", alt: "YouTube Creator Programs" },
  { logo: "/images/TimexEyewearLogo.svg", alt: "Timex" },
  { logo: "/images/GoogleLogo.svg", alt: "Google" },
  { logo: "/images/OreoLogo.svg", alt: "Oreo" },
  { logo: "/images/BlinkitLogo.svg.png", alt: "Blinkit" },
  { logo: "/images/FlipkartLogo.svg.png", alt: "Flipkart" },
  { logo: "/images/ZerodhaLogo.svg.png", alt: "Zerodha" },
];

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <div className="py-12 border-y border-black/5 overflow-hidden">
        <div className="relative flex w-full group">
          <div className="flex w-max animate-marquee items-center mb-4">
            {[...sponsors, ...sponsors].map((sponsor, idx) => (
              <div key={`${sponsor.alt}-${idx}`} className="flex justify-center items-center flex-shrink-0 w-[180px] sm:w-[220px] transition-transform duration-300 group-hover:cursor-default px-6 gap-x-12">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.alt} logo`}
                  loading="lazy"
                  className="h-10 md:h-[42px] max-w-[140px] object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center font-general-sans text-sm text-gray-dark opacity-80 italic mt-8">
          Note: Represented via strategic collaborations, consulting, and framework development.
        </div>
      </div>
    </Section>
  );
}
