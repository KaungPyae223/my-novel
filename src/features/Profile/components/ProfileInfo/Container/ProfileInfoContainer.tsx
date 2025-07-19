import React from "react";
import ProfileInfoCard from "../Info/ProfileInfoCard";

const ProfileInfoContainer = ({ data }: { data: any }) => {
  return (
    <div className="my-6">
      <ProfileInfoCard data={data} />
    </div>
  );
};

export default ProfileInfoContainer;
