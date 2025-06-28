import React from "react";
import AuthorSearch from "../Author/AuthorSearch";
import AuthorCard from "../Author/AuthorCard";

const AuthorContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <AuthorSearch />
      <div className="grid grid-cols-3 gap-5">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
};

export default AuthorContainer;
