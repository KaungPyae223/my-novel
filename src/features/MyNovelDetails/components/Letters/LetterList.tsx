import React, { useEffect, useRef, useState } from "react";
import LetterCard from "./LetterCard";
import { Mail } from "lucide-react";
import useFetchData from "@/services/fetcher";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const LetterList = ({ novelID }: { novelID: string }) => {
  const [letters, setLetters] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    "/novels/letters/" + novelID + "?page=" + page,
    `letters-${novelID}`
  );

  useEffect(() => {
    if (data?.data.length) {
      const newLetters = data.data;

      setLetters((prev: any) => [
        ...prev.filter(
          (letter: any) => !newLetters.some((l: any) => l.id === letter.id)
        ),
        ...newLetters,
      ]);
    }
    setHasMore(data?.meta?.current_page < data?.meta?.last_page);
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

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  if (error) {
    throw error;
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Mail className="size-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Fan Letter List
          </h2>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        {letters?.map((letter: any) => (
          <LetterCard key={letter.id} letter={letter} />
        ))}
        {hasMore && <div ref={observerRef}></div>}
        {letters.length === 0 && !isLoading && (
          <EmptyState title="No Reviews" />
        )}
        {isLoading && <ScrollLoading message="Loading more reviews..." />}
        {!hasMore && <ScrollEnd />}
      </div>
    </div>
  );
};

export default LetterList;
