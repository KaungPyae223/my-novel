import React from "react";
import SearchCommunityCard from "../Community/SearchCommunityCard";

const SearchCommunityContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <SearchCommunityCard />
      <SearchCommunityCard />
      <SearchCommunityCard />
     

    </div>
  );
};

export default SearchCommunityContainer;
