"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const VerifiedMailPage = () => {
  const searchParam = useSearchParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20 mt-5 mx-auto text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <p className="text-2xl font-semibold text-blue-600  mb-6">My Novel</p>
        {searchParam.get("error") ? (
          <h1 className="text-xl font-medium text-gray-800 mb-2">
            {searchParam.get("error")}
          </h1>
        ) : (
          <>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Email Verified Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
              Your email has been verified. You can use all the features of My Novel.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifiedMailPage;
