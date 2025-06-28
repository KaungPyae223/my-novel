import React from "react";
import SearchNovelCard from "../Novel/SearchNovelCard";

const SearchNovelContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <SearchNovelCard />
      <SearchNovelCard />
      <SearchNovelCard />
    </div>
  );
};

export default SearchNovelContainer;
