import React from "react";
import NovelLoveShare from "./NovelLoveShare";
import NovelCardHeader from "./NovelCardHeader";
import NovelIntro from "./NovelIntro";
import NovelSynopsis from "./NovelSynopsis";
import NovelReadAddButton from "./NovelReadAddButton";
import NovelView from "./NovelView";

const NovelCard = () => {
  return (
    <div>
      <div className="py-5 px-6 bg-white rounded-lg shadow">
        <NovelCardHeader />
        <NovelIntro />
        <NovelSynopsis />
        <NovelReadAddButton />
        <NovelView />
        <hr className="border-gray-200 my-3" />
        <NovelLoveShare />
      </div>
    </div>
  );
};

export default NovelCard;
