import { Menu, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function MenuBar() {
  const [location] = useLocation();
  const showBackButton = location !== "/";

  return (
    <div className="fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-sm border-b border-border/40 z-50">
      <div className="h-14 flex items-center justify-between px-4 md:px-6">
        <div>
          {showBackButton && (
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </Link>
          )}
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/search" className="w-full cursor-pointer">
                  Search Names
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/relationships" className="w-full cursor-pointer">
                  Name Relationships
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="w-full flex items-center justify-between">
                  <span>Theme</span>
                  <ThemeToggle />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}