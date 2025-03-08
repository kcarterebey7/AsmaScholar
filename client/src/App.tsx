import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./lib/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Name from "@/pages/name";
import Search from "@/pages/search";
import Relationships from "@/pages/relationships";
import SidebarNav from "@/components/sidebar-nav";
import { MenuBar } from "@/components/menu-bar";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        <MenuBar />
        <div className="flex flex-1 overflow-hidden pt-14"> {/* Added pt-14 for menu bar height */}
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          <main className="flex-1 px-4 md:px-6 pt-6 pb-8 bg-background overflow-auto">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/name/:id" component={Name} />
              <Route path="/search" component={Search} />
              <Route path="/relationships" component={Relationships} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;