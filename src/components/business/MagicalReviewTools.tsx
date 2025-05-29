
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Share, Printer } from "lucide-react";

const MagicalReviewTools = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          🪄 Magical Review Tools
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">QR Code:</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Printer className="h-3 w-3" />
              Print
            </Button>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Share className="h-3 w-3" />
              Share
            </Button>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-600 mb-2">WhatsApp Link:</p>
          <Button size="sm" variant="outline">
            Send
          </Button>
        </div>
        
        <div>
          <p className="text-sm text-gray-600 mb-2">SMS Link:</p>
          <Button size="sm" variant="outline">
            Send
          </Button>
        </div>
        
        <div className="pt-3 border-t">
          <p className="text-sm font-medium text-green-600">
            Performance: 18 reviews this month ✅
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicalReviewTools;
