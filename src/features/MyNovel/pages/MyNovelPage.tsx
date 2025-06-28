"use client";
import { BookOpen, Calendar, Eye, Heart, Plus, Search, Users } from "lucide-react";
import React, { useState } from "react";
import MyNovelKPICard from "../components/MyNovel/MyNovelKPICard";
import MyNovelNovelCard from "../components/MyNovel/MyNovelNovelCard";
import Link from "next/link";

const MyNovelPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="font-semibold text-3xl">My Novels</p>
          <p className="text-gray-600 mt-3">
            Manage and track your writing projects
          </p>
        </div>
        <Link href="/my-novels/create" className="flex flex-row cursor-pointer items-center gap-3 px-5 py-3 font-medium rounded-md text-sm bg-blue-600 text-white">
          <Plus className="size-4" /> Create New Novel
        </Link>
      </div>
      <div className="grid grid-cols-3 my-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
            placeholder="Search your novels"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MyNovelKPICard icon={<BookOpen className="size-5 text-green-700"/>} title="Total Novels" value="500000" />
        <MyNovelKPICard icon={<Eye className="size-5 text-blue-700"/>} title="Total Views" value="500000" />
        <MyNovelKPICard icon={<Heart className="size-5 text-red-700"/>} title="Total Loves" value="500000" />
        <MyNovelKPICard icon={<Calendar className="size-5 text-emerald-700"/>} title="Total Published" value="500000" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-6">
        <MyNovelNovelCard />
        <MyNovelNovelCard />
        <MyNovelNovelCard />
        <MyNovelNovelCard />
        <MyNovelNovelCard />

      </div>
    </div>
  );
};

export default MyNovelPage;
