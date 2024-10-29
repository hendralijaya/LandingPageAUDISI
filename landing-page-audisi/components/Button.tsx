import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={`bg-red-200 hover:bg-red-800 rounded-xl p-2 ${className}`}>{children}</button>;
};

export default Button;
