import React from "react";
import SearchNovelCard from "../Novel/SearchNovelCard";
import CommunityCard from "@/features/Community/components/CommunityPage/Community/CommunityCard";
import AuthorCard from "@/features/Library/components/Author/AuthorCard";


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
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>

      <p className="font-semibold text-xl">Communities</p>
      <div className="grid grid-cols-3 gap-5">
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
      </div>
    </div>
  );
};

export default SearchAllContainer;
