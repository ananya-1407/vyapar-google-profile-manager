
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const QuickWins = () => {
  const quickWins = [
    "Add 6 photos",
    "Update hours",
    "Reply to reviews"
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Zap className="h-5 w-5 text-yellow-500" />
          Quick Wins
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {quickWins.map((win, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-green-600">+</span>
            <span className="text-sm">{win}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickWins;
