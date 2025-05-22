
import React, { useState } from "react";
import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Logged in successfully",
      description: "Welcome back to Vyapar Google Business Manager",
    });
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove the isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    // Redirect to home page after logout
    navigate('/');
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-[#dd3643] font-medium hidden md:block">
              Vyapar Google Business Manager
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-[#dd3643] hover:bg-gray-100" asChild>
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-gray-100 p-0">
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
              className="rounded-full bg-[#dd3643] text-white hover:bg-[#dd3643]/90" 
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
