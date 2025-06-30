
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Plus, MessageSquare } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface WhatsAppShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reviewLink: string;
}

const WhatsAppShareDialog = ({ open, onOpenChange, reviewLink }: WhatsAppShareDialogProps) => {
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [newContactName, setNewContactName] = useState("");
  const [newContactPhone, setNewContactPhone] = useState("");
  const [message, setMessage] = useState(
    `Hi! We'd love to hear about your experience with us. Please take a moment to share your feedback: ${reviewLink}`
  );

  // Mock contacts - in real app this would come from user's contacts
  const [availableContacts] = useState<Contact[]>([
    { id: "1", name: "John Doe", phone: "+91-9876543210" },
    { id: "2", name: "Jane Smith", phone: "+91-9876543211" },
    { id: "3", name: "Mike Johnson", phone: "+91-9876543212" },
    { id: "4", name: "Sarah Wilson", phone: "+91-9876543213" },
  ]);

  const addContact = () => {
    if (newContactName && newContactPhone) {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: newContactName,
        phone: newContactPhone,
      };
      setSelectedContacts([...selectedContacts, newContact]);
      setNewContactName("");
      setNewContactPhone("");
    }
  };

  const removeContact = (contactId: string) => {
    setSelectedContacts(selectedContacts.filter(contact => contact.id !== contactId));
  };

  const selectFromAvailable = (contact: Contact) => {
    if (!selectedContacts.find(c => c.id === contact.id)) {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const sendWhatsAppMessages = () => {
    selectedContacts.forEach(contact => {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            Share via WhatsApp
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Message Template */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1"
            />
          </div>

          {/* Selected Contacts */}
          {selectedContacts.length > 0 && (
            <div>
              <Label>Selected Contacts ({selectedContacts.length})</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedContacts.map(contact => (
                  <Badge key={contact.id} variant="secondary" className="flex items-center gap-1">
                    {contact.name}
                    <button
                      onClick={() => removeContact(contact.id)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Add New Contact */}
          <div className="border rounded-lg p-3 space-y-3">
            <Label className="text-sm font-medium">Add Contact</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                placeholder="Name"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
              />
              <Input
                placeholder="Phone"
                value={newContactPhone}
                onChange={(e) => setNewContactPhone(e.target.value)}
              />
            </div>
            <Button
              onClick={addContact}
              size="sm"
              variant="outline"
              className="w-full"
              disabled={!newContactName || !newContactPhone}
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Contact
            </Button>
          </div>

          {/* Quick Select from Available Contacts */}
          <div>
            <Label className="text-sm font-medium">Quick Select</Label>
            <div className="grid grid-cols-1 gap-1 mt-2 max-h-32 overflow-y-auto">
              {availableContacts.map(contact => (
                <button
                  key={contact.id}
                  onClick={() => selectFromAvailable(contact)}
                  className="text-left p-2 rounded border hover:bg-gray-50 text-sm"
                  disabled={selectedContacts.some(c => c.id === contact.id)}
                >
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-gray-500 text-xs">{contact.phone}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={sendWhatsAppMessages}
              disabled={selectedContacts.length === 0}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Send to {selectedContacts.length} contact{selectedContacts.length !== 1 ? 's' : ''}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppShareDialog;
