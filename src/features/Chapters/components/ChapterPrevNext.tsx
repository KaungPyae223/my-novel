import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ChapterPrevNext = ({
  prevChapter,
  nextChapter,
  novelID,
  chapter,
  totalChapters,
}: {
  prevChapter: string;
  nextChapter: string;
  novelID: string;
  chapter: number;
  totalChapters: number;
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      {prevChapter ? (
        <Link href={`/novel/${novelID}/chapter/${prevChapter}`} className="flex cursor-pointer text-sm font-medium border bg-white border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2">
          <ChevronLeft className="size-5" />
          <p>Previous Chapter</p>
        </Link>
      ) : <div className="flex text-sm font-medium border bg-white border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2">
        <ChevronLeft className="size-5 text-gray-500" />
        <p className="text-sm text-gray-500">Previous Chapter</p>
      </div>}
      <p className="text-sm text-gray-500">
        {" "}
        {chapter} / {totalChapters}
      </p>
      {nextChapter ? (
        <Link href={`/novel/${novelID}/chapter/${nextChapter}`} className="flex cursor-pointer text-sm font-medium border bg-white border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2">
          <p>Next Chapter</p>
          <ChevronRight className="size-5" />
        </Link>
      ) : <div className="flex text-sm font-medium border bg-white border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2">
        <ChevronRight className="size-5 text-gray-500" />
        <p className="text-sm text-gray-500">Next Chapter</p>
      </div>}
    </div>
  );
};

export default ChapterPrevNext;
