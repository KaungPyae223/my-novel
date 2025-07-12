import Lottie from "lottie-react";
import React from "react";
import cat from "@/assets/cat.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <Lottie animationData={cat} className="w-64 h-64 sm:w-72 sm:h-72" />
        <p className="text-blue-500 font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
