import { BookOpen, Eye, Heart, Users } from "lucide-react";
import React from "react";

const AuthorDetailsKPI = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <KPIItem
        icon={<Users className="size-6 text-yellow-500" />}
        value="100"
        label="Total Followers"
      />
      <KPIItem
        icon={<Heart className="size-6 text-red-500" />}
        value="100"
        label="Total Likes"
      />
      <KPIItem
        icon={<BookOpen className="size-6 text-green-600" />}
        value="100"
        label="Total Novels"
      />
      <KPIItem
        icon={<Eye className="size-6 text-blue-500" />}
        value="100"
        label="Total Views"
      />
    </div>
  );
};

const KPIItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full py-5 border border-gray-200 bg-white shadow-sm rounded justify-center gap-1">
      {icon}
      <p className="text-xl font-medium mt-1">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
};

export default AuthorDetailsKPI;
