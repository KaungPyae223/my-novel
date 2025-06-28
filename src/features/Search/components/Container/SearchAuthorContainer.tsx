import React from "react";
import SearchAuthorCard from "../Author/SearchAuthorCard";

const SearchAuthorContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <SearchAuthorCard />
      <SearchAuthorCard />
      <SearchAuthorCard />
    </div>
  );
};

export default SearchAuthorContainer;
