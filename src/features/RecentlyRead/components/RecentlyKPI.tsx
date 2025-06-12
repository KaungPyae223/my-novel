import { BookOpen, CircleCheck, ClipboardList } from "lucide-react";
import React from "react";

const RecentlyKPI = () => {
  return (
    <div className="grid mt-6 grid-cols-3 gap-6">
      <KPIItem
        title="Total Novels"
        icon={<BookOpen className="size-5 text-gray-600" />}
        count={12}
      />
      <KPIItem
        title="Total Chapters"
        icon={<ClipboardList className="size-5 text-gray-600" />}
        count={12}
      />
      <KPIItem
        title="Completed"
        icon={<CircleCheck className="size-5 text-gray-600" />}
        count={12}
      />
    </div>
  );
};

const KPIItem = ({
  title,
  icon,
  count,
}: {
  title: string;
  icon: React.ReactNode;
  count: number;
}) => {
  return (
    <div className="w-full p-6 bg-white rounded-md shadow-sm border border-gray-200">
      <div className="flex flex-row items-center gap-2 justify-between">
        <p>{title}</p>
        {icon}
      </div>
      <p className="text-2xl font-semibold mt-3">{count}</p>
    </div>
  );
};

export default RecentlyKPI;
