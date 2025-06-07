import React from "react";
import TrendingCard from "./components/TrendingCard";
import AuthorCard from "./components/AuthorCard";

const LeftSideBar = () => {
  return (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className=" p-4 overflow-y-auto space-y-4 w-80 bg-white border-l border-l-gray-300"
    >
      <div className=" p-5 space-y-4 border border-gray-300 rounded-lg">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>

          <p className="font-medium text-lg font-poppins">Trending Now</p>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-5">
          <TrendingCard title="The Last Emperor" author="John Doe" />
          <TrendingCard title="The Kingdom of Uri" author="Ayes Moe" />
          <TrendingCard title="The Dragon Slayer" author="Shin Tora" />
          <TrendingCard title="Graffins" author="April May" />
          <TrendingCard title="The Last of Us" author="Sakamoto" />
        </div>
      </div>
      <div className=" p-5 space-y-4 border border-gray-300 rounded-lg">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-blue-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>

          <p className="font-medium text-lg font-poppins">Suggested Authors</p>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-6">
          <AuthorCard/>
          <AuthorCard/>
          <AuthorCard/>
          <AuthorCard/>
          <AuthorCard/>

        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
