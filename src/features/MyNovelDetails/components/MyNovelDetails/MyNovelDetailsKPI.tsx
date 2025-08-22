import { BookOpen, Eye, Heart, Share } from "lucide-react";
import React from "react";

const MyNovelDetailsKPI = ({ novel }: { novel: any }) => {
  type KPI = {
    icon: React.ReactNode;
    title: string;
    value: string;
  };

  const KPIList: KPI[] = [
    {
      icon: <BookOpen className="size-6 text-blue-600" />,
      title: "Chapters",
      value: novel?.total_chapters,
    },
    {
      icon: <Eye className="size-6 text-gray-600" />,
      title: "Views",
      value: novel?.views,
    },
    {
      icon: <Heart className="size-6 text-red-600" />,
      title: "Love",
      value: novel?.love_count,
    },
    {
      icon: <Share className="size-6 text-green-600" />,
      title: "Share",
      value: novel?.share_count,
    },
  ];

  return (
    <div className="grid grid-cols-4 mt-6 items-center gap-4">
      {KPIList.map((kpi) => (
        <KPICard
          key={kpi.title}
          icon={kpi.icon}
          title={kpi.title}
          value={kpi.value}
        />
      ))}
    </div>
  );
};

const KPICard = ({ icon, title, value }: KPI) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
      {icon}

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default MyNovelDetailsKPI;
