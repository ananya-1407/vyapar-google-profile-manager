
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye, 
  CheckCircle,
  Star,
  MapPin,
  Info
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatsOverviewProps {
  analytics: {
    totalScans: number;
    completionRate: number;
    avgRating: number;
    googleAvgRating: number;
  };
}

const StatsOverview = ({ analytics }: StatsOverviewProps) => {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-gray-600">QR Code Scans</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Total number of times customers have scanned your Smart Review QR code</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-2xl font-bold">{analytics.totalScans}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-gray-600">Review Completion</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Percentage of customers who completed giving feedback after scanning the QR code</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-2xl font-bold">{analytics.completionRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-gray-600">Private Feedback</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Average rating from private feedback collected through your QR code</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-2xl font-bold">{analytics.avgRating}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-gray-600">Google Rating</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Your current average rating on Google Maps and Google Business</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-2xl font-bold">{analytics.googleAvgRating}</p>
              </div>
              <MapPin className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default StatsOverview;
