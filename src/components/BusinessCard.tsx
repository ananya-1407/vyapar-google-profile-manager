
import React from "react";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface BusinessProfileProps {
  id: string;
  name: string;
  address: string;
  rating: number;
  imageUrl: string;
  isVerified: boolean;
  onSelect: (id: string) => void;
}

const BusinessCard = ({ 
  id, 
  name, 
  address, 
  rating, 
  imageUrl, 
  isVerified,
  onSelect 
}: BusinessProfileProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow animate-fade-in">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3'} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isVerified && (
          <div className="absolute top-2 right-2 bg-secondary text-vyapar-text text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-vyapar-text mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center text-sm text-vyapar-text-secondary mb-2">
          <MapPin className="h-4 w-4 mr-1 text-vyapar-text-secondary" />
          <span className="line-clamp-1">{address}</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <span className="font-medium text-green-700 mr-1">{rating.toFixed(1)}</span>
            <Star className="h-4 w-4 text-secondary" fill="#FBBF24" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white" 
          onClick={() => onSelect(id)}
        >
          Manage Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
