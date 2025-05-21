
import React, { useState } from "react";
import { PenLine, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MoreSectionProps {
  additionalInfo: {
    payments: string;
    languages: string;
    accessibility: string;
  };
}

const MoreSection = ({ additionalInfo }: MoreSectionProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);

  const handleEditField = (field: string) => {
    toast({
      title: "Edit Field",
      description: `Editing ${field} would open an edit dialog in a real app`,
    });
  };

  const generateWithAI = (field: string) => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      if (field === "faqs") {
        toast({
          title: "FAQs Generated",
          description: "AI has generated sample FAQs based on your business type.",
        });
      }
      
      setIsGenerating(false);
      
      toast({
        title: "AI Suggestion Generated",
        description: `New content for ${field} has been generated. You can edit it further if needed.`,
      });
    }, 1500);
  };

  return (
    <div id="section-more" className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
            <div className="flex space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="text-primary border-primary">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    AI Assist
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Generate FAQs with AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Let AI suggest common questions and answers for your type of business.
                    </p>
                    <Button 
                      className="w-full" 
                      onClick={() => generateWithAI("faqs")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Generating..." : "Generate FAQs"}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Button 
                variant="outline" 
                className="text-primary border-primary"
                onClick={() => handleEditField("faqs")}
              >
                <PenLine className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible 
            open={isMoreExpanded} 
            onOpenChange={setIsMoreExpanded}
            className="border rounded-md"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-gray-50">
              <h3 className="text-sm font-medium">Do you offer free shipping?</h3>
              <div className="text-primary">
                {isMoreExpanded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t">
              <p className="text-sm text-vyapar-text-secondary">Yes, we offer free shipping on all orders above ₹1000. For orders below this amount, a standard shipping fee of ₹100 applies.</p>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="border rounded-md">
            <div className="flex w-full items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
              <h3 className="text-sm font-medium">What are your return policies?</h3>
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md">
            <div className="flex w-full items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
              <h3 className="text-sm font-medium">Do you have physical stores?</h3>
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
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
