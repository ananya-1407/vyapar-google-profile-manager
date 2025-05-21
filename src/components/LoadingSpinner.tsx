
import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const LoadingSpinner = ({ size = "medium", className = "" }: LoadingSpinnerProps) => {
  const sizeMap = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeMap[size]} border-4 border-gray-200 border-t-primary rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
