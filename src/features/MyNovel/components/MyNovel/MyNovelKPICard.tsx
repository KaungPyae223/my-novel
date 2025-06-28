import { Eye } from "lucide-react";
import React from "react";

const MyNovelKPICard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => {
  return (
    <div className="w-full flex flex-row gap-5 items-center bg-white p-6 rounded-md shadow border border-gray-200">
      {icon}
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
    </div>
  );
};

export default MyNovelKPICard;
