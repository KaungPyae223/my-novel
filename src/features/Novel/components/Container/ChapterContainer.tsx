import React from "react";
import ChapterCard from "../Chapters/ChapterCard";
import { BookOpen } from "lucide-react";

const ChapterContainer = () => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <BookOpen className="size-6" />
        Chapters
      </div>
      <div className="mt-6 space-y-3">
        <ChapterCard chapterNumber={1} />
        <ChapterCard chapterNumber={2} />
        <ChapterCard chapterNumber={3} />
        <ChapterCard chapterNumber={4} />
        <ChapterCard chapterNumber={5} />
        <ChapterCard chapterNumber={6} />
        <ChapterCard chapterNumber={7} />
        <ChapterCard chapterNumber={8} />
        <ChapterCard chapterNumber={9} />
        <ChapterCard chapterNumber={10} />
        <ChapterCard chapterNumber={11} />
        <ChapterCard chapterNumber={12} />
        <ChapterCard chapterNumber={13} />
        <ChapterCard chapterNumber={14} />
      </div>
    </div>
  );
};

export default ChapterContainer;
