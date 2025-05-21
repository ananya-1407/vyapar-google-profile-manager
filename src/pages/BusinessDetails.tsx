
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Phone, Globe, Mail, FileText, Calendar, PenLine, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/toaster";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const BusinessDetails = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("about");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock business details based on ID
  const businessDetails = {
    name: businessId === "1" ? "Vyapar Store Bangalore" : 
          businessId === "2" ? "Vyapar Electronics" : 
          "Vyapar Digital Solutions",
    category: businessId === "1" ? "Retail Store" : 
              businessId === "2" ? "Electronics Store" : 
              "Digital Services",
    address: businessId === "1" ? "123 MG Road, Bangalore, Karnataka" : 
             businessId === "2" ? "456 Anna Salai, Chennai, Tamil Nadu" : 
             "789 Bandra Road, Mumbai, Maharashtra",
    phone: "+91 9876543210",
    website: "https://www.vyaparapp.in",
    email: "contact@vyaparapp.in",
    description: "Leading provider of business management solutions designed specifically for Indian small businesses. Our products help simplify inventory, billing, accounting, and more.",
    openingDate: "January 2020",
    hours: [
      { day: "Monday", hours: "9:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    attributes: [
      { name: "Wheelchair accessible", value: true },
      { name: "Free Wi-Fi", value: true },
      { name: "Parking available", value: true },
      { name: "Appointment required", value: false },
    ],
    serviceOptions: [
      { name: "Delivery", value: true },
      { name: "Online Support", value: true },
      { name: "In-store shopping", value: true },
    ]
  };

  // Form schema
  const formSchema = z.object({
    description: z.string().min(20, "Description must be at least 20 characters"),
  });

  // Form setup
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
      switch (field) {
        case "description":
          form.setValue("description", "AI-generated description: We are a premier business solutions provider specializing in inventory management, billing software, and accounting tools tailored for small businesses across India. With a focus on user-friendly interfaces and powerful features, we help businesses streamline operations and boost productivity.");
          break;
        default:
          break;
      }
      setIsGenerating(false);
      
      toast({
        title: "AI Suggestion Generated",
        description: `New content for ${field} has been generated. You can edit it further if needed.`,
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="hours">Hours</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4 mt-6">
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
        </TabsContent>

        <TabsContent value="contact" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <Button 
                  variant="outline" 
                  className="text-primary border-primary" 
                  onClick={() => handleEditField("contact info")}
                >
                  <PenLine className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-vyapar-text">Phone</h3>
                    <p className="text-vyapar-text-secondary">{businessDetails.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-vyapar-text">Website</h3>
                    <a href={businessDetails.website} className="text-primary hover:underline">
                      {businessDetails.website.replace("https://", "")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-vyapar-text">Email</h3>
                    <a href={`mailto:${businessDetails.email}`} className="text-primary hover:underline">
                      {businessDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Location</CardTitle>
                <Button 
                  variant="outline" 
                  className="text-primary border-primary" 
                  onClick={() => handleEditField("location")}
                >
                  <PenLine className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-vyapar-text">Address</h3>
                    <p className="text-vyapar-text-secondary">{businessDetails.address}</p>
                  </div>
                </div>
              </div>
              <div className="h-60 mt-4 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map preview would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hours" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Business Hours</CardTitle>
                <Button 
                  variant="outline" 
                  className="text-primary border-primary" 
                  onClick={() => handleEditField("hours")}
                >
                  <PenLine className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {businessDetails.hours.map((item) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessDetails;
