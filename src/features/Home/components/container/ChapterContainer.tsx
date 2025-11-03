import React from "react";
import ChapterCard from "../chapter/ChapterCard";
import EmptyState from "../EmptyState";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const ChapterContainer = () => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/home/chapters`,
    key: `chapter`,
  });

  if (error) {
    throw error;
  }

  return (
    <div className="w-full space-y-6">
      {data?.map((chapter: any) => (
        <ChapterCard chapter={chapter} key={chapter.id} />
      ))}

      {hasMore && <div ref={observerRef}></div>}
      {data?.length === 0 && !isLoading && <EmptyState title="No Chapters" />}
      {isLoading && <ScrollLoading message="Loading more chapters..." />}
      {!hasMore && <ScrollEnd />}
    </div>
  );
};

export default ChapterContainer;
