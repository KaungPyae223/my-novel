import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpNarrowWide, ChevronDownIcon, Search } from "lucide-react";

const SearchControl = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("Relevance");

  return (
    <div className="mt-6">
      <div className="bg-white flex flex-row items-center p-5 rounded-lg shadow border border-gray-200 gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Refine your search"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
        </div>

        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="min-w-[160px] flex flex-row items-center gap-2 text-gray-800 rounded-md border border-gray-300">
            <ArrowUpNarrowWide className="h-4 w-4 text-gray-900" />
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter</SelectLabel>
              <SelectItem value="Relevance">Relevance</SelectItem>
              <SelectItem value="Popularity">Popularity</SelectItem>
              <SelectItem value="Rating">Rating</SelectItem>
              <SelectItem value="Latest">Latest</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex flex-row items-center cursor-pointer h-full gap-2 text-sm font-medium bg-gray-800 text-white px-5 py-2 rounded-md">
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchControl;
