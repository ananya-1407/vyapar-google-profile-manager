
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import EducationalSection from "@/components/smart-review/EducationalSection";
import StatsOverview from "@/components/smart-review/StatsOverview";
import QuickActions from "@/components/smart-review/QuickActions";
import FeedbackManagement from "@/components/smart-review/FeedbackManagement";
import AnalyticsView from "@/components/smart-review/AnalyticsView";

const SmartReviewQR = () => {
  const [feedbackFilter, setFeedbackFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Mock analytics data
  const analytics = {
    totalScans: 284,
    completionRate: 67,
    completionCount: 190,
    avgRating: 3.8,
    privateFeedbackCount: 89,
    googleAvgRating: 4.2,
    googleReviewCount: 247,
    googleRedirects: 156,
    privateFeedback: 89,
    responseRate: 45,
    thisMonth: {
      scans: 84,
      saves: 12,
      conversions: 45
    }
  };

  // Mock feedback data
  const feedbackData = [
    {
      id: "f1",
      customerName: "Anonymous Customer",
      rating: 2,
      comment: "Service was slow and staff seemed uninterested. Food quality was also below expectations.",
      phone: "+91-9876543210",
      email: "customer@email.com",
      created_at: "2 hours ago",
      status: "pending",
      responded: false,
      source_ip: "192.168.1.1"
    },
    {
      id: "f2",
      customerName: "Anonymous Customer", 
      rating: 3,
      comment: "Average experience. Could improve cleanliness and wait times.",
      phone: "+91-9876543211",
      email: "user@email.com",
      created_at: "1 day ago",
      status: "responded",
      responded: true,
      response_text: "Thank you for your feedback. We're working on improvements.",
      source_ip: "192.168.1.2"
    },
    {
      id: "f3",
      customerName: "Anonymous Customer",
      rating: 1,
      comment: "Terrible experience. Very disappointed with the service and attitude.",
      phone: "+91-9876543212",
      email: "angry@email.com", 
      created_at: "3 days ago",
      status: "resolved",
      responded: true,
      response_text: "We sincerely apologize and would like to make this right. Please contact us directly.",
      source_ip: "192.168.1.3"
    }
  ];

  const handleDownloadQR = () => {
    toast({
      title: "QR Code Downloaded",
      description: "Your customized QR code has been saved to downloads.",
    });
  };

  const handleReplyToFeedback = (feedbackId: string) => {
    console.log(`Reply to feedback ${feedbackId}`);
    toast({
      title: "Response Sent",
      description: "Your response has been sent to the customer.",
    });
  };

  const handleMarkResolved = (feedbackId: string) => {
    console.log(`Mark resolved ${feedbackId}`);
    toast({
      title: "Marked as Resolved",
      description: "Feedback has been marked as resolved.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Smart Review Filter</h1>
        <p className="text-gray-600 mt-1">Manage your QR code and customer feedback</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <EducationalSection />
          <StatsOverview analytics={analytics} />
          <QuickActions 
            feedbackData={feedbackData} 
            onDownloadQR={handleDownloadQR} 
          />
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <FeedbackManagement 
            feedbackData={feedbackData}
            feedbackFilter={feedbackFilter}
            setFeedbackFilter={setFeedbackFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onReplyToFeedback={handleReplyToFeedback}
            onMarkResolved={handleMarkResolved}
          />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <AnalyticsView analytics={analytics} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SmartReviewQR;
