"use client";
import { useRouter } from "next/navigation";
import useStoreChapter from "@/store/useChapterStore";
import { useCreateChapter } from "@/services/chapter";
import { toMySQLDatetime } from "@/utils/formatDate";

export const useChapterCreateConfirm = ({novelId}: {novelId: string}) => {
    const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const { chapterData } = useStoreChapter();

  const { mutate } = useCreateChapter({id: novelId});

  const handleCreateChapter = () => {

    const scheduledDate = new Date(chapterData.scheduledDate || new Date());
   
    const scheduledTime = chapterData.scheduledTime || "00:00";

    const scheduledDateTime = toMySQLDatetime(scheduledDate, scheduledTime);

    mutate({
      title: chapterData.chapterName,
      summary: chapterData.summary,
      content: chapterData.content,
      status: chapterData.status,
      scheduled_date: chapterData.status === "scheduled" ? scheduledDateTime : null,
      novel_id: novelId,
    });
  };

  return {
    handleBack,
    handleCreateChapter,
    chapterData,
  };
};
