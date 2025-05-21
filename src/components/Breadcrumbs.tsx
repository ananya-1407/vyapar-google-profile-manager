
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center text-sm py-2 overflow-x-auto whitespace-nowrap">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-2 text-vyapar-text-secondary flex-shrink-0" />
          )}
          {index === items.length - 1 ? (
            <span className="font-medium text-vyapar-text">{item.label}</span>
          ) : (
            <Link
              to={item.path}
              className="text-vyapar-text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
