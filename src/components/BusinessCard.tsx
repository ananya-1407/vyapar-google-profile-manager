
import React from "react";
import { MapPin, Star, Globe, Phone } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface BusinessProfileProps {
  id: string;
  name: string;
  address: string;
  rating: number;
  imageUrl: string;
  isVerified: boolean;
  reviewCount?: number;
  websiteUrl?: string;
  phoneNumber?: string;
  onSelect: (id: string) => void;
}

const BusinessCard = ({ 
  id, 
  name, 
  address, 
  rating, 
  imageUrl, 
  isVerified,
  reviewCount = 0,
  websiteUrl,
  phoneNumber,
  onSelect 
}: BusinessProfileProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow animate-fade-in">
      <div className="md:flex">
        <div className="md:w-1/3 h-56 md:h-auto overflow-hidden relative">
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
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-medium text-vyapar-text mb-2">{name}</h3>
          
          <div className="flex items-center text-sm text-vyapar-text-secondary mb-3">
            <MapPin className="h-4 w-4 mr-1 text-vyapar-text-secondary flex-shrink-0" />
            <span className="line-clamp-1">{address}</span>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-green-50 px-2 py-1 rounded mr-2">
              <span className="font-medium text-green-700 mr-1">{rating.toFixed(1)}</span>
              <Star className="h-4 w-4 text-secondary" fill="#FBBF24" />
            </div>
            {reviewCount > 0 && (
              <span className="text-sm text-vyapar-text-secondary">{reviewCount} reviews</span>
            )}
          </div>
          
          <div className="space-y-2 mb-4">
            {websiteUrl && (
              <div className="flex items-center text-sm">
                <Globe className="h-4 w-4 mr-2 text-vyapar-text-secondary" />
                <a 
                  href={websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline truncate"
                >
                  {websiteUrl.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </div>
            )}
            
            {phoneNumber && (
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-vyapar-text-secondary" />
                <span>{phoneNumber}</span>
              </div>
            )}
          </div>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white" 
            onClick={() => onSelect(id)}
          >
            Manage Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BusinessCard;
