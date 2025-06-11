import React from "react";
import RecentlyKPI from "../components/RecentlyKPI";
import RecentlySearch from "../components/RecentlySearch";
import RecentlyCard from "../components/RecentlyCard";

const RecentlyReadPage = () => {
  return <div className="py-9 px-6 mx-auto max-w-6xl">
    <p className="font-semibold text-3xl">Recently Read</p>
    <p className="text-gray-600 mt-3">
      Keep up with your favorite authors
    </p>
    <RecentlyKPI />
    <RecentlySearch />
    <div className="space-y-4">
      <RecentlyCard />
      <RecentlyCard />
      <RecentlyCard />
      <RecentlyCard />
      <RecentlyCard />
      <RecentlyCard />

    </div>
  </div>;
};

export default RecentlyReadPage;
