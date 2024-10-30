// Header.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Logo } from '@/public/img';
import { Animation, TextFields, TextToSpeech } from '@/public/icon'; // Adjust the path as needed
import DropdownButton from "./DropdownButton";
import ToggleSwitch from "./ToggleSwitch";

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
      <DropdownButton buttonLabel="Options">
        <div className="p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={TextToSpeech} alt="Ikon Teks ke Audio" className="w-8 text-red-950" />
              <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Text to Speech
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>

        <div className="p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={TextFields} alt="Ikon Ubah Teks Ramah Dyslexia" className="w-8 text-red-950" />
              <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Teks Ramah Dyslexia
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>

        <div className="p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={Animation} alt="Ikon Teks ke Audio" className="w-8 text-red-950" />
              <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Kurangi Animasi
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      
    </DropdownButton>
    </div>
  );
}
