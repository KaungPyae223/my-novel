"use client";
import React from "react";
import ChapterCard from "../Chapters/ChapterCard";
import { BookOpen, Search } from "lucide-react";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useChapterContainer } from "../../hooks/useChapterContainer";
import { useHandleSearch } from "@/utils/handleSearch";

const ChapterContainer = ({ id }: { id: string }) => {
  const {
    chapterData,
    hasMore,
    hasPrev,
    isLoading,
    error,
    nextObserverRef,
    prevObserverRef,
  } = useChapterContainer({ id });

  const { searchQuery, handleSearch } = useHandleSearch();

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between  items-center gap-3 ">
        <div className="flex flex-row items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <BookOpen className="size-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Chapters</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search chapters name"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
        </div>
      </div>
      <ScrollArea className="mt-6 h-[calc(100vh-20rem)]">
        {hasPrev && <div ref={prevObserverRef}></div>}
        {isLoading && <ScrollLoading message="Loading more chapters..." />}

        <div className="space-y-3">
          {chapterData.map((chapter: any, index: number) => (
            <div key={chapter.id} id={chapter.id}>
              <ChapterCard data={chapter} />
            </div>
          ))}

          {hasMore && <div ref={nextObserverRef}></div>}
          {chapterData.length === 0 && !isLoading && (
            <EmptyState title="No Chapters" />
          )}
          {isLoading && <ScrollLoading message="Loading more chapters..." />}
          {!hasMore && <ScrollEnd />}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChapterContainer;
