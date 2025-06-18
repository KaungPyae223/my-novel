"use client";

import React, { useEffect, useRef, useState } from "react";
import CommunityDetailsHeader from "../components/CommunityDetails/CommunityDetailsHeader";
import { Clock, MessageCircle, Text, Users } from "lucide-react";
import CommunityPostContainer from "../components/CommunityDetails/Container/CommunityPostContainer";
import CommunityAboutContainer from "../components/CommunityDetails/Container/CommunityAboutContainer";
import CommunityHistoryPostContainer from "../components/CommunityDetails/Container/CommunityHistoryPostContainer";

const CommunityDetails = () => {
  const [activeTab, setActiveTab] = useState<"Posts" | "About" | "History">(
    "Posts"
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleTabChange = (tab: "Posts" | "About" | "History") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, []);

  const tabs = [
    { label: "Posts", icon: <MessageCircle className="size-3.5" /> },
    { label: "About", icon: <Text className="size-3.5" /> },
    { label: "History", icon: <Clock className="size-3.5" /> },
  ]

  return (
    <div className="bg-gray-50">
      {/* Header image and floating card */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Community Header"
          className="w-full h-96 object-cover"
        />

        <div
          ref={headerRef}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full px-4"
        >
          <CommunityDetailsHeader />
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
                handleTabChange(tab.label as "Posts" | "About" | "History")
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
        {activeTab === "Posts" && <CommunityPostContainer />}
        {activeTab === "About" && <CommunityAboutContainer />}
        {activeTab === "History" && <CommunityHistoryPostContainer />}
      </div>
    </div>
  );
};

export default CommunityDetails;
