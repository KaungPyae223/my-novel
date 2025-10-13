import CommunityCard from "@/features/Community/components/CommunityPage/Community/CommunityCard";
import React from "react";

const SearchCommunityContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <CommunityCard isCreated={false} />
      <CommunityCard isCreated={false} />
      <CommunityCard isCreated={false} />
    </div>
  );
};

export default SearchCommunityContainer;
