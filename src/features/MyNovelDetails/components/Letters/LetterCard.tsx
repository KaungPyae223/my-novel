import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { avatarFallback } from "@/utils/avatarFallBack";
import { formatDate } from "@/utils/formatDate";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Ban, Calendar, MessageCircle, Send, Trash } from "lucide-react";
import React from "react";

const LetterCard = ({ letter }: { letter: any }) => {
  return (
    <div className="p-4 border border-gray-300 bg-blue-50/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage
              className="w-12 h-12 object-cover rounded-full"
              src={letter.user_image}
              alt={letter.user_name}
            />
            <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
              {avatarFallback(letter.user_name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium font-poppins">{letter.user_name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="size-3.5" />
              <p>{formatDate(letter.created_at)}</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-white bg-gray-800 px-3 py-0.5 rounded-full">
          New
        </div>
      </div>
      <p className="text-gray-800 my-6 text-sm bg-blue-100/50 p-4 rounded-md border border-blue-200">
        {letter.body}
      </p>

      {letter.reply ? (
        <div className="bg-gray-100 border-l-4 border-gray-400 rounded p-3">
          <p className="text-sm font-semibold text-gray-700 mb-1 flex gap-1 items-center">
            <MessageCircle className="size-4 text-gray-600" />
            Author&apos;s Reply:
          </p>
          <p className="text-sm mt-2 text-gray-700">{letter.reply}</p>
        </div>
      ) : (
        <div>
          <Label className="text-sm font-medium text-gray-600 mb-1">
            Reply to this fan letter
          </Label>
          <Textarea placeholder="Write your reply..." />
        </div>
      )}

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
        {!letter.reply && (
          <Button className="flex items-center gap-3">
            <Send className="size-3.5" /> Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export default LetterCard;
