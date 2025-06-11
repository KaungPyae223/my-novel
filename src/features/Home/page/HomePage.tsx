"use client";
import React from "react";
import ChapterContainer from "../components/container/ChapterContainer";
import NovelContainer from "../components/container/NovelContainer";
import PostsContainer from "../components/container/PostsContainer";
import RightSideBar from "@/features/Home/components/rightSideBar/RightSideBar";


const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState<
    "Novels" | "Chapters" | "Posts"
  >("Novels");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-row">
      <div style={{ height: "calc(100vh - 4rem)" }} className="overflow-y-auto scrollbar-hide p-4 py-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-3 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
          <div
            onClick={() => handleTabChange("Novels")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Novels"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Novels
          </div>
          <div
            onClick={() => handleTabChange("Chapters")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Chapters"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Chapters
          </div>
          <div
            onClick={() => handleTabChange("Posts")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Posts"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Posts
          </div>
        </div>
        <div className="mt-6">
          {activeTab === "Novels" && <NovelContainer />}
          {activeTab === "Chapters" && <ChapterContainer />}
          {activeTab === "Posts" && <PostsContainer />}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default HomePage;
