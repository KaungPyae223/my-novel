import React from "react";
import useStoreChapter from "@/store/useChapterStore";
import { formatDate } from "@/utils/formatDate";

const ChapterPreview = () => {

  const { chapterData } = useStoreChapter();

  return (
    <div className="w-full mt-6 mx-auto p-6 bg-white rounded-lg shadow-xs border border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Chapter Preview</h1>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Title:</h2>
        <h3 className="text-xl text-blue-600">{chapterData.chapterName}</h3>
      </div>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Summary:</h2>
        <p className="text-gray-600 text-sm p-3 border border-gray-200 rounded-md bg-gray-100">
          {chapterData.summary}
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Content Preview:</h2>
        <p className="text-gray-600 text-sm p-3 border border-gray-200 rounded-md bg-gray-100">
          {chapterData.content}
        </p>
      </div>
      
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            {chapterData.status}
          </span>
          {chapterData.status === "scheduled" && (
            <span className="text-sm text-gray-500">
              {formatDate(chapterData.scheduledDate || new Date())} at {chapterData.scheduledTime}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterPreview;