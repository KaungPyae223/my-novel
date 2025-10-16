import { BookOpen } from "lucide-react";
import Image from "next/image";
import React from "react";

const NovelIntro = ({ novel:{title,description,genre,progress,image,total_chapters,tags} }: { novel: {title:string,description:string,genre:string,progress:string,image:string,total_chapters:string,tags:string} }) => {
  return (
    <div className="my-6 p-5 rounded-lg flex flex-row gap-6 bg-blue-50">
      
      <Image
        src={image}
        alt={title}
        width={128}
        height={128}
        className="w-32 object-cover items-center flex-1 rounded-md"
      />
      <div>
        <div className="flex flex-row gap-3 items-center">
          <p className="font-semibold text-2xl font-poppins">{title}</p>
        </div>
        <div className="flex mt-2 flex-row gap-3 items-center">
          <div className=" rounded-full text-xs px-3 py-0.5  bg-blue-100 text-blue-800 font-semibold">
            {genre}
          </div>
          <div className=" rounded-full text-xs px-3 py-0.5  border border-gray-300 text-amber-600 font-medium">
            {progress}
          </div>
        </div>
        <p className="mt-3 text-gray-600 line-clamp-2 text-justify text-sm">
          {description}
        </p>
        <div className="mt-3 text-xs flex flex-row items-center gap-1.5 text-gray-700">
          <BookOpen className="size-3.5" />

          <p>{total_chapters} Chapters</p>
        </div>
        <div className="flex flex-row gap-2 mt-3">
          {tags.split("/").map((tag: string) => (
            <p
              key={tag}
              className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NovelIntro;
