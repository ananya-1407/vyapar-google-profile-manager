
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessSummaryCompact = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          📋 Business Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p><strong>Contact:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> 123 Business St</p>
          </div>
          <div>
            <p><strong>Hours:</strong> Mon-Fri 9-6</p>
            <p><strong>Sat:</strong> 10-4</p>
          </div>
          <div>
            <p><strong>Rank:</strong> #3</p>
            <p><strong>Reviews:</strong> 127 Rev</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessSummaryCompact;
