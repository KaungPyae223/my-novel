"use client";
import React, { useState } from "react";
import NovelContainer from "../components/Container/NovelContainer";
import AuthorContainer from "../components/Container/AuthorContainer";
import CommunityContainer from "../components/Container/CommunityContainer";
import { BookOpen, MessageCircle, User } from "lucide-react";

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
          <BookOpen className="size-3.5" />
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
          <User className="size-3.5" />
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
          <MessageCircle className="size-3.5" />
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
