"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import ChapterEditForm from "../components/ChapterEdit/ChapterEditForm";
import Loading from "@/features/Components/Loading/Loading";
import useStoreChapter from "@/store/useChapterStore";
import useFetchData from "@/services/fetcher";

const ChapterEditPage = ({
  novelId,
  chapterID,
}: {
  novelId: string;
  chapterID: string;
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const { chapterData } = useStoreChapter();

  const { isLoading, data, error } = useFetchData(
    `/chapters/update-chapter-show/${chapterID}`
  );

  if (isLoading && !chapterData?.is_updated) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <Middleware>
       <div className="py-9 px-6 mx-auto max-w-4xl">
        <div className="flex flex-row justify-between items-center py-3">
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to Details
          </div>
        </div>
        <p className="text-2xl mt-6 font-medium">Chapter Edit</p>

        <ChapterEditForm
          novelId={novelId}
          chapterID={chapterID}
          originalData={data?.data}
        />
      </div>
      
    </Middleware>
  );
};

export default ChapterEditPage;
