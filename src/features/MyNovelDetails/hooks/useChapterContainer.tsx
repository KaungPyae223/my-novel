import useFetchData from "@/services/fetcher";
import { useHandleSearch } from "@/utils/handleSearch";
import { useAddParams } from "@/utils/searchParams";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export const useChapterContainer = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter") || "";
  const sort = searchParams.get("sort") || "";
  const q = searchParams.get("q") || "";

  const { searchQuery, handleSearch } = useHandleSearch();

  const handleFilterSortChange = (e: string, key: string) => {
    addParams([{ key: key, value: e }]);
  };

  useEffect(() => {
    setPage(1);
    setChapters([]);
  }, [filter, sort, q]);

  const [chapters, setChapters] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    `/novel-chapters/${id}?page=${page}${filter ? `&filter=${filter}` : ""}${
      sort ? `&sort=${sort}` : ""
    }${q ? `&q=${q}` : ""}`
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

  const addParams = useAddParams();

  const handleTrash = () => {
    addParams([
      { key: "tab", value: "trash" },
      { key: "filter", value: "" },
      { key: "sort", value: "" },
      { key: "q", value: "" },
    ]);
  };

  return {
    searchQuery,
    handleSearch,
    handleFilterSortChange,
    chapters,
    page,
    hasMore,
    observerRef,
    isLoading,
    error,
    handleTrash,
    filter,
    sort,
  };
};
