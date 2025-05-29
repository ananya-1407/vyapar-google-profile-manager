
import React from "react";
import MagicalReviewTools from "./MagicalReviewTools";
import RecentActivityFeed from "./RecentActivityFeed";

const DashboardToolsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <MagicalReviewTools />
      <RecentActivityFeed />
    </div>
  );
};

export default DashboardToolsSection;
