interface HighlightTextProps {
  text: string;
  className?: string;
}

const HighlightText = ({ text, className }: HighlightTextProps) => {
  return <span className={`bg-red-400 text-red-950 px-6 py-2 rounded-xl w-fit font-semibold ${className}`}>{text}</span>;
};

export default HighlightText;
