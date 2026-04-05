import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const menuitems = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/#cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/articles", label: "Blog" },
];

const navButton = {
  href: "/#contact",
  label: "Request a quote",
};

interface NavbarProps {
  hideOnTop?: boolean;
}

export default function Navbar({ hideOnTop = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!hideOnTop);

  useEffect(() => {
    if (!hideOnTop) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show navbar after scrolling 80% of the screen height
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnTop]);

  return (
    <div className={`fixed top-4 left-0 right-0 z-[100] px-6 md:px-32 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
      <nav className="w-full bg-white/50 backdrop-blur-xl border border-black/5 rounded-[32px] transition-all duration-300 shadow-sm hover:shadow-md hover:bg-white/80">
        <header className="flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-black p-2 rounded-xl shrink-0">
              <img src="/icons/LogoInstaWhite.png" className="h-8 w-auto" alt="Logo" />
            </div>
            <img src="/icons/nineteentwentys_logo_black.png" className="h-6 w-auto ml-4 opacity-90" alt="nineteentwentys" />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a className="btn-primary py-3 px-6 text-base" href={navButton.href}>
              {navButton.label}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-black/5"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-black/5 cursor-pointer"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
              </svg>
            )}
          </button>
        </header>

        {/* Menu (Desktop & Mobile) */}
        <div className={`px-8 pb-6 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-4">
            {menuitems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-black font-boska text-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn-primary py-3 px-6 text-base mt-4 inline-block lg:hidden"
            href={navButton.href}
          >
            {navButton.label}
          </a>
        </div>
      </nav>
    </div>
  );
}
