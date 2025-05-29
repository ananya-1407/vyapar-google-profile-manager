
import React from "react";
import UrgentAlert from "@/components/business/UrgentAlert";
import GoogleBusinessScore from "@/components/business/GoogleBusinessScore";
import QuickWins from "@/components/business/QuickWins";
import PerformanceMetrics from "@/components/business/PerformanceMetrics";
import MagicalReviewTools from "@/components/business/MagicalReviewTools";
import RecentActivityFeed from "@/components/business/RecentActivityFeed";
import PriorityActions from "@/components/business/PriorityActions";
import BusinessSummaryCompact from "@/components/business/BusinessSummaryCompact";

const BusinessDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Google Business Profile Dashboard</h1>
        <p className="text-gray-600 mt-1">Optimize your Google presence and manage customer interactions</p>
      </div>

      {/* Urgent Alert Banner */}
      <UrgentAlert />

      {/* Top Row - Score and Quick Wins */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GoogleBusinessScore />
        </div>
        <div>
          <QuickWins />
        </div>
      </div>

      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Middle Row - Tools and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MagicalReviewTools />
        <RecentActivityFeed />
      </div>

      {/* Priority Actions */}
      <PriorityActions />

      {/* Business Summary */}
      <BusinessSummaryCompact />
    </div>
  );
};

export default BusinessDashboard;
