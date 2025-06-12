import { Heart, Share2 } from "lucide-react";
import React from "react";

const NovelLoveShare = () => {
  return (
    <div className="grid grid-cols-2 text-sm  gap-3">
      <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
        <Heart className="size-4" />
        <p>Love</p>
      </div>
      <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
        <Share2 className="size-4" />

        <p>Share</p>
      </div>
    </div>
  );
};

export default NovelLoveShare;
