import { useHandleSearch } from "@/utils/handleSearch";
import { useAddParams, useChangeTab } from "@/utils/searchParams";
import { useSearchParams } from "next/navigation";
import { useScrollFetch } from "@/utils/useScrollFetch";

export const useChapterContainer = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter") || "";
  const sort = searchParams.get("sort") || "";

  const { searchQuery, handleSearch } = useHandleSearch();

  const handleFilterSortChange = (e: string, key: string) => {
    addParams([{ key: key, value: e }]);
  };

  const { data, isLoading, error, hasMore, observerRef, setData } =
    useScrollFetch({
      url: `/novel-chapters/${id}`,
      key: `chapter-${id}`,
    });

  const deleteChapter = (id: string) => {
    setData((prev: any) => prev.filter((chapter: any) => chapter.id !== id));
  };

  const addParams = useAddParams();

  const changeTab = useChangeTab();

  const handleTrash = () => {
    changeTab("trash");
  };

  return {
    searchQuery,
    handleSearch,
    handleFilterSortChange,
    data,
    hasMore,
    observerRef,
    isLoading,
    error,
    handleTrash,
    filter,
    sort,
    deleteChapter,
  };
};
