
import React, { useState } from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to logged in for demo
  const { toast } = useToast();
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Logged in successfully",
      description: "Welcome back to Vyapar Google Business Manager",
    });
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <nav className="bg-[#dd3643] py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white font-medium hidden md:block">
              Vyapar Google Business Manager
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-[#dd3643]/80" asChild>
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-white/90 p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gray-100 text-[#dd3643]">
                      US
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="cursor-default">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">User</p>
                    <p className="text-xs text-muted-foreground">user@example.com</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/select-business">My Business Profiles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              className="rounded-full bg-white text-[#dd3643] hover:bg-white/90" 
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
