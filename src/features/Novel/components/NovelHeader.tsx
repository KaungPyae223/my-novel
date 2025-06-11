"use client";
import Container from "@/global/Container/Container";
import { useRouter } from "next/navigation";
import React from "react";

const NovelHeader = () => {

    const router = useRouter();

  return (
    <div className="bg-white h-16 border-b border-b-gray-300 fixed top-0 left-0 w-full z-50">
      <Container className="flex items-center gap-3 h-full">
        <div onClick={() => router.back()} className="flex cursor-pointer items-center gap-2 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </div>
      </Container>
    </div>
  );
};

export default NovelHeader;
