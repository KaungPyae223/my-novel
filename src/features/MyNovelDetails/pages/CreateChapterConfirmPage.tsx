"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import GrammarIssues from "../components/ChapterCreateConfirm/GrammarIssues";
import EnhancementSuggestions from "../components/ChapterCreateConfirm/EnhancementSuggestions";
import { Button } from "@/components/ui/button";
import ChapterPreview from "../components/ChapterCreateConfirm/ChapterPreview";

const CreateChapterConfirmPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
        <GrammarIssues />
        <EnhancementSuggestions />
        <ChapterPreview />
        <div className="flex flex-row justify-between mt-6">
          <Button
            variant="outline"
            className="flex flex-row items-center gap-2 py-5"
          >
            <ArrowLeft className="size-4" /> Go Back to Create Chapter
          </Button>
          <Button className="py-5">Create Chapter</Button>
        </div>
      </div>
    </Middleware>
  );
};

export default CreateChapterConfirmPage;
