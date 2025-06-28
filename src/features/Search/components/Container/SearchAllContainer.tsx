import React from "react";
import SearchNovelCard from "../Novel/SearchNovelCard";
import SearchAuthorCard from "../Author/SearchAuthorCard";
import SearchCommunityCard from "../Community/SearchCommunityCard";

const SearchAllContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <p className="font-semibold text-xl">Novels</p>
      <div className="grid grid-cols-3 gap-5">
        <SearchNovelCard />
        <SearchNovelCard />
        <SearchNovelCard />
      </div>

      <p className="font-semibold text-xl">Authors</p>
      <div className="grid grid-cols-3 gap-5">
        <SearchAuthorCard />
        <SearchAuthorCard />
        <SearchAuthorCard />
      </div>

      <p className="font-semibold text-xl">Communities</p>
      <div className="grid grid-cols-3 gap-5">
        <SearchCommunityCard />
        <SearchCommunityCard />
        <SearchCommunityCard />
      </div>
    </div>
  );
};

export default SearchAllContainer;
