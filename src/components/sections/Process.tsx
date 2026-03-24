import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Section from './Section';
import Accordion from '../ui/Accordion';

export default function Process() {
  return (
    <Section id="process">
      <SectionTitle
        sectionTitle="Our Working Process"
        description="Step-by-step guide to achieving your business goals."
      />
      <Accordion />
    </Section>
  );
}
