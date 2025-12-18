"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import ChapterPreview from "../components/ChapterCreateConfirm/ChapterPreview";
import { useChapterCreateConfirm } from "../hooks/useChapterCreateConfrim";

const CreateChapterConfirmPage = ({ novelId }: { novelId: string }) => {
  const { handleBack, handleCreateChapter } = useChapterCreateConfirm({
    novelId,
  });

  return (
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
        <Button onClick={handleCreateChapter} className="py-5">
          Create Chapter
        </Button>
      </div>
    </div>
  );
};

export default CreateChapterConfirmPage;
