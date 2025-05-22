
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@/components/ui/select";

// Mock data for business profiles
export const mockBusinessProfiles = [
  {
    id: "1",
    name: "Vyapar Store Bangalore",
  },
  {
    id: "2",
    name: "Vyapar Electronics",
  },
  {
    id: "3",
    name: "Vyapar Digital Solutions",
  },
];

interface BusinessSelectorProps {
  businessId: string;
  onCreateBusiness: () => void;
}

const BusinessSelector = ({ businessId, onCreateBusiness }: BusinessSelectorProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle business profile change
  const handleBusinessChange = (selectedBusinessId: string) => {
    // Handle special case for "new-profile"
    if (selectedBusinessId === "new-profile") {
      onCreateBusiness();
      return;
    }
    
    // Get the current tab from the URL
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    const currentTab = pathParts[pathParts.length - 1];
    
    // Navigate to the same tab but for the new business
    navigate(`/business/${selectedBusinessId}/${currentTab}`);
  };

  return (
    <Select
      value={businessId}
      onValueChange={handleBusinessChange}
    >
      <SelectTrigger className="w-full bg-white border border-gray-200">
        <SelectValue placeholder="Select a business profile" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Business Profiles</SelectLabel>
          {mockBusinessProfiles.map((business) => (
            <SelectItem key={business.id} value={business.id}>
              {business.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectItem value="new-profile" className="text-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Profile
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BusinessSelector;
