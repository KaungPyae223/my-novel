import { ChevronRight, Clock } from "lucide-react";
import React from "react";
import Link from "next/link";

const ChapterCard = ({chapterNumber}: {chapterNumber: number}) => {
  return (
    <Link href={`/novel/3/chapter/1`} className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6">
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {chapterNumber}
      </div>
      <div>
        <p className="font-medium text-lg group-hover:text-blue-600">The Discovery</p>
        <div className="flex flex-row items-center text-sm mt-1 text-gray-500 gap-1">
          <Clock className="size-3.5" />
          23 June 2024
        </div>
      </div>
      <ChevronRight className="size-6 ms-auto text-gray-500" />
    </Link>
  );
};

export default ChapterCard;
