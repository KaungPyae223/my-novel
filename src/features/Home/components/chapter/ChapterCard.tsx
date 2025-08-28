import React from "react";
import ChapterCardHeader from "./ChapterCardHeader";
import ChapterNovelIntro from "./ChapterNovelIntro";
import ChapterCardView from "./ChapterCardView";
import ChapterPreview from "./ChapterPreview";
import ChapterLoveShare from "./ChapterLoveShare";

const ChapterCard = ({ chapter }: { chapter: any }) => {
  return (
    <div className="py-5 px-6 bg-white rounded-lg shadow">
      <ChapterCardHeader user={chapter.user} created_at={chapter.created_at} />
      <ChapterNovelIntro novel={chapter.novel} />
      <ChapterPreview chapter={chapter} novelID={chapter.novel.id}/>
      <ChapterCardView chapter={chapter}/>
      <hr className="border-gray-200 my-3" />
      <ChapterLoveShare chapter={chapter}/>
    </div>
  );
};

export default ChapterCard;
