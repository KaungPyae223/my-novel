import { BookOpen } from "lucide-react";
import React from "react";

const ChapterNovelIntro = () => {
  return (
    <div className="p-6 flex flex-row gap-4 bg-white border border-gray-200 rounded-md shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
        alt=""
        className="h-32 object-cover rounded"
      />
      <div>
        <p className="font-semibold text-2xl">The King of Fire</p>
        <p className="text-gray-700 mt-1">by Lourics Chan</p>
        <div className="flex items-center gap-5 mt-4">
          <div className="flex items-center gap-2 w-fit text-xs bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
            Sci-Fi
          </div>
          <div className="flex items-center gap-1 w-fit text-sm text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 "
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <p className="font-medium">500</p>
          </div>
          <div className="flex items-center gap-1 w-fit text-sm text-gray-500">
            <BookOpen className="size-4" />
            <p>21 Chapters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterNovelIntro;
