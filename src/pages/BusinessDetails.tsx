
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BusinessDetailsContent from "@/components/business/BusinessDetailsContent";

const BusinessDetails = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [activeTab, setActiveTab] = useState("about");
  
  // Mock business details based on ID
  const businessDetails = {
    name: businessId === "1" ? "Vyapar Store Bangalore" : 
          businessId === "2" ? "Vyapar Electronics" : 
          "Vyapar Digital Solutions",
    category: businessId === "1" ? "Retail Store" : 
              businessId === "2" ? "Electronics Store" : 
              "Digital Services",
    address: businessId === "1" ? "123 MG Road, Bangalore, Karnataka" : 
             businessId === "2" ? "456 Anna Salai, Chennai, Tamil Nadu" : 
             "789 Bandra Road, Mumbai, Maharashtra",
    phone: "+91 9876543210",
    website: "https://www.vyaparapp.in",
    email: "contact@vyaparapp.in",
    description: "Leading provider of business management solutions designed specifically for Indian small businesses. Our products help simplify inventory, billing, accounting, and more.",
    openingDate: "January 2020",
    hours: [
      { day: "Monday", hours: "9:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    attributes: [
      { name: "Wheelchair accessible", value: true },
      { name: "Free Wi-Fi", value: true },
      { name: "Parking available", value: true },
      { name: "Appointment required", value: false },
    ],
    serviceOptions: [
      { name: "Delivery", value: true },
      { name: "Online Support", value: true },
      { name: "In-store shopping", value: true },
    ]
  };

  // Set up intersection observer for tab sections
  useEffect(() => {
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
          setActiveTab(tabId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div id="section-about"></div>
      <div id="section-contact"></div>
      <div id="section-location"></div>
      <div id="section-hours"></div>
      <div id="section-more"></div>
      
      <BusinessDetailsContent 
        businessDetails={businessDetails} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
};

export default BusinessDetails;
