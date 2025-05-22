
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BusinessHeaderProps {
  businessName: string;
}

const BusinessHeader = ({ businessName }: BusinessHeaderProps) => {
  const { toast } = useToast();

  // Handle opening Google Business Profile
  const openGoogleBusinessProfile = () => {
    // In a real app, this would use the actual Google Business URL with the business ID
    const googleBusinessUrl = "https://business.google.com/dashboard";
    window.open(googleBusinessUrl, "_blank");
    
    toast({
      title: "Opening Google Business Profile",
      description: "Redirecting to Google Business Manager"
    });
  };

  return (
    <div className="flex items-center gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-vyapar-text">{businessName}</h1>
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-500 hover:text-primary"
        onClick={openGoogleBusinessProfile}
        title="Open in Google Business Profile"
      >
        <ExternalLink className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:ml-2 text-xs">Google Business</span>
      </Button>
    </div>
  );
};

export default BusinessHeader;
