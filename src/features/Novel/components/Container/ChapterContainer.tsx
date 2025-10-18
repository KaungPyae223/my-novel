"use client";
import React from "react";
import ChapterCard from "../Chapters/ChapterCard";
import { BookOpen } from "lucide-react";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useChapterContainer } from "../../hooks/useChapterContainer";

const ChapterContainer = ({ id }: { id: string }) => {
  const {
    chapterData,
    hasMore,
    hasPrev,
    isLoading,
    error,
    chapterContainerRef,
    nextObserverRef,
    prevObserverRef,
  } = useChapterContainer({ id });

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <BookOpen className="size-6" />
        Chapters
      </div>
      <ScrollArea
        ref={chapterContainerRef}
        className="mt-6 h-[calc(100vh-20rem)]"
      >
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
