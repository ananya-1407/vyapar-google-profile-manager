
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import NavBar from "@/components/NavBar";
import BusinessCard from "@/components/BusinessCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

// Mock data for business profiles
const mockBusinessProfiles = [
  {
    id: "1",
    name: "Vyapar Store Bangalore",
    address: "123 MG Road, Bangalore, Karnataka",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    isVerified: true,
    reviewCount: 48,
    websiteUrl: "https://vyaparstore.com",
    phoneNumber: "+91 98765 43210",
  },
  {
    id: "2",
    name: "Vyapar Electronics",
    address: "456 Anna Salai, Chennai, Tamil Nadu",
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    isVerified: true,
    reviewCount: 32,
    websiteUrl: "https://vyaparelectronics.in",
    phoneNumber: "+91 98765 12345",
  },
  {
    id: "3",
    name: "Vyapar Digital Solutions",
    address: "789 Bandra Road, Mumbai, Maharashtra",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    isVerified: false,
    reviewCount: 12,
    websiteUrl: "https://vyapardigital.com",
    phoneNumber: "+91 98765 67890",
  },
];

const BusinessSelection = () => {
  const [loading, setLoading] = useState(true);
  const [businesses, setBusinesses] = useState<typeof mockBusinessProfiles>([]);
  const [isWebViewOpen, setIsWebViewOpen] = useState(false);
  const navigate = useNavigate();

  // Simulate fetching business profiles
  useEffect(() => {
    const timer = setTimeout(() => {
      setBusinesses(mockBusinessProfiles);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-navigate to the first business profile if available
  useEffect(() => {
    if (!loading && businesses.length > 0) {
      const defaultBusiness = businesses[0];
      const queryParams = new URLSearchParams(window.location.search);
      
      // Only auto-navigate if the 'auto' parameter is present
      if (queryParams.get('auto') === 'true') {
        navigate(`/business/${defaultBusiness.id}/details`);
      }
    }
  }, [loading, businesses, navigate]);

  const handleSelectBusiness = (id: string) => {
    navigate(`/business/${id}/details`);
  };

  const handleCreateBusiness = () => {
    setIsWebViewOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <div className="container mx-auto py-6 px-4 flex-1 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Select Business Profile</h1>
            <p className="text-gray-600 mt-1">
              Choose a business profile to manage or create a new one
            </p>
          </div>
          <Button 
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-2" 
            onClick={handleCreateBusiness}
          >
            <Plus className="h-4 w-4" />
            <span>New Profile</span>
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner size="large" />
          </div>
        ) : businesses.length > 0 ? (
          <div className="space-y-4">
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                {...business}
                onSelect={handleSelectBusiness}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No business profiles found"
            description="You don't have any Google Business Profiles linked to this Google account."
            ctaText="Create Business Profile"
            ctaAction={handleCreateBusiness}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
          />
        )}
      </div>

      <Dialog open={isWebViewOpen} onOpenChange={setIsWebViewOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>Create Google Business Profile</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full flex-1">
            <iframe 
              src="https://business.google.com/create" 
              className="w-full h-[calc(80vh-60px)]" 
              title="Google Business Profile Creation"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusinessSelection;
