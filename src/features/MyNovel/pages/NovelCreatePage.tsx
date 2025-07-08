"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NovelCreateForm from "../components/NovelCreate/NovelCreateForm";
import { useRouter } from "next/navigation";
import useStoreNovel from "@/store/useNovelStore";

const NovelCreatePage = () => {
  const router = useRouter();
  const { resetNovelData }: any = useStoreNovel();

  const handleBack = () => {
    resetNovelData();
    router.push("/my-novels");
  };

  return (
    <div className="py-9 px-6 mx-auto overflow-y-hidden max-w-6xl">
      <div>
        <div
          onClick={handleBack}
          className="flex flex-row cursor-pointer items-center gap-3 px-5 py-3 font-medium rounded-md text-sm text-gray-800 w-fit"
        >
          <ArrowLeft className="size-4" /> Back to My Novels
        </div>
        <div className="mt-6">
          <p className="font-semibold text-3xl">Create New Novel</p>
          <p className="text-gray-600 mt-3">
            Start your writing journey with a new story
          </p>
        </div>

        <NovelCreateForm />
      </div>
    </div>
  );
};

export default NovelCreatePage;
