
import React, { useState, useEffect } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { Info, MessageSquare, ChartBar, ChevronDown, ExternalLink, Plus } from "lucide-react";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProfileTabs from "@/components/ProfileTabs";
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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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

const BusinessLayout = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const { toast } = useToast();
  const [isWebViewOpen, setIsWebViewOpen] = useState(false);
  
  // Get current business name
  const currentBusiness = mockBusinessProfiles.find(business => business.id === businessId) || mockBusinessProfiles[0];
  
  // Handle business profile change
  const handleBusinessChange = (selectedBusinessId: string) => {
    // Handle special case for "new-profile"
    if (selectedBusinessId === "new-profile") {
      handleCreateBusiness();
      return;
    }
    
    // Get the current tab from the URL
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    const currentTab = pathParts[pathParts.length - 1];
    
    // Navigate to the same tab but for the new business
    navigate(`/business/${selectedBusinessId}/${currentTab}`);
  };

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

  // Handle creating a new business profile
  const handleCreateBusiness = () => {
    setIsWebViewOpen(true);
  };

  // Determine current active page for breadcrumb
  const getActivePage = () => {
    if (location.pathname.includes("/details")) return "Business Details";
    if (location.pathname.includes("/interactions")) return "Customer Interactions";
    if (location.pathname.includes("/insights")) return "Google Insights";
    return "Business Profile";
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: currentBusiness.name, path: `/business/${businessId}/details` },
    { label: getActivePage(), path: location.pathname }
  ];

  // Filter breadcrumbs based on path to avoid showing redundant entries
  const filteredBreadcrumbs = breadcrumbItems.filter((item, index, arr) => {
    if (index === arr.length - 1) return true;
    return item.path !== arr[index + 1].path;
  });

  const tabs = [
    {
      id: "details",
      label: "Business Details",
      icon: <Info className="h-4 w-4" />,
      path: `/business/${businessId}/details`,
    },
    {
      id: "interactions",
      label: "Customer Interaction",
      icon: <MessageSquare className="h-4 w-4" />,
      path: `/business/${businessId}/interactions`,
    },
    {
      id: "insights",
      label: "Google Insights",
      icon: <ChartBar className="h-4 w-4" />,
      path: `/business/${businessId}/insights`,
    },
  ];

  // Handle tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    navigate(tabs.find(tab => tab.id === tabId)?.path || '');
  };

  // On component mount, navigate to the current business's details page if no specific tab is selected
  useEffect(() => {
    if (location.pathname === `/business/${businessId}`) {
      navigate(`/business/${businessId}/details`);
    }
  }, [businessId, location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <div className="container mx-auto px-3 sm:px-4">
        <div className="overflow-x-auto">
          <Breadcrumbs items={filteredBreadcrumbs} />
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-2 mb-4 sm:mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-vyapar-text">{currentBusiness.name}</h1>
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
          
          <div className="w-full md:w-auto min-w-[240px]">
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
          </div>
        </div>
        
        <ProfileTabs 
          businessId={businessId || ""} 
          tabs={tabs} 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="py-4 sm:py-6">
          <Outlet />
        </div>
      </div>

      {/* Create New Business Profile Dialog */}
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

export default BusinessLayout;
