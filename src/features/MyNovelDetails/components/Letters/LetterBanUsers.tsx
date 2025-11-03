import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import { useUnbanUser } from "@/services/ban";
import useFetchData from "@/services/fetcher";
import { avatarFallback } from "@/utils/avatarFallBack";
import { useHandleSearch } from "@/utils/handleSearch";
import { useScrollFetch } from "@/utils/useScrollFetch";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Search, Unlock, UserX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const LetterBanUsers = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/novels/banned-users/${novelID}`,
    key: `banned-user-${novelID}`,
  });

  const { handleSearch, searchQuery } = useHandleSearch();

  const { mutate: unbanUser } = useUnbanUser();

  const handleUnban = (id: number) => {
    unbanUser({ id, novelID });
  };

  if (error) {
    throw error;
  }

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

      {data?.length > 0 ? (
        <ScrollArea className="max-h-[400px]">
          <div className="space-y-4">
            {data?.map((data: any) => (
              <div
                key={data.id}
                className="p-4 flex border border-gray-300 bg-gray-100 rounded-lg items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={data?.profile_image}
                      alt={data?.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
                      {data?.name ? avatarFallback(data.name) : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium font-poppins">{data.name}</p>
                    <p className="text-xs text-gray-500">{data.email}</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outline"
                    onClick={() => handleUnban(data.id)}
                  >
                    <Unlock className="size-3.5" /> Unban
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {hasMore && <div ref={observerRef}></div>}
          {isLoading && (
            <ScrollLoading message="Loading more banned users..." />
          )}
          {!hasMore && <ScrollEnd />}
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
