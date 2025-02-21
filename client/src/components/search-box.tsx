import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLocation } from "wouter";

interface SearchBoxProps {
  className?: string;
  defaultValue?: string;
}

export default function SearchBox({ className = "", defaultValue = "" }: SearchBoxProps) {
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = new FormData(form).get("q");
    setLocation(`/search?q=${encodeURIComponent(query as string)}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        name="q"
        placeholder="Search names..."
        className="pl-10"
        defaultValue={defaultValue}
      />
    </form>
  );
}
