import { ArrowUpRight, Eye, Heart } from "lucide-react";
import React from "react";

const ChapterCardView = ({ chapter:{love_count,view_count,share_count  } }: { chapter: {love_count:number,view_count:number,share_count:number} }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-3 text-gray-500 text-sm">
      <div className="flex flex-row items-center gap-1.5">
        {love_count}
        <Heart className="size-4" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center gap-1.5">
          {view_count}
          <Eye className="size-4" />
        </div>
        <div className="flex flex-row items-center gap-1.5">
          {share_count}
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default ChapterCardView;
