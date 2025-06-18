"use client";
import { Crown, Users } from "lucide-react";
import React, { useState } from "react";
import JoinedCommunityContainer from "../components/CommunityPage/Container/JoinedCommunityContainer";
import CreatedCommunityContainer from "../components/CommunityPage/Container/CreatedCommunityContainer";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState<"Joined" | "Created">("Joined");

  const handleTabChange = (tab: "Joined" | "Created") => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "Joined", value: "Joined", icon: <Users className="size-3.5" /> },
    {
      label: "Created",
      value: "Created",
      icon: <Crown className="size-3.5" />,
    },
  ];

  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Favorites</p>
      <p className="text-gray-600 mt-3">
        Manage your joined and created communities
      </p>
      <div className="grid grid-cols-2 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`rounded-md flex flex-row items-center justify-center gap-2  w-full py-1.5 ${
              activeTab === tab.value
                ? "bg-white font-medium shadow"
                : "text-gray-600 cursor-pointer"
            }`}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </div>
      {activeTab === "Joined" && <JoinedCommunityContainer />}
      {activeTab === "Created" && <CreatedCommunityContainer />}
    </div>
  );
};

export default CommunityPage;
