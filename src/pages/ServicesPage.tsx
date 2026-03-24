import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Card from '../components/ui/Card';
import ServiceCard from '../components/ui/ServiceCard';

const services = [
  { index: 1, titleTop: "Narrative", titleBottom: "Architecture", img: "/images/card-pic1.png", alt: "Narrative Architecture", description: "We design how your brand communicates — across every touchpoint — with clarity, consistency, and conviction.", benefits: ["Clear Brand Messaging", "Consistent Tone of Voice", "Audience Resonance", "Strong Positioning"], cta: "Build Your Narrative", link: "/services/narrative-architecture" },
  { index: 2, titleTop: "Content", titleBottom: "Infrastructure", img: "/images/card-pic2.png", alt: "Content Infrastructure", description: "We build scalable systems that allow you to produce high-quality content consistently without chaos.", benefits: ["Scalable Production", "Quality Consistency", "Organized Workflows", "Maximized Output"], cta: "Scale Your Content", link: "/services/content-infrastructure" },
  { index: 3, titleTop: "Experience", titleBottom: "Engineering", img: "/images/card-pic3.png", alt: "Experience Engineering", description: "From website to onboarding, every interaction is designed to move your customer forward.", benefits: ["Frictionless Onboarding", "Intuitive User Journeys", "Higher Conversion Rates", "Enhanced CLV"], cta: "Engineer Experiences", link: "/services/experience-engineering" },
  { index: 4, titleTop: "Growth", titleBottom: "Mechanics", img: "/images/card-pic4.png", alt: "Growth Mechanics", description: "Performance systems that turn attention into measurable business outcomes — not just metrics.", benefits: ["Data-driven Strategies", "ROI Optimization", "Precision Targeting", "Performance Measurement"], cta: "Accelerate Growth", link: "/services/growth-mechanics" },
  { index: 5, titleTop: "Brand Operating", titleBottom: "Systems (COREX™️)", img: "/images/card-pic5.png", alt: "Brand Operating Systems", description: "A complete framework integrating strategy, content, experience, and growth into one unified engine.", benefits: ["Unified Brand Engine", "Integrated Strategy", "Sustainable Growth", "Internal Brand Alignment"], cta: "Discover COREX™️", link: "/services/brand-operating-systems" },
  { index: 6, titleTop: "Asymmetric", titleBottom: "Marketing", img: "/images/card-pic6.png", alt: "Asymmetric Marketing", description: "High-leverage strategies where small inputs create disproportionate impact.", benefits: ["High Leverage Impact", "Resource Efficiency", "Disproportionate Returns", "Innovative Growth Tactics"], cta: "Explore Asymmetric Strategies", link: "/services/asymmetric-marketing" }
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 pt-32">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl font-boska">Our Services</h1>
          <p className="text-xl font-normal leading-7 mx-auto max-w-3xl font-general-sans text-gray-dark">
            At NineteenTwentys, we offer a comprehensive range of systems-level marketing services designed to help your brand achieve scalable growth.
          </p>
        </div>
        
        <div className="space-y-24">
          {services.map((service) => (
            <div key={service.index + service.titleTop} className="service-item odd:bg-transparent even:bg-gray-medium even:bg-opacity-20 even:py-16 even:-mx-4 md:even:-mx-6 even:px-4 md:even:px-6 rounded-[40px]">
              <div className="mb-12">
                <ServiceCard
                  index={service.index}
                  titleTop={service.titleTop}
                  titleBottom={service.titleBottom}
                  img={service.img}
                  alt={service.alt}
                  link={service.link}
                  description={service.description}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 px-4">
                <div>
                  <h3 className="text-2xl font-medium mb-4 font-boska">What we offer</h3>
                  <p className="mb-6 font-general-sans text-gray-dark">{service.description}</p>
                  <a href={service.link} className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-zinc-800 transition-all font-medium font-general-sans">
                    {service.cta}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-light rounded-3xl p-8 border border-black/5">
                  <h3 className="text-2xl font-medium mb-4 font-boska">Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="mr-3 w-5 h-5 mt-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-general-sans text-gray-dark">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <Card className="!bg-black text-white !rounded-[60px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="p-10 md:p-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium mb-6 font-boska">Ready to transform your digital presence?</h2>
              <p className="mb-10 text-xl max-w-2xl mx-auto font-general-sans text-white/80">
                Contact us today to discuss your digital marketing needs and discover how our services can help your business grow and succeed online.
              </p>
              <a href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-black rounded-full hover:bg-gray-light transition-all font-medium text-xl font-general-sans">
                Get in touch
              </a>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
