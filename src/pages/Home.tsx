import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import IntroVideo from '../components/sections/IntroVideo';
import Hero from '../components/sections/Hero';
import Sponsors from '../components/sections/Sponsors';
import Services from '../components/sections/Services';
import Proposal from '../components/sections/Proposal';
import Cases from '../components/sections/Cases';
import Process from '../components/sections/Process';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <MainLayout hideNavOnTop={true}>
      <IntroVideo />
      
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
      </div>

      <Sponsors />
      <Services />
      <Proposal />
      <Cases />
      <Process />
      <Contact />
    </MainLayout>
  );
}
