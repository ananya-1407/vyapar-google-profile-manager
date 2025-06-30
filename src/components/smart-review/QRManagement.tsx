
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  QrCode, 
  Download, 
  Share
} from "lucide-react";

interface QRCustomization {
  primaryColor: string;
  secondaryColor: string;
  logoEnabled: boolean;
  borderStyle: string;
  callToAction: string;
}

interface QRManagementProps {
  qrCustomization: QRCustomization;
  setQrCustomization: (customization: QRCustomization) => void;
  onDownloadQR: () => void;
}

const QRManagement = ({ qrCustomization, setQrCustomization, onDownloadQR }: QRManagementProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>QR Customization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <Input
              id="primaryColor"
              type="color"
              value={qrCustomization.primaryColor}
              onChange={(e) => setQrCustomization({...qrCustomization, primaryColor: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="callToAction">Call to Action Text</Label>
            <Textarea
              id="callToAction"
              value={qrCustomization.callToAction}
              onChange={(e) => setQrCustomization({...qrCustomization, callToAction: e.target.value})}
              rows={2}
            />
          </div>

          <Button className="w-full">Update QR Code</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>QR Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <QrCode className="h-32 w-32 mx-auto mb-4 text-gray-400" />
            <p className="text-sm font-medium mb-2">{qrCustomization.callToAction}</p>
            <p className="text-xs text-gray-500">https://vyapar.in/review/abc123</p>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm" className="flex-1" onClick={onDownloadQR}>
              <Download className="h-3 w-3 mr-1" />
              Download
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Share className="h-3 w-3 mr-1" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRManagement;
