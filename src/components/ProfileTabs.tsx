
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface ProfileTabsProps {
  businessId: string;
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const ProfileTabs = ({ businessId, tabs, activeTab, onTabChange }: ProfileTabsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Set up intersection observer for tab sections
  useEffect(() => {
    // Only set up observer if onTabChange is provided
    if (!onTabChange) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Extract the tab id from section-{tabId}
          const tabId = sectionId.replace('section-', '');
          onTabChange(tabId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    tabs.forEach((tab) => {
      const element = document.getElementById(`section-${tab.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [onTabChange, tabs]);
  
  return (
    <div className="border-b border-gray-200 sticky top-0 bg-white z-10">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex py-2 px-1 md:px-0 gap-1 md:gap-2 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab ? activeTab === tab.id : location.pathname === tab.path;
            
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`flex items-center px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-vyapar-text-secondary hover:bg-gray-100"
                }`}
                onClick={(e) => {
                  if (onTabChange) {
                    e.preventDefault();
                    onTabChange(tab.id);
                    // Scroll to the section
                    const section = document.getElementById(`section-${tab.id}`);
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
