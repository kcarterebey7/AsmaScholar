import { cn } from "@/lib/utils";

interface HighlightedTextProps {
  text: string;
  searchTerm: string;
  className?: string;
}

export default function HighlightedText({ text, searchTerm, className }: HighlightedTextProps) {
  if (!searchTerm) return <span className={className}>{text}</span>;

  // Create a regular expression that matches whole words only
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span 
            key={i} 
            className={cn(
              "bg-yellow-200 dark:bg-yellow-900/50",
              "animate-highlight-pulse",
              "rounded px-0.5"
            )}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
