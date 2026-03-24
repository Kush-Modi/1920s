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
