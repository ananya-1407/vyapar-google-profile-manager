
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  QrCode, 
  Download, 
  Share, 
  Printer, 
  Eye, 
  MessageSquare, 
  Reply,
  CheckCircle,
  Clock,
  Star,
  Filter,
  Search,
  MoreHorizontal
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const SmartReviewQR = () => {
  const [qrCustomization, setQrCustomization] = useState({
    primaryColor: "#3B82F6",
    secondaryColor: "#1E40AF",
    logoEnabled: true,
    borderStyle: "rounded",
    callToAction: "Rate your experience with us!"
  });
  
  const [feedbackFilter, setFeedbackFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Mock analytics data
  const analytics = {
    totalScans: 284,
    completionRate: 67,
    avgRating: 3.8,
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  const getStatusBadge = (status: string, responded: boolean) => {
    if (status === "resolved") {
      return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
    }
    if (responded) {
      return <Badge className="bg-blue-100 text-blue-800">Responded</Badge>;
    }
    return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
  };

  const filteredFeedback = feedbackData.filter(feedback => {
    const matchesFilter = feedbackFilter === "all" || feedback.status === feedbackFilter;
    const matchesSearch = feedback.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Smart Review Filter</h1>
        <p className="text-gray-600 mt-1">Manage your QR code and customer feedback</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="qr-management">QR Management</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Scans</p>
                    <p className="text-2xl font-bold">{analytics.totalScans}</p>
                  </div>
                  <Eye className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                    <p className="text-2xl font-bold">{analytics.completionRate}%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                    <p className="text-2xl font-bold">{analytics.avgRating}</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Response Rate</p>
                    <p className="text-2xl font-bold">{analytics.responseRate}%</p>
                  </div>
                  <Reply className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Quick QR Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <QrCode className="h-24 w-24 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-4">Your Smart Review QR Code</p>
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" onClick={handleDownloadQR}>
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="h-3 w-3 mr-1" />
                      Share
                    </Button>
                    <Button size="sm" variant="outline">
                      <Printer className="h-3 w-3 mr-1" />
                      Print
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feedbackData.slice(0, 3).map((feedback) => (
                    <div key={feedback.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex">{renderStars(feedback.rating)}</div>
                        <span className="text-xs text-gray-500">{feedback.created_at}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                        {feedback.comment}
                      </p>
                      {getStatusBadge(feedback.status, feedback.responded)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="qr-management" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>QR Customization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <Input
                    id="primaryColor"
                    type="color"
                    value={qrCustomization.primaryColor}
                    onChange={(e) => setQrCustomization({...qrCustomization, primaryColor: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="callToAction">Call to Action Text</Label>
                  <Textarea
                    id="callToAction"
                    value={qrCustomization.callToAction}
                    onChange={(e) => setQrCustomization({...qrCustomization, callToAction: e.target.value})}
                    rows={2}
                  />
                </div>

                <Button className="w-full">Update QR Code</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>QR Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <QrCode className="h-32 w-32 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm font-medium mb-2">{qrCustomization.callToAction}</p>
                  <p className="text-xs text-gray-500">https://vyapar.in/review/abc123</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1" onClick={handleDownloadQR}>
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Share className="h-3 w-3 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search feedback..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={feedbackFilter === "all" ? "default" : "outline"}
                onClick={() => setFeedbackFilter("all")}
              >
                All
              </Button>
              <Button
                size="sm"
                variant={feedbackFilter === "pending" ? "default" : "outline"}
                onClick={() => setFeedbackFilter("pending")}
              >
                Pending
              </Button>
              <Button
                size="sm"
                variant={feedbackFilter === "responded" ? "default" : "outline"}
                onClick={() => setFeedbackFilter("responded")}
              >
                Responded
              </Button>
              <Button
                size="sm"
                variant={feedbackFilter === "resolved" ? "default" : "outline"}
                onClick={() => setFeedbackFilter("resolved")}
              >
                Resolved
              </Button>
            </div>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Feedback</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{feedback.customerName}</p>
                        <p className="text-xs text-gray-500">{feedback.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex">{renderStars(feedback.rating)}</div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm line-clamp-2">{feedback.comment}</p>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(feedback.status, feedback.responded)}
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {feedback.created_at}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {!feedback.responded && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReplyToFeedback(feedback.id)}
                          >
                            <Reply className="h-3 w-3" />
                          </Button>
                        )}
                        {feedback.status !== "resolved" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleMarkResolved(feedback.id)}
                          >
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Scans</span>
                  <span className="font-medium">{analytics.thisMonth.scans}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Bad Reviews Saved</span>
                  <span className="font-medium text-green-600">{analytics.thisMonth.saves}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Google Conversions</span>
                  <span className="font-medium text-blue-600">{analytics.thisMonth.conversions}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Review Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Google Reviews</span>
                  <span className="font-medium">{analytics.googleRedirects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Private Feedback</span>
                  <span className="font-medium">{analytics.privateFeedback}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Responses</span>
                  <span className="font-medium">{analytics.googleRedirects + analytics.privateFeedback}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="font-medium">{analytics.completionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="font-medium">{analytics.responseRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <span className="font-medium">{analytics.avgRating}/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SmartReviewQR;
