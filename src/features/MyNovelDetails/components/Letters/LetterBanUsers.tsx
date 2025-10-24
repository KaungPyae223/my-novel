import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { avatarFallback } from "@/utils/avatarFallBack";
import { useHandleSearch } from "@/utils/handleSearch";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Search, Unlock, UserX } from "lucide-react";
import React from "react";

const LetterBanUsers = ({
  bannedUsers,
  searchQuery,
  setSearchQuery,
  unbanUser,
  filteredBannedUsers,
}: {
  bannedUsers: { id: number; name: string; email: string }[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  unbanUser: (userId: number) => void;
  filteredBannedUsers: { id: number; name: string; email: string }[];
}) => {
  const { handleSearch } = useHandleSearch();
  return (
    <div className="space-y-4">
      <div className="relative flex-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          className="w-full border border-gray-300 rounded-md p-2 px-3 text-sm pr-3 pl-10"
          placeholder="Search banned users..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="size-4 text-gray-400" />
        </div>
      </div>

      {filteredBannedUsers.length > 0 ? (
        <ScrollArea className="max-h-[400px]">
          <div className="space-y-4">
            {filteredBannedUsers.map((user) => (
              <div
                key={user.id}
                className="p-4 flex border border-gray-300 bg-gray-100 rounded-lg items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
                      {user?.name ? avatarFallback(user.name) : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium font-poppins">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div>
                  <button
                    className="flex items-center gap-2 bg-white text-sm px-4 py-2 rounded-lg cursor-pointer"
                    onClick={() => unbanUser(user.id)}
                  >
                    <Unlock className="size-3.5" /> Unban
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <UserX className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No banned users
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Users you ban will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default LetterBanUsers;
