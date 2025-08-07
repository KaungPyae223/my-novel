"use client";
import React from "react";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ChapterCreateForm from "../components/ChapterCreate/ChapterCreateForm";

const CreateChapterPage = ({ novelId }: { novelId: string }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto max-w-4xl">
        <div className="flex flex-row justify-between items-center py-3">
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to Hello World
          </div>
        </div>
        <ChapterCreateForm novelId={novelId} />
      </div>
    </Middleware>
  );
};

export default CreateChapterPage;
