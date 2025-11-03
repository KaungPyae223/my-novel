import React from "react";
import LetterCard from "./LetterCard";
import { Mail } from "lucide-react";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const LetterList = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/novels/letters/${novelID}`,
    key: `letters-${novelID}`,
  });

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Mail className="size-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Fan Letter List
          </h2>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        {data?.map((letter: any) => (
          <LetterCard key={letter.id} letter={letter} />
        ))}
        {hasMore && <div ref={observerRef}></div>}
        {data.length === 0 && !isLoading && <EmptyState title="No Reviews" />}
        {isLoading && <ScrollLoading message="Loading more reviews..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default LetterList;
