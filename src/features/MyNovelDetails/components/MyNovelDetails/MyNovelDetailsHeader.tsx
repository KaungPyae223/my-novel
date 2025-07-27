import { formatDate } from "@/utils/formatDate";
import { BookHeart, BookOpen, Eye, Heart, Save, Share, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const MyNovelDetailsHeader = ({ novel }: { novel: any }) => {

  console.log(novel)

  return (
    <div className="p-6 flex mt-6 flex-row gap-6 bg-white shadow border border-gray-200 rounded-lg">
      <div>
        <Image
          src={novel?.image}
          alt={novel?.title+" image"}
          width={300}
          height={400}
          className="w-56 h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <p className="font-semibold text-3xl font-poppins">{novel?.title}</p>
          
            <div className="rounded-full text-sm px-3 py-0.5  bg-gray-200 text-gray-800 font-medium">
              {novel?.status}
            </div>
          </div>
          
        </div>
       
        <div className="mt-3 flex items-center gap-4">
          <div className="text-xs font-medium text-gray-700 bg-amber-100 px-3 py-0.5 border border-amber-300 rounded-full">
            {novel?.progress}
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
            {novel?.love_count}
          </div>
        </div>
        
        <p className="text-justify mt-4 text-gray-800 ">
          {novel?.description}
        </p>
        <div className="flex flex-row gap-2 mt-4">
          {novel?.tags.split("/").map((tag: string) => (
            <GenreCard key={tag} genre={tag} />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Created at: {formatDate(novel?.created_at)} / Last Updated: {formatDate(novel?.updated_at)}</p>
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
