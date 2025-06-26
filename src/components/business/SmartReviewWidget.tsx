
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, AlertCircle, TrendingUp, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartReviewWidget = ({ businessId }: { businessId: string }) => {
  const navigate = useNavigate();
  
  // Mock data - in real app this would come from API
  const widgetData = {
    pendingFeedback: 3,
    weeklyBadReviewsSaved: 2,
    conversionRate: 67,
    totalScans: 84,
    recentActivity: "2 hours ago"
  };

  const handleViewAll = () => {
    navigate(`/business/${businessId}/smart-qr`);
  };

  const handleDownloadQR = () => {
    // In real app, this would trigger QR download
    console.log("Download QR code");
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <QrCode className="h-5 w-5 text-blue-600" />
          Smart Review Filter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <span className="text-2xl font-bold text-orange-600">
                {widgetData.pendingFeedback}
              </span>
            </div>
            <p className="text-xs text-gray-600">Pending Feedback</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-2xl font-bold text-green-600">
                {widgetData.conversionRate}%
              </span>
            </div>
            <p className="text-xs text-gray-600">Conversion Rate</p>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-800">This Week's Impact</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {widgetData.weeklyBadReviewsSaved} saves
            </Badge>
          </div>
          <p className="text-xs text-blue-700">
            Prevented {widgetData.weeklyBadReviewsSaved} negative reviews from going public
          </p>
        </div>

        <div className="pt-2 border-t">
          <div className="flex justify-between text-xs text-gray-500 mb-3">
            <span>Total Scans: {widgetData.totalScans}</span>
            <span>Last Activity: {widgetData.recentActivity}</span>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={handleViewAll}
              className="flex-1"
            >
              View All
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleDownloadQR}
              className="flex items-center gap-1"
            >
              <Download className="h-3 w-3" />
              QR
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartReviewWidget;
