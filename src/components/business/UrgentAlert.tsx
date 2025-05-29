
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const UrgentAlert = () => {
  return (
    <Alert className="border-red-200 bg-red-50 mb-6">
      <AlertTriangle className="h-4 w-4 text-red-600" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-red-800 font-medium">
          🚨 URGENT: 2 negative reviews need immediate response
        </span>
        <div className="flex gap-2">
          <Button size="sm" variant="destructive">
            Respond Now
          </Button>
          <Button size="sm" variant="outline">
            View All Reviews
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default UrgentAlert;
