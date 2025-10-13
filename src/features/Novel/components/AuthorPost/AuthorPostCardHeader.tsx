import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock } from "lucide-react";
import React from "react";
import { avatarFallback } from "@/utils/avatarFallBack";

const AuthorPostCardHeader = ({ post }: { post: any }) => {
  return (
    <div className="flex bg-white items-center gap-3">
      <Avatar className="w-12 h-12">
        <AvatarImage src={post.user.profile_image} alt={post.user.full_name} />
        <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
          {avatarFallback(post.user.full_name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium font-poppins">{post.user.full_name}</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
          <Clock className="size-3" />

          <p>{post.created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorPostCardHeader;
