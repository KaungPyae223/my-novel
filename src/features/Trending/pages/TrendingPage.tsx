"use client";
import { BookOpen, MessageCircle, User } from "lucide-react";
import React, { useState } from "react";
import NovelContainer from "../components/Containers/NovelContainer";
import AuthorContainer from "../components/Containers/AuthorContainer";
import CommunityContainer from "../components/Containers/CommunityContainer";

const TrendingPage = () => {
  const [activeTab, setActiveTab] = useState<
    "Novels" | "Authors" | "Communities"
  >("Novels");

  const handleTabChange = (tab: "Novels" | "Authors" | "Communities") => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "Trending Novels", value: "Novels", icon: <BookOpen className="size-3.5" /> },
    { label: "Rising Authors", value: "Authors", icon: <User className="size-3.5" /> },
    { label: "Hot Communities", value: "Communities", icon: <MessageCircle className="size-3.5" /> },
  ];

  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Trending Now</p>
      <p className="text-gray-600 mt-3">
        Discover what&apos;s hot in the NovelShare community
      </p>

      <div className="grid grid-cols-3 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
        
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
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

      {activeTab === "Novels" && <NovelContainer />}
      {activeTab === "Authors" && <AuthorContainer />}
      {activeTab === "Communities" && <CommunityContainer />}
    </div>
  );
};

export default TrendingPage;
