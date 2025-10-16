import React from "react";
import ReviewCard from "./ReviewCard";
import { MessageCircle } from "lucide-react";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const ReviewList = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, error } = useFetchData("/novels/reviews/" + novelID);

  if (isLoading) {
    return <Loading />;
  }

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
        {data.data.length == 0 ? (
          <EmptyState title="No Reviews" />
        ) : (
          data.data.map((data:any) => <ReviewCard key={data.id} review={data} />)
        )}
      </div>
    </div>
  );
};

export default ReviewList;
