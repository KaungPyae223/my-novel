import React from "react";
import ReviewCard from "./ReviewCard";
import { MessageCircle } from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { useState, useRef, useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const ReviewList = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/novels/reviews/${novelID}`,
    key: `review-${novelID}`,
  });

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <MessageCircle className="size-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
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

export default ReviewList;
