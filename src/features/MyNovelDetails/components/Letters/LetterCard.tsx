import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { avatarFallback } from "@/utils/avatarFallBack";
import { Ban, Calendar, MessageCircle, Send, Trash } from "lucide-react";
import React from "react";

const LetterCard = () => {
  return (
    <div className="p-4 border border-gray-300 bg-blue-50/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
              {avatarFallback("HEllo World")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium font-poppins">HEllo World</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="size-3.5" />
              <p>2025-10-22</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-white bg-gray-800 px-3 py-0.5 rounded-full">
          New
        </div>
      </div>
      <p className="text-gray-800 my-6 text-sm bg-blue-100/50 p-4 rounded-md border border-blue-200">
        Your story has inspired me to start writing my own! Thank you for
        creating such an amazing world.
      </p>
      <div>
        <Label className="text-sm font-medium text-gray-600 mb-1">
          Reply to this fan letter
        </Label>
        <Textarea placeholder="Write your reply..." />
      </div>
      <hr className="my-3 border-gray-200" />
      <div className="flex items-center gap-3">
        <Button variant="outline" className="flex items-center gap-3">
          <Ban className="size-3.5" /> Ban User
        </Button>
        <Button variant="destructive" className="flex items-center gap-3">
          <Trash className="size-3.5" /> Delete
        </Button>
        <Button variant="outline" className="flex items-center ms-auto gap-3">
          <MessageCircle className="size-3.5" /> Message
        </Button>
        <Button className="flex items-center gap-3">
          <Send className="size-3.5" /> Reply
        </Button>
      </div>
    </div>
  );
};

export default LetterCard;
