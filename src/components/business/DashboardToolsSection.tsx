import React from "react";
import MagicalQRSection from "./MagicalQRSection";
import PrivateReviewsSection from "./PrivateReviewsSection";
import MagicalReviewTools from "./MagicalReviewTools";
import RecentActivityFeed from "./RecentActivityFeed";

const DashboardToolsSection = () => {
  return (
    <div className="space-y-6">
      {/* New Magical QR and Private Reviews Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MagicalQRSection />
        <PrivateReviewsSection />
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
