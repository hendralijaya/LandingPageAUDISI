import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`bg-white rounded-xl border p-4 gap-y-4 ${className}`}>{children}</div>;
};

export default Card;
