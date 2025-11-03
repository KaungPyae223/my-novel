import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, Search } from "lucide-react";

// Components
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import LogsCard from "../Logs/LogsCard";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Hooks
import { useHandleSearch } from "@/utils/handleSearch";
import { useGenerateQuery } from "@/utils/searchParams";
import { useHandleFilter } from "@/utils/handleFilter";
import useNormalFetcher from "@/services/normalFetcher";

const MyNovelDetailsLogContainer = ({ id }: { id: string }) => {
  // State
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [logs, setLogs] = useState<any[]>([]);
  const observerRef = useRef<HTMLDivElement>(null);

  // Hooks
  const { searchQuery, handleSearch } = useHandleSearch();
  const searchParams = useSearchParams();
  const { changeFilter } = useHandleFilter();

  const { data, isLoading, error } = useNormalFetcher(
    useGenerateQuery(`/novel-logs/${id}`, [
      { key: "page", value: page.toString() },
    ])
  );

  // Effects
  useEffect(() => {
    if (data?.data.length) {
      const newLogs = data.data;
      setLogs((prev) => [
        ...prev.filter(
          (log: any) =>
            log.logable_type === newLogs[0].logable_type &&
            !newLogs.some((l: any) => l.id === log.id)
        ),
        ...newLogs,
      ]);
    }
    setHasMore(data?.meta.current_page < data?.meta.last_page);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    const currentRef = observerRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    setPage(1);
    setLogs([]);
  }, [searchParams]);

  // Error boundary
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
                onChange={handleSearch}
                className="w-[250px] border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
                placeholder="Search logs..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-4 text-gray-400" />
              </div>
            </div>

            <Select
              value={searchParams.get("action") || undefined}
              onValueChange={(value) => changeFilter("action", value)}
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
                  <SelectItem value="restored">Restored</SelectItem>
                  <SelectItem value="trashed">Trashed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {logs.length > 0 ? (
            <div className="space-y-3">
              {logs.map((log) => (
                <LogsCard key={log.id} log={log} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <EmptyState title="No logs found" />
            </div>
          )}

          {hasMore && <div ref={observerRef} aria-hidden="true" />}
          {isLoading && <ScrollLoading message="Loading more logs..." />}
          {!hasMore && <ScrollEnd />}
        </div>
      </div>
    </div>
  );
};

export default MyNovelDetailsLogContainer;
