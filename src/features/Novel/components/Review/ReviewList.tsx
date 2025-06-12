import React from "react";
import ReviewCard from "./ReviewCard";
import { MessageCircle } from "lucide-react";

const ReviewList = () => {
  return (
    <div className="p-7 shadow border border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <MessageCircle className="size-6" />
        Reviews
      </div>
      <div className="mt-6 space-y-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

      </div>
    </div>
  );
};

export default ReviewList;
