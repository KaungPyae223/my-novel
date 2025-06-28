import React from "react";
import NovelSearch from "../Novel/NovelSearch";
import NovelCard from "../Novel/NovelCard";

const NovelContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <NovelSearch />
      <div className="grid grid-cols-2 gap-5">
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
