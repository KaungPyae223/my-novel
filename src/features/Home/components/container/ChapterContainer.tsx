import React from "react";
import ChapterCard from "../chapter/ChapterCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import Loading from "@/features/Components/Loading/Loading";

const ChapterContainer = () => {

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/recommend-chapters`)
  );

  if (isLoading) return <Loading />;
  if (error) throw error;

  return (
    <div className="w-full space-y-6">
      {data?.data.map((chapter: any) => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterContainer;
