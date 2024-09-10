"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname.includes('chat')) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 md:px-6 py-6 mb-[1px] bg-black bg-blend-color">
      <div className="mx-auto grid grid-col-1 md:grid-cols-12 items-center">
        <Link href="/" className="col-span-2 flex items-center justify-start md:justify-end pr-12">
          <img src="logo.svg" alt="Logo" className="h-6 md:h-8 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="col-span-8 hidden md:flex items-center justify-center space-x-6">
          <Link className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105" href="/about">
            Our Story
          </Link>
          <Link
            className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105"
            href="mailto:support@prava.space"
          >
            Contact
          </Link>
          <Link
            className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-500 hover:scale-105"
            href="https://chat.whatsapp.com/CfldI8HnATe6R2qdSmLq9t"
          >
            Whatsapp channel
          </Link>
        </nav>
        <div className="col-span-2"></div>
      </div>
    </header>
  );
}
