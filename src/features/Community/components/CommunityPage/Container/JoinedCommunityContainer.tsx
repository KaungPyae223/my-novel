import React from "react";
import CommunityCard from "../Community/CommunityCard";

const JoinedCommunityContainer = () => {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <p className="text-xl font-medium">Communities You&apos;ve Joined</p>
        <p className="text-gray-600  mt-2">Stay connected with your favorite communities</p>

      </div>
      <div className="grid grid-cols-3 gap-5">
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
      </div>
    </div>
  );
};

export default JoinedCommunityContainer;
