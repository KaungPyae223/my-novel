import React from "react";
import NavCard from "./components/NavCard";
import CommunityCard from "./components/CommunityCard";
import {
  Book,
  Clock,
  Heart,
  House,
  Library,
  TrendingUp,
  Tv,
  Users,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const LeftSideBar = () => {
  const navItem: { icon: React.ReactNode; title: string; href: string }[] = [
    {
      icon: <House className="size-5" />,
      title: "Home",
      href: "/",
    },
    {
      icon: <Library className="size-5" />,
      title: "Library",
      href: "/library",
    },
    {
      icon: <Book className="size-5" />,
      title: "My Novels",
      href: "/my-novels",
    },
    {
      icon: <Users className="size-5" />,
      title: "Followings",
      href: "/followings",
    },
    {
      icon: <Heart className="size-5" />,
      title: "Favorites",
      href: "/favorites",
    },
    {
      icon: <Clock className="size-5" />,
      title: "Recently Read",
      href: "/recently-read",
    },
    {
      icon: <TrendingUp className="size-5" />,
      title: "Trending",
      href: "/trending",
    },
    {
      icon: <Tv className="size-5" />,
      title: "Communities",
      href: "/communities",
    },
  ];

  return (
    <div className="w-80 bg-white border-r border-r-gray-300">
      <ScrollArea style={{ height: "calc(100vh - 4rem)" }} className="px-4 py-1">
        <div className="py-2 mt-1 space-y-2">
          {navItem.map((item) => (
            <NavCard key={item.title} {...item} />
          ))}
        </div>
        <p className="font-medium text-sm my-4 text-slate-700">Your Communities</p>
        <div className="pb-3 pt-1 space-y-3">
          <CommunityCard name="My Novel Fans" members={12} />
          <CommunityCard name="Harry Potter Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
          <CommunityCard name="Lord of the Rings Fans" members={12} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSideBar;
