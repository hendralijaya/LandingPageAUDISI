import { ReactNode } from 'react';

interface RoundedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

const RoundedButton = ({ children, className = 'bg-red-950 hover:bg-red-500', onClick, id }: RoundedButtonProps) => {
  return (
    <button id={id} className={`${className} p-3 rounded-full`} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundedButton;
