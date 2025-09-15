import Image from "next/image";
import React from "react";

const SendMail = ({ handleSendVerificationMail }: any) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-10 gap-6">
      {/* Illustration */}
      <Image
        width={180}
        height={180}
        src="/Email-marketing.svg"
        alt="Send Verification Mail"
        className="mb-3"
      />

      {/* CTA Button */}
      <button
        onClick={handleSendVerificationMail}
        className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-lg font-medium 
                           hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none 
                           transition duration-200 ease-in-out shadow-md max-w-xs"
      >
        Send Verification Mail
      </button>
    </div>
  );
};

export default SendMail;
