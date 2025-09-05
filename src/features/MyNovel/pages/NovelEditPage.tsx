"use client";
import Loading from "@/features/Components/Loading/Loading";
import React, { useEffect, useState } from "react";
import NovelEditForm from "../components/NovelEdit/NovelEditForm";
import { ArrowLeft } from "lucide-react";
import Middleware from "@/features/Components/Middleware/Middleware";
import { useRouter } from "next/navigation";
import useStoreNovel from "@/store/useNovelStore";
import useFetchData from "@/services/fetcher";

const NovelEditPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const { novelData } = useStoreNovel();

  const handleBack = () => {
    router.push("/my-novels");
  };

  const { isLoading, data, error } = useFetchData(`/novels/${id}`);

  if (isLoading && !novelData.is_updated) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto overflow-y-hidden max-w-6xl">
        <div>
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3 py-3 font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to My Novels
          </div>
          <div className="mt-6">
            <p className="font-semibold text-3xl">Edit Novel</p>
            <p className="text-gray-600 mt-3">
              Edit your novel&apos;s information
            </p>
          </div>

          <NovelEditForm originalData={data?.data} />
        </div>
      </div>
    </Middleware>
  );
};

export default NovelEditPage;
