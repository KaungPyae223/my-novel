import React from "react";
import ProfileNovelCard from "../Novel/ProfileNovelCard";

const ProfileNovelsContainer = () => {
  return (
    <div className="my-6 grid grid-cols-2 gap-4">
      <ProfileNovelCard />
      <ProfileNovelCard />
      <ProfileNovelCard />
      <ProfileNovelCard />
    </div>
  );
};

export default ProfileNovelsContainer;
