import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuthorPostCardHeader = ({ post }: { post: any }) => {
  return (
    <div className="flex bg-white items-center gap-3">
      <Image
        src={
          post.user.profile_image ||
          `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
            post.user.full_name
          )}`
        }
        alt={post.user.full_name}
        width={50}
        height={50}
        className="w-12 h-12 object-cover rounded-full"
      />
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
