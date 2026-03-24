import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative px-6 md:px-10 lg:px-0 py-24 md:py-32 ${className}`}>
      <div className="w-full max-w-[1280px] mx-auto">
        {children}
      </div>
    </section>
  );
}
