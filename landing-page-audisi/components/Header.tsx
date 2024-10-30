// Header.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Logo } from '@/public/img';
import { SettingsAccessibility, ChevronDown } from '@/public/icon'; // Adjust the path as needed
import Button from './Button'; // Import your Button component

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`px-6 md:px-10 py-4 md:py-6 fixed top-0 left-0 z-10 w-full flex justify-between transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <Image src={Logo} alt="logo" className="max-w-[8rem] md:max-w-[12rem] p-2 md:p-4" />
      <Button className="md:p-3">
        <div className="flex items-center gap-2 md:gap-3">
          <Image src={SettingsAccessibility} alt="settings-accessibility" className="w-5 h-5 md:w-8 md:h-8" />
          <p className="text-red-950 font-medium">Aksesibilitas</p>
          <Image src={ChevronDown} alt="chevron-down" className="w-5 h-5 md:w-8 md:h-8" />
        </div>
      </Button>
    </div>
  );
}
