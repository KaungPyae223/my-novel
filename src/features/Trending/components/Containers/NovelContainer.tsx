import React from "react";
import NovelCard from "../Novels/NovelCard";


const NovelContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-3 gap-5">
        <NovelCard />
        <NovelCard />
        <NovelCard />
        <NovelCard />
        <NovelCard />
        <NovelCard />
      </div>
    </div>
  );
};

export default NovelContainer;
