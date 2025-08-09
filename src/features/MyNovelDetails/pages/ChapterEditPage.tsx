"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ChapterEditForm from "../components/ChapterEdit/ChapterEditForm";
import Loading from "@/features/Components/Loading/Loading";
import useStoreChapter from "@/store/useChapterStore";
import useNormalFetcher from "@/services/normalFetcher";

const ChapterEditPage = ({
  novelId,
  chapterID,
}: {
  novelId: string;
  chapterID: string;
}) => {
  const router = useRouter();

  const [defaultValues, setDefaultValues] = React.useState<boolean>(false);

  const handleBack = () => {
    router.back();
  };

  const { setChapterData, chapterData } = useStoreChapter();

  const chapterStatus = useNormalFetcher(
    `/chapter-status-check?chapter_id=${chapterID}&novel_id=${novelId}`
  );

 

  const { isLoading, data } = useNormalFetcher(
    `/chapters/update-chapter-show/${chapterID}`
  );

  

  useEffect(() => {
    if (isLoading) return;
    const fetchedChapterData = data?.data;
     if (!chapterData?.id) {
      
      setChapterData({
        id: fetchedChapterData?.id,
        chapterName: fetchedChapterData?.title,
        status: fetchedChapterData?.status,
        summary: fetchedChapterData?.summary,
        content: fetchedChapterData?.content,
        scheduledDate: new Date(fetchedChapterData?.scheduled_date),
        scheduledTime: fetchedChapterData?.scheduled_time,
      });
    }

    setDefaultValues(true);
  }, [isLoading]);

  

  if (chapterStatus.isLoading) {
    return <Loading />;
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
        {defaultValues && (
          <ChapterEditForm
            novelId={novelId}
            chapterID={chapterID}
            chapterStatus={chapterStatus.data}
          />
        )}
      </div>
    </Middleware>
  );
};

export default ChapterEditPage;
