import React from "react";
import ChapterCardHeader from "./ChapterCardHeader";
import ChapterNovelIntro from "./ChapterNovelIntro";
import ChapterCardView from "./ChapterCardView";
import ChapterPreview from "./ChapterPreview";
import ChapterLoveShare from "./ChapterLoveShare";

const ChapterCard = ({ chapter }: { chapter: any }) => {

  const [loveCount, setLoveCount] = React.useState<number>(chapter.love_count);

  return (
    <div className="py-5 px-6 bg-white rounded-lg shadow">
      <ChapterCardHeader user={chapter.user} created_at={chapter.created_at} />
      <ChapterNovelIntro novel={chapter.novel} />
      <ChapterPreview chapter={chapter} novelID={chapter.novel.id}/>
      <ChapterCardView chapter={chapter} loveCount={loveCount}/>
      <hr className="border-gray-200 my-3" />
      <ChapterLoveShare chapter={chapter} setLoveCount={setLoveCount} novelID={chapter.novel.id}/>
    </div>
  );
};

export default ChapterCard;
