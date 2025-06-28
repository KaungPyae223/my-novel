import React from "react";
import TrendingCard from "./components/TrendingCard";
import AuthorCard from "./components/AuthorCard";
import { TrendingUp, Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const RightSideBar = () => {
  return (
    <div className="w-80 bg-white border-l border-l-gray-300">
      <ScrollArea style={{ height: "calc(100vh - 4rem)" }} className="px-4">
        <div className="p-5 my-4 space-y-4 border border-gray-300 rounded-lg">
          <div className="flex items-center gap-3">
            <TrendingUp className="size-6 text-orange-600" />
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
        <div className="p-5 space-y-4 my-4 border border-gray-300 rounded-lg">
          <div className="flex items-center gap-3">
            <Users className="size-6 text-blue-800" />
            <p className="font-medium text-lg font-poppins">Suggested Authors</p>
          </div>
          <hr className="border-gray-200" />
          <div className="space-y-6">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default RightSideBar;
