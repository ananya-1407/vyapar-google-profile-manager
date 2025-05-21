
import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Info, MessageSquare, Star, ChartBar } from "lucide-react";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProfileTabs from "@/components/ProfileTabs";

const BusinessLayout = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const location = useLocation();
  
  // Mock data for business name
  const businessName = businessId === "1" 
    ? "Vyapar Store Bangalore" 
    : businessId === "2" 
    ? "Vyapar Electronics" 
    : "Vyapar Digital Solutions";

  // Determine current active page for breadcrumb
  const getActivePage = () => {
    if (location.pathname.includes("/details")) return "Business Details";
    if (location.pathname.includes("/interactions")) return "Customer Interactions";
    if (location.pathname.includes("/insights")) return "Google Insights";
    return "Business Profile";
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Business Profiles", path: "/select-business" },
    { label: businessName, path: `/business/${businessId}/details` },
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <div className="container mx-auto px-4">
        <Breadcrumbs items={filteredBreadcrumbs} />
        <h1 className="text-2xl font-bold text-vyapar-text mt-2 mb-6">{businessName}</h1>
        <ProfileTabs businessId={businessId || ""} tabs={tabs} />
        <div className="py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BusinessLayout;
