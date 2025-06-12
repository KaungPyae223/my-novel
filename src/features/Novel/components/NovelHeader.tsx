"use client";
import Container from "@/global/Container/Container";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NovelHeader = () => {

    const router = useRouter();

  return (
    <div className="bg-white h-16 border-b border-b-gray-300 fixed top-0 left-0 w-full z-50">
      <Container className="flex items-center gap-3 h-full">
        <div onClick={() => router.back()} className="flex cursor-pointer items-center gap-2 font-medium">
          <ArrowLeft className="size-4" />
          Back
        </div>
      </Container>
    </div>
  );
};

export default NovelHeader;
