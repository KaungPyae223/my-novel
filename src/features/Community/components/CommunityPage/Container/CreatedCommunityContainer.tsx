import React from "react";
import { Plus } from "lucide-react";
import CreatedCommunityCard from "../CreatedCommunity/CreatedCommuntiyCard";

const CreatedCommunityContainer = () => {
  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl font-medium">Communities You&apos;ve Created</p>
          <p className="text-gray-600  mt-2">
            Manage and grow your communities
          </p>
        </div>
        <div className="flex cursor-pointer items-center h-fit gap-2 px-4 text-sm font-medium py-2.5 rounded-md bg-gray-800 text-white ">
          <Plus className="size-4" />
          Create Community
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CreatedCommunityCard />
        <CreatedCommunityCard />
        <CreatedCommunityCard />
      </div>
    </div>
  );
};

export default CreatedCommunityContainer;
