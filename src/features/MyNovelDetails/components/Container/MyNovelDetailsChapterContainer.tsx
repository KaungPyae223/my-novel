import React, { useEffect, useState, useRef } from "react";
import {
  ArrowUpDown,
  BookOpen,
  Filter,
  Funnel,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import MyNovelDetailsChapterCard from "../MyNovelDetailsChapter/MyNovelDetailsChapterCard";
import Link from "next/link";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useChapterContainer } from "../../hooks/useChapterContainer";

const ChapterContainer = ({ id }: { id: string }) => {
  const {
    chapters,
    filter,
    sort,
    hasMore,
    observerRef,
    isLoading,
    error,
    handleTrash,
    searchQuery,
    handleSearch,
    handleFilterSortChange,
  } = useChapterContainer({ id });

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <BookOpen className="size-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Chapters</h2>
        </div>
        <div className="flex flex-row gap-3">
          <div
            onClick={handleTrash}
            className="flex border border-gray-300  text-sm text-gray-800 px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2"
          >
            <Trash className="size-4" />
            Trash
          </div>
          <Link
            href={`/my-novels/details/${id}/create-chapter`}
            className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2"
          >
            <Plus className="size-4" />
            Add Chapter
          </Link>
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-3 my-6">
        <div className="relative  flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search chapters name"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row items-center gap-2 text-sm text-gray-800 font-medium">
            <Funnel className="size-4" />
            Filters:
          </div>
          <Select
            value={filter}
            onValueChange={(e) => handleFilterSortChange(e, "filter")}
          >
            <SelectTrigger className="w-[180px] rounded-md border border-gray-300">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row items-center gap-2 text-sm text-gray-800 font-medium">
            <ArrowUpDown className="size-4" />
            Sort By:
          </div>
          <Select
            value={sort}
            onValueChange={(e) => handleFilterSortChange(e, "sort")}
          >
            <SelectTrigger className="w-[180px] rounded-md border border-gray-300">
              <SelectValue placeholder="Select a sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="az">(A-Z)</SelectItem>
                <SelectItem value="za">(Z-A)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {chapters.map((chapter: any) => (
          <MyNovelDetailsChapterCard
            key={chapter.id}
            novelId={id}
            data={chapter}
          />
        ))}

        {hasMore && <div ref={observerRef}></div>}
        {chapters.length === 0 && !isLoading && (
          <EmptyState title="No Chapters" />
        )}
        {isLoading && <ScrollLoading message="Loading more chapters..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default ChapterContainer;
