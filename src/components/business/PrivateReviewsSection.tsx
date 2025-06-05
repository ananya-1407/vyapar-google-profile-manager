
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, Reply } from "lucide-react";

const PrivateReviewsSection = () => {
  // Mock private reviews data
  const privateReviews = [
    {
      id: "pr1",
      customerName: "Anonymous Customer",
      rating: 3,
      comment: "Service was okay but could be improved. Wait time was longer than expected.",
      date: "2 hours ago",
      responded: false
    },
    {
      id: "pr2", 
      customerName: "Anonymous Customer",
      rating: 2,
      comment: "Product quality didn't meet expectations. Would appreciate better customer service.",
      date: "1 day ago",
      responded: true
    },
    {
      id: "pr3",
      customerName: "Anonymous Customer", 
      rating: 4,
      comment: "Good experience overall, just minor issues with delivery timing.",
      date: "3 days ago",
      responded: false
    }
  ];

  const handleReply = (reviewId: string) => {
    console.log(`Reply to review ${reviewId}`);
    // In real app, this would open a reply dialog
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

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          📝 Private Reviews
        </CardTitle>
        <p className="text-sm text-gray-600">
          Reviews from your Magical Link that need attention
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {privateReviews.length > 0 ? (
          <div className="space-y-3">
            {privateReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-3 bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{review.customerName}</span>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                
                <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {review.responded ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        ✓ Responded
                      </span>
                    ) : (
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                        Needs Response
                      </span>
                    )}
                  </div>
                  
                  {!review.responded && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleReply(review.id)}
                      className="flex items-center gap-1"
                    >
                      <Reply className="h-3 w-3" />
                      Reply
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm">No private reviews yet</p>
            <p className="text-xs">Share your Magical QR to start collecting feedback</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrivateReviewsSection;
