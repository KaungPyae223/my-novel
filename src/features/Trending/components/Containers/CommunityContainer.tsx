import React from "react";
import CommunityCard from "../Communities/CommunityCard";

const CommunityContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        
      </div>
    </div>
  );
};

export default CommunityContainer;
