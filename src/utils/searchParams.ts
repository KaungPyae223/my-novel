"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const useGenerateQuery = (
  query: string,
  params?: { key: string; value: string }[]
) => {
  const searchParams = useSearchParams();

  const paramsObject = new URLSearchParams(searchParams.toString());

  params?.forEach(({ key, value }) => {
    if (key !== "" && value !== "") {
      paramsObject.set(key, value);
    }
  });

  const paramsString = paramsObject.toString();

  const searchQuery = query + (paramsString ? "?" + paramsString : "");

  return searchQuery;
};

export const useRemoveParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (params: string[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    params.forEach((param) => {
      newParams.delete(param);
    });
    router.push(`?${newParams.toString()}`);
  };
};

export const useAddParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (params: { key: string; value: string }[]) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (!params.some((param) => param.key === "page")) {
      newParams.delete("page");
    }

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

export const useChangeTab = () => {
  const router = useRouter();

  return (tab: string) => {
    router.push(`?tab=${tab}`);
  };
};
