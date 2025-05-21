
import React from "react";
import { PenLine, Phone, Globe, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  phone: string;
  website: string;
  email: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  const { toast } = useToast();

  const handleEditField = (field: string) => {
    toast({
      title: "Edit Field",
      description: `Editing ${field} would open an edit dialog in a real app`,
    });
  };

  return (
    <div id="section-contact">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Contact Information</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("contact info")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Phone</h3>
                <p className="text-vyapar-text-secondary">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Website</h3>
                <a href={contactInfo.website} className="text-primary hover:underline">
                  {contactInfo.website.replace("https://", "")}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
