
import React from "react";
import UrgentAlert from "@/components/business/UrgentAlert";
import PerformanceMetrics from "@/components/business/PerformanceMetrics";
import DashboardHeader from "@/components/business/DashboardHeader";
import DashboardScoreSection from "@/components/business/DashboardScoreSection";
import DashboardToolsSection from "@/components/business/DashboardToolsSection";
import DashboardActionsSection from "@/components/business/DashboardActionsSection";

const BusinessDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <DashboardHeader />

      {/* Urgent Alert Banner */}
      <UrgentAlert />

      {/* Top Row - Score and Quick Wins */}
      <DashboardScoreSection />

      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Middle Row - Tools and Activity */}
      <DashboardToolsSection />

      {/* Priority Actions and Business Summary */}
      <DashboardActionsSection />
    </div>
  );
};

export default BusinessDashboard;
