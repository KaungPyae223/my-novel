import React from "react";

const ScrollLoading = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-gray-600">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      </div>
      <p className="mt-3 text-sm font-medium">{message}</p>
    </div>
  );
};

export default ScrollLoading;
