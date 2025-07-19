import Lottie from "lottie-react";
import React from "react";
import cat from "@/assets/cat.json";

const Loading = () => {
  return (
    <div className="h-full flex flex-col items-center  justify-center ">
        <Lottie animationData={cat} className="w-64 h-64 sm:w-72 sm:h-72" />
        <p className="text-blue-500 font-medium">
          Loading, please wait...
        </p>
    </div>
  );
};

export default Loading;
