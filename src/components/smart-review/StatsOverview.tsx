
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye, 
  CheckCircle,
  Star,
  Reply,
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
    responseRate: number;
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
                  <p className="text-sm font-medium text-gray-600">Total Scans</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Number of times your QR code has been scanned by customers</p>
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
                  <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Percentage of customers who completed the feedback form after scanning</p>
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
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Average star rating from all customer feedback received</p>
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
                  <p className="text-sm font-medium text-gray-600">Response Rate</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Percentage of customer feedback you have responded to</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-2xl font-bold">{analytics.responseRate}%</p>
              </div>
              <Reply className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default StatsOverview;
