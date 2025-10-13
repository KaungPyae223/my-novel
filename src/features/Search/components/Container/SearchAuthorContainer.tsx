import React from "react";
import AuthorCard from "@/features/Library/components/Author/AuthorCard";

const SearchAuthorContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <AuthorCard />
      <AuthorCard />
      <AuthorCard />
    </div>
  );
};

export default SearchAuthorContainer;
