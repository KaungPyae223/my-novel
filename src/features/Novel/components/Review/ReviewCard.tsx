import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarFallback } from "@/utils/avatarFallBack";
import { Avatar } from "@radix-ui/react-avatar";
import { Clock } from "lucide-react";
import React from "react";

interface ReviewCardProps {
  review: {
    review: string;
    created_at: string;
    user: {
      name: string;
      avatar: string;
    };
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex flex-row gap-4 pb-6 border-b border-gray-200 last:border-b-0">
      <Avatar className="w-12 h-12">
        <AvatarImage
          src={review.user.avatar}
          alt={review.user.name}
          className="w-12 h-12 object-cover rounded-full"
        />
        <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
          {avatarFallback(review.user.name)}
        </AvatarFallback>
      </Avatar>

      <div>
        <p className="font-medium font-poppins">{review.user.full_name}</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
          <Clock className="size-3" />

          <p>{review.created_at}</p>
        </div>
        <p className="mt-3 text-gray-700 text-justify">{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
