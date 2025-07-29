"use client";
import Lottie from "lottie-react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import Brainstorm from "@/assets/Brainstorm.json";

const AiLoading = ({
  text,
}: {
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 py-8 text-center">
      <Lottie animationData={Brainstorm} className="w-64 h-64 sm:w-72 sm:h-72" />

      <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
        <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
        <span>{text}</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-50 border border-blue-200 shadow-sm">
        <Image
          src="/DeepSeek.png"
          alt="DeepSeek Logo"
          width={80}
          height={20}
          className="h-5 w-auto object-contain"
        />
        <p className="text-sm font-semibold text-blue-800">Powered by DeepSeek</p>
      </div>
    </div>
  );
};

export default AiLoading;
