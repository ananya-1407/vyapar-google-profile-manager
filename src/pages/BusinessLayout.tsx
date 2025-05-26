
import React, { useState, useEffect } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { Info, MessageSquare, ChartBar, TrendingUp } from "lucide-react";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProfileTabs from "@/components/ProfileTabs";
import BusinessSelector, { mockBusinessProfiles } from "@/components/business/BusinessSelector";
import BusinessHeader from "@/components/business/BusinessHeader";
import WebViewDialog from "@/components/business/WebViewDialog";

const BusinessLayout = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [isWebViewOpen, setIsWebViewOpen] = useState(false);
  
  // Get current business name
  const currentBusiness = mockBusinessProfiles.find(business => business.id === businessId) || mockBusinessProfiles[0];
  
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
          <BusinessHeader businessName={currentBusiness.name} />
          
          <div className="w-full md:w-auto min-w-[240px]">
            <BusinessSelector 
              businessId={businessId || ""} 
              onCreateBusiness={handleCreateBusiness} 
            />
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

      <WebViewDialog 
        isOpen={isWebViewOpen}
        onOpenChange={setIsWebViewOpen}
        title="Create Google Business Profile"
        url="https://business.google.com/create"
      />
    </div>
  );
};

export default BusinessLayout;
