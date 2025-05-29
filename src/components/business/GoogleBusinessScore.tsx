
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";

const GoogleBusinessScore = () => {
  const scoreItems = [
    { label: "Profile Completeness", score: 68, status: "good" },
    { label: "Photo Quality", score: 45, status: "warning" },
    { label: "Review Management", score: 85, status: "good" },
    { label: "Information Accuracy", score: 90, status: "good" },
    { label: "Customer Engagement", score: 60, status: "warning" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-green-600";
      case "warning": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5" />
          Google Business Score: 72/100
        </CardTitle>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">Profile Health: Good</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {scoreItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{item.label}</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                {item.score}%
              </span>
              {item.status === "warning" && (
                <Badge variant="outline" className="text-xs">
                  ⚠️
                </Badge>
              )}
            </div>
          </div>
        ))}
        <div className="pt-3 border-t">
          <p className="text-sm text-blue-600 font-medium mb-2">
            🎯 Quick Win: Add product photos (+8 points)
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              View Full Audit
            </Button>
            <Button size="sm">
              Improve Score
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleBusinessScore;
