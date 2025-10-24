"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Funnel, Search, X } from "lucide-react";
import useFetchData from "@/services/fetcher";
import { useAddParams } from "@/utils/searchParams";
import { useSearchParams } from "next/navigation";
import { useHandleSearch } from "@/utils/handleSearch";

const NovelSearch = () => {
  const searchParams = useSearchParams();

  const { searchQuery, handleSearch } = useHandleSearch();

  const genre = searchParams.get("genre") || "";
  const progress = searchParams.get("progress") || "";

  const handleClearAll = () => {
    addParams([
      { key: "q", value: "" },
      { key: "genre", value: "" },
      { key: "progress", value: "" },
    ]);
  };

  const addParams = useAddParams();

  const handleFilterChange = (key: string, value: string) => {
    addParams([{ key, value }]);
  };

  const { data, isLoading } = useFetchData("/genres");

  return (
    <div>
      <div className="bg-white flex flex-row items-center p-5 rounded-lg shadow border border-gray-200 gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            autoFocus={true}
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
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

        {!isLoading && data && (
          <Select
            onValueChange={(value) => handleFilterChange("genre", value)}
            value={genre}
          >
            <SelectTrigger className="w-[180px] rounded-md border border-gray-300">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genres</SelectLabel>
                <SelectItem value="All">All</SelectItem>
                {data?.map((g: any) => (
                  <SelectItem key={g.id} value={g.genre}>
                    {g.genre}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        <div className="flex flex-row items-center gap-2 text-sm text-gray-800">
          <p className="text-gray-700">Status</p>
          <div className="flex flex-row items-center gap-2">
            <div
              onClick={() => handleFilterChange("progress", "")}
              className={`px-2 py-1 cursor-pointer rounded-md font-medium text-sm text-gray-700 border border-gray-300 ${
                progress === "" ? "bg-gray-800 text-white" : ""
              }`}
            >
              All
            </div>
            <div
              onClick={() => handleFilterChange("progress", "ongoing")}
              className={`px-2 py-1 cursor-pointer rounded-md font-medium text-sm text-gray-700 border border-gray-300 ${
                progress === "ongoing" ? "bg-gray-800 text-white" : ""
              }`}
            >
              Ongoing
            </div>
            <div
              onClick={() => handleFilterChange("progress", "complete")}
              className={`px-2 py-1 cursor-pointer rounded-md font-medium text-sm text-gray-700 border border-gray-300 ${
                progress === "complete" ? "bg-gray-800 text-white" : ""
              }`}
            >
              Complete
            </div>
          </div>
        </div>
        {(progress !== "" || genre !== "" || searchQuery !== "") && (
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
  );
};

export default NovelSearch;
