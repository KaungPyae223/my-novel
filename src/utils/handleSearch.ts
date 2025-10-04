import { useEffect, useState } from "react";
import { useAddParams } from "./searchParams";
import { useSearchParams } from "next/navigation";

export const useHandleSearch = () => {
  const searchParams = useSearchParams();
  const addParams = useAddParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      addParams([{ key: "q", value: debouncedQuery }]);
    }
  }, [debouncedQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return {
    searchQuery,
    handleSearch,
  };
};
