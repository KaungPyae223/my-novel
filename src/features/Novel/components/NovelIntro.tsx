import { motion } from "framer-motion";
import { BookOpen, Eye, Heart, Share, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  useNovelFavorite,
  useNovelLoved,
  useShareNovel,
} from "@/services/novel";
import { toast } from "sonner";
import shareLink from "@/utils/shareLink";

const NovelIntro = ({ novel }: { novel: any }) => {


  const [loveCount, setLoveCount] = useState<number>(novel.love_count);

  const [already_loved, setAlready_loved] = useState<boolean>(novel.already_loved);
  const [already_favorited, setAlready_favorited] = useState<boolean>(novel.already_favorited);

  const { mutate } = useNovelLoved({ novelID: novel.id });

  const handleLoved = () => {
    toast.loading("Loving novel...");
    mutate(novel.id);
    if(already_loved) {
      setLoveCount(loveCount - 1);
    } else {
      setLoveCount(loveCount + 1);
    }
    setAlready_loved(!already_loved);
  };  

  const { mutate: shareNovel } = useShareNovel({ novelID: novel.id });

  const handleShare = () => {
    shareLink();
    shareNovel(novel.id);
  };

  const { mutate: favoriteNovel } = useNovelFavorite({ novelID: novel.id });

  const handleFavorite = () => {
    favoriteNovel(novel.id);
    setAlready_favorited(!already_favorited);
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
              key={already_loved ? "filled" : "unfilled"} // forces animation when state changes
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleLoved}
              className="cursor-pointer"
            >
              {already_loved ? (
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
              onClick={handleShare}
              className="flex cursor-pointer text-gray-700 text-sm items-center gap-2 font-medium"
            >
              <Share className="size-4" />
              Share
            </div>
            <motion.div
              key={already_favorited ? "filledStar" : "unfilledStar"} // forces animation when state changes
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleFavorite}
              className="cursor-pointer"
            >
              {already_favorited ? (
                <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
                  <Star className="size-4" fill="currentColor" />
                  Favorite
                </div>
              ) : (
                <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
                  <Star className="size-4" />
                  Favorite
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <p className="text-gray-500 mt-2">by {novel.user_name}</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="text-xs font-medium text-gray-700 bg-amber-100 px-3 py-0.5 border border-amber-300 rounded-full">
            {novel.progress}
          </div>
          <div className="text-sm font-medium flex flex-row items-center gap-1.5">
            <Heart className="size-4" fill="red" />
            {loveCount}
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
