import React, { useRef } from "react";
import NovelCard from "../novel/NovelCard";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "../EmptyState";
import { useState } from "react";
import { useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import { useInView } from "framer-motion";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const NovelContainer = () => {
  const [novels, setNovels] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData("/home/novels?page=" + page);

  useEffect(() => {
    if (data?.data.length) {
      setNovels((prev: any) => [
        ...prev,
        ...data.data.filter(
          (novel: any) => !prev.some((p: any) => p.id === novel.id)
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

  if (error) {
    throw error;
  }

  return (
    <div className="w-full space-y-6">
      {novels.map((novel: any, index: number) => (
        <NovelCard novel={novel} key={novel.id} />
      ))}

      {hasMore && <div ref={observerRef}></div>}
      {novels.length === 0 && !isLoading && <EmptyState title="No Novels" />}
      {isLoading && <ScrollLoading message="Loading more novels..." />}
      {!hasMore && <ScrollEnd />}
    </div>
  );
};

export default NovelContainer;
