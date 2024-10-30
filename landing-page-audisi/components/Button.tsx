import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={`bg-red-400 hover:bg-red-800 rounded-xl p-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
