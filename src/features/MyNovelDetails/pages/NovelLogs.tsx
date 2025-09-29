
"use client";
import Middleware from "@/features/Components/Middleware/Middleware";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const NovelLogs = ({ id }: { id: string }) => {

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
            <ArrowLeft className="size-4" /> Back to Details
          </div>
        </div>
        <p className="text-2xl mt-6 font-medium">Novel Logs</p>
        
      </div>
    </Middleware>
  );
};

export default NovelLogs;
