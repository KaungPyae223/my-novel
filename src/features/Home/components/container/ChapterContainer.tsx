import React, { useEffect, useState } from "react";
import ChapterCard from "../chapter/ChapterCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "../EmptyState";
import { useRef } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const ChapterContainer = () => {
  const [chapters, setChapters] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/home/chapters?page=${page}`)
  );

  useEffect(() => {
    if (data?.data.length) {
      setChapters((prev: any) => [
        ...prev,
        ...data.data.filter(
          (chapter: any) => !prev.some((p: any) => p.id === chapter.id)
        ),
      ]);
    }
    setHasMore(data?.meta?.current_page < data?.meta?.last_page);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  return (
    <div className="w-full space-y-6">
      {chapters.map((chapter: any, index: number) => (
        <ChapterCard chapter={chapter} key={chapter.id} />
      ))}

      {hasMore && <div ref={observerRef}></div>}
      {chapters.length === 0 && !isLoading && <EmptyState title="No Novels" />}
      {isLoading && <ScrollLoading message="Loading more chapters..." />}
      {!hasMore && <ScrollEnd />}
    </div>
  );
};

export default ChapterContainer;
