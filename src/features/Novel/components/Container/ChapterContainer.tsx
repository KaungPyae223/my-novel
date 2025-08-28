"use client";
import React from "react";
import ChapterCard from "../Chapters/ChapterCard";
import { BookOpen } from "lucide-react";
import Loading from "@/features/Components/Loading/Loading";
import useFetchData from "@/services/fetcher";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const ChapterContainer = ({id}: {id: string}) => {

  const { data, isLoading, error } = useFetchData(`/user/novel-chapters/${id}`);

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <BookOpen className="size-6" />
        Chapters
      </div>
      <div className="mt-6 space-y-3">

        {
          data?.data.length === 0 ? (
            <EmptyState title="No Chapters" />
          ) : (
            data?.data.map((chapter: any, idx: number) => (
              <ChapterCard key={idx} chapterNumber={idx + 1} data={chapter} />
            ))
          )
        }
      </div>
    </div>
  );
};

export default ChapterContainer;
