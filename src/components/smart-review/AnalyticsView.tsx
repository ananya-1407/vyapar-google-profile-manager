
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Analytics {
  totalScans: number;
  completionRate: number;
  avgRating: number;
  googleRedirects: number;
  privateFeedback: number;
  responseRate: number;
  thisMonth: {
    scans: number;
    saves: number;
    conversions: number;
  };
}

interface AnalyticsViewProps {
  analytics: Analytics;
}

const AnalyticsView = ({ analytics }: AnalyticsViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">This Month</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Scans</span>
            <span className="font-medium">{analytics.thisMonth.scans}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Bad Reviews Saved</span>
            <span className="font-medium text-green-600">{analytics.thisMonth.saves}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Google Conversions</span>
            <span className="font-medium text-blue-600">{analytics.thisMonth.conversions}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Review Distribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Google Reviews</span>
            <span className="font-medium">{analytics.googleRedirects}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Private Feedback</span>
            <span className="font-medium">{analytics.privateFeedback}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Total Responses</span>
            <span className="font-medium">{analytics.googleRedirects + analytics.privateFeedback}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Completion Rate</span>
            <span className="font-medium">{analytics.completionRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Response Rate</span>
            <span className="font-medium">{analytics.responseRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Average Rating</span>
            <span className="font-medium">{analytics.avgRating}/5</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsView;
