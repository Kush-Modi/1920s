import React from 'react';
import Section from './Section';

const sponsors = [
  { logo: "/images/rivesa-ai.svg", alt: "Rivesa AI" },
  { logo: "/images/nishkaam-innovations.svg", alt: "Nishkaam Innovations" },
  { logo: "/images/excel-branding.svg", alt: "Excel Branding" },
  { logo: "/images/student-housing.svg", alt: "Student Housing" },
  { logo: "/images/youtube-creator-programs.svg", alt: "YouTube Creator Programs" },
  { logo: "/images/timex.svg", alt: "Timex" },
  { logo: "/images/google.svg", alt: "Google" },
  { logo: "/images/oreo.svg", alt: "Oreo" },
  { logo: "/images/blinkit.svg", alt: "Blinkit" },
  { logo: "/images/flipkart.svg", alt: "Flipkart" },
  { logo: "/images/zerodha.svg", alt: "Zerodha" },
];

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <div className="py-12 border-y border-black/5">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16 items-center opacity-50 hover:opacity-100 transition-opacity duration-500 mb-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.alt} className="flex justify-center transition-transform duration-300 hover:scale-110">
               {/* Using object tag temporarily as a fallback until SVG physically exists, but img tag is safer */}
              <img
                src={sponsor.logo}
                alt={`${sponsor.alt} logo`}
                loading="lazy"
                className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center font-general-sans text-sm text-gray-dark opacity-70 italic mt-6">
          Note: Represented via strategic collaborations, consulting, and framework development.
        </div>
      </div>
    </Section>
  );
}
