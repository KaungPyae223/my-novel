import React, { useRef } from "react";
import NovelCard from "../novel/NovelCard";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "../EmptyState";
import { useState } from "react";
import { useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import { useInView } from "framer-motion";

const NovelContainer = () => {
  const [novels, setNovels] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData("/home/novels?page=" + page);

  useEffect(() => {
    if (data?.data.length) {
      setNovels((prev: any) => [...prev, ...data.data]);
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
      { threshold: 0 }
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
        <div key={index} ref={index === novels.length - 2 ? observerRef : null}>
          <NovelCard novel={novel} />
        </div>
      ))}

      {novels.length === 0 && !isLoading && <EmptyState title="No Novels" />}

      {isLoading && <ScrollLoading message="Loading more novels..." />}

      {!hasMore && (
        <p className="text-center text-gray-600">
          MyNovel &copy; {new Date().getFullYear()}
        </p>
      )}
    </div>
  );
};

export default NovelContainer;
