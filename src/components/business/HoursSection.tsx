
import React from "react";
import { PenLine, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface HourInfo {
  day: string;
  hours: string;
}

interface HoursSectionProps {
  hoursInfo: HourInfo[];
}

const HoursSection = ({ hoursInfo }: HoursSectionProps) => {
  const { toast } = useToast();

  const handleEditField = (field: string) => {
    toast({
      title: "Edit Field",
      description: `Editing ${field} would open an edit dialog in a real app`,
    });
  };

  return (
    <div id="section-hours">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <CardTitle className="text-xl">Business Hours</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary w-full sm:w-auto" 
              onClick={() => handleEditField("hours")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {hoursInfo.map((item) => (
              <div key={item.day} className="flex justify-between items-center py-1 border-b last:border-b-0 border-gray-100">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-vyapar-text">{item.day}</span>
                </div>
                <span className="text-sm text-vyapar-text-secondary">{item.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HoursSection;
