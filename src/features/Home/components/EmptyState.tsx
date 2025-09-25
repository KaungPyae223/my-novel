import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyState = ({ title }: { title: string }) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        {/* Icon */}
        <Image width={300} height={300} src="/BookShelf.svg" alt="" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3 mt-7">
          No {title} Yet
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Start your reading journey by exploring novels on Library
        </p>

        {/* Explore Button */}
        <Link
          href="/library"
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white shadow hover:bg-blue-700 transition"
        >
          Explore Library
        </Link>
      </div>
    </main>
  );
};

export default EmptyState;
