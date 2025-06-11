import React from "react";

const ChapterCard = ({chapterNumber}: {chapterNumber: number}) => {
  return (
    <div className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6">
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {chapterNumber}
      </div>
      <div>
        <p className="font-medium text-lg group-hover:text-blue-600">The Discovery</p>
        <div className="flex flex-row items-center text-sm mt-1 text-gray-500 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          23 June 2024
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 ms-auto text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default ChapterCard;
