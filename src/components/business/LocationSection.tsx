
import React from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationInfo {
  address: string;
}

interface LocationSectionProps {
  locationInfo: LocationInfo;
}

const LocationSection = ({ locationInfo }: LocationSectionProps) => {
  return (
    <div id="section-location">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Location</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-vyapar-text">Address</h3>
                <p className="text-vyapar-text-secondary">{locationInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="h-60 mt-4 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map preview would appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationSection;
