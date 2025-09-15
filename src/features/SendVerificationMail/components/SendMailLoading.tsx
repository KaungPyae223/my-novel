import Image from "next/image";
import React from "react";

const SendMailLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-6 gap-6 animate-fadeIn">
      {/* Illustration */}
      <Image
        width={180}
        height={180}
        src="/Send_message.svg"
        alt="Sending Verification Mail"
        className="mb-2 animate-bounce-slow"
      />

      {/* Message */}
      <div className="text-center">
        <p className="text-gray-700 text-sm font-medium">
          Sending Verification Mail...
        </p>
        <div className="flex justify-center mt-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default SendMailLoading;
