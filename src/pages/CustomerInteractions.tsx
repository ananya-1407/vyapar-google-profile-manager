
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/ReviewCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import { MessageSquare, Star, Lightbulb, PenLine } from "lucide-react";
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

// Mock review data
const mockReviews = [
  {
    id: "r1",
    author: "Priya Sharma",
    rating: 5,
    content: "Great service! The staff was very helpful and the process was quick and efficient. I would definitely recommend this business to others.",
    date: "Oct 15, 2023",
    replied: true,
  },
  {
    id: "r2",
    author: "Rahul Verma",
    rating: 4,
    content: "Very good experience overall. The only reason I'm not giving 5 stars is because I had to wait a bit longer than expected.",
    date: "Sep 28, 2023",
    replied: false,
  },
  {
    id: "r3",
    author: "Ananya Patel",
    rating: 5,
    content: "Excellent customer service! They went above and beyond to help me with my queries. Highly recommend!",
    date: "Sep 10, 2023",
    replied: true,
  },
  {
    id: "r4",
    author: "Vikram Singh",
    rating: 3,
    content: "Decent experience but there's room for improvement in terms of response time and product variety.",
    date: "Aug 22, 2023",
    replied: false,
  },
];

// Mock Q&A data
const mockQA = [
  {
    id: "q1",
    question: "Do you offer home delivery services?",
    author: "Mohit Gupta",
    date: "Oct 10, 2023",
    answered: true,
    answer: "Yes, we offer home delivery services for orders above Rs. 500 within a 10km radius.",
  },
  {
    id: "q2",
    question: "What are your working hours on weekends?",
    author: "Neha Reddy",
    date: "Oct 5, 2023",
    answered: true,
    answer: "We are open from 10 AM to 4 PM on Saturdays and closed on Sundays.",
  },
  {
    id: "q3",
    question: "Do you accept credit cards for payment?",
    author: "Ajay Kumar",
    date: "Sep 20, 2023",
    answered: false,
  },
];

const CustomerInteractions = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<typeof mockReviews>([]);
  const [qa, setQa] = useState<typeof mockQA>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setReviews(mockReviews);
      setQa(mockQA);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [businessId]);

  const handleReplyToReview = (reviewId: string) => {
    window.alert(`Reply to review ${reviewId} would open a dialog in a real app`);
  };

  const handleAnswerQuestion = (questionId: string) => {
    window.alert(`Answer question ${questionId} would open a dialog in a real app`);
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Customer Interaction Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-secondary" fill="#FBBF24" />
                <h3 className="font-medium text-vyapar-text">Average Rating</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-vyapar-text">4.3</span>
                <span className="text-sm text-vyapar-text-secondary ml-2">/ 5</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-vyapar-text">Total Reviews</h3>
              </div>
              <div className="text-3xl font-bold text-vyapar-text">{reviews.length}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="h-5 w-5 text-amber-600" />
                <h3 className="font-medium text-vyapar-text">Response Rate</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-vyapar-text">
                  {Math.round((reviews.filter(r => r.replied).length / reviews.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
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
            open={isFaqExpanded} 
            onOpenChange={setIsFaqExpanded}
            className="border rounded-md"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-gray-50">
              <h3 className="text-sm font-medium">Do you offer free shipping?</h3>
              <div className="text-primary">
                {isFaqExpanded ? (
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
        <CardContent className="p-0">
          <Tabs defaultValue="reviews" className="w-full">
            <div className="border-b px-6">
              <TabsList className="bg-transparent border-b-0">
                <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Reviews
                </TabsTrigger>
                <TabsTrigger value="questions" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Questions & Answers
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="reviews" className="p-6">
              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      {...review}
                      onReply={handleReplyToReview}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No reviews yet"
                  description="When customers leave reviews, they'll appear here."
                  icon={<Star className="h-12 w-12" />}
                />
              )}
            </TabsContent>

            <TabsContent value="questions" className="p-6">
              {qa.length > 0 ? (
                <div className="space-y-4">
                  {qa.map((item) => (
                    <Card key={item.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="mb-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-vyapar-text">Q: {item.question}</h4>
                            {!item.answered && (
                              <span className="bg-amber-50 text-amber-700 text-xs font-medium px-2 py-1 rounded">
                                Needs Answer
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-vyapar-text-secondary">
                              Asked by {item.author} • {item.date}
                            </span>
                          </div>
                        </div>

                        {item.answered ? (
                          <div className="pl-4 border-l-2 border-primary mt-3">
                            <h5 className="text-sm font-medium text-primary mb-1">Your Answer:</h5>
                            <p className="text-sm text-vyapar-text-secondary">{item.answer}</p>
                          </div>
                        ) : (
                          <button 
                            className="text-primary hover:text-primary/80 text-sm font-medium mt-2 flex items-center"
                            onClick={() => handleAnswerQuestion(item.id)}
                          >
                            Answer this question
                          </button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No questions asked yet"
                  description="When customers ask questions, they'll appear here for you to answer."
                  icon={<MessageSquare className="h-12 w-12" />}
                />
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerInteractions;
