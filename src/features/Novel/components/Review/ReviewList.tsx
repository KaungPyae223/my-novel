import React from "react";
import ReviewCard from "./ReviewCard";
import { MessageCircle } from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { useState, useRef, useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const ReviewList = ({ novelID }: { novelID: string }) => {
  const [reviews, setReviews] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    "/novels/reviews/" + novelID + "?page=" + page
  );

  useEffect(() => {
    if (data?.data.length) {
      setReviews((prev: any) => [
        ...prev,
        ...data.data.filter(
          (review: any) => !prev.some((p: any) => p.id === review.id)
        ),
      ]);
    }
    setHasMore(data?.meta?.current_page < data?.meta?.last_page);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <MessageCircle className="size-6" />
        Reviews
      </div>

      <div className="mt-6 space-y-6">
        {reviews.map((review: any, index: number) => (
          <ReviewCard review={review} key={review.id} />
        ))}

        {hasMore && <div ref={observerRef}></div>}
        {reviews.length === 0 && !isLoading && (
          <EmptyState title="No Reviews" />
        )}
        {isLoading && <ScrollLoading message="Loading more reviews..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default ReviewList;
