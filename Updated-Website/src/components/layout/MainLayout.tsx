import React, { useEffect } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import Lenis from 'lenis';

interface MainLayoutProps {
  children: React.ReactNode;
  hideNavOnTop?: boolean;
}

export default function MainLayout({ children, hideNavOnTop = false }: MainLayoutProps) {
  useEffect(() => {
    // initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: true,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Optional: exact anchor scrolling fix
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href');
        const element = document.querySelector(id!) as HTMLElement;
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-white font-general-sans overflow-x-hidden text-black min-h-screen">
      <Navbar hideOnTop={hideNavOnTop} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
