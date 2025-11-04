import { Mail } from "lucide-react";
import React from "react";
import LetterCard from "./LetterCard";
import { useScrollFetch } from "@/utils/useScrollFetch";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const LetterHistory = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, hasMore, observerRef, error, setData } =
    useScrollFetch({
      url: `/novels/user-letter/${novelID}`,
      key: `reader-letter-${novelID}`,
    });

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Mail className="size-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Sent Letters History
        </h2>
      </div>
      <div className="mt-6 space-y-6">
        {data?.map((letter: any) => (
          <LetterCard setData={setData} key={letter.id} letter={letter} />
        ))}
        {hasMore && <div ref={observerRef}></div>}
        {data.length === 0 && !isLoading && <EmptyState title="No Reviews" />}
        {isLoading && <ScrollLoading message="Loading more reviews..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default LetterHistory;
