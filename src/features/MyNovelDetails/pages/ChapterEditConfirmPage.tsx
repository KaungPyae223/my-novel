"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import React from "react";
import ChapterPreview from "../components/ChapterCreateConfirm/ChapterPreview";
import { Button } from "@/components/ui/button";
import { useChapterEditConfirm } from "../hooks/useChapterEditConfirm";

const ChapterEditConfirmPage = ({
  novelId,
  chapterID,
}: {
  novelId: string;
  chapterID: string;
}) => {
  const { handleBack, handleEditChapter } = useChapterEditConfirm({
    novelId,
    chapterID,
  });

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center py-3">
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to Edit Chapter
          </div>
        </div>
        {/* <GrammarIssues /> */}
        <ChapterPreview />
        <div className="flex flex-row justify-between mt-6">
          <Button
            variant="outline"
            className="flex flex-row items-center gap-2 py-5"
            onClick={handleBack}
          >
            <ArrowLeft className="size-4" /> Go Back to Edit Chapter
          </Button>
          <Button className="py-5" onClick={handleEditChapter}>
            Edit Chapter
          </Button>
        </div>
      </div>
    </Middleware>
  );
};

export default ChapterEditConfirmPage;
