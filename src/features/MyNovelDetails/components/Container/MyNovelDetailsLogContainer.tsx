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

// Mock data for logs - replace with your actual data
const mockLogs: LogEntry[] = [
  {
    id: 1,
    logable_type: "App\\Models\\Novel",
    logable_id: 2,
    user_id: 1,
    action: "created",
    ip_address: "127.0.0.1",
    user_agent:
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0",
    description:
      '{"title":"Harry Potter and Magic Castle","status":"published","tags":"Magic\\/Magic System\\/Adventure","description":"Harry Potter and Magic Castle","synopsis":"Harry Potter and Magic Castle","genre_id":"2","unique_name":"@harry-potter-and-magic-castle-1","user_id":1,"image":"https:\\/\\/res.cloudinary.com\\/dzkoc2zf7\\/image\\/upload\\/v1758774264\\/p1sysutqf5jdhi5bfzub.png","image_public_id":"p1sysutqf5jdhi5bfzub","updated_at":"2025-09-25 04:24:25","created_at":"2025-09-25 04:24:25","id":2}',
    created_at: "2025-09-25T04:24:25.000000Z",
    updated_at: "2025-09-25T04:24:25.000000Z",
  },
  {
    id: 2,
    logable_type: "App\\Models\\Chapter",
    logable_id: 5,
    user_id: 1,
    action: "updated",
    ip_address: "127.0.0.1",
    user_agent:
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0",
    description:
      '{"title":"Chapter 1: The Beginning","content":"Updated chapter content..."}',
    created_at: "2025-09-24T10:30:45.000000Z",
    updated_at: "2025-09-24T10:30:45.000000Z",
  },
  {
    id: 3,
    logable_type: "App\\Models\\Novel",
    logable_id: 2,
    user_id: 1,
    action: "deleted",
    ip_address: "127.0.0.1",
    user_agent:
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0",
    description: '{"title":"Temporary Draft"}',
    created_at: "2025-09-23T15:20:10.000000Z",
    updated_at: "2025-09-23T15:20:10.000000Z",
  },
];

const MyNovelDetailsLogContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAction, setSelectedAction] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Simulate API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFilteredLogs(mockLogs);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Filter logs based on search query and action filter
  useEffect(() => {
    let result = [...mockLogs];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (log) =>
          log.action.toLowerCase().includes(query) ||
          log.logable_type.toLowerCase().includes(query) ||
          log.description.toLowerCase().includes(query)
      );
    }

    // Apply action filter
    if (selectedAction !== "all") {
      result = result.filter((log) => log.action === selectedAction);
    }

    setFilteredLogs(result);
  }, [searchQuery, selectedAction]);

  const actionTypes = [
    { value: "all", label: "All Actions" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "deleted", label: "Deleted" },
  ];

  if (isLoading) {
    return <Loading />;
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
                Novel Activity Logs
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[250px] border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
                placeholder="Search logs..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-4 text-gray-400" />
              </div>
            </div>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an action" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Actions</SelectLabel>
                  <SelectItem value="created">Created</SelectItem>
                  <SelectItem value="updated">Updated</SelectItem>
                  <SelectItem value="deleted">Deleted</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredLogs.length > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500 px-2">
                <span>
                  {filteredLogs.length} log
                  {filteredLogs.length !== 1 ? "s" : ""} found
                </span>
                <div className="flex items-center gap-2">
                  {selectedAction !== "all" && (
                    <button
                      onClick={() => setSelectedAction("all")}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {
                        actionTypes.find((a) => a.value === selectedAction)
                          ?.label
                      }
                      <span className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-white bg-opacity-30">
                        ×
                      </span>
                    </button>
                  )}
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      "{searchQuery}"
                      <span className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-white bg-opacity-30">
                        ×
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {filteredLogs.map((log) => (
                  <LogsCard key={log.id} log={log} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <EmptyState
                title="No logs found"
                description="Try adjusting your search or filter criteria"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNovelDetailsLogContainer;
