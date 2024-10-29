import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hasImage?: boolean; // New prop to indicate the presence of an image
}

const Card = ({ children, className, hasImage }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl border ${hasImage ? 'pb-4' : 'p-4'} gap-y-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;