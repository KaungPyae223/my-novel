"use client";
import React, { useState } from "react";
import SearchControl from "../components/SearchControl";
import { Book, MessageCircle, Search, User } from "lucide-react";
import SearchAllContainer from "../components/Container/SearchAllContainer";
import SearchAuthorContainer from "../components/Container/SearchAuthorContainer";
import SearchCommunityContainer from "../components/Container/SearchCommunityContainer";
import SearchNovelContainer from "../components/Container/SearchNovelContainer";
// import SearchNovelContainer from "../components/Container/SearchNovelContainer";

const SearchPage = () => {

    const [activeTab, setActiveTab] = useState("All");
    const tabs = [
        { value: "All", label: "All (6)", icon: <Search className="size-3.5" /> },
        { value: "Novels", label: "Novels (6)", icon: <Book className="size-3.5" /> },
        { value: "Authors", label: "Authors (6)", icon: <User className="size-3.5" /> },
        { value: "Communities", label: "Communities (6)", icon: <MessageCircle className="size-3.5" /> },

      ];

      const handleTabChange = (tab: string) => {
        setActiveTab(tab);
      };

  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">
        Search Result for &quot;Maya&quot;
      </p>
      <p className="text-gray-600 mt-3">Found 6 results</p>
      <SearchControl />

      <div className="grid grid-cols-4 my-6 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
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

        {activeTab === "All" && <SearchAllContainer />}
        {activeTab === "Novels" && <SearchNovelContainer />}
        {activeTab === "Authors" && <SearchAuthorContainer />}
        {activeTab === "Communities" && <SearchCommunityContainer />}

    </div>
  );
};

export default SearchPage;
