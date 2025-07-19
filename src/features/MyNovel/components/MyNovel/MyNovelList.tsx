import useFetchData from "@/services/fetcher";
import useStoreNovel from "@/store/useNovelStore";
import { useGenerateQuery } from "@/utils/searchParams";
import React, { useEffect } from "react";
import MyNovelNovelCard from "./MyNovelNovelCard";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const MyNovelList = () => {
  const { resetNovelData }: any = useStoreNovel();

  useEffect(() => {
    resetNovelData();
  }, []);

  const url = useGenerateQuery("/my-novels");

  const { data, isLoading } = useFetchData(url);

  if (isLoading) return <Loading />;

  if (data?.data?.length == 0) return <EmptyState title="No novels found" link="/my-novels/create" linkText="Create Novel" />;

  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      {data?.data?.map((novel: any) => (
        <MyNovelNovelCard key={novel.id} novel={novel} />
      ))}
    </div>
  );
};

export default MyNovelList;
