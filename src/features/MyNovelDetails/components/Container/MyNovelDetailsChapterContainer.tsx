import React from "react";
import { BookOpen, Plus, Trash } from "lucide-react";
import MyNovelDetailsChapterCard from "../MyNovelDetailsChapter/MyNovelDetailsChapterCard";
import Link from "next/link";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { useAddParams } from "@/utils/searchParams";

const ChapterContainer = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useFetchData(`/novel-chapters/${id}`);

  const addParams = useAddParams();

  const handleTrash = () => {
    addParams([{ key: "tab", value: "trash" }]);
  };

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <BookOpen className="size-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Chapters</h2>
        </div>
        <div className="flex flex-row gap-3">
          <div onClick={handleTrash} className="flex border border-gray-300  text-sm text-gray-800 px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2">
            <Trash className="size-4" />
            Trash
          </div>
          <Link
            href={`/my-novels/details/${id}/create-chapter`}
            className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2"
          >
            <Plus className="size-4" />
            Add Chapter
          </Link>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {data?.data.length === 0 ? (
          <EmptyState title="No Chapters" />
        ) : (
          data?.data.map((chapter: any, idx: number) => (
            <MyNovelDetailsChapterCard
              key={idx}
              chapterNumber={idx + 1}
              novelId={id}
              data={chapter}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ChapterContainer;
