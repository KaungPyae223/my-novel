import { useState, useEffect, useRef } from "react";
import useFetchData from "@/services/fetcher";
import useNormalFetcher from "@/services/normalFetcher";

export const useChapterContainer = ({ id }: { id: string }) => {
  const [firstUnreadChapter, setFirstUnreadChapter] = useState<any>(null);
  const [chapterData, setChapterData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasPrev, setHasPrev] = useState(true);

  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [type, setType] = useState<"next" | "prev">("next");

  const [page, setPage] = useState(1);

  const nextObserverRef = useRef<HTMLDivElement | null>(null);
  const prevObserverRef = useRef<HTMLDivElement | null>(null);

  const [scrollAnchorId, setScrollAnchorId] = useState<string | null>(null);

  const { data, isLoading, error } = useFetchData(
    `/user/novel-chapters/${id}?page=${page}`
  );

  const { data: lastReadChapter } = useNormalFetcher(
    `/novels/last-read-chapter/${id}`
  );

  useEffect(() => {
    if (lastReadChapter) {
      setPage(lastReadChapter.last_read_page);
      setPrevPage(lastReadChapter.last_read_page);
      setNextPage(lastReadChapter.last_read_page);
      setFirstUnreadChapter(lastReadChapter.last_read_chapter);
      setChapterData([]);
    }
  }, [lastReadChapter]);

  useEffect(() => {
    if (type === "prev" && scrollAnchorId) {
      const anchorElement = document.getElementById(scrollAnchorId);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
      setScrollAnchorId(null);
    }
  }, [chapterData]);

  useEffect(() => {
    if (data?.data.length) {
      setChapterData((prev: any) => {
        const newChapters = data.data.filter(
          (chapter: any) => !prev.some((p: any) => p.id === chapter.id)
        );
        return type === "next"
          ? [...prev, ...newChapters]
          : [...newChapters, ...prev];
      });
    }

    setHasMore(nextPage < data?.meta?.last_page);
    setHasPrev(prevPage > 1);
  }, [data]);

  useEffect(() => {
    if (firstUnreadChapter && chapterData.length > 0) {
      const scrollElement = document.getElementById(firstUnreadChapter);
      if (scrollElement) {
        scrollElement.scrollIntoView();
      }
      setFirstUnreadChapter(null);
    }
  }, [firstUnreadChapter, chapterData]);

  const chapterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chapterContainerRef.current) {
      const element = document.getElementById(firstUnreadChapter);

      if (element) {
        element.scrollIntoView();
      }
    }
  }, [firstUnreadChapter]);

  useEffect(() => {
    if (!nextObserverRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage(nextPage + 1);
          setNextPage(nextPage + 1);
          setType("next");
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(nextObserverRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  useEffect(() => {
    if (!prevObserverRef.current || !hasPrev) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          if (chapterData.length > 0) {
            setScrollAnchorId(chapterData[0].id);
          }
          setType("prev");
          setPage(prevPage - 1);
          setPrevPage(prevPage - 1);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(prevObserverRef.current);
    return () => observer.disconnect();
  }, [hasPrev, isLoading, chapterData]);

  return {
    chapterData,
    hasMore,
    hasPrev,
    isLoading,
    error,
    chapterContainerRef,
    nextObserverRef,
    prevObserverRef,
  };
};
