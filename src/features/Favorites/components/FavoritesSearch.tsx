"use client";
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
import { Funnel, Search } from "lucide-react";

const FavoritesSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  return (
    <div className="my-7">
      <div className="bg-white flex flex-row items-center p-5 rounded-lg shadow border border-gray-200 gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search novel"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-sm text-gray-800 font-medium">
          <Funnel className="size-4" />
          Filters:
        </div>

        <Select value={genre} onValueChange={setGenre}>
          <SelectTrigger className="w-[180px] rounded-md border border-gray-300">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="sci-fi">Sci-Fi</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        
      </div>
    </div>
  );
};

export default FavoritesSearch;
