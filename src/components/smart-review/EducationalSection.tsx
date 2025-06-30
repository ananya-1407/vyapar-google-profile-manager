
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  QrCode, 
  Lightbulb,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";

const EducationalSection = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Lightbulb className="h-5 w-5" />
          How Smart Review Filter Works
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-blue-700 text-sm leading-relaxed">
          Smart Review Filter helps you protect your Google Business rating while capturing valuable customer feedback. 
          Here's how it works:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-blue-100">
            <div className="bg-blue-100 p-2 rounded-full">
              <QrCode className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">1. Customer Scans QR</h4>
              <p className="text-xs text-gray-600 mt-1">
                Place your QR code at checkout, tables, or receipts for easy access
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-blue-100">
            <div className="bg-green-100 p-2 rounded-full">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">2. Smart Filtering</h4>
              <p className="text-xs text-gray-600 mt-1">
                4-5 star reviews go to Google. Lower ratings are captured privately
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-blue-100">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">3. You Respond</h4>
              <p className="text-xs text-gray-600 mt-1">
                Address concerns privately and turn unhappy customers into fans
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg border border-blue-100">
          <h4 className="font-medium text-gray-900 text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            Benefits for Your Business
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Protect your Google Business rating from negative reviews</li>
            <li>• Get more positive reviews on Google to attract new customers</li>
            <li>• Address customer concerns before they become public complaints</li>
            <li>• Build stronger customer relationships through direct communication</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationalSection;
