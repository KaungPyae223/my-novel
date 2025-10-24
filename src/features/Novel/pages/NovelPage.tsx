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
  Mail,
  MessageCircle,
  Star,
} from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { useSearchParams } from "next/navigation";
import { useAddParams } from "@/utils/searchParams";
import LetterContainer from "../components/Container/LetterContainer";

const NovelPage = ({ novelID }: { novelID: string }) => {
  const searchParams = useSearchParams();
  const addParams = useAddParams();

  const activeTab = searchParams.get("tab") || "";

  const handleTabChange = (tab: string) => {
    addParams([{ key: "tab", value: tab }]);
  };

  const tabs = [
    {
      label: "Chapters",
      value: "",
      icon: <BookOpen className="size-3.5" />,
    },
    {
      label: "Similar",
      value: "similar",
      icon: <GalleryHorizontal className="size-3.5" />,
    },
    {
      label: "Posts",
      value: "posts",
      icon: <MessageCircle className="size-3.5" />,
    },
    {
      label: "Letters",
      value: "letters",
      icon: <Mail className="size-3.5" />,
    },
    { label: "Reviews", value: "reviews", icon: <Star className="size-3.5" /> },
  ];

  const { data, isLoading, error } = useFetchData(`/user/novels/${novelID}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if (error.status === 404) {
      return notFound();
    }
    throw error;
  }

  return (
    <div>
      <Toaster position="top-center" richColors />
      <NovelHeader />
      <Container className="mt-16 py-6">
        <NovelIntro novel={data.data} />
        <div className="grid grid-cols-5 my-9 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
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
        {activeTab === "" && <ChapterContainer id={novelID} />}
        {activeTab === "similar" && <SimilarNovelContainer />}
        {activeTab === "posts" && <AuthorPostContainer id={novelID} />}
        {activeTab === "reviews" && <ReviewContainer title={data.data.title} id={novelID} />}
        {activeTab === "letters" && <LetterContainer title={data.data.title} id={novelID} />}
      </Container>
    </div>
  );
};

export default NovelPage;
