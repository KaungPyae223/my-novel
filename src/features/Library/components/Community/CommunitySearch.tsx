import React, { useState } from "react";

const CommunitySearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Genre Discussion",
    "Writing Community",
    "Reader Community",
    "Author Support",
    "Book Club",
  ];

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div>
      <div className="bg-white flex flex-col p-6 rounded-lg shadow border border-gray-200 gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search community"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 1 0 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-2 text-sm text-gray-800 font-medium">
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Filters:
          </div>

          <div className="flex flex-row items-center gap-2 text-sm text-gray-800">
            <p className="text-gray-700">Category</p>
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 py-1 cursor-pointer rounded-md font-medium text-sm text-gray-700 border border-gray-300 ${
                  selectedCategory === category ? "bg-gray-800 text-white" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
          {(selectedCategory !== "All" || searchQuery !== "") && (
            <div
              onClick={handleClearAll}
              className="cursor-pointer text-sm font-semibold hover:bg-gray-100 px-2 py-1 rounded-md text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Clear All
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
