import { motion } from "framer-motion";
import { BookOpen, Eye, Heart, Share, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useNovelLoved } from "@/services/novel";
import { toast } from "sonner";
import shareLink from "@/utils/shareLink";

const NovelIntro = ({ novel }: { novel: any }) => {
  const { mutate } = useNovelLoved({ novelID: novel.id });

  const handleLoved = () => {
    toast.loading("Loving novel...");
    mutate(novel.id);
  };

  return (
    <div className="p-6 flex flex-row gap-6 bg-white shadow border border-gray-200 rounded-lg">
      <div>
        <Image
          src={novel.image}
          alt={novel.title}
          width={250}
          height={250}
          className="w-56 h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <p className="font-semibold text-3xl font-poppins">{novel.title}</p>
            <div className="rounded-full text-sm px-3 py-0.5  bg-blue-100 text-blue-800 font-medium">
              {novel.genre}
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <motion.div
              key={novel?.already_loved ? "filled" : "unfilled"} // forces animation when state changes
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleLoved}
              className="cursor-pointer"
            >
              {novel.already_loved ? (
                <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
                  <Heart className="size-4" fill="currentColor" />
                  Loved
                </div>
              ) : (
                <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
                  <Heart className="size-4" />
                  Love
                </div>
              )}
            </motion.div>

            <div
              onClick={shareLink}
              className="flex cursor-pointer text-gray-700 text-sm items-center gap-2 font-medium"
            >
              <Share className="size-4" />
              Share
            </div>
            <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
              <Star className="size-4" />
              Favorite
            </div>
          </div>
        </div>
        <p className="text-gray-500 mt-2">by {novel.user_name}</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="text-xs font-medium text-gray-700 bg-amber-100 px-3 py-0.5 border border-amber-300 rounded-full">
            {novel.progress}
          </div>
          <div className="text-sm font-medium flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            {novel.love_count}
          </div>
        </div>
        <div className="flex flex-row my-4 text-sm gap-4 text-gray-600 ">
          <div className="flex flex-row  items-center gap-1.5  ">
            <BookOpen className="size-4" />
            {novel.total_chapters} Chapters
          </div>
          <div className="flex flex-row  items-center gap-1.5  ">
            <Eye className="size-4" />
            {novel.views} Reads
          </div>
        </div>
        <p className="text-justify text-gray-800 ">{novel.description}</p>
        <div className="flex flex-row gap-2 mt-4">
          {novel.tags.split("/").map((tag: string) => (
            <GenreCard key={tag} genre={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NovelIntro;

const GenreCard = ({ genre }: { genre: string }) => {
  return (
    <div className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 text-gray-600">
      {genre}
    </div>
  );
};
