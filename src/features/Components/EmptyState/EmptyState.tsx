"use client";
import Lottie from "lottie-react";
import React from "react";
import NoDataAnimation from "@/assets/NoDataAnimation.json";
import Link from "next/link";

const EmptyState = ({
  title,
  link,
  linkText,
}: {
  title: string;
  link: string;
  linkText: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 h-full">
      <Lottie
        animationData={NoDataAnimation}
        className="w-64 h-64 sm:w-72 sm:h-72"
      />
      <p className="font-medium text-2xl mb-3.5">{title}</p>
      {link && <Link href={link} className="px-5 py-2 rounded-md font-medium bg-gray-700 text-white text-sm">{linkText}</Link>}
    </div>
  );
};

export default EmptyState;
