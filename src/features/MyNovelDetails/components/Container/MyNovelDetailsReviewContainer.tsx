import React from "react";
import { Star } from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ReviewCard from "@/features/Novel/components/Review/ReviewCard";

const ChapterContainer = ({ id }: { id: string }) => {

  const { data, isLoading, error } = useFetchData(`novels/reviews/${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Star className="size-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
        </div>
      </div>
      <div className="mt-6 p-6 space-y-6">
        {data.data.length == 0 ? (
          <EmptyState title="No Reviews" />
        ) : (
          data.data.map((review: any) => (
            <ReviewCard review={review} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChapterContainer;
