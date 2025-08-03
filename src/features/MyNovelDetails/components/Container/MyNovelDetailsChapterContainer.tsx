import React from "react";
import { BookOpen, Plus } from "lucide-react";
import MyNovelDetailsChapterCard from "../MyNovelDetailsChapter/MyNovelDetailsChapterCard";
import Link from "next/link";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const ChapterContainer = ({ id }: { id: string }) => {

  const { data, isLoading, error } = useFetchData(`/novel-chapters/${id}`);

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
          <BookOpen className="size-6" />
          Chapters
        </div>
        <Link href={`/my-novels/details/1/create-chapter`} className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2">
          <Plus className="size-4" />
          Add Chapter
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {
          data?.data.length === 0 ? (
            <EmptyState title="No Chapters" />
          ) : (
            data?.data.map((chapter: any, idx: number) => (
              <MyNovelDetailsChapterCard key={idx} chapterNumber={idx + 1} data={chapter} />
            ))
          )
        }
        
      </div>
    </div>
  );
};

export default ChapterContainer;
