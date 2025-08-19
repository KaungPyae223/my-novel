import React from "react";
import { BookOpen, Plus, Star } from "lucide-react";
import MyNovelDetailsChapterCard from "../MyNovelDetailsChapter/MyNovelDetailsChapterCard";
import Link from "next/link";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ReviewCard from "@/features/Novel/components/Review/ReviewCard";

const ChapterContainer = ({ id }: { id: string }) => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
          <Star className="size-6" />
          Reviews
        </div>
      </div>
      <div className="mt-6 p-6 space-y-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

      </div>
    </div>
  );
};

export default ChapterContainer;
