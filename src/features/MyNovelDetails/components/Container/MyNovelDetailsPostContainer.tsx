"use client";
import { MessageCircle, Plus } from "lucide-react";
import React from "react";
import PostCard from "../Posts/PostCard";

const MyNovelDetailsPostContainer = ({ id }: { id: string }) => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
          <MessageCircle className="size-6" />
          Posts (26)
        </div>
        <div
          className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2"
        >
          <Plus className="size-4" />
          Create Post
        </div>
      </div>

      <div className="mt-9 space-y-6">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default MyNovelDetailsPostContainer;
