import React from "react";
import MyNovelKPICard from "./MyNovelKPICard";
import { BookOpen, Calendar, Eye, Heart, Plus, Search } from "lucide-react";


const MyNovelKPIContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <MyNovelKPICard
        icon={<BookOpen className="size-5 text-green-700" />}
        title="Total Novels"
        value="500000"
      />
      <MyNovelKPICard
        icon={<Eye className="size-5 text-blue-700" />}
        title="Total Views"
        value="500000"
      />
      <MyNovelKPICard
        icon={<Heart className="size-5 text-red-700" />}
        title="Total Loves"
        value="500000"
      />
      <MyNovelKPICard
        icon={<Calendar className="size-5 text-emerald-700" />}
        title="Total Published"
        value="500000"
      />
    </div>
  );
};

export default MyNovelKPIContainer;
