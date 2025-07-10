"use client";
import React from "react";
import Lottie from "lottie-react";
import Lighthouse from "../../assets/Lighthouse.json";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Lottie animationData={Lighthouse} className="size-80" />
      <p className="text-4xl font-serif font-bold">404 Not Found</p>
      <Button className="mt-5 cursor-pointer" onClick={handleBack}>Back</Button>
    </div>
  );
};

export default NotFoundPage;
