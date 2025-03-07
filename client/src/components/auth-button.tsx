
import React from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

interface AuthButtonProps {
  onLogin?: () => void;
}

export function AuthButton({ onLogin }: AuthButtonProps) {
  const { data: user, isLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    retry: false,
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <Button disabled>Loading...</Button>;
  }

  if (user?.authenticated) {
    return (
      <Button variant="outline" disabled>
        Logged in as {user.name}
      </Button>
    );
  }

  return (
    <div>
      <Button 
        onClick={() => {
          // The script will be loaded dynamically to avoid SSR issues
          const script = document.createElement('script');
          script.src = "https://auth.util.repl.co/script.js";
          script.setAttribute('authed', 'window.location.reload()');
          document.body.appendChild(script);
          
          if (onLogin) onLogin();
        }}
      >
        Login with Replit
      </Button>
    </div>
  );
}
