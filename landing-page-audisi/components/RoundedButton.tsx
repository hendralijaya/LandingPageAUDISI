import { ReactNode } from 'react';

interface RoundedButtonProps {
  children: ReactNode;
  className?: string;
}

const RoundedButton = ({ children, className = 'bg-red-800 hover:bg-red-500' }: RoundedButtonProps) => {
  return <button className={` rounded-full p-3 ${className}`}>{children}</button>;
};

export default RoundedButton;
