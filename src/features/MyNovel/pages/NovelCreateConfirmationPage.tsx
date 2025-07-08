"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useStoreNovel from "@/store/useNovelStore";
import { useRouter } from "next/navigation";

const NovelCreateConfirmationPage = () => {
  const { novelData }: any = useStoreNovel();
  const router = useRouter();

  const novelTag = novelData.tags
    .split("/")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  const handleBack = () => {
    router.push("/my-novels/create");
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-md shadow border border-gray-200 my-10">
      <h1 className="text-3xl font-bold mb-4">Confirm Novel Details</h1>
      <p className="text-gray-600 mb-8">
        Here are the details of your new novel:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Title</h2>
            <p className="text-gray-700">{novelData.title}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Genre</h2>
            <p className="text-gray-700 capitalize">{novelData.genre}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Status</h2>
            <p className="text-gray-700 capitalize">{novelData.status}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {novelTag.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {novelData.description}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Synopsis</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {novelData.synopsis}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-start">
          <Image
            src={URL.createObjectURL(novelData.coverImage)}
            alt="Cover Image"
            width={300}
            height={400}
            className="rounded-md object-contain border"
          />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Button onClick={handleBack} variant="outline">
          Edit Novel
        </Button>
        <Button>Create Another Novel</Button>
      </div>
    </div>
  );
};

export default NovelCreateConfirmationPage;
