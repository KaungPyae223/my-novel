import React from "react";
import Lottie from "lottie-react";
import Error from "@/assets/Error.json";

const ErrorComponent = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <Lottie animationData={Error} className="w-64 h-64 sm:w-72 sm:h-72" />
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorComponent;
