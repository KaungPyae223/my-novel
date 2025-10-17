import React from "react";
import { Star } from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ReviewCard from "@/features/Novel/components/Review/ReviewCard";
import { useState, useRef, useEffect } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const MyNovelDetailsReviewContainer = ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    "/novels/reviews/" + id + "?page=" + page
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
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Star className="size-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
        </div>
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

export default MyNovelDetailsReviewContainer;
