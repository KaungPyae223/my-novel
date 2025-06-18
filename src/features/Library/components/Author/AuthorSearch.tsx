import { Search } from "lucide-react";
import React, { useState } from "react";

const AuthorSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  
  return (
    <div>
      <div className="bg-white flex flex-row items-center p-5 rounded-lg shadow border border-gray-200 gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search author"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSearch;
