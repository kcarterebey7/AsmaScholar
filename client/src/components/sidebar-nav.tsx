import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Network } from "lucide-react";
import type { Name } from "@shared/schema";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const [location] = useLocation();
  const { data: names } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="w-64 border-r bg-[#F8F9FA] dark:bg-gray-900 flex-shrink-0">
      <div className="p-4 border-b flex justify-end items-center">
        <ThemeToggle />
      </div>

      <div className="p-4 border-b">
        <Link 
          href="/relationships"
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
            location === "/relationships"
              ? "bg-[#EAF3FF] dark:bg-gray-800 text-[#14866D]"
              : "text-[#333333] dark:text-gray-300 hover:bg-[#EAF3FF] dark:hover:bg-gray-800"
          )}
        >
          <Network className="h-4 w-4" />
          Name Relationships
        </Link>
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-4">
          {names?.map((name) => (
            <Link 
              key={name.id}
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
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}