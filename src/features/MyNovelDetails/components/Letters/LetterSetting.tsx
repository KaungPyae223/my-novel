import { Mail } from "lucide-react";
import React, { useState } from "react";
import LetterEnableDisable from "./LetterEnableDisable";
import LetterBanUsers from "./LetterBanUsers";
import { useSearchParams } from "next/navigation";
import { useAddParams } from "@/utils/searchParams";

const LetterSetting = ({ novelID }: { novelID: string }) => {
  const addParams = useAddParams();

  const searchParams = useSearchParams();

  const activeTab = searchParams.get("letter") || "settings";

  const handleTabChange = (tab: string) => {
    addParams([{ key: "letter", value: tab }]);
  };

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Mail className="size-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Fan Letter Settings
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => handleTabChange("settings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "settings"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Letter Settings
          </button>
          <button
            onClick={() => handleTabChange("banned_user")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "banned_user"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Banned Users
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6 space-y-6">
        {activeTab === "settings" ? (
          <LetterEnableDisable novelID={novelID} />
        ) : (
          <LetterBanUsers novelID={novelID} />
        )}
      </div>
    </div>
  );
};

export default LetterSetting;
