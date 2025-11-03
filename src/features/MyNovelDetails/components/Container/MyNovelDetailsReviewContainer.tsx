import React from "react";
import { Star } from "lucide-react";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ReviewCard from "@/features/Novel/components/Review/ReviewCard";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const MyNovelDetailsReviewContainer = ({ id }: { id: string }) => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/novels/reviews/${id}`,
    key: `review-${id}`,
  });

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
      <div className="mt-6 space-y-6">
        {data?.map((review: any) => (
          <ReviewCard review={review} key={review.id} />
        ))}

        {hasMore && <div ref={observerRef}></div>}
        {data?.length === 0 && !isLoading && <EmptyState title="No Reviews" />}
        {isLoading && <ScrollLoading message="Loading more reviews..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default MyNovelDetailsReviewContainer;
