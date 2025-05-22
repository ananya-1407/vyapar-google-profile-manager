
import React, { useState } from "react";
import { PenLine, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MoreSectionProps {
  additionalInfo: {
    payments: string;
    languages: string;
    accessibility: string;
  };
}

const MoreSection = ({ additionalInfo }: MoreSectionProps) => {
  const { toast } = useToast();

  const handleEditField = (field: string) => {
    toast({
      title: "Edit Field",
      description: `Editing ${field} would open an edit dialog in a real app`,
    });
  };

  return (
    <div id="section-more" className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Additional Information</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary"
              onClick={() => handleEditField("additional info")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Payment Methods</h3>
            <p className="text-vyapar-text-secondary">{additionalInfo.payments}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Languages Spoken</h3>
            <p className="text-vyapar-text-secondary">{additionalInfo.languages}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Accessibility</h3>
            <p className="text-vyapar-text-secondary">{additionalInfo.accessibility}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoreSection;
