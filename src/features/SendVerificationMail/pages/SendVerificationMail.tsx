"use client";
import React, { useState } from "react";
import sendVerificationMail from "@/services/sendVerificationMail";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SendVerificationMail = () => {
  const [sendMail, setSendMail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendVerificationMail = async () => {
    try {
      setLoading(true);
      const response = await sendVerificationMail();
      if (response.status === 200) {
        setLoading(false);
        setSendMail(true);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center space-y-4">
        <div className="flex flex-row gap-3 pt-3 pb-4 border-b border-b-gray-300 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <p className="text-2xl font-semibold text-blue-600 ">My Novel</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-9">
          Send Verification Mail
        </h2>
        <p className="text-gray-600 text-sm">
          Please verify your email to access all features.
        </p>

        {!sendMail && !loading ? (
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
        ) : !loading ? (
          <div className="flex flex-col items-center justify-center mx-auto mt-10 gap-6">
            {/* Success Illustration */}
            <Image
              width={180}
              height={180}
              src="/Work_space.svg"
              alt="Verification Success"
              className="mb-2"
            />

            {/* Title & Description */}
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Verification Email Sent
              </h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Please check your inbox for the verification link. <br />
                If you don’t see it, check your spam folder.
              </p>
            </div>

            {/* Resend Section */}
            <div className="text-center mt-2">
              <p className="text-gray-700 text-sm">Didn’t receive the email?</p>
              <Button
                variant="outline"
                onClick={handleSendVerificationMail}
                className="text-blue-600 border-blue-600 hover:bg-blue-50 mt-3 px-6"
              >
                Resend Email
              </Button>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full border-t my-1"></div>

              <div className="flex items-center gap-2 mt-3">
                <p className="text-gray-700 text-sm">Already verified?</p>
                <Button
                  variant="ghost"
                  onClick={() => {}}
                  className="text-blue-600 hover:underline px-0"
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default SendVerificationMail;
