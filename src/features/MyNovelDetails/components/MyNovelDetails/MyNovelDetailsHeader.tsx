import { formatDate } from "@/utils/formatDate";
import {
  BookHeart,
  BookOpen,
  Eye,
  Heart,
  Save,
  Share,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const MyNovelDetailsHeader = ({ novel }: { novel: any }) => {
  return (
    <div className="p-6 flex mt-6 flex-row gap-6 bg-white shadow border border-gray-200 rounded-lg">
      <div>
        <Image
          src={novel?.image}
          alt={novel?.title + " image"}
          width={300}
          height={400}
          className="w-56 h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <p className="font-semibold text-3xl font-poppins">
              {novel?.title}
            </p>

            <div className="rounded-full text-sm px-3 py-0.5  bg-gray-200 text-gray-800 font-medium">
              {novel?.status}
            </div>
          </div>
          <div className="flex h-fit flex-row gap-4 border border-gray-300 rounded-md p-1.5 px-3">
            <div className="text-sm  font-medium flex flex-row items-center gap-1.5">
              <Heart className="size-3.5" stroke="red" fill="red" />
              {novel?.love_count}
            </div>
            <div className="border-r border-gray-300 h-5"></div>
            <div className="text-sm font-medium flex flex-row items-center gap-1.5">
              <Eye className="size-3.5 text-blue-600" />
              {novel?.views}
            </div>
            <div className="border-r border-gray-300 h-5"></div>
            <div className="text-sm font-medium flex flex-row items-center gap-1.5">
              <Share className="size-3.5 text-green-600" />
              {novel?.share_count}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4 ">
          <div className="text-xs font-medium text-gray-700 bg-amber-100 px-3 py-0.5 border border-amber-300 rounded-full">
            {novel?.progress}
          </div>
        </div>

        <p className="text-justify mt-4 text-gray-800 ">{novel?.description}</p>
        <div className="flex flex-row gap-2 mt-4">
          {novel?.tags.split("/").map((tag: string) => (
            <GenreCard key={tag} genre={tag} />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Created at: {formatDate(novel?.created_at)} / Last Updated:{" "}
          {formatDate(novel?.updated_at)}
        </p>
      </div>
    </div>
  );
};

export default MyNovelDetailsHeader;

const GenreCard = ({ genre }: { genre: string }) => {
  return (
    <div className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 text-gray-600">
      {genre}
    </div>
  );
};

const ActionButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
      {icon}
      {text}
    </div>
  );
};
