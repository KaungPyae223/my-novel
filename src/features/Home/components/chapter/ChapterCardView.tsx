import { ArrowUpRight, Eye, Heart } from "lucide-react";
import React from "react";

const ChapterCardView = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-3 text-gray-500 text-sm">
      <div className="flex flex-row items-center gap-1.5">
        235
        <Heart className="size-4" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center gap-1.5">
          550
          <Eye className="size-4" />
        </div>
        <div className="flex flex-row items-center gap-1.5">
          235
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default ChapterCardView;
