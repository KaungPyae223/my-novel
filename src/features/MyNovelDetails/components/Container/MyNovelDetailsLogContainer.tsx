import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { Clock, Search, Filter } from "lucide-react";
import React, { useState, useEffect } from "react";
import LogsCard from "../Logs/LogsCard";

interface LogEntry {
  id: number;
  logable_type: string;
  logable_id: number;
  user_id: number;
  action: string;
  ip_address: string;
  user_agent: string;
  description: string;
  created_at: string;
  updated_at: string;
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loading from "@/features/Components/Loading/Loading";
import { useHandleSearch } from "@/utils/handleSearch";
import { useGenerateQuery } from "@/utils/searchParams";
import { useSearchParams } from "next/navigation";
import { useHandleFilter } from "@/utils/handleFilter";
import useNormalFetcher from "@/services/normalFetcher";

const MyNovelDetailsLogContainer = ({ id }: { id: string }) => {
 
  const url = useGenerateQuery(`/novel-logs/${id}`);

  const { data, isLoading, error } = useNormalFetcher(url);

  const logs = data?.data;

  const { searchQuery, handleSearch } = useHandleSearch();

 

  const searchParams = useSearchParams();

  const { changeFilter } = useHandleFilter();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock className="size-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Activity Logs
              </h2>
              <p className="text-sm text-gray-500">
                Track all activities related to this novel
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e)}
                className="w-[250px] border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
                placeholder="Search logs..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-4 text-gray-400" />
              </div>
            </div>

            <Select
              value={searchParams.get("action") ?? undefined}
              onValueChange={(e) => changeFilter("action", e)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an action" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Actions</SelectLabel>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="created">Created</SelectItem>
                  <SelectItem value="updated">Updated</SelectItem>
                  <SelectItem value="deleted">Deleted</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {logs?.data.length > 0 ? (
            <div className="space-y-3">
              <div className="space-y-3">
                {logs?.data.map((log) => (
                  <LogsCard key={log.id} log={log} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <EmptyState title="No logs found" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNovelDetailsLogContainer;
