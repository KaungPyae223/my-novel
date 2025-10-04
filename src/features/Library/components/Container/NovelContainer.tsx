import React from "react";
import NovelSearch from "../Novel/NovelSearch";
import NovelCard from "../Novel/NovelCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Home/components/EmptyState";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

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

  const handleSynopsis = (title: string, synopsis: string) => {
    setSynopsis({ title, synopsis });
    setSynopsisOpen(true);
  };

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/library/novels`)
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
            <EmptyState title="Novels" />
          ) : (
            data?.data.map((novel: any) => (
              <NovelCard
                key={novel.id}
                novel={novel}
                handleSynopsis={() => handleSynopsis(novel.title, novel.synopsis)}
              />
            ))
          )}
        </div>
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
