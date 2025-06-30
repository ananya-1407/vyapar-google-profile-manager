
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Star,
  Search,
  CheckCircle
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface FeedbackItem {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  phone: string;
  email: string;
  created_at: string;
  status: string;
  responded: boolean;
  response_text?: string;
  source_ip: string;
}

interface FeedbackManagementProps {
  feedbackData: FeedbackItem[];
  feedbackFilter: string;
  setFeedbackFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onReplyToFeedback: (id: string) => void;
  onMarkResolved: (id: string) => void;
}

const FeedbackManagement = ({ 
  feedbackData, 
  feedbackFilter, 
  setFeedbackFilter, 
  searchTerm, 
  setSearchTerm, 
  onMarkResolved 
}: FeedbackManagementProps) => {
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
                         feedback.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search feedback by name, phone, email, or comment..." 
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
                    {feedback.status !== "resolved" && (
                      <Button
                        size="sm"
                        variant={feedback.status === "resolved" ? "default" : "outline"}
                        onClick={() => onMarkResolved(feedback.id)}
                        className={feedback.status === "resolved" ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                    )}
                    {feedback.status === "resolved" && (
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-green-600 hover:bg-green-700"
                        disabled
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
    </div>
  );
};

export default FeedbackManagement;
