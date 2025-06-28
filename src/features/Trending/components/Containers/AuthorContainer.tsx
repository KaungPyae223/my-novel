import React from "react";
import AuthorCard from "../Authors/AuthorCard";

const AuthorContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-3 gap-5">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
};

export default AuthorContainer;
