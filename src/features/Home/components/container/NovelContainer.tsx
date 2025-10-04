import React from "react";
import NovelCard from "../novel/NovelCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "../EmptyState";

const NovelContainer = () => {
  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/home/novels`)
  );

  if (isLoading) return <Loading />;
  if (error) throw error;

  if (data?.data.length === 0) return <EmptyState title="Novels" />;

  return (
    <div className="w-full space-y-6">
      {data?.data.map((novel: any) => (
        <NovelCard key={novel.id} novel={novel} />
      ))}
    </div>
  );
};

export default NovelContainer;
