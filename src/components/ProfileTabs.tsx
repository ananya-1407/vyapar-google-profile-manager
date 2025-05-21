
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface ProfileTabsProps {
  businessId: string;
  tabs: Tab[];
}

const ProfileTabs = ({ businessId, tabs }: ProfileTabsProps) => {
  const location = useLocation();
  
  return (
    <div className="border-b border-gray-200">
      <div className="flex overflow-x-auto py-2 px-4 md:px-0 gap-1 md:gap-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-primary text-white"
                  : "text-vyapar-text-secondary hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTabs;
