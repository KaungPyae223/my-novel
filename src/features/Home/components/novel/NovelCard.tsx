import React from "react";
import NovelLoveShare from "./NovelLoveShare";
import NovelCardHeader from "./NovelCardHeader";
import NovelIntro from "./NovelIntro";
import NovelSynopsis from "./NovelSynopsis";
import NovelReadAddButton from "./NovelReadAddButton";
import NovelView from "./NovelView";

const NovelCard = ({ novel }: { novel: any }) => {
  console.log(novel);
  return (
    <div>
      <div className="py-5 px-6 bg-white rounded-lg shadow">
        <NovelCardHeader novel={novel} />
        <NovelIntro novel={novel} />
        <NovelSynopsis novel={novel} />
        <NovelReadAddButton novel={novel} />
        <NovelView novel={novel} />
        <hr className="border-gray-200 my-3" />
        <NovelLoveShare novel={novel} />
      </div>
    </div>
  );
};

export default NovelCard;
