"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }; const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <header className={`w-full fixed top-0 border-[1px] border-white/70 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-md' : 'bg-black'
    }`}>
      <div className="mx-auto grid grid-col-1 md:grid-cols-12 items-center px-4 md:px-6 py-6">
        <Link href="/" className="col-span-2 flex items-center justify-start md:justify-end pr-12">
          <img src="logo.svg" alt="Logo" className="h-6 md:h-8 w-auto" />
        </Link>
        {/* Desktop navigation */}
        <nav className="col-span-8 hidden md:flex items-center justify-center space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105">
            Home
          </button>
          <button onClick={() => scrollToSection('use-case')} className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105">
            Use cases
          </button>
          <button onClick={() => scrollToSection('integration')} className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105">
            Integration
          </button>
          <Link href="https://chat.whatsapp.com/CfldI8HnATe6R2qdSmLq9t" className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105">
            Whatsapp channel
          </Link>
        </nav>
        <div className="col-span-2"></div>
      </div>
    </header>
  );
}
