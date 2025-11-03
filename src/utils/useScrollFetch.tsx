import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "./searchParams";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export const useScrollFetch = ({ url, key }: { url: string; key: string }) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  const {
    data: fetchedData,
    isLoading,
    error,
  } = useFetchData(
    useGenerateQuery(url, [{ key: "page", value: page.toString() }]),
    key
  );

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [searchParams]);

  useEffect(() => {
    if (fetchedData?.data.length) {
      const newData = fetchedData.data;
      setData((prev: any) => [
        ...prev.filter(
          (chapter: any) => !newData.some((p: any) => p.id === chapter.id)
        ),
        ...newData,
      ]);
    }
    setHasMore(fetchedData?.meta?.current_page < fetchedData?.meta?.last_page);
  }, [fetchedData]);

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

  return {
    data,
    isLoading,
    error,
    hasMore,
    observerRef,
    setData,
  };
};
