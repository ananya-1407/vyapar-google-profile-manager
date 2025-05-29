
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, HelpCircle, AlertTriangle, Image } from "lucide-react";

const RecentActivityFeed = () => {
  const activities = [
    {
      icon: <Star className="h-4 w-4 text-yellow-500" />,
      emoji: "⭐",
      text: "5★ review (2h ago)",
      urgent: false
    },
    {
      icon: <HelpCircle className="h-4 w-4 text-blue-500" />,
      emoji: "❓",
      text: "New question (4h ago)",
      urgent: false
    },
    {
      icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
      emoji: "⚠️",
      text: "2★ review (2d ago)",
      urgent: true
    },
    {
      icon: <Image className="h-4 w-4 text-green-500" />,
      emoji: "📷",
      text: "Photo liked (1d ago)",
      urgent: false
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          🔔 Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-2 rounded ${
              activity.urgent ? "bg-red-50 border border-red-200" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{activity.emoji}</span>
              <span className="text-sm">{activity.text}</span>
            </div>
            {activity.urgent && (
              <Button size="sm" variant="destructive">
                URGENT
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivityFeed;
