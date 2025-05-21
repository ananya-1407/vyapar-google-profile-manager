
import React from "react";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Phone, Globe, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BusinessDetails = () => {
  const { businessId } = useParams<{ businessId: string }>();

  // Mock business details based on ID
  const businessDetails = {
    name: businessId === "1" ? "Vyapar Store Bangalore" : 
          businessId === "2" ? "Vyapar Electronics" : 
          "Vyapar Digital Solutions",
    address: businessId === "1" ? "123 MG Road, Bangalore, Karnataka" : 
             businessId === "2" ? "456 Anna Salai, Chennai, Tamil Nadu" : 
             "789 Bandra Road, Mumbai, Maharashtra",
    phone: "+91 9876543210",
    website: "https://www.vyaparapp.in",
    email: "contact@vyaparapp.in",
    description: "Leading provider of business management solutions designed specifically for Indian small businesses. Our products help simplify inventory, billing, accounting, and more.",
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
    ]
  };

  const handleEditField = (field: string) => {
    window.alert(`Editing ${field} would open an edit dialog in a real app`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>About</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("about")}
            >
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-vyapar-text-secondary">{businessDetails.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Contact Information</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("contact")}
            >
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Address</h3>
                <p className="text-vyapar-text-secondary">{businessDetails.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Phone</h3>
                <p className="text-vyapar-text-secondary">{businessDetails.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Website</h3>
                <a href={businessDetails.website} className="text-primary hover:underline">
                  {businessDetails.website.replace("https://", "")}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Email</h3>
                <a href={`mailto:${businessDetails.email}`} className="text-primary hover:underline">
                  {businessDetails.email}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Business Hours</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("hours")}
            >
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {businessDetails.hours.map((item) => (
              <div key={item.day} className="flex justify-between items-center py-1 border-b last:border-b-0 border-gray-100">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-vyapar-text">{item.day}</span>
                </div>
                <span className="text-sm text-vyapar-text-secondary">{item.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Business Attributes</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("attributes")}
            >
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessDetails.attributes.map((attr) => (
              <div key={attr.name} className="flex items-center">
                <span className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center ${attr.value ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {attr.value ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-vyapar-text-secondary">{attr.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessDetails;
