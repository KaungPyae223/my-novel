// services/useFetchData.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

const fetcher = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};

export default function useFetchData(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: () => fetcher(url),
  });
}


