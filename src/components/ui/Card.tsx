import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-gray-light rounded-[40px] border border-black/5 ${className}`}>
      {children}
    </div>
  );
}
