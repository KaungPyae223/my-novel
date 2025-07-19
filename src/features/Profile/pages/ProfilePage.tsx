"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ProfileHeader from "../components/ProfileInfo/ProfileHeader";
import { BookOpen, MessageCircle, Text } from "lucide-react";
import ProfileNovelsContainer from "../components/ProfileInfo/Container/ProfileNovelsContainer";
import ProfileCommunityContainer from "../components/ProfileInfo/Container/ProfileCommunityContainer";
import ProfileInfoContainer from "../components/ProfileInfo/Container/ProfileInfoContainer";
import Middleware from "@/features/Components/Middleware/Middleware";

import useFetchData from "@/services/fetcher";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import Loading from "@/features/Components/Loading/Loading";

const ProfilePage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const { data, isLoading, error } = useFetchData("/profile");

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, [isLoading]);

  const [activeTab, setActiveTab] = useState<"Novels" | "Communities" | "Info">(
    "Novels"
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "Novels", icon: <BookOpen className="size-3.5" /> },
    { label: "Communities", icon: <MessageCircle className="size-3.5" /> },
    { label: "Info", icon: <Text className="size-3.5" /> },
  ];

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <Middleware>
      <div className="bg-gray-50">
        {/* Header image and floating card */}
        <div className="relative">
          {data?.user?.cover_image ? (
            <Image
              src={data?.user?.cover_image}
              alt="Community Header"
              className="w-full h-96 object-cover"
              width={1920}
              height={1080}
            />
          ) : (
            <div className="w-full h-96 bg-gray-200" />
          )}

          <div
            ref={headerRef}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full px-4"
          >
            <ProfileHeader data={data?.user} />
          </div>
        </div>
        <div
          style={{ marginTop: `${headerHeight / 2 + 25}px` }}
          className="max-w-4xl w-full mx-auto px-4"
        >
          <div className="grid grid-cols-3 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                onClick={() =>
                  handleTabChange(
                    tab.label as "Novels" | "Communities" | "Info"
                  )
                }
                className={`rounded-md flex flex-row items-center justify-center gap-2 w-full py-1.5 ${
                  activeTab === tab.label
                    ? "bg-white font-medium shadow"
                    : "text-gray-600 cursor-pointer"
                }`}
              >
                {tab.icon}
                {tab.label}
              </div>
            ))}
          </div>
          {activeTab === "Novels" && <ProfileNovelsContainer />}
          {activeTab === "Communities" && <ProfileCommunityContainer />}
          {activeTab === "Info" && <ProfileInfoContainer data={data?.user} />}
        </div>
      </div>
    </Middleware>
  );
};

export default ProfilePage;
