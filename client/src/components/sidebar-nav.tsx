import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Name } from "@shared/schema";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const [location] = useLocation();
  const { data: names } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="w-64 border-r bg-[#F8F9FA] hidden md:block">
      <div className="p-4 border-b">
        <Link href="/" className="text-xl font-serif text-[#333333]">
          99 Names of Allah
        </Link>
      </div>
      
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-4">
          {names?.map((name) => (
            <Link 
              key={name.id}
              href={`/name/${name.id}`}
            >
              <div
                className={cn(
                  "px-2 py-1.5 rounded-md text-sm transition-colors",
                  location === `/name/${name.id}`
                    ? "bg-[#EAF3FF] text-[#14866D]"
                    : "text-[#333333] hover:bg-[#EAF3FF]"
                )}
              >
                {name.transliteration}
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
