import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import Section from './Section';

const cards = [
  { index: 1, titleTop: "Narrative", titleBottom: "Architecture", img: "/images/card-pic1.png", alt: "Narrative Architecture", description: "We design how your brand communicates — across every touchpoint — with clarity, consistency, and conviction.", link: "/services/narrative-architecture" },
  { index: 2, titleTop: "Content", titleBottom: "Infrastructure", img: "/images/card-pic2.png", alt: "Content Infrastructure", description: "We build scalable systems that allow you to produce high-quality content consistently without chaos.", link: "/services/content-infrastructure" },
  { index: 3, titleTop: "Experience", titleBottom: "Engineering", img: "/images/card-pic3.png", alt: "Experience Engineering", description: "From website to onboarding, every interaction is designed to move your customer forward.", link: "/services/experience-engineering" },
  { index: 4, titleTop: "Growth", titleBottom: "Mechanics", img: "/images/card-pic4.png", alt: "Growth Mechanics", description: "Performance systems that turn attention into measurable business outcomes — not just metrics.", link: "/services/growth-mechanics" },
  { index: 5, titleTop: "Brand Operating", titleBottom: "Systems (COREX™️)", img: "/images/card-pic5.png", alt: "Brand Operating Systems", description: "A complete framework integrating strategy, content, experience, and growth into one unified engine.", link: "/services/brand-operating-systems" },
  { index: 6, titleTop: "Asymmetric", titleBottom: "Marketing", img: "/images/card-pic6.png", alt: "Asymmetric Marketing", description: "High-leverage strategies where small inputs create disproportionate impact.", link: "/services/asymmetric-marketing" },
];

const description = "At NineteenTwentys, we build comprehensive marketing systems designed for scalable growth. Our core offerings include:";

export default function Services() {
  return (
    <Section id="services">
      <div className="mt-[140px] mb-5">
        <SectionTitle sectionTitle="Services" description={description} />
        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
          {cards.map((card, idx) => (
            <ServiceCard
              key={idx}
              index={card.index}
              titleTop={card.titleTop}
              titleBottom={card.titleBottom}
              img={card.img}
              alt={card.alt}
              link={card.link}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
