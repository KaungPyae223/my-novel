import React from "react";
import SimilarNovelCard from "../SimilarNovel/SimilarNovelCard";

const SimilarNovelContainer = () => {
  return (
    <div className="grid grid-cols-3  gap-6">
      <SimilarNovelCard />
      <SimilarNovelCard />
      <SimilarNovelCard />
    </div>
  );
};

export default SimilarNovelContainer;
