
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Download, 
  Share, 
  Printer, 
  MessageSquare,
  Star
} from "lucide-react";

interface FeedbackItem {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  status: string;
  responded: boolean;
}

interface QuickActionsProps {
  feedbackData: FeedbackItem[];
  onDownloadQR: () => void;
}

const QuickActions = ({ feedbackData, onDownloadQR }: QuickActionsProps) => {
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Your Smart Review QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-200 text-center">
            {/* QR Code Preview - using CSS to create a QR-like pattern */}
            <div className="mx-auto mb-4 w-32 h-32 bg-white border-2 border-gray-800 rounded-lg p-2">
              <div className="w-full h-full bg-black rounded" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, black 2px, black 4px)
                `,
                backgroundSize: '8px 8px'
              }}>
                <div className="w-6 h-6 bg-black rounded-sm absolute top-2 left-2"></div>
                <div className="w-6 h-6 bg-black rounded-sm absolute top-2 right-2"></div>
                <div className="w-6 h-6 bg-black rounded-sm absolute bottom-2 left-2"></div>
              </div>
            </div>
            <p className="text-sm font-medium mb-2">Rate your experience with us!</p>
            <p className="text-xs text-gray-500 mb-4">https://vyapar.in/review/abc123</p>
            <div className="flex gap-2 justify-center">
              <Button size="sm" onClick={onDownloadQR}>
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
  );
};

export default QuickActions;
