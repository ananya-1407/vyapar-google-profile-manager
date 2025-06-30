import React from "react";
import PrivateReviewsSection from "./PrivateReviewsSection";
import MagicalReviewTools from "./MagicalReviewTools";
import RecentActivityFeed from "./RecentActivityFeed";
import SmartReviewWidget from "./SmartReviewWidget";
import { useParams } from "react-router-dom";

const DashboardToolsSection = () => {
  const { businessId } = useParams<{ businessId: string }>();

  return (
    <div className="space-y-6">
      {/* Smart Review Widget - New dashboard widget */}
      <SmartReviewWidget businessId={businessId || ""} />
      
      {/* Private Reviews Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PrivateReviewsSection />
        {/* Empty space where MagicalQRSection was */}
      </div>
      
      {/* Existing Tools Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MagicalReviewTools />
        <RecentActivityFeed />
      </div>
    </div>
  );
};

export default DashboardToolsSection;
