import React from "react";
import ChapterCard from "../chapter/ChapterCard";

const ChapterContainer = () => {
  return (
    <div className="w-full space-y-6">
      <ChapterCard />
      <ChapterCard />
      <ChapterCard />
      <ChapterCard />
    </div>
  );
};

export default ChapterContainer;
