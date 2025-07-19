"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Middleware from "@/features/Components/Middleware/Middleware";
import useStoreNovel from "@/store/useNovelStore";
import MyNovelSearch from "../components/MyNovel/MyNovelSearch";
import MyNovelList from "../components/MyNovel/MyNovelList";
import MyNovelKPIContainer from "../components/MyNovel/MyNovelKPIContainer";
import { Plus } from "lucide-react";

const MyNovelPage = () => {
  const { resetNovelData }: any = useStoreNovel();

  useEffect(() => {
    resetNovelData();
  }, []);

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-semibold text-3xl">My Novels</p>
            <p className="text-gray-600 mt-3">
              Manage and track your writing projects
            </p>
          </div>
          <Link
            href="/my-novels/create"
            className="flex flex-row cursor-pointer items-center gap-3 px-5 py-3 font-medium rounded-md text-sm bg-blue-600 text-white"
          >
            <Plus className="size-4" /> Create New Novel
          </Link>
        </div>

        <MyNovelSearch />
        <MyNovelKPIContainer />
        <MyNovelList />
      </div>
    </Middleware>
  );
};

export default MyNovelPage;
