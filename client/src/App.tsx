import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <div className="flex-1 flex flex-col relative">
        <MenuBar />
        <main className="flex-1 px-6 pt-20 pb-8 bg-background">
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