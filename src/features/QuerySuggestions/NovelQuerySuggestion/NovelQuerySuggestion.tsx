import React from "react";
import NovelQuerySuggestionCard from "./NovelQuerySuggestionCard";
import useNormalFetcher from "@/services/normalFetcher";
import Loading from "@/features/Components/Loading/Loading";

const NovelQuerySuggestion = ({ query }: { query: string }) => {
  const { data, isLoading, error } = useNormalFetcher(
    `/suggestions/novels?q=${query}`
  );

  if (error) throw error;

  if (isLoading || data?.length === 0) {
    return null;
  }

  return (
    <div className="absolute w-full transform translate-y-1.5 border border-gray-300 shadow-md z-10 bg-white rounded-md">
      <p className="text-gray-400 text-sm p-2">suggestions</p>

      <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto p-2">
        {data?.map((data: any) => (
          <NovelQuerySuggestionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelQuerySuggestion;
