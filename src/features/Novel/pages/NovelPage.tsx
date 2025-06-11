"use client";
import Container from "@/global/Container/Container";
import React from "react";
import NovelHeader from "../components/NovelHeader";
import NovelIntro from "../components/NovelIntro";
import ChapterContainer from "../components/Container/ChapterContainer";
import AuthorPostContainer from "../components/Container/AuthorPostContainer";
import SimilarNovelContainer from "../components/Container/SimilarNovelContainer";
import ReviewContainer from "../components/Container/ReviewContainer";

const NovelPage = () => {
  const [activeTab, setActiveTab] = React.useState<
    "Chapters" | "Similar" | "Posts" | "Reviews"
  >("Chapters");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <NovelHeader />
      <Container className="mt-16 py-6">
        <NovelIntro />
        <div className="grid grid-cols-4 my-9 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
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
            onClick={() => handleTabChange("Similar")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Similar"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Similar Novels
          </div>
          <div
            onClick={() => handleTabChange("Posts")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Posts"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Author Posts
          </div>
          <div
            onClick={() => handleTabChange("Reviews")}
            className={`rounded-md  text-center py-1.5 ${
              activeTab === "Reviews"
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            Reviews
          </div>
        </div>
        {activeTab === "Chapters" && <ChapterContainer />}
        {activeTab === "Similar" && <SimilarNovelContainer />}
        {activeTab === "Posts" && <AuthorPostContainer />}
        {activeTab === "Reviews" && <ReviewContainer />}
      </Container>
    </div>
  );
};

export default NovelPage;
