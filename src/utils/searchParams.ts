"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const useGenerateQuery = (query: string) => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.size
    ? `${query}?${searchParams.toString()}`
    : query;

  return searchQuery;
};

export const useAddParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (params: { key: string; value: string }[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    params.forEach(({ key, value }) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    router.push(`?${newParams.toString()}`);
  };
};
