import { useEffect, useRef, useState } from "react";
import { useAddParams } from "./searchParams";
import { useSearchParams } from "next/navigation";
import { debounce } from "lodash";

export const useHandleSearch = () => {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("q") || ""
  );

  const firstRender = useRef(true);

  const addParams = useAddParams();

  const debouncedUpdateParams = debounce((value: string) => {
    if (value != searchParams.get("q")) {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      addParams([{ key: "q", value }]);
    }
  }, 750);

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
