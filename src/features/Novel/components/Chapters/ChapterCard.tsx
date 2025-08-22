import { BookOpenCheck, ChevronRight, Clock, Dot, Eye } from "lucide-react";
import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const ChapterCard = ({
  chapterNumber,
  data,
}: {
  chapterNumber: number;
  data: any;
}) => {
  return (
    <Link
      href={`/novel/3/chapter/1`}
      className={`p-4 group ${
        data.view_at ? "bg-green-100" : "bg-gray-50"
      }  hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6 ${
        data.view_at ? "" : ""
      }`}
    >
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {chapterNumber}
      </div>
      <div>
        <p className="font-medium text-lg group-hover:text-blue-600">
          {data.title}
        </p>
        <div className="flex flex-row items-center text-sm mt-1 text-gray-500 gap-2">
          <div className="flex flex-row items-center gap-1.5">
            <Clock className="size-3.5" />
            {formatDate(data.created_at)}
          </div>
          <Dot className="size-5" />
          <div className="flex flex-row items-center gap-1.5   ">
            <Eye className="size-3.5" />
            {data.view_count}
          </div>
          {data.view_at && (
            <>
              <Dot className="size-5" />
              <div className="flex flex-row items-center gap-1.5">
                <BookOpenCheck className="size-3.5" />
                {formatDate(data.view_at)}
              </div>
            </>
          )}
        </div>
      </div>
      <ChevronRight className="size-6 ms-auto text-gray-500" />
    </Link>
  );
};

export default ChapterCard;
