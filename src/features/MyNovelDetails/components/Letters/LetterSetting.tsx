import { Mail, UserX, CheckCircle, XCircle } from "lucide-react";
import React, { useState } from "react";
import LetterEnableDisable from "./LetterEnableDisable";
import LetterBanUsers from "./LetterBanUsers";

const LetterSetting = () => {
  const [activeTab, setActiveTab] = useState<"settings" | "banned">("settings");
  const [isFanLettersEnabled, setIsFanLettersEnabled] = useState(true);
  const [bannedUsers, setBannedUsers] = useState([
    { id: 1, name: "user123", email: "user123@example.com" },
    { id: 2, name: "spam_user", email: "spam@example.com" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBannedUsers = bannedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFanLetters = () => {
    setIsFanLettersEnabled(!isFanLettersEnabled);
  };

  const unbanUser = (userId: number) => {
    setBannedUsers(bannedUsers.filter((user) => user.id !== userId));
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
            onClick={() => setActiveTab("settings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "settings"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Letter Settings
          </button>
          <button
            onClick={() => setActiveTab("banned")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "banned"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Banned Users
            {bannedUsers.length > 0 && (
              <span className="ml-2 bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
                {bannedUsers.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6 space-y-6">
        {activeTab === "settings" ? (
          <LetterEnableDisable
            isFanLettersEnabled={isFanLettersEnabled}
            toggleFanLetters={toggleFanLetters}
          />
        ) : (
          <LetterBanUsers
            filteredBannedUsers={filteredBannedUsers}
            bannedUsers={bannedUsers}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            unbanUser={unbanUser}
          />
        )}
      </div>
    </div>
  );
};

export default LetterSetting;
