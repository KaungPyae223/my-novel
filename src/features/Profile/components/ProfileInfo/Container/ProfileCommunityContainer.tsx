import React from "react";
import ProfileCommunityCard from "../Community/ProfileCommunityCard";

const ProfileCommunityContainer = () => {
  return (
    <div className="my-6 grid grid-cols-2 gap-4">
      <ProfileCommunityCard />
      <ProfileCommunityCard />
      <ProfileCommunityCard />
      <ProfileCommunityCard />
    </div>
  );
};

export default ProfileCommunityContainer;
