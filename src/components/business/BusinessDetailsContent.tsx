import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LocationSection from "./LocationSection";
import HoursSection from "./HoursSection";
import MoreSection from "./MoreSection";
import { Info, MessageSquare, MapPin, Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessDetails {
  name: string;
  category: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  description: string;
  openingDate: string;
  hours: { day: string; hours: string }[];
  attributes: { name: string; value: boolean }[];
  serviceOptions: { name: string; value: boolean }[];
}

interface BusinessDetailsContentProps {
  businessDetails: BusinessDetails;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const BusinessDetailsContent = ({ 
  businessDetails, 
  activeTab, 
  onTabChange 
}: BusinessDetailsContentProps) => {

  const scrollToSection = (tabId: string) => {
    onTabChange(tabId);
    const section = document.getElementById(`section-${tabId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: "about", label: "About", icon: <Info className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "location", label: "Location", icon: <MapPin className="h-4 w-4" /> },
    { id: "hours", label: "Hours", icon: <Clock className="h-4 w-4" /> },
    { id: "more", label: "More", icon: <MoreHorizontal className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="sticky top-[49px] bg-white z-10 border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "px-4 py-2 flex-shrink-0 flex items-center border-b-2 transition-colors relative",
                activeTab === tab.id 
                  ? "border-primary text-primary font-medium" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
          
      <div className="space-y-8 mt-6">
        {activeTab === "about" && (
          <div className="space-y-4">
            <AboutSection businessDetails={businessDetails} />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-4">
            <ContactSection 
              contactInfo={{
                phone: businessDetails.phone,
                website: businessDetails.website,
                email: businessDetails.email
              }}
            />
          </div>
        )}

        {activeTab === "location" && (
          <div className="space-y-4">
            <LocationSection 
              locationInfo={{
                address: businessDetails.address
              }}
            />
          </div>
        )}

        {activeTab === "hours" && (
          <div className="space-y-4">
            <HoursSection 
              hoursInfo={businessDetails.hours}
            />
          </div>
        )}

        {activeTab === "more" && (
          <div className="space-y-4">
            <MoreSection 
              additionalInfo={{
                payments: "Cash, Credit Card, UPI, Net Banking",
                languages: "English, Hindi, Tamil",
                accessibility: "Wheelchair accessible entrance, Accessible parking"
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessDetailsContent;
