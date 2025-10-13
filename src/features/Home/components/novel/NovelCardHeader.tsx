import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import { avatarFallback } from "@/utils/avatarFallBack";

const NovelCardHeader = ({
  novel: { author, created_at },
}: {
  novel: {
    author: { profile_image: string; full_name: string };
    created_at: string;
  };
}) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-12 h-12">
        {author?.profile_image ? (
          <AvatarImage
            src={author.profile_image}
            alt={author.full_name || "User"}
            className="w-12 h-12 object-cover rounded-full"
          />
        ) : (
          <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
            {author?.full_name ? avatarFallback(author.full_name) : "?"}
          </AvatarFallback>
        )}
      </Avatar>

      
      <div>
        <p className="font-medium font-poppins">{author?.full_name}</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
          <Clock className="size-3" /> <p>{created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default NovelCardHeader;
