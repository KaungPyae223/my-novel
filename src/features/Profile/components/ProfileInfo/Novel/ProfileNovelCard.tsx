import { formatDate } from "@/utils/formatDate";
import { BookOpen, Clock, Edit2, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileNovelCard = ({ novel }: { novel: any }) => {
  return (
    <div className="w-full bg-white shadow border border-gray-200 rounded-md overflow-hidden">
      <div className="relative">
        <Image
          src={novel.image}
          alt=""
          className="h-64 w-full object-cover"
          width={1920}
          height={1080}
        />
        
        <div className="absolute top-3 right-3">
          <p className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
            {novel.progress}
          </p>
        </div>
        <div className="absolute top-3 left-3">
          {novel.status === "published" ? (
            <div className="px-2 bg-green-300 text-green-800 py-0.5 rounded-full text-xs font-medium">
              Published
            </div>
          ) : (
            <div className="px-2 bg-gray-300 text-gray-800 py-0.5 rounded-full text-xs font-medium">
              Draft
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-xl">{novel.title}</p>
        <p className="text-sm font-mono mt-1 text-gray-500">
          {novel.unique_name}
        </p>

        <p className="text-sm text-justify text-gray-700 mt-3 line-clamp-4">
          {novel.description}
        </p>

        <div className="grid grid-cols-2 text-gray-600 text-xs gap-2 my-6">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-red-700"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            {novel.love_count}
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="size-3.5" />
            {novel.views}
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <BookOpen className="size-3.5" />
            {novel.total_chapters} Chapters
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {formatDate(novel.created_at)}
          </div>
        </div>
        <div className="flex items-center mt-4 gap-1.5">
          {novel.tags?.split("/").map((tag: any) => (
            <p
              key={tag}
              className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium"
            >
              {tag}
            </p>
          ))}
        </div>
        <hr className="mt-4 border-gray-200" />
        <div className="mt-4">
          <button className="bg-gray-800 text-center text-sm text-white px-3 py-2 rounded font-medium cursor-pointe w-full flex items-center gap-3 justify-center">
            <Edit2 className="size-3" /> Edit Novel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNovelCard;
