
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    // Simulate Google login process
    setTimeout(() => {
      // Set login state in localStorage
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      // Navigate directly to the default business
      navigate("/business/1/details");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md border border-gray-200 shadow-md">
          <CardHeader className="text-center py-6">
            <div className="mb-2 flex justify-center">
              <div className="bg-primary p-3 rounded-full">
                <div className="text-white font-bold text-2xl">V</div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-vyapar-text">
              Google Business Manager
            </h1>
            <p className="text-vyapar-text-secondary mt-2">
              Connect your Google Business Profile to manage your business presence on Google Search and Maps
            </p>
          </CardHeader>
          <CardContent className="px-6 pb-8 space-y-6">
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
              <h3 className="text-sm font-medium text-primary mb-2">Why Connect?</h3>
              <ul className="text-sm text-vyapar-text-secondary space-y-2">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Update business information in one place
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Respond to customer reviews
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Track business performance insights
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <GoogleLoginButton onClick={handleLogin} loading={loading} />
              <p className="mt-4 text-xs text-vyapar-text-secondary text-center">
                By connecting, you agree to Google's Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="py-4 px-6 text-center text-xs text-vyapar-text-secondary border-t border-gray-200">
        &copy; 2023 Vyapar. Google Business Profile is a trademark of Google LLC.
      </footer>
    </div>
  );
};

export default GoogleLogin;
