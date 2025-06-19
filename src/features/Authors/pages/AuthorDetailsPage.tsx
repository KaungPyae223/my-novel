"use client";

import React, { useEffect, useState } from "react";
import AuthorDetailsHeader from "../components/AuthorDetails/AuthorDetailsHeader";
import { useRef } from "react";
import AuthorDetailsKPI from "../components/AuthorDetails/AuthorDetailsKPI";
import { BookOpen, MessageCircle, Text } from "lucide-react";
import AuthorDetailsNovelsContainer from "../components/AuthorDetails/Container/AuthorDetailsNovelsContainer";
import AuthorDetailsCommunityContainer from "../components/AuthorDetails/Container/AuthorDetailsCommunityContainer";
import AuthorDetailsInfoContainer from "../components/AuthorDetails/Container/AuthorDetailsInfoContainer";

const AuthorDetailsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, []);

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
          <AuthorDetailsHeader />
        </div>
      </div>
      <div
        style={{ marginTop: `${headerHeight / 2 + 25}px` }}
        className="max-w-4xl w-full mx-auto px-4"
      >
        <AuthorDetailsKPI />

        <div className="grid grid-cols-3 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              onClick={() =>
                handleTabChange(tab.label as "Novels" | "Communities" | "Info")
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
        {activeTab === "Novels" && <AuthorDetailsNovelsContainer />}
        {activeTab === "Communities" && <AuthorDetailsCommunityContainer />}
        {activeTab === "Info" && <AuthorDetailsInfoContainer />}
      </div>
    </div>
  );
};

export default AuthorDetailsPage;
