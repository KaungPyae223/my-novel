import React from "react";
import AuthorDetailsCommunityCard from "../Community/AuthorDetailsCommunityCard";

const AuthorDetailsCommunityContainer = () => {
  return (
    <div className="my-6 grid grid-cols-2 gap-4">
      <AuthorDetailsCommunityCard />
      <AuthorDetailsCommunityCard />
      <AuthorDetailsCommunityCard />
      <AuthorDetailsCommunityCard />
    </div>
  );
};

export default AuthorDetailsCommunityContainer;
