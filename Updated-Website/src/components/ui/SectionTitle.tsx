import React from 'react';

interface SectionTitleProps {
  sectionTitle: string;
  description: string;
}

export default function SectionTitle({ sectionTitle, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-start gap-4 mb-16">
      <span className="section-tag">{sectionTitle}</span>
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <h2 className="text-5xl md:text-7xl leading-tight max-w-2xl">{sectionTitle}</h2>
        <p className="text-xl text-gray-dark max-w-xl font-general-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
