import { ReactNode, useState } from "react";
import Image from 'next/image';
import { SettingsAccessibility, ChevronDown } from '@/public/icon'; // Adjust the path as needed

interface DropdownProps {
  buttonLabel?: string;
  children: ReactNode;
}

const DropdownButton: React.FC<DropdownProps> = ({ buttonLabel = "Options", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <button className="flex items-center gap-2 md:gap-3 bg-red-400 text-red-950 p-3 rounded-lg" onClick={toggleDropdown}>
        <Image src={SettingsAccessibility} alt="settings-accessibility" className="w-5 h-5 md:w-6 md:h-6" />
        <p className="text-red-950 font-medium">Aksesibilitas</p>
        <Image src={ChevronDown} alt="chevron-down" className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 md:w-96 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;