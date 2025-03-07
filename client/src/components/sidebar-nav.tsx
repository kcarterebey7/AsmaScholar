import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Name } from "@shared/schema";
import { cn } from "@/lib/utils";
import { NameHoverCard } from "@/components/name-hover-card";

export default function SidebarNav() {
  const [location] = useLocation();
  const { data: names } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="w-64 border-r bg-[#F8F9FA] dark:bg-gray-900 flex-shrink-0">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4">
          {names?.map((name) => (
            <NameHoverCard key={name.id} name={name}>
              <Link 
                href={`/name/${name.id}`}
              >
                <div
                  className={cn(
                    "px-2 py-1.5 rounded-md transition-colors",
                    location === `/name/${name.id}`
                      ? "bg-[#EAF3FF] dark:bg-gray-800"
                      : "hover:bg-[#EAF3FF] dark:hover:bg-gray-800"
                  )}
                >
                  <div className="text-sm text-[#14866D] dark:text-[#14866D]">
                    {name.transliteration}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {name.meaning}
                  </div>
                </div>
              </Link>
            </NameHoverCard>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}