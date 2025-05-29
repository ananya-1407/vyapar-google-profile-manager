
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Calendar, Camera, MapPin, Phone, Star } from "lucide-react";

const PriorityActions = () => {
  const urgentActions = [
    { icon: <Flame className="h-4 w-4" />, label: "Reply to Reviews", urgent: true },
    { icon: <Calendar className="h-4 w-4" />, label: "Update Hours", urgent: true },
    { icon: <Camera className="h-4 w-4" />, label: "Add Photos", urgent: true },
  ];

  const commonActions = [
    { icon: <MapPin className="h-4 w-4" />, label: "Edit Location" },
    { icon: <Phone className="h-4 w-4" />, label: "Update Contact" },
    { icon: <Star className="h-4 w-4" />, label: "Share Link" },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          ⚡ Priority Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-red-600 mb-2">🔥 URGENT ACTIONS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {urgentActions.map((action, index) => (
              <Button
                key={index}
                variant="destructive"
                size="sm"
                className="flex items-center gap-1 text-xs"
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">⚡ COMMON ACTIONS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {commonActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-xs"
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriorityActions;
