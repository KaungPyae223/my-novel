import React from "react";
import ChapterCard from "../Chapters/ChapterCard";

const ChapterContainer = () => {
  return (
    <div className="p-7 shadow border border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
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
