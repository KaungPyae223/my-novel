"use client";
import Container from "@/features/Components/Container/Container";
import React from "react";
import NovelHeader from "../components/NovelHeader";
import NovelIntro from "../components/NovelIntro";
import ChapterContainer from "../components/Container/ChapterContainer";
import AuthorPostContainer from "../components/Container/AuthorPostContainer";
import SimilarNovelContainer from "../components/Container/SimilarNovelContainer";
import ReviewContainer from "../components/Container/ReviewContainer";
import {
  BookOpen,
  GalleryHorizontal,
  MessageCircle,
  Star,
} from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

const NovelPage = ({novelID}: {novelID: string}) => {
  const [activeTab, setActiveTab] = React.useState<
    "Chapters" | "Similar" | "Posts" | "Reviews"
  >("Chapters");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  const tabs = [
    {
      label: "Chapters",
      value: "Chapters",
      icon: <BookOpen className="size-3.5" />,
    },
    {
      label: "Similar",
      value: "Similar",
      icon: <GalleryHorizontal className="size-3.5" />,
    },
    {
      label: "Posts",
      value: "Posts",
      icon: <MessageCircle className="size-3.5" />,
    },
    { label: "Reviews", value: "Reviews", icon: <Star className="size-3.5" /> },
  ];

  const {data, isLoading, error} = useFetchData(`/user/novels/${novelID}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if(error.status === 404) {
      return notFound();
    }
    throw error;
  }

  
  return (
    <div>
      <Toaster position="top-center" richColors />
      <NovelHeader />
      <Container className="mt-16 py-6">
        <NovelIntro novel={data.data}/>
        <div className="grid grid-cols-4 my-9 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
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
        {activeTab === "Chapters" && <ChapterContainer id={novelID} />}
        {activeTab === "Similar" && <SimilarNovelContainer />}
        {activeTab === "Posts" && <AuthorPostContainer id={novelID} />}
        {activeTab === "Reviews" && <ReviewContainer />}
      </Container>
    </div>
  );
};

export default NovelPage;
