
import React from "react";
import { MapPin, Star, Globe, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  isVerified,
  reviewCount = 0,
  websiteUrl,
  phoneNumber,
  onSelect 
}: BusinessProfileProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-sm transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
              {isVerified && (
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              )}
            </div>
            
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
              <span>{address}</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="font-medium text-green-700">{rating.toFixed(1)}</span>
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                {reviewCount > 0 && (
                  <span className="text-gray-500">({reviewCount} reviews)</span>
                )}
              </div>
              
              {websiteUrl && (
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    {websiteUrl.replace(/(^\w+:|^)\/\//, '')}
                  </a>
                </div>
              )}
              
              {phoneNumber && (
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{phoneNumber}</span>
                </div>
              )}
            </div>
          </div>
          
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-6"
            onClick={() => onSelect(id)}
          >
            Manage Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
