
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/ReviewCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import { MessageSquare, Star } from "lucide-react";

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

  const handleGenerateAutoReply = () => {
    window.alert("This would generate AI-powered responses in a real app");
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
                <TabsTrigger value="auto-reply" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Auto-Generated Replies
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

            <TabsContent value="auto-reply" className="p-6">
              <Card className="border border-gray-200 bg-gray-50">
                <CardContent className="p-4">
                  <div className="mb-4">
                    <h3 className="font-medium text-vyapar-text mb-2">AI-Powered Response Generator</h3>
                    <p className="text-sm text-vyapar-text-secondary">
                      Our AI can generate personalized responses to customer reviews and questions based on your business information and past interactions. This helps maintain a consistent tone and ensures timely responses.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                    <h4 className="text-sm font-medium text-vyapar-text mb-2">Benefits of Auto-Generated Responses:</h4>
                    <ul className="text-sm text-vyapar-text-secondary space-y-1">
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Save time responding to common questions
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Maintain consistent brand voice
                      </li>
                      <li className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Improve response rate and customer satisfaction
                      </li>
                    </ul>
                  </div>
                  <button 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded font-medium"
                    onClick={handleGenerateAutoReply}
                  >
                    Generate AI Responses
                  </button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerInteractions;
