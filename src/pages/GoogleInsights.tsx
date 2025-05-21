
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Users, Search } from "lucide-react";
import StatCard from "@/components/StatCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data for charts
const performanceData = [
  { name: "Jan", views: 400, clicks: 240 },
  { name: "Feb", views: 300, clicks: 139 },
  { name: "Mar", views: 200, clicks: 980 },
  { name: "Apr", views: 278, clicks: 390 },
  { name: "May", views: 189, clicks: 480 },
  { name: "Jun", views: 239, clicks: 380 },
  { name: "Jul", views: 349, clicks: 430 },
];

const searchKeywordsData = [
  { name: "business software", value: 40 },
  { name: "accounting app", value: 30 },
  { name: "inventory management", value: 20 },
  { name: "billing software", value: 10 },
];

const COLORS = ["#0D4A7A", "#3182CE", "#63B3ED", "#90CDF4"];

const GoogleInsights = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("month");

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [businessId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              period === "week"
                ? "bg-primary text-white"
                : "bg-white text-vyapar-text-secondary hover:bg-gray-100"
            }`}
            onClick={() => setPeriod("week")}
          >
            Week
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              period === "month"
                ? "bg-primary text-white"
                : "bg-white text-vyapar-text-secondary hover:bg-gray-100"
            }`}
            onClick={() => setPeriod("month")}
          >
            Month
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              period === "year"
                ? "bg-primary text-white"
                : "bg-white text-vyapar-text-secondary hover:bg-gray-100"
            }`}
            onClick={() => setPeriod("year")}
          >
            Year
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Views"
          value="12,876"
          icon={<Users className="h-5 w-5" />}
          change={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Website Clicks"
          value="4,523"
          icon={<Search className="h-5 w-5" />}
          change={{ value: 8.3, isPositive: true }}
        />
        <StatCard
          title="Direction Requests"
          value="2,158"
          icon={<MapPin className="h-5 w-5" />}
          change={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          title="Average Rating"
          value="4.7"
          icon={<Star className="h-5 w-5" fill="#FBBF24" />}
          change={{ value: 0.3, isPositive: true }}
        />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#0D4A7A"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="clicks" stroke="#FBBF24" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Search Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={searchKeywordsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {searchKeywordsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: "Website", value: 400 },
                    { name: "Directions", value: 300 },
                    { name: "Phone", value: 200 },
                    { name: "Messages", value: 100 },
                  ]}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0D4A7A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Detailed Metrics</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="traffic">
            <div className="border-b px-6">
              <TabsList className="bg-transparent border-b-0">
                <TabsTrigger value="traffic" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Traffic
                </TabsTrigger>
                <TabsTrigger value="audience" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Audience
                </TabsTrigger>
                <TabsTrigger value="engagement" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">
                  Engagement
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="traffic" className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-medium text-vyapar-text-secondary mb-1">Direct Searches</h3>
                  <p className="text-2xl font-semibold text-vyapar-text">8,426</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded flex items-center">
                      +14.5%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-medium text-vyapar-text-secondary mb-1">Discovery Searches</h3>
                  <p className="text-2xl font-semibold text-vyapar-text">4,450</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded flex items-center">
                      +8.2%
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-medium text-vyapar-text-secondary mb-1">Branded Searches</h3>
                  <p className="text-2xl font-semibold text-vyapar-text">2,924</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded flex items-center">
                      -2.1%
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audience" className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-vyapar-text mb-4">Age Distribution</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-vyapar-text-secondary">18-24</span>
                        <span className="text-sm font-medium text-vyapar-text">12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-vyapar-text-secondary">25-34</span>
                        <span className="text-sm font-medium text-vyapar-text">38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "38%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-vyapar-text-secondary">35-44</span>
                        <span className="text-sm font-medium text-vyapar-text">26%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "26%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-vyapar-text-secondary">45-54</span>
                        <span className="text-sm font-medium text-vyapar-text">16%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "16%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-vyapar-text-secondary">55+</span>
                        <span className="text-sm font-medium text-vyapar-text">8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "8%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-vyapar-text mb-4">Gender Distribution</h3>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <span className="text-sm text-vyapar-text-secondary">Male</span>
                      <p className="text-xl font-semibold text-vyapar-text">62%</p>
                    </div>
                    <div className="flex-1 p-4 bg-pink-50 rounded-lg border border-pink-100">
                      <span className="text-sm text-vyapar-text-secondary">Female</span>
                      <p className="text-xl font-semibold text-vyapar-text">38%</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-vyapar-text mb-2">Post Engagement</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">Diwali Offer</span>
                        <span className="text-sm text-vyapar-text">458 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">New Product Launch</span>
                        <span className="text-sm text-vyapar-text">326 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">Customer Testimonial</span>
                        <span className="text-sm text-vyapar-text">214 views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-vyapar-text mb-2">Photo Views</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">Store Front</span>
                        <span className="text-sm text-vyapar-text">1,245 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">Product Display</span>
                        <span className="text-sm text-vyapar-text">867 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-vyapar-text-secondary">Team Photo</span>
                        <span className="text-sm text-vyapar-text">632 views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleInsights;
