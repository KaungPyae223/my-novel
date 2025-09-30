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

      useEffect(() => {
        setSearchQuery(searchParams.get("q") || "");
      }, [searchParams]);
    
      const debouncedUpdateParams = debounce((value: string) => {
        addParams([{ key: "q", value }]);
      }, 500);
    
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        debouncedUpdateParams(value);
      };
    
    return {
        searchQuery,
        handleSearch
    }
};
