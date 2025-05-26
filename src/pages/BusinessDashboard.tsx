
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/StatCard";
import { 
  Store, 
  Users, 
  TrendingUp, 
  Calendar,
  Bell,
  Settings,
  MapPin,
  Clock,
  Phone,
  Star,
  MessageSquare,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const BusinessDashboard = () => {
  // Mock data for dashboard metrics
  const dashboardStats = [
    {
      title: "Total Customers",
      value: "1,247",
      icon: <Users className="h-5 w-5" />,
      change: { value: 12.5, isPositive: true }
    },
    {
      title: "Monthly Revenue",
      value: "₹85,420",
      icon: <TrendingUp className="h-5 w-5" />,
      change: { value: 8.2, isPositive: true }
    },
    {
      title: "Profile Views",
      value: "2,847",
      icon: <Store className="h-5 w-5" />,
      change: { value: 15.2, isPositive: true }
    }
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "review",
      message: "New 5-star review received",
      time: "2 hours ago",
      icon: <Star className="h-4 w-4 text-yellow-500" />
    },
    {
      id: 2,
      type: "customer",
      message: "New customer inquiry",
      time: "4 hours ago",
      icon: <MessageSquare className="h-4 w-4 text-blue-500" />
    },
    {
      id: 3,
      type: "profile",
      message: "Profile information updated",
      time: "1 day ago",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    }
  ];

  // Mock data for pending tasks
  const pendingTasks = [
    {
      id: 1,
      task: "Respond to 3 customer reviews",
      priority: "high",
      dueDate: "Today"
    },
    {
      id: 2,
      task: "Update business hours for holidays",
      priority: "medium",
      dueDate: "This week"
    },
    {
      id: 3,
      task: "Add new product photos",
      priority: "low",
      dueDate: "Next week"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your business performance and management</p>
        </div>
        <Button className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Manage Business
        </Button>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Business Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5" />
              Business Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Profile Completeness</span>
              <Badge variant="secondary">68%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Verification Status</span>
              <Badge className="bg-green-100 text-green-800">Verified</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Business Hours</span>
              <Badge className="bg-blue-100 text-blue-800">Open Now</Badge>
            </div>
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                View Full Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Update Hours
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Edit Location
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Update Contact
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Manage Reviews
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                  {activity.icon}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-3">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Pending Tasks ({pendingTasks.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-2 rounded-lg border">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-3">
              View All Tasks
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Business Information Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Business Information Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Contact Information</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  +91 98765 43210
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  123 Business Street, Bangalore
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Operating Hours</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  Mon-Fri: 9:00 AM - 6:00 PM
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  Sat: 10:00 AM - 4:00 PM
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Performance</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Average Rating: 4.2/5</div>
                <div>Total Reviews: 127</div>
                <div>Monthly Views: 2,847</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessDashboard;
