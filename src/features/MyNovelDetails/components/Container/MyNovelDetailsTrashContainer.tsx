import React from "react";
import { Trash } from "lucide-react";

import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ChapterTrashedCard from "../ChapterTrashed/ChapterTrashedCard";

const ChapterContainer = ({ id }: { id: string }) => {
  console.log(id);

  const { data, isLoading, error } = useFetchData(
    `/novel-trashed-chapters/${id}`
  );

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Trash className="size-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Trash</h2>
        </div>
        <p className="text-sm text-gray-600">
          The Chapters in Trash will be deleted permanently after 30 days.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {data?.data.length === 0 ? (
          <EmptyState title="No Chapters" />
        ) : (
          data?.data.map((chapter: any) => (
            <ChapterTrashedCard key={chapter.id} novelId={id} data={chapter} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChapterContainer;
