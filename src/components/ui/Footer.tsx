import React from 'react';
import ShortForm from './ShortForm';
import { Link } from 'react-router-dom';

const logos = [
  { name: "Instagram", src: "/icons/instagram.svg", link: "https://www.instagram.com/nineteen.twentys?igsh=ano3ZzlmeXkwbHJv" },
  { name: "Linkedin", src: "/icons/linkedin.svg", link: "https://www.linkedin.com/company/nineteentwentys/" },
];

const links = [
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/#cases" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/articles" },
];

export default function Footer() {
  return (
    <section className="px-6 md:px-32 pb-12 mt-32">
      <div className="bg-black text-white rounded-[60px] p-12 md:p-20 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
            <div className="space-y-8 w-full lg:w-1/3">
              <Link to="/" className="flex items-center group/logo">
                <div className="bg-white p-2 rounded-xl transition-transform group-hover/logo:scale-105">
                    <img src="/icons/LogoInstaWhite.png" className="h-8 w-auto invert" alt="Logo" />
                </div>
                <img src="/icons/nineteentwentys_logo_black.png" className="h-6 w-auto ml-4 invert opacity-90 group-hover/logo:opacity-100 transition-opacity" alt="nineteentwentys" />
              </Link>
              <p className="text-xl text-gray-medium font-general-sans leading-relaxed">
                Revolutionizing digital marketing through strategic precision and creative excellence.
              </p>
              <div className="flex gap-4">
                {logos.map((logo) => (
                  <a key={logo.name} href={logo.link} className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group/social" target="_blank" rel="noreferrer" aria-label={logo.name}>
                     <img src={logo.src} alt={logo.name} className="w-5 h-5 group-hover:invert" />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3 grid grid-cols-2 gap-12 lg:gap-12">
                <div className="space-y-6">
                    <h4 className="font-boska text-2xl font-medium">Quick Links</h4>
                    <ul className="space-y-4">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link to={link.href} className="text-gray-medium hover:text-white transition-colors text-lg font-general-sans hover:underline underline-offset-8">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-boska text-2xl font-medium">Contact</h4>
                    <div className="text-lg text-gray-medium space-y-4 font-general-sans">
                        <p className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Email</span>
                            contactnineteentwentys@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/3">
                <ShortForm />
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-gray-medium font-general-sans text-sm tracking-wide">
            <p>© 2024 nineteentwentys. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span className="flex items-center gap-2 hover:text-white transition-colors">
                    Built with <span className="font-bold">React & Vite</span>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
