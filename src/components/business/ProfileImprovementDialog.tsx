
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface ProfileImprovementDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileImprovementDialog = ({ isOpen, onOpenChange }: ProfileImprovementDialogProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessDescription: "",
    serviceDetails: "",
    additionalPhotos: ""
  });

  const steps = [
    {
      title: "Add Business Description",
      subtitle: "Help customers understand what you do",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your business, services, and what makes you unique..."
              value={formData.businessDescription}
              onChange={(e) => setFormData({...formData, businessDescription: e.target.value})}
              className="mt-2"
              rows={4}
            />
          </div>
          <p className="text-sm text-gray-600">
            A good description helps customers find and choose your business.
          </p>
        </div>
      )
    },
    {
      title: "Add Service Details",
      subtitle: "Specify what services you offer",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="services">Services Offered</Label>
            <Textarea
              id="services"
              placeholder="List your main services (e.g., Mobile repair, Laptop sales, Screen replacement...)"
              value={formData.serviceDetails}
              onChange={(e) => setFormData({...formData, serviceDetails: e.target.value})}
              className="mt-2"
              rows={3}
            />
          </div>
          <p className="text-sm text-gray-600">
            Clear service listings help customers understand exactly what you provide.
          </p>
        </div>
      )
    },
    {
      title: "Add More Photos",
      subtitle: "Showcase your business with quality images",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="photos">Photo Upload</Label>
            <Input
              id="photos"
              type="file"
              multiple
              accept="image/*"
              className="mt-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
            <div>
              <p className="font-medium">Recommended photos:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Store front/exterior</li>
                <li>Interior shots</li>
                <li>Products/services</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Tips:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Use good lighting</li>
                <li>Show your best work</li>
                <li>Include team photos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete the flow
      console.log("Profile improvement completed:", formData);
      onOpenChange(false);
      setCurrentStep(0);
      setFormData({
        businessDescription: "",
        serviceDetails: "",
        additionalPhotos: ""
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.businessDescription.trim().length > 20;
      case 1:
        return formData.serviceDetails.trim().length > 10;
      case 2:
        return true; // Photo upload is optional
      default:
        return true;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Improve Your Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step content */}
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
            <p className="text-sm text-gray-600">{steps[currentStep].subtitle}</p>
          </div>

          <div className="space-y-4">
            {steps[currentStep].content}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between gap-3">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImprovementDialog;
