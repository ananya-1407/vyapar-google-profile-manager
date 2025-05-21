
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, change, className = "" }: StatCardProps) => {
  return (
    <Card className={`border border-gray-200 ${className}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-vyapar-text-secondary mb-1">{title}</p>
            <p className="text-2xl font-semibold text-vyapar-text">{value}</p>
            {change && (
              <div className="flex items-center mt-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded flex items-center ${
                    change.isPositive
                      ? "text-green-700 bg-green-50"
                      : "text-red-700 bg-red-50"
                  }`}
                >
                  {change.isPositive ? "+" : ""}
                  {change.value}%
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 ml-1 ${change.isPositive ? "rotate-0" : "rotate-180"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-xs text-vyapar-text-secondary ml-2">vs last month</span>
              </div>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-full text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
