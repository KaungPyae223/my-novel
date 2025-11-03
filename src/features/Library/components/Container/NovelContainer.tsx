import React, { useEffect } from "react";
import NovelSearch from "../Novel/NovelSearch";
import NovelCard from "../Novel/NovelCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import Loading from "@/features/Components/Loading/Loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import Pagination from "@/features/Components/pagination/Pagination";

interface SynopsisProps {
  title: string;
  synopsis: string;
}

const NovelContainer = () => {
  const [synopsisOpen, setSynopsisOpen] = React.useState<boolean>(false);
  const [synopsis, setSynopsis] = React.useState<SynopsisProps>({
    title: "",
    synopsis: "",
  });
  const [limit, setLimit] = React.useState<number>(10);

  const handleSynopsis = (title: string, synopsis: string) => {
    setSynopsis({ title, synopsis });
    setSynopsisOpen(true);
  };

  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth < 640) setLimit(1);
      else if (window.innerWidth < 1024) setLimit(8);
      else setLimit(10);
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/library/novels`, [
      { key: "limit", value: limit.toString() },
    ])
  );

  if (isLoading) return <Loading />;
  if (error) throw error;

  return (
    <>
      <div className="mt-6 space-y-6">
        <NovelSearch />
        <div
          className="grid grid-cols-2
       gap-5"
        >
          {data?.data.length === 0 ? (
            <div className="col-span-2">
              <EmptyState title="Novels Not Found" />
            </div>
          ) : (
            data?.data.map((novel: any) => (
              <NovelCard
                key={novel.id}
                novel={novel}
                handleSynopsis={() =>
                  handleSynopsis(novel.title, novel.synopsis)
                }
              />
            ))
          )}
        </div>

        <Pagination
          currentPage={data?.meta?.current_page}
          totalPages={data?.meta?.last_page}
        />
      </div>
      {synopsisOpen && (
        <Dialog open={synopsisOpen} onOpenChange={setSynopsisOpen}>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>
                <p className="text-2xl font-semibold">{synopsis.title}</p>
              </DialogTitle>
              <DialogDescription className="text-gray-700 my-3 text-base text-justify">
                {synopsis.synopsis}
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose>
                <p className="border w-full cursor-pointer border-gray-400 text-gray-900 px-3 py-1.5 rounded-md text-sm ">
                  Close
                </p>
              </DialogClose>

              <button className="bg-gray-800 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium">
                Read Now
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default NovelContainer;
