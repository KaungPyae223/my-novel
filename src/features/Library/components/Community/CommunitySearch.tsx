import { Funnel, Search, X } from "lucide-react";
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
           <Search className="size-4 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-2 text-sm text-gray-800 font-medium">
           <Funnel className="size-4" />
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
              <X className="size-4" />
              Clear All
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
