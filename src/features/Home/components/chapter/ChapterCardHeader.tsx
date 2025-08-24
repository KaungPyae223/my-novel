import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const ChapterCardHeader = ({
  user,
  created_at,
}: {
  user: any;
  created_at: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={
          user.image ||
          `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
            user.full_name
          )}`
        }
        alt={user.full_name}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div>
        <p className="font-medium font-poppins">{user.full_name}</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
          <Clock className="size-3" />

          <p>{created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterCardHeader;
