import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const NovelCardHeader = ({ novel:{author,created_at} }: { novel: {author:{profile_image:string,full_name:string},created_at:string} }) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={
          author?.profile_image ||
          `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
            author?.full_name
          )}`
        }
        alt={author?.full_name}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
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
