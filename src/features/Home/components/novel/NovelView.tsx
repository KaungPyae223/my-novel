import { ArrowUpRight, Eye, Heart } from "lucide-react";
import React from "react";

const NovelView = ({ novel:{love_count,views_count,total_chapters} }: { novel: {love_count:number,views_count:number,total_chapters:number} }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-3 text-gray-500 text-sm">
      <div className="flex flex-row items-center gap-1.5">
        {love_count}
        <Heart className="size-4" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center gap-1.5">
          {views_count}
          <Eye className="size-4" />
        </div>
        <div className="flex flex-row items-center gap-1.5">
          {total_chapters}
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default NovelView;
