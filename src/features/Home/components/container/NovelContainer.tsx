import React, { useRef } from "react";
import NovelCard from "../novel/NovelCard";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "../EmptyState";
import { useState } from "react";
import { useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";

const NovelContainer = () => {
  const [novels, setNovels] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

 
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData("/home/novels?page=" + page);

  useEffect(() => {
    if (data?.data.length > 0) {
      setNovels((prev: any) => [...prev, ...data.data]);
    }
    setHasMore(data?.meta?.current_page < data?.meta?.last_page);
  }, [data]);

  useEffect(() => {

    console.log(observerRef.current);

    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  if (error) {
    throw error;
  }

  if (novels.length === 0 && isLoading) {
    return <Loading />;
  }

  if (novels.length === 0) {
    return <EmptyState title="No Novels" />;
  }

  return (
    <div className="w-full space-y-6">
      {novels.map((novel: any,index:number) => (
        <NovelCard key={index} novel={novel} />
      ))}

      {isLoading && <ScrollLoading message="Loading more novels..." />}
      {hasMore ? (
        <div ref={observerRef} className="h-10"></div>
      ) : (
        <p className="text-center mt-4 text-sm text-gray-500">
          MyNovel &copy; {new Date().getFullYear()}
        </p>
      )}
    </div>
  );
};

export default NovelContainer;
