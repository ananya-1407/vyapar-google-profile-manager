
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ReviewCardProps {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  replied: boolean;
  onReply?: (id: string) => void;
}

const ReviewCard = ({
  id,
  author,
  rating,
  content,
  date,
  replied,
  onReply,
}: ReviewCardProps) => {
  // Generate array for stars based on rating
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${index < rating ? "text-secondary" : "text-gray-300"}`}
      fill={index < rating ? "#FBBF24" : "none"}
    />
  ));

  return (
    <Card className="border border-gray-200 mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-vyapar-text">{author}</h4>
            <div className="flex items-center mt-1">
              <div className="flex mr-2">{stars}</div>
              <span className="text-xs text-vyapar-text-secondary">{date}</span>
            </div>
          </div>
          {replied && (
            <div className="bg-green-50 px-2 py-1 rounded text-xs font-medium text-green-700">
              Replied
            </div>
          )}
        </div>
        <p className="text-vyapar-text-secondary text-sm mt-3">{content}</p>
      </CardContent>
      {onReply && !replied && (
        <CardFooter className="p-4 pt-0">
          <Button
            variant="outline"
            className="text-primary border-primary hover:bg-primary/5 w-full"
            onClick={() => onReply(id)}
          >
            Reply to Review
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ReviewCard;
