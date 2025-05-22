
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LocationSection from "./LocationSection";
import HoursSection from "./HoursSection";
import MoreSection from "./MoreSection";

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

  return (
    <div className="space-y-6">
      <div className="sticky top-[49px] bg-white z-10 pb-2">
        <Tabs value={activeTab} onValueChange={scrollToSection} className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex w-auto min-w-full md:w-[500px] md:grid md:grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="hours">Hours</TabsTrigger>
              <TabsTrigger value="more">More</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="space-y-8 mt-6">
        <TabsContent value="about" className="space-y-4" forceMount={true}>
          <AboutSection businessDetails={businessDetails} />
        </TabsContent>

        <TabsContent value="contact" className="space-y-4" forceMount={true}>
          <ContactSection 
            contactInfo={{
              phone: businessDetails.phone,
              website: businessDetails.website,
              email: businessDetails.email
            }}
          />
        </TabsContent>

        <TabsContent value="location" className="space-y-4" forceMount={true}>
          <LocationSection 
            locationInfo={{
              address: businessDetails.address
            }}
          />
        </TabsContent>

        <TabsContent value="hours" className="space-y-4" forceMount={true}>
          <HoursSection 
            hoursInfo={businessDetails.hours}
          />
        </TabsContent>

        <TabsContent value="more" className="space-y-4" forceMount={true}>
          <MoreSection 
            additionalInfo={{
              payments: "Cash, Credit Card, UPI, Net Banking",
              languages: "English, Hindi, Tamil",
              accessibility: "Wheelchair accessible entrance, Accessible parking"
            }}
          />
        </TabsContent>
      </div>
    </div>
  );
};

export default BusinessDetailsContent;
