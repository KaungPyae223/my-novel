import React from "react";

const ChapterPreview = () => {
  return (
    <div className="w-full mt-6 mx-auto p-6 bg-white rounded-lg shadow-xs border border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Chapter Preview</h1>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Title:</h2>
        <h3 className="text-xl text-blue-600">Chapter 26: The Dragoon's Adventure</h3>
      </div>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Summary:</h2>
        <p className="text-gray-600 text-sm p-3 border border-gray-200 rounded-md bg-gray-100">
          In this chapter, the hero begins his dangerous quest threw the enchanted forest to find the dragon that threatens the kingdom.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Content Preview:</h2>
        <p className="text-gray-600 text-sm p-3 border border-gray-200 rounded-md bg-gray-100">
          The hero walked threw the forest, feeling very loose about his mission. He could of been more careful, but their was no time to waist. The dragon was defiantely hiding somewhere, and he new he had to find it irregardless of the danger. His hart was beating fast as he searched for the mystical creature that could effect the entire kingdom's fate.
        </p>
      </div>
      
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Scheduled
          </span>
          <span className="text-sm text-gray-500">
            July 30, 2023 at 10:00 AM
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChapterPreview;