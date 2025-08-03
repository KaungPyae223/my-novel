import { BookOpen, Edit, Eye, Heart, Trash } from "lucide-react";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const MyNovelNovelCard = ({ novel }: { novel: any }) => {
  const tags = novel.tags.split("/").map((t: string) => t.trim()).slice(0, 5);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow border border-gray-200">
      <div className="relative">
        <Image
          src={novel.image}
          alt=""
          width={800}
          height={800}
          className="w-full h-60 object-cover"
        />

        <div className="px-2 absolute bg-white top-2 left-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium">
          {novel.progress}
        </div>
        {novel.status === "published" ? (
          <div className="px-2 absolute top-2 right-2 bg-green-300 text-green-800 py-0.5 rounded-full text-xs font-medium">
            Published
          </div>
        ) : (
          <div className="px-2 absolute top-2 right-2 bg-gray-300 text-gray-800 py-0.5 rounded-full text-xs font-medium">
            Draft
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-medium text-lg">{novel.title}</p>
        <p className="text-sm text-gray-700 my-3 mb-5 line-clamp-3 text-justify">
          {novel.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          {tags.map((tag: string, i: number) => (
            <div
              key={i}
              className="px-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 mt-5 mb-4 text-gray-600 text-sm gap-2">
          <div className="flex flex-row items-center gap-1.5">
            <Heart className="size-3.5" />
            <p>{novel.love_count}</p>
          </div>

          <div className="flex mx-auto flex-row items-center gap-1.5">
            <Eye className="size-3.5" />
            <p>{novel.views}</p>
          </div>
          <div className="flex ms-auto flex-row items-center gap-1.5">
            <BookOpen className="size-3.5" />
            <p>{novel.total_chapters}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-1">
          Last Updated: {formatDate(novel.updated_at)}
        </p>
        <div className="flex flex-row items-center gap-2">
          <Link
            href={`/my-novels/details/${novel.id}`}
            className="bg-gray-800 w-full flex flex-row items-center justify-center gap-2 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium"
          >
            <Eye className="size-3.5" /> View
          </Link>
          <Link
            href={`/my-novels/edit/${novel.id}`}
            className="text-gray-800 border border-gray-200 flex flex-row items-center justify-center gap-2 cursor-pointer px-3 py-1.5 rounded-md text-sm font-medium"
          >
            <Edit className="size-3.5" /> Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyNovelNovelCard;
