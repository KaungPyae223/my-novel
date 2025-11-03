"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft, Book, BookOpen, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useAddParams, useChangeTab } from "@/utils/searchParams";
import MyNovelDetailsLogContainer from "../components/Container/MyNovelDetailsLogContainer";

const NovelLogs = ({ id }: { id: string }) => {
  const activeTab = useSearchParams().get("tab") || "novel";

  const router = useRouter();

  const handleBack = () => {
    router.push(`/my-novels/details/${id}`);
  };

  const tabs = [
    { value: "novel", label: "Novel", icon: <Book className="size-3.5" /> },
    {
      value: "chapters",
      label: "Chapters",
      icon: <BookOpen className="size-3.5" />,
    },
    {
      value: "posts",
      label: "Posts",
      icon: <MessageCircle className="size-3.5" />,
    },
  ];

  const changeTab = useChangeTab();

  const handleTabChange = (tab: string) => {
    changeTab(tab);
  };

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center py-3">
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to Details
          </div>
        </div>
        <p className="text-2xl mt-6 font-medium">Novel Logs</p>
        <div className="grid grid-cols-3 my-7 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`rounded-md flex flex-row items-center justify-center gap-2 w-full py-1.5 ${
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
        <MyNovelDetailsLogContainer id={id} />
      </div>
    </Middleware>
  );
};

export default NovelLogs;
