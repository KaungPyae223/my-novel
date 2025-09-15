"use client";
import React, { useState } from "react";
import sendVerificationMail from "@/services/sendVerificationMail";
import SendMail from "../components/SendMail";
import SendMailLoading from "../components/SendMailLoading";
import MailSendSuccess from "../components/MailSendSuccess";

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
      <div className="w-md mx-auto bg-white shadow-md rounded-md p-6 text-center space-y-4">
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
          <SendMail handleSendVerificationMail={handleSendVerificationMail}/>
        ) : !loading ? (
         <MailSendSuccess handleSendVerificationMail={handleSendVerificationMail}/>
        ) : (
          <SendMailLoading/>
        )}
      </div>
    </div>
  );
};

export default SendVerificationMail;
