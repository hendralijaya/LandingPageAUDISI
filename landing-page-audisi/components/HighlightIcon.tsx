import Image from 'next/image';

interface HighlightIconProps {
  image: string;
  alt: string;
  className?: string;
}

const HighlightIcon = ({ image, alt, className }: HighlightIconProps) => {
  return <Image src={image} alt={alt} className={` rounded-full bg-red-400 w-10 h-10 p-2 ${className}`} />;
};

export default HighlightIcon;
