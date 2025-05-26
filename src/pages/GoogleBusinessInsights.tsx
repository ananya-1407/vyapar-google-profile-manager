
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import ReviewCard from "@/components/ReviewCard";
import ProfileImprovementDialog from "@/components/business/ProfileImprovementDialog";
import { 
  Eye, 
  Search, 
  Star, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Phone,
  AlertCircle,
  Plus
} from "lucide-react";

const GoogleBusinessInsights = () => {
  const [isImprovementDialogOpen, setIsImprovementDialogOpen] = useState(false);

  // Mock data for key insights
  const keyInsights = [
    {
      title: "Profile Views",
      value: "2,847",
      icon: <Eye className="h-5 w-5" />,
      change: { value: 15.2, isPositive: true }
    },
    {
      title: "Search Appearances",
      value: "1,234",
      icon: <Search className="h-5 w-5" />,
      change: { value: 8.7, isPositive: true }
    },
    {
      title: "Average Rating",
      value: "4.2",
      icon: <Star className="h-5 w-5" />,
      change: { value: 2.1, isPositive: false }
    }
  ];

  // Mock data for reviews needing attention
  const reviewsNeedingAttention = [
    {
      id: "1",
      author: "Sarah Johnson",
      rating: 2,
      content: "Service was slow and the staff seemed uninterested. Hope they can improve.",
      date: "2 days ago",
      replied: false
    },
    {
      id: "2", 
      author: "Mike Chen",
      rating: 3,
      content: "Product quality is good but delivery took longer than expected.",
      date: "1 week ago",
      replied: false
    }
  ];

  const profileScore = 68;

  const handleReplyToReview = (reviewId: string) => {
    console.log("Reply to review:", reviewId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Google Business Insights</h1>
          <p className="text-gray-600 mt-1">Monitor your business performance and improve your profile</p>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keyInsights.map((insight, index) => (
          <StatCard
            key={index}
            title={insight.title}
            value={insight.value}
            icon={insight.icon}
            change={insight.change}
          />
        ))}
      </div>

      {/* Top Business Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Business Information Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Address: 123 Business Street, Bangalore</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Phone: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Hours: Mon-Sat 9AM-6PM</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Most Searched Keywords:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Electronics Store</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Mobile Repair</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Laptop Sales</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Score and Improvement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Profile Completeness Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-gray-900">{profileScore}%</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${profileScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your profile is {profileScore}% complete. Add more information to attract more customers!
              </p>
              <div className="flex items-center gap-2 text-sm text-amber-600 mb-4">
                <AlertCircle className="h-4 w-4" />
                <span>Missing: Business description, more photos, and service details</span>
              </div>
              <Button 
                onClick={() => setIsImprovementDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Improve Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviews Needing Attention */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Reviews Needing Attention ({reviewsNeedingAttention.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reviewsNeedingAttention.map((review) => (
              <ReviewCard
                key={review.id}
                id={review.id}
                author={review.author}
                rating={review.rating}
                content={review.content}
                date={review.date}
                replied={review.replied}
                onReply={handleReplyToReview}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Profile Improvement Dialog */}
      <ProfileImprovementDialog 
        isOpen={isImprovementDialogOpen}
        onOpenChange={setIsImprovementDialogOpen}
      />
    </div>
  );
};

export default GoogleBusinessInsights;
