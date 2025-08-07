"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import GrammarIssues from "../components/ChapterCreateConfirm/GrammarIssues";
import EnhancementSuggestions from "../components/ChapterCreateConfirm/EnhancementSuggestions";
import { Button } from "@/components/ui/button";
import ChapterPreview from "../components/ChapterCreateConfirm/ChapterPreview";
import { useCreateChapter } from "@/services/chapter";
import useStoreChapter from "@/store/useChapterStore";
import { toMySQLDatetime } from "@/utils/formatDate";

const CreateChapterConfirmPage = ({ novelId }: { novelId: string }) => {
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

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center py-3">
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to Create Chapter
          </div>
        </div>
        {/* <GrammarIssues /> */}
        {/* <EnhancementSuggestions /> */}
        <ChapterPreview />
        <div className="flex flex-row justify-between mt-6">
          <Button
            variant="outline"
            className="flex flex-row items-center gap-2 py-5"
            onClick={handleBack}
          >
            <ArrowLeft className="size-4" /> Go Back to Create Chapter
          </Button>
          <Button onClick={handleCreateChapter} className="py-5">Create Chapter</Button>
        </div>
      </div>
    </Middleware>
  );
};

export default CreateChapterConfirmPage;
