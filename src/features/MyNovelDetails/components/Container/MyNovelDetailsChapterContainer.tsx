import React from "react";
import { BookOpen, Plus } from "lucide-react";
import MyNovelDetailsChapterCard from "../MyNovelDetailsChapter/MyNovelDetailsChapterCard";

const ChapterContainer = () => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
          <BookOpen className="size-6" />
          Chapters
        </div>
        <div className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2">
          <Plus className="size-4" />
          Add Chapter
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <MyNovelDetailsChapterCard chapterNumber={1} />
        <MyNovelDetailsChapterCard chapterNumber={2} />
        <MyNovelDetailsChapterCard chapterNumber={3} />
        <MyNovelDetailsChapterCard chapterNumber={4} />
        <MyNovelDetailsChapterCard chapterNumber={5} />
        <MyNovelDetailsChapterCard chapterNumber={6} />
        <MyNovelDetailsChapterCard chapterNumber={7} />
        <MyNovelDetailsChapterCard chapterNumber={8} />
        <MyNovelDetailsChapterCard chapterNumber={9} />
        <MyNovelDetailsChapterCard chapterNumber={10} />
        <MyNovelDetailsChapterCard chapterNumber={11} />
        <MyNovelDetailsChapterCard chapterNumber={12} />
        <MyNovelDetailsChapterCard chapterNumber={13} />
        <MyNovelDetailsChapterCard chapterNumber={14} />
      </div>
    </div>
  );
};

export default ChapterContainer;
