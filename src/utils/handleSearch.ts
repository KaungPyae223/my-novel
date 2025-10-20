import { useEffect, useState } from "react";
import { useAddParams } from "./searchParams";
import { useSearchParams } from "next/navigation";
import { debounce } from "lodash";

export const useHandleSearch = () => {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("q") || ""
  );

  const addParams = useAddParams();

  const debouncedUpdateParams = debounce((value: string) => {
    if (value) {
      addParams([{ key: "q", value }]);
    }
  }, 1000);

  useEffect(() => {
    debouncedUpdateParams(searchQuery);

    return () => {
      debouncedUpdateParams.cancel();
    };
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return {
    searchQuery,
    handleSearch,
  };
};
