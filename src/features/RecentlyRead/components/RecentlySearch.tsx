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

const RecentlySearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [genre, setGenre] = useState<string>("all");
  const [status, setStatus] = useState<string>("most_recent");

  return (
    <div className="my-9">
      <div className="flex flex-row items-center gap-6">
        <div className="relative bg-white flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search your reading history"
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

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-[180px] rounded-md shadow-none border bg-white border-gray-300">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="most_recent">Most Recent</SelectItem>
              <SelectItem value="by_progress">By Progress</SelectItem>
              <SelectItem value="by_title">By Title</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={genre} onValueChange={setGenre}>
          <SelectTrigger className="w-[180px] rounded-md shadow-none border bg-white border-gray-300">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              <SelectItem value="all">All Genres</SelectItem>
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

export default RecentlySearch;
