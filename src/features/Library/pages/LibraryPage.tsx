"use client";
import React, { useState } from "react";
import NovelContainer from "../components/Container/NovelContainer";
import AuthorContainer from "../components/Container/AuthorContainer";
import CommunityContainer from "../components/Container/CommunityContainer";
import { BookOpen, MessageCircle, User } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useAddParams } from "@/utils/searchParams";

const LibraryPage = () => {
  
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "novels";

  const addParams = useAddParams();

  const handleTabChange = (tab: "novels" | "authors" | "communities") => {
    addParams([{ key: "tab", value: tab }]);
  };

  const tabs = [
    { label: "Novels", value: "novels", icon: <BookOpen className="size-3.5" /> },
    { label: "Authors", value: "authors", icon: <User className="size-3.5" /> },
    { label: "Communities", value: "communities", icon: <MessageCircle className="size-3.5" /> },
  ];

  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Library</p>
      <p className="text-gray-600 mt-3">
        Discover amazing stories, connect with authors, and join our community
      </p>

      <div className="grid grid-cols-3 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
        
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => handleTabChange(tab.value as "novels" | "authors" | "communities")}
            className={`rounded-md flex flex-row items-center justify-center gap-2  w-full py-1.5 ${
              activeTab === tab.value
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}

      </div>

      {activeTab === "novels" && <NovelContainer />}
      {activeTab === "authors" && <AuthorContainer />}
      {activeTab === "communities" && <CommunityContainer />}
    </div>
  );
};

export default LibraryPage;
