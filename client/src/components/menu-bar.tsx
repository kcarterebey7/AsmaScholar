import { Search } from "lucide-react";
import { Link } from "wouter";

export function MenuBar() {
  return (
    <div className="fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-sm border-b border-border/40 z-50">
      <div className="h-14 flex items-center justify-between px-4 md:px-6">
        <div>
          {/* Left side - empty for now */}
        </div>
        <div>
          <Link href="/search">
            <button className="p-2 hover:bg-accent rounded-md transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}