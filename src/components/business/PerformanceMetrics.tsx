
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Phone, MapPin, Star, Search, MessageSquare } from "lucide-react";

const PerformanceMetrics = () => {
  const metrics = [
    { icon: <Eye className="h-4 w-4" />, label: "2,847 Profile Views", value: "👁️" },
    { icon: <Phone className="h-4 w-4" />, label: "156 Calls", value: "📞" },
    { icon: <Star className="h-4 w-4" />, label: "4.2★ Rating", value: "⭐" },
    { icon: <Search className="h-4 w-4" />, label: "890 Searches", value: "🔍" },
    { icon: <MapPin className="h-4 w-4" />, label: "89 Directions", value: "📍" },
    { icon: <MessageSquare className="h-4 w-4" />, label: "23 Reviews", value: "💬" },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          📈 This Month's Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg mb-1">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;
