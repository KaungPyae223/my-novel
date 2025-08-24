import React from "react";
import MyNovelKPICard from "./MyNovelKPICard";
import { BookOpen, Eye, Heart, Share } from "lucide-react";
import useFetchData from "@/services/fetcher";


const MyNovelKPIContainer = () => {

  const {data} = useFetchData('/my-novels/kpi');

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-3">
      <MyNovelKPICard
        icon={<BookOpen className="size-5 text-green-700" />}
        title="Total Novels"
        value={data?.totalNovels}
      />
      <MyNovelKPICard
        icon={<Eye className="size-5 text-blue-700" />}
        title="Total Views"
        value={data?.totalViews}
      />
      <MyNovelKPICard
        icon={<Heart className="size-5 text-red-700" />}
        title="Total Loves"
        value={data?.totalLoves}
      />
      <MyNovelKPICard
        icon={<Share className="size-5 text-emerald-700" />}
        title="Total Shares"
        value={data?.totalShares}
      />
    </div>
  );
};

export default MyNovelKPIContainer;
