
import React, { useState } from "react";
import { PenLine, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BusinessInfo {
  name: string;
  category: string;
  openingDate: string;
  description: string;
  attributes: { name: string; value: boolean }[];
  serviceOptions: { name: string; value: boolean }[];
}

interface AboutSectionProps {
  businessDetails: BusinessInfo;
}

const formSchema = z.object({
  description: z.string().min(20, "Description must be at least 20 characters"),
});

const AboutSection = ({ businessDetails }: AboutSectionProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: businessDetails.description,
    },
  });

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
      if (field === "description") {
        form.setValue("description", "AI-generated description: We are a premier business solutions provider specializing in inventory management, billing software, and accounting tools tailored for small businesses across India. With a focus on user-friendly interfaces and powerful features, we help businesses streamline operations and boost productivity.");
      }
      
      setIsGenerating(false);
      
      toast({
        title: "AI Suggestion Generated",
        description: `New content for ${field} has been generated. You can edit it further if needed.`,
      });
    }, 1500);
  };

  return (
    <div id="section-about" className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Business Information</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("business info")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Business Name</h3>
            <p className="text-vyapar-text-secondary">{businessDetails.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Business Category</h3>
            <p className="text-vyapar-text-secondary">{businessDetails.category}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-vyapar-text">Opening Date</h3>
            <p className="text-vyapar-text-secondary">{businessDetails.openingDate || "Not specified"}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Description</CardTitle>
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
                    <h4 className="font-medium">Generate with AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Let AI suggest a professional business description based on your industry and services.
                    </p>
                    <Button 
                      className="w-full" 
                      onClick={() => generateWithAI("description")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Generating..." : "Generate Description"}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Button 
                variant="outline" 
                className="text-primary border-primary"
                onClick={() => handleEditField("description")}
              >
                <PenLine className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Business description" 
                        className="min-h-[100px]" 
                        {...field} 
                        disabled={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Attributes</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("attributes")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessDetails.attributes.map((attr) => (
              <div key={attr.name} className="flex items-center">
                <span className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center ${attr.value ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {attr.value ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-vyapar-text-secondary">{attr.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Service Options</CardTitle>
            <Button 
              variant="outline" 
              className="text-primary border-primary" 
              onClick={() => handleEditField("service options")}
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessDetails.serviceOptions.map((option) => (
              <div key={option.name} className="flex items-center">
                <span className="h-5 w-5 rounded-full mr-3 flex items-center justify-center bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-vyapar-text-secondary">{option.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
