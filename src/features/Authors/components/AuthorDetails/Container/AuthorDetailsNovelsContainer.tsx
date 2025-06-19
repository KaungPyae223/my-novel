import React from "react";
import AuthorDetailsNovelCard from "../Novel/AuthorDetailsNovelCard";

const AuthorDetailsNovelsContainer = () => {
  return (
    <div className="my-6 grid grid-cols-2 gap-4">
      <AuthorDetailsNovelCard />
      <AuthorDetailsNovelCard />
      <AuthorDetailsNovelCard />
      <AuthorDetailsNovelCard />
    </div>
  );
};

export default AuthorDetailsNovelsContainer;
