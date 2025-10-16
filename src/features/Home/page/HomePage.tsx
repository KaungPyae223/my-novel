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

  const handleTabChange = (tab: "Novels" | "Chapters" | "Posts") => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "Chapters", value: "Chapters" },
    { label: "Novels", value: "Novels" },
    { label: "Posts", value: "Posts" },
  ];

  return (
    <div className="flex flex-row">
      <div
        style={{ height: "calc(100vh - 4rem)" }}
        className="overflow-y-auto scrollbar-hide p-4 py-6 max-w-2xl w-full mx-auto"
      >
        <div className="grid grid-cols-3 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
          {tabs.map((tab: { label: string; value: string }) => (
            <div
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`rounded-md  text-center py-1.5 ${
                activeTab === tab.value
                  ? "bg-white font-medium shadow"
                  : "text-gray-600 cursor-pointer"
              }`}
            >
              {tab.label}
            </div>
          ))}
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
