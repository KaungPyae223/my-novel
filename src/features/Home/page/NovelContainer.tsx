import React from "react";
import NovelCard from "../components/novel/NovelCard";

const NovelContainer = () => {
  return (
    <div className="w-full space-y-6">
      <NovelCard />
      <NovelCard />
      <NovelCard />
      <NovelCard />
    </div>
  );
};

export default NovelContainer;
