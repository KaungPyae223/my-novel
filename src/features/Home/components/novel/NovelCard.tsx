import React from "react";
import LoveShare from "./LoveShare";
import NovelCardHeader from "./NovelCardHeader";
import NovelIntro from "./NovelIntro";
import Synopsis from "./Synopsis";
import ReadAddButton from "./ReadAddButton";
import NovelView from "./NovelView";

const NovelCard = () => {
  return (
    <div>
      <div className="py-5 px-6 bg-white rounded-lg shadow">
        <NovelCardHeader />
        <NovelIntro />
        <Synopsis />
        <ReadAddButton />
        <NovelView />
        <hr className="border-gray-200 my-3" />
        <LoveShare />
      </div>
    </div>
  );
};

export default NovelCard;
