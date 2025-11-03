import React from "react";
import NovelCard from "../novel/NovelCard";
import EmptyState from "../EmptyState";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const NovelContainer = () => {
  
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/home/novels`,
    key: `novel`,
  });

  if (error) {
    throw error;
  }

  return (
    <div className="w-full space-y-6">
      {data?.map((novel: any) => (
        <NovelCard novel={novel} key={novel.id} />
      ))}

      {hasMore && <div ref={observerRef}></div>}
      {data?.length === 0 && !isLoading && <EmptyState title="No Novels" />}
      {isLoading && <ScrollLoading message="Loading more novels..." />}
      {!hasMore && <ScrollEnd />}
    </div>
  );
};

export default NovelContainer;
