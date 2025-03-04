import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

interface SearchBoxProps {
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function SearchBox({ className = "", defaultValue = "", onChange }: SearchBoxProps) {
  const [, setLocation] = useLocation();
  const [value, setValue] = useState(defaultValue);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    // Update URL when search value changes
    const searchParams = new URLSearchParams(window.location.search);
    if (debouncedValue) {
      searchParams.set("q", debouncedValue);
    } else {
      searchParams.delete("q");
    }
    setLocation(`/search?${searchParams.toString()}`);

    // Notify parent component
    onChange?.(debouncedValue);
  }, [debouncedValue, setLocation, onChange]);

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search names..."
        className="pl-10"
      />
    </div>
  );
}