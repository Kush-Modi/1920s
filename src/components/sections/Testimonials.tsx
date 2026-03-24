import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SwiperSlider from '../ui/SwiperSlider';
import Section from './Section';

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="mt-20 my-32">
        <SectionTitle
          sectionTitle="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <div className="w-full">
          <SwiperSlider />
        </div>
      </div>
    </Section>
  );
}
