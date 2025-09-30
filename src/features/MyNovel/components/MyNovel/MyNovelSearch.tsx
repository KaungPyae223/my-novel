import { useAddParams } from "@/utils/searchParams";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useHandleSearch } from "@/utils/handleSearch";

const MyNovelSearch = () => {
  
  const { searchQuery, handleSearch } = useHandleSearch();

  return (
    <div className="grid grid-cols-3 my-6">
      <div className="relative flex-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
          placeholder="Search your novels"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="size-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default MyNovelSearch;
