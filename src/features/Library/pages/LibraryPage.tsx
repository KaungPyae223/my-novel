"use client";
import React, { useState } from "react";
import NovelContainer from "../components/Container/NovelContainer";
import AuthorContainer from "../components/Container/AuthorContainer";
import CommunityContainer from "../components/Container/CommunityContainer";

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState<
    "Novels" | "Authors" | "Communities"
  >("Novels");

  const handleTabChange = (tab: "Novels" | "Authors" | "Communities") => {
    setActiveTab(tab);
  };
  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Library</p>
      <p className="text-gray-600 mt-3">
        Discover amazing stories, connect with authors, and join our community
      </p>

      <div className="grid grid-cols-3 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
        <div
          onClick={() => handleTabChange("Novels")}
          className={`rounded-md flex flex-row items-center justify-center gap-2  w-full py-1.5 ${
            activeTab === "Novels"
              ? "bg-white font-medium shadow"
              : "text-gray-600 cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          Novels
        </div>
        <div
          onClick={() => handleTabChange("Authors")}
          className={`rounded-md flex flex-row items-center justify-center gap-2  w-full py-1.5 ${
            activeTab === "Authors"
              ? "bg-white font-medium shadow"
              : "text-gray-600 cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          Authors
        </div>
        <div
          onClick={() => handleTabChange("Communities")}
          className={`rounded-md flex flex-row items-center justify-center gap-2  w-full py-1.5 ${
            activeTab === "Communities"
              ? "bg-white font-medium shadow"
              : "text-gray-600 cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          Communities
        </div>
      </div>

      {activeTab === "Novels" && <NovelContainer />}
      {activeTab === "Authors" && <AuthorContainer />}
      {activeTab === "Communities" && <CommunityContainer />}
    </div>
  );
};

export default LibraryPage;
