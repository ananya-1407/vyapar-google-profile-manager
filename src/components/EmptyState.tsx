
import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
  icon?: React.ReactNode;
}

const EmptyState = ({
  title,
  description,
  ctaText,
  ctaAction,
  icon,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && <div className="mb-4 text-vyapar-text-secondary">{icon}</div>}
      <h3 className="text-lg font-medium text-vyapar-text mb-2">{title}</h3>
      <p className="text-vyapar-text-secondary mb-6 max-w-md">{description}</p>
      {ctaText && ctaAction && (
        <Button onClick={ctaAction} className="bg-primary hover:bg-primary/90 text-white">
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
