import React from 'react';
import Form from '../ui/Form';
import SectionTitle from '../ui/SectionTitle';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle
        sectionTitle="Contact Us"
        description="Connect with us — let's discuss your digital marketing needs."
      />
      <Form />
    </Section>
  );
}
