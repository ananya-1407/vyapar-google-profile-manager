
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface WebViewDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  url: string;
}

const WebViewDialog = ({ isOpen, onOpenChange, title, url }: WebViewDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full flex-1">
          <iframe 
            src={url} 
            className="w-full h-[calc(80vh-60px)]" 
            title={title}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WebViewDialog;
