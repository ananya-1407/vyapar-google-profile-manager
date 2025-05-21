
import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-primary py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded">
              <span className="text-primary font-bold text-lg">V</span>
            </div>
            <span className="text-white font-medium hidden md:block">
              Vyapar Google Business Manager
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-primary/80" asChild>
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
