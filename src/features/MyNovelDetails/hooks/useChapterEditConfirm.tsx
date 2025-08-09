
import { useRouter } from "next/navigation";
import useStoreChapter from "@/store/useChapterStore";
import { useUpdateChapter } from "@/services/chapter";
import { toMySQLDatetime } from "@/utils/formatDate";

export const useChapterEditConfirm = ({ novelId, chapterID }: { novelId: string; chapterID: string }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const { chapterData } = useStoreChapter();

  const { mutate } = useUpdateChapter({ id: novelId, chapterID });


  const handleEditChapter = () => {
    const scheduledDate = new Date(chapterData.scheduledDate || new Date());

    const scheduledTime = chapterData.scheduledTime || "00:00";

    const scheduledDateTime = toMySQLDatetime(scheduledDate, scheduledTime);

    

    mutate({
      id: chapterID,
      title: chapterData.chapterName,
      summary: chapterData.summary,
      content: chapterData.content,
      status: chapterData.status,
      scheduled_date:
        chapterData.status === "scheduled" ? scheduledDateTime : null,
    });

    router.push(`/my-novels/details/${novelId}`);
  };

  return {
    handleBack,
    handleEditChapter,
  };
};