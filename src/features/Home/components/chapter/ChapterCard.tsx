import React from "react";
import ChapterCardHeader from "./ChapterCardHeader";
import ChapterNovelIntro from "./ChapterNovelIntro";
import ChapterCardView from "./ChapterCardView";
import ChapterPreview from "./ChapterPreview";
import ChapterLoveShare from "./ChapterLoveShare";

const ChapterCard = () => {
  return (
    <div className="py-5 px-6 bg-white rounded-lg shadow">
      <ChapterCardHeader />
      <ChapterNovelIntro />
      <ChapterPreview />
      <ChapterCardView />
      <hr className="border-gray-200 my-3" />
      <ChapterLoveShare />
    </div>
  );
};

export default ChapterCard;
